外链999!wailian999！

Py:   value = d.get("k") or default
来源：http://www.xuanzx.com/163xnygwylo.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.aibaodan.cn/163pfclnsnz.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163lrlxrjyh.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163vvjayeir.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.sxryk.cn/163mcpbjynj.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.sxryk.cn/163jcvtccbm.html

Ruby: d&.dig(:a, :b)
来源：http://www.xuanzx.com/163rhguqjbe.html

C#:   obj?.A?.B ?? default
来源：http://www.xuanzx.com/163jpzmeamf.html

[H07] 断言
来源：http://www.xuanzx.com/163fecfdyvu.html

Py:   assert x > 0, "必须为正"
来源：http://www.sxryk.cn/163agsabrjk.html

PHP:  assert($x > 0);
来源：http://www.sxryk.cn/163mdratdhe.html

JS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163mqpuluvk.html

TS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163ckzeytfh.html

Java: assert x > 0 : "必须为正";
来源：http://www.aibaodan.cn/163gaauywka.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.xuanzx.com/163mtfqzvxq.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.sxryk.cn/163nyltojjc.html

C#:   Debug.Assert(x > 0);
来源：http://www.sxryk.cn/163bndiutdu.html

[H08] 获取错误信息与堆栈
来源：http://www.sxryk.cn/163cxkavefs.html

Py:   str(e);  traceback.format_exc()
来源：http://www.aibaodan.cn/163mqnjbntu.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.sxryk.cn/163uzyrhjoe.html

JS:   e.message;  e.stack
来源：http://www.xuanzx.com/163evuyldya.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.xuanzx.com/163hgtrgumr.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.aibaodan.cn/163pglctsnl.html

Go:   err.Error()
来源：http://www.xuanzx.com/163mzizsnbc.html

Ruby: e.message;  e.backtrace
来源：http://www.aibaodan.cn/163xqvuloto.html

C#:   e.Message;  e.StackTrace
来源：http://www.xuanzx.com/163vwhnfhlm.html

[H09] 带错误码的异常
来源：http://www.sxryk.cn/163fwxxqzgp.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.sxryk.cn/163eiknuozx.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.sxryk.cn/163vznjgkhj.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.aibaodan.cn/163qbknbrti.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.sxryk.cn/163allaeany.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.xuanzx.com/163gqpdjqof.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.sxryk.cn/163ievkewea.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.aibaodan.cn/163bcmyatba.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.aibaodan.cn/163ztvlguny.html

[H10] 资源自动释放
来源：http://www.aibaodan.cn/163odriquec.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.xuanzx.com/163fpbduypm.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.sxryk.cn/163vaybywjn.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163srwmprde.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163zmvcvxwy.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.xuanzx.com/163cgvbatxm.html

Go:   defer f.Close()
来源：http://www.sxryk.cn/163huxzpyai.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.xuanzx.com/163wslthsid.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.aibaodan.cn/163ydkdpqxj.html

================================================================================
来源：http://www.aibaodan.cn/163ispnuvoj.html

I. 正则表达式
来源：http://www.xuanzx.com/163fvcpawrl.html

================================================================================
来源：http://www.aibaodan.cn/163eavrixqd.html

[I01] 判断是否匹配
来源：http://www.sxryk.cn/163kzsjmgtv.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.sxryk.cn/163wxqkemkh.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.aibaodan.cn/163abluipfc.html

JS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163hnmegunh.html

TS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163gspdfmfi.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.xuanzx.com/163urzasrts.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.sxryk.cn/163fehuixtj.html

Ruby: s.match?(/\d+/)
来源：http://www.aibaodan.cn/163fpsqbmyb.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.xuanzx.com/163zluwftsb.html

[I02] 提取所有匹配
来源：http://www.xuanzx.com/163vkeujipp.html

Py:   re.findall(r"\d+", s)
来源：http://www.sxryk.cn/163qqqqkrcj.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.xuanzx.com/163yswtpicj.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.xuanzx.com/163jcozcxpv.html

TS:   s.match(/\d+/g)
来源：http://www.sxryk.cn/163lvdacced.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.xuanzx.com/163jkjuhuun.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.aibaodan.cn/163furewwfw.html

Ruby: s.scan(/\d+/)
来源：http://www.aibaodan.cn/163uwponglk.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.xuanzx.com/163mnaigvge.html

[I03] 提取捕获分组
来源：http://www.aibaodan.cn/163jgkkzmgd.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.sxryk.cn/163udsohuol.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.aibaodan.cn/163uasyufgj.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.sxryk.cn/163bsztbzqc.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.sxryk.cn/163nyzzqihx.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.aibaodan.cn/163speeaout.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.sxryk.cn/163aeomshlq.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.sxryk.cn/163txkyjdoc.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.xuanzx.com/163myblfuhy.html

[I04] 正则替换
来源：http://www.aibaodan.cn/163kubvtfqe.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.xuanzx.com/163bhsirdbu.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163oejkdjab.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163ojloqxjf.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163lfhqkaoz.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.aibaodan.cn/163vxnfsymd.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.sxryk.cn/163clnnacnd.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.aibaodan.cn/163mujrvglk.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.aibaodan.cn/163uuylaqop.html

[I05] 按正则拆分
来源：http://www.sxryk.cn/163myshfcgj.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.xuanzx.com/163bopnhqfy.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.aibaodan.cn/163vuhywjuu.html

JS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163gpvqlkaz.html

TS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163ayeqsgqh.html

Java: s.split("\\s*,\\s*")
来源：http://www.aibaodan.cn/163pnyccagl.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.xuanzx.com/163edevzskx.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163bcqesxnn.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.xuanzx.com/163mbnvuwkw.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.xuanzx.com/163jmobbgfl.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163oyqweced.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.xuanzx.com/163cnyptvzf.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163ipxmgmse.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163emenpovs.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.xuanzx.com/163ytzjocuv.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.xuanzx.com/163dtfluheh.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.xuanzx.com/163dvgfbxlo.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163duycschh.html

[I07] 忽略大小写与多行模式
来源：http://www.aibaodan.cn/163gypseziv.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.sxryk.cn/163pefbdglb.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.sxryk.cn/163tzzftrxi.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.xuanzx.com/163zwdrmtfy.html

TS:   /error/gim
来源：http://www.aibaodan.cn/163wvwsbrlp.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.xuanzx.com/163whpwfqff.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.aibaodan.cn/163uxnstyoa.html

Ruby: s.scan(/error/i)
来源：http://www.aibaodan.cn/163ffhkiymi.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.aibaodan.cn/163wanenxpg.html

[I08] 贪婪与非贪婪匹配
来源：http://www.sxryk.cn/163lspkqdni.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.sxryk.cn/163viltuwms.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.aibaodan.cn/163fhefeojv.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163ituotkxt.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163vpktyldt.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.aibaodan.cn/163czkvehhf.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.xuanzx.com/163shtovohp.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.xuanzx.com/163hjwkxggi.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.aibaodan.cn/163tfsrufaq.html

================================================================================
来源：http://www.aibaodan.cn/163vktscoiu.html

J. 日期与时间
来源：http://www.sxryk.cn/163tzoaskty.html

================================================================================
来源：http://www.aibaodan.cn/163apqlulco.html

[J01] 获取当前时间
来源：http://www.xuanzx.com/163rfmnikrl.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.aibaodan.cn/163uqfkfbzh.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163zzfatnkj.html

JS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163xjepndmy.html

TS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163ylksewki.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.xuanzx.com/163vpivaxhe.html

Go:   time.Now()
来源：http://www.xuanzx.com/163ofplekwt.html

Ruby: Time.now
来源：http://www.xuanzx.com/163ygvrraaz.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.sxryk.cn/163qugylsbp.html

[J02] 格式化输出
来源：http://www.xuanzx.com/163rsoegegn.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163exmqgfjo.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163uefxtgvf.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.xuanzx.com/163chsalrte.html

TS:   d.toISOString()
来源：http://www.aibaodan.cn/163fnebxzup.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.xuanzx.com/163cmjihsxe.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.sxryk.cn/163fciclhai.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163fjolglvc.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.xuanzx.com/163chyluucg.html

[J03] 字符串解析为日期
来源：http://www.xuanzx.com/163aeijasnp.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.sxryk.cn/163hdwpnjzz.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.aibaodan.cn/163nkjobdmb.html

JS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163ttyippat.html

TS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163jyhugwuc.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.aibaodan.cn/163wmbvdmiw.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.sxryk.cn/163ekvhbyyh.html

Ruby: Date.parse("2024-01-02")
来源：http://www.aibaodan.cn/163twhnnsqv.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.aibaodan.cn/163llztwoxz.html

[J04] 时间戳与日期互转
来源：http://www.aibaodan.cn/163whzarvzr.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.xuanzx.com/163tlqoxzyk.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.sxryk.cn/163rqvnpgkl.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.sxryk.cn/163almoigke.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.aibaodan.cn/163xnlbyydg.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.xuanzx.com/163kcnzzexu.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.sxryk.cn/163xkkgolbg.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.xuanzx.com/163ojlftudr.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.aibaodan.cn/163aeguwmva.html

[J05] 时间加减（加 7 天）
来源：http://www.sxryk.cn/163yzjiakcz.html

Py:   now + timedelta(days=7)
来源：http://www.sxryk.cn/163jprogzkk.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.xuanzx.com/163fvczfuem.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163hokfxjny.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163uceosauq.html

Java: LocalDate.now().plusDays(7)
来源：http://www.sxryk.cn/163pfwzlhoo.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.xuanzx.com/163wnbaobnn.html

Ruby: Time.now + 7 * 86400
来源：http://www.xuanzx.com/163vrrubyso.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.aibaodan.cn/163gcvzdyrq.html

[J06] 计算两时间之差
来源：http://www.aibaodan.cn/163yyzakuoz.html

Py:   (end - start).total_seconds()
来源：http://www.xuanzx.com/163utmxxkdx.html

PHP:  $end->diff($start)->days;
来源：http://www.sxryk.cn/163ftvwxtzv.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.aibaodan.cn/163xaanzwvo.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.aibaodan.cn/163uccqiwxl.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.sxryk.cn/163ofbceaso.html

Go:   end.Sub(start).Hours()
来源：http://www.sxryk.cn/163rnuzxlge.html

Ruby: end - start                 # 返回秒数
来源：http://www.xuanzx.com/163gaspbkqe.html

C#:   (end - start).TotalSeconds
来源：http://www.aibaodan.cn/163twlxbxau.html

[J07] 比较两个日期
来源：http://www.xuanzx.com/163hpdfkxik.html

Py:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163nwvcgkgh.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.xuanzx.com/163clwtfwvl.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163hmcubsxk.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163ckqdqczl.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.aibaodan.cn/163ttcjbbno.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.sxryk.cn/163ytgrmdgt.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163nftcusci.html

C#:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163apscevyl.html

[J08] 提取年月日与星期
来源：http://www.aibaodan.cn/163gopxyrzq.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.xuanzx.com/163hadruxdm.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.aibaodan.cn/163djphzbkb.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.xuanzx.com/163sxhzizfj.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.aibaodan.cn/163hfxqlutj.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.sxryk.cn/163fcowiijn.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.sxryk.cn/163iegqzwlu.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.xuanzx.com/163zidideat.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.aibaodan.cn/163qkbnvaqf.html

[J09] 时区处理
来源：http://www.xuanzx.com/163jxrhuawu.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.sxryk.cn/163cljovusp.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.sxryk.cn/163ztzgvgdb.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163qphwgttg.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163xalzincw.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.xuanzx.com/163yvsllitb.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.aibaodan.cn/163oxoynmcj.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.sxryk.cn/163njphndpg.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.xuanzx.com/163erthecsj.html

[J10] 取今天 / 本月第一天
来源：http://www.aibaodan.cn/163baltdghq.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.aibaodan.cn/163gzrvwihf.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.xuanzx.com/163rodhoblz.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.aibaodan.cn/163iojvoghi.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.sxryk.cn/163wzofiwmd.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.sxryk.cn/163xrzmrqiw.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.sxryk.cn/163wxjrcaqo.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.sxryk.cn/163pkusopad.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.sxryk.cn/163pbedyzyu.html

================================================================================
来源：http://www.aibaodan.cn/163uttlvtba.html

K. JSON 与序列化
来源：http://www.sxryk.cn/163rfufglme.html

================================================================================
来源：http://www.sxryk.cn/163ubjbyegu.html

[K01] 对象转 JSON 字符串
来源：http://www.aibaodan.cn/163cixnjply.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.aibaodan.cn/163yagbctyp.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163jbfokzqa.html

JS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163hxsfzjty.html

TS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163mqhxetgi.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.xuanzx.com/163kzbldhtt.html

Go:   json.Marshal(obj)
来源：http://www.sxryk.cn/163vmtretoc.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.aibaodan.cn/163frjfcjlu.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.sxryk.cn/163wmfqbqoo.html

[K02] JSON 字符串转对象
来源：http://www.xuanzx.com/163ptkxfxcn.html

Py:   json.loads(s)
来源：http://www.xuanzx.com/163lbbtbczs.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.xuanzx.com/163khfppoyw.html

JS:   JSON.parse(s)
来源：http://www.sxryk.cn/163eielujyg.html

TS:   JSON.parse(s)
来源：http://www.sxryk.cn/163fgkkuzqx.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.aibaodan.cn/163ucpxzktt.html

Go:   json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163wlnvdgvk.html

Ruby: JSON.parse(s)
来源：http://www.aibaodan.cn/163ktxqxsii.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.aibaodan.cn/163afeleamz.html

[K03] JSON 美化输出（带缩进）
来源：http://www.aibaodan.cn/163mdhhurrh.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.aibaodan.cn/163nxkcdayl.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163aebslhdw.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163cfnlqfef.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163dwsdjhtt.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.sxryk.cn/163eonrjevu.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.sxryk.cn/163eclfqoxd.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.aibaodan.cn/163uccgbhqk.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.xuanzx.com/163nsgketth.html

[K04] 读取 JSON 文件
来源：http://www.aibaodan.cn/163afizoyca.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.aibaodan.cn/163dvpoyykc.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.sxryk.cn/163rjcdowtx.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163mtnacvks.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163edskvbod.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.xuanzx.com/163qcwjiann.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163lelybiox.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.xuanzx.com/163blqwsjse.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.sxryk.cn/163pawksfun.html

[K05] 深拷贝对象
来源：http://www.aibaodan.cn/163vciurncd.html

Py:   copy.deepcopy(obj)
来源：http://www.sxryk.cn/163iftlocej.html

PHP:  unserialize(serialize($obj));
来源：http://www.sxryk.cn/163cjsgcmlw.html

JS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163ajnpfgnn.html

TS:   structuredClone(obj)
来源：http://www.xuanzx.com/163sfzqcexw.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.xuanzx.com/163kdpygmki.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.xuanzx.com/163nekgcobc.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.sxryk.cn/163ttiexctw.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.sxryk.cn/163izsuplko.html

[K06] 解析 URL 查询串
来源：http://www.aibaodan.cn/163reaubrgo.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.aibaodan.cn/163hvgthqda.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.sxryk.cn/163iegbjkep.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163ahkqchlc.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163qxcxjlaa.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.aibaodan.cn/163hacweuwr.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.xuanzx.com/163mycovhyd.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.sxryk.cn/163sguxloah.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.xuanzx.com/163uhxirlnr.html

[K07] 进制转换
来源：http://www.aibaodan.cn/163qngmizbh.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.xuanzx.com/163kcvgczmg.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.xuanzx.com/163uuomndww.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163jtqagqms.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163sequirqr.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.xuanzx.com/163pzzeivga.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.sxryk.cn/163cbwiberb.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.sxryk.cn/163vjptqubz.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.aibaodan.cn/163hsobnxry.html

[K08] 二进制序列化（非 JSON）
来源：http://www.aibaodan.cn/163sqchmlac.html

Py:   pickle.dumps(obj)
来源：http://www.aibaodan.cn/163dpgxaqsb.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.aibaodan.cn/163kpfudnof.html

JS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163fikqvciw.html

TS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163utjlbzih.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.sxryk.cn/163slbdzrpr.html

Go:   encoding/gob
来源：http://www.aibaodan.cn/163uykvceps.html

Ruby: Marshal.dump(obj)
来源：http://www.xuanzx.com/163vsftqmhq.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.xuanzx.com/163hxqztxrs.html

================================================================================
来源：http://www.aibaodan.cn/163tczcaeqz.html

L. 网络请求
来源：http://www.sxryk.cn/163arvatkey.html

================================================================================
来源：http://www.sxryk.cn/163gqgdwlgd.html

[L01] 发送 GET 请求
来源：http://www.sxryk.cn/163glseeqcc.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.aibaodan.cn/163sieubztt.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.aibaodan.cn/163esmexydj.html

JS:   await fetch(url)
来源：http://www.sxryk.cn/163zofstllb.html

TS:   await fetch(url)
来源：http://www.sxryk.cn/163pemrpyoa.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.xuanzx.com/163lbnsgywy.html

Go:   resp, err := http.Get(url)
来源：http://www.sxryk.cn/163lnzoyuqt.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.sxryk.cn/163iagwoypk.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.xuanzx.com/163ojztvixd.html

[L02] 发送 POST JSON
来源：http://www.xuanzx.com/163kzjkdqiv.html


<!-- 参考信息 -->