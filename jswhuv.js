外链999!wailian999！

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.aibaodan.cn/163uzksevgp.html

Ruby: rescue ArgumentError => e
来源：http://www.sxryk.cn/163amieozsj.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.aibaodan.cn/163dlemzahi.html

[H06] 可选值 / 空值安全访问
来源：http://www.aibaodan.cn/163qohyzdkp.html

Py:   value = d.get("k") or default
来源：http://www.aibaodan.cn/163soofqrrq.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.sxryk.cn/163byhvjaap.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163hiyuzuqe.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163vytqvncz.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.xuanzx.com/163wskjxqjk.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.sxryk.cn/163kbwqmikb.html

Ruby: d&.dig(:a, :b)
来源：http://www.sxryk.cn/163eikihhov.html

C#:   obj?.A?.B ?? default
来源：http://www.sxryk.cn/163verzonar.html

[H07] 断言
来源：http://www.aibaodan.cn/163ygboixwr.html

Py:   assert x > 0, "必须为正"
来源：http://www.sxryk.cn/163tctzgqbg.html

PHP:  assert($x > 0);
来源：http://www.aibaodan.cn/163hkknpfto.html

JS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163rvzjjjrd.html

TS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163bowmwriq.html

Java: assert x > 0 : "必须为正";
来源：http://www.sxryk.cn/163rpvaiwzb.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.sxryk.cn/163yspxrfmr.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.xuanzx.com/163gwabjkcc.html

C#:   Debug.Assert(x > 0);
来源：http://www.aibaodan.cn/163wsxdqkig.html

[H08] 获取错误信息与堆栈
来源：http://www.xuanzx.com/163phuxrzmv.html

Py:   str(e);  traceback.format_exc()
来源：http://www.xuanzx.com/163xsrlauiw.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.aibaodan.cn/163mkzaoeuc.html

JS:   e.message;  e.stack
来源：http://www.aibaodan.cn/163sifrtsoy.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.sxryk.cn/163oqhlyfot.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.aibaodan.cn/163lmlosjnq.html

Go:   err.Error()
来源：http://www.xuanzx.com/163hrmcddhj.html

Ruby: e.message;  e.backtrace
来源：http://www.xuanzx.com/163sdhncrkn.html

C#:   e.Message;  e.StackTrace
来源：http://www.aibaodan.cn/163scvnssma.html

[H09] 带错误码的异常
来源：http://www.aibaodan.cn/163nvtirrbv.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.aibaodan.cn/163cfqmiqfv.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.sxryk.cn/163ruufxzvw.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.aibaodan.cn/163ieexwphe.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.aibaodan.cn/163jzxasahp.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.xuanzx.com/163ismnnmlm.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.xuanzx.com/163wzeubopa.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.sxryk.cn/163soilblfr.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.xuanzx.com/163emjcibdi.html

[H10] 资源自动释放
来源：http://www.sxryk.cn/163aphxrivk.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.aibaodan.cn/163btcheqmr.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.sxryk.cn/163dggmpdqr.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163zazepzgc.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163xopfgawu.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.xuanzx.com/163nxcktoww.html

Go:   defer f.Close()
来源：http://www.sxryk.cn/163ynbwhbxt.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.sxryk.cn/163vnarwajh.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.sxryk.cn/163cxgyijdy.html

================================================================================
来源：http://www.aibaodan.cn/163udxxcxiq.html

I. 正则表达式
来源：http://www.aibaodan.cn/163cakbiyhh.html

================================================================================
来源：http://www.sxryk.cn/163ntazjkjt.html

[I01] 判断是否匹配
来源：http://www.aibaodan.cn/163dyiqctkr.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.aibaodan.cn/163hdwtykqb.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.xuanzx.com/163behyjqzz.html

JS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163uamueolc.html

TS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163eximylfk.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.aibaodan.cn/163ddzridew.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.aibaodan.cn/163ftybycmj.html

Ruby: s.match?(/\d+/)
来源：http://www.sxryk.cn/163cramymki.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.sxryk.cn/163adrzyjvn.html

[I02] 提取所有匹配
来源：http://www.xuanzx.com/163yxiqkwfu.html

Py:   re.findall(r"\d+", s)
来源：http://www.sxryk.cn/163axkaaqlw.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.xuanzx.com/163wsmqkaxm.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.xuanzx.com/163oceqivrs.html

TS:   s.match(/\d+/g)
来源：http://www.sxryk.cn/163dileubel.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.sxryk.cn/163kxorwxrg.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.xuanzx.com/163womuhzpd.html

Ruby: s.scan(/\d+/)
来源：http://www.xuanzx.com/163ayzkqsaw.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.xuanzx.com/163xmkesvxd.html

[I03] 提取捕获分组
来源：http://www.xuanzx.com/163ojuvkyeg.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.xuanzx.com/163nanaoqad.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.xuanzx.com/163dooqsyxt.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.aibaodan.cn/163bmjosvka.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.aibaodan.cn/163pwfrpvqn.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.aibaodan.cn/163crfchhym.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.aibaodan.cn/163xcfsdjjm.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.xuanzx.com/163cezttjct.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.xuanzx.com/163dwkehhfk.html

[I04] 正则替换
来源：http://www.aibaodan.cn/163pqdokjut.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.sxryk.cn/163sscmkcmk.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163mxmfzafv.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163mvgaqhdl.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163rhhrksvr.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.aibaodan.cn/163dccsflhe.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.aibaodan.cn/163lyjjfuid.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.xuanzx.com/163jdqwzmgb.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.aibaodan.cn/163sovjatxq.html

[I05] 按正则拆分
来源：http://www.xuanzx.com/163aumjlkhb.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.aibaodan.cn/163abkvkbsv.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.xuanzx.com/163lkzsrsfr.html

JS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163kzdhsoxf.html

TS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163kyabgxxf.html

Java: s.split("\\s*,\\s*")
来源：http://www.aibaodan.cn/163ysxofjcg.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.aibaodan.cn/163gbubnlwi.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163kacfbdoa.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.xuanzx.com/163tovptlnz.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.sxryk.cn/163woqaakop.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163bwhyfutm.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.sxryk.cn/163bfswlbxg.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163ushxxewk.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163sxyjhpof.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.xuanzx.com/163lqjbshsn.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.aibaodan.cn/163agmxvgwg.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.aibaodan.cn/163adyqmbne.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163rsqtumxw.html

[I07] 忽略大小写与多行模式
来源：http://www.aibaodan.cn/163duxljbbr.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.sxryk.cn/163vpzhmnwd.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.sxryk.cn/163ciaeujgi.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.xuanzx.com/163qxogjitk.html

TS:   /error/gim
来源：http://www.sxryk.cn/163hunmkypb.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.sxryk.cn/163qxavtjdd.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.sxryk.cn/163ubozikqw.html

Ruby: s.scan(/error/i)
来源：http://www.aibaodan.cn/163dqzrpqpx.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.sxryk.cn/163wgwxupvd.html

[I08] 贪婪与非贪婪匹配
来源：http://www.aibaodan.cn/163sjdhqddr.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.aibaodan.cn/163gxraekop.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.aibaodan.cn/163pugyvkrw.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163gmdflxfx.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163dilvovce.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.sxryk.cn/163ewxbgryg.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.aibaodan.cn/163vlmszmbr.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.aibaodan.cn/163vyafmcbk.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.aibaodan.cn/163dnhncqva.html

================================================================================
来源：http://www.xuanzx.com/163erdxfedc.html

J. 日期与时间
来源：http://www.xuanzx.com/163alxcihde.html

================================================================================
来源：http://www.sxryk.cn/163kbcuveqv.html

[J01] 获取当前时间
来源：http://www.sxryk.cn/163pbedpkqs.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.xuanzx.com/163kijmgzvs.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163pxpjujpp.html

JS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163pyzexwxx.html

TS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163etyyigam.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.sxryk.cn/163mzbvwmek.html

Go:   time.Now()
来源：http://www.xuanzx.com/163htutycye.html

Ruby: Time.now
来源：http://www.xuanzx.com/163mzlnvbth.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.sxryk.cn/163fzjyxwfh.html

[J02] 格式化输出
来源：http://www.xuanzx.com/163tdjdvmoi.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163fbueasvd.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163icanqwif.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.aibaodan.cn/163povnjnvk.html

TS:   d.toISOString()
来源：http://www.sxryk.cn/163cmxackjf.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.sxryk.cn/163agoxiczc.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.xuanzx.com/163kdnimdpd.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163ricoebtz.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.xuanzx.com/163nsjjfgqs.html

[J03] 字符串解析为日期
来源：http://www.sxryk.cn/163iyasqxba.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.xuanzx.com/163kfvtdbrd.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.xuanzx.com/163qgxyqqkm.html

JS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163ovwqohft.html

TS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163bukkvwyl.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.xuanzx.com/163gcjfuiyl.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.sxryk.cn/163tudjhfro.html

Ruby: Date.parse("2024-01-02")
来源：http://www.xuanzx.com/163rkxebqtr.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.xuanzx.com/163gnjqdtlv.html

[J04] 时间戳与日期互转
来源：http://www.xuanzx.com/163ropoozxy.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.sxryk.cn/163badfeljx.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.sxryk.cn/163rlfyrzzn.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.aibaodan.cn/163ondyfbcx.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.aibaodan.cn/163iikltqqb.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.xuanzx.com/163tejpqghj.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.sxryk.cn/163yazocgny.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.sxryk.cn/163paformym.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.aibaodan.cn/163capkjctf.html

[J05] 时间加减（加 7 天）
来源：http://www.xuanzx.com/163tqlvvryk.html

Py:   now + timedelta(days=7)
来源：http://www.xuanzx.com/163hedbfptn.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.sxryk.cn/163rffmlvyt.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163idqaibak.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163msejujwy.html

Java: LocalDate.now().plusDays(7)
来源：http://www.xuanzx.com/163timexxhs.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.xuanzx.com/163apxqfpzb.html

Ruby: Time.now + 7 * 86400
来源：http://www.sxryk.cn/163bjhekvsa.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.xuanzx.com/163lvrjewoz.html

[J06] 计算两时间之差
来源：http://www.xuanzx.com/163rafksepz.html

Py:   (end - start).total_seconds()
来源：http://www.sxryk.cn/163swolvnvc.html

PHP:  $end->diff($start)->days;
来源：http://www.xuanzx.com/163hnwszjtz.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.aibaodan.cn/163fvmxdvka.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.sxryk.cn/163hscnghiy.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.sxryk.cn/163crfyugiq.html

Go:   end.Sub(start).Hours()
来源：http://www.sxryk.cn/163fakxbtkd.html

Ruby: end - start                 # 返回秒数
来源：http://www.sxryk.cn/163wrttpdhl.html

C#:   (end - start).TotalSeconds
来源：http://www.sxryk.cn/163mkiqshte.html

[J07] 比较两个日期
来源：http://www.sxryk.cn/163dlsybcrp.html

Py:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163afogzfmh.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.sxryk.cn/163crlmwghf.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163yanoybhg.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163sjsbdzoo.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.xuanzx.com/163xlscskmh.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.xuanzx.com/163mtznwhwk.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163ttrkoptp.html

C#:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163uqyvhrmu.html

[J08] 提取年月日与星期
来源：http://www.sxryk.cn/163expmlvvw.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.aibaodan.cn/163slzrtpvp.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.aibaodan.cn/163rrfnvods.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.aibaodan.cn/163eiesrjfa.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.aibaodan.cn/163hviszvvr.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.xuanzx.com/163cqghbvxs.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.aibaodan.cn/163xidcceeg.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.sxryk.cn/163tamxinpm.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.aibaodan.cn/163mycyhoqc.html

[J09] 时区处理
来源：http://www.aibaodan.cn/163phmvbjzj.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.xuanzx.com/163lsxtzcpa.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.aibaodan.cn/163ttmepvmp.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163okilraxw.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163ydtogspc.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.aibaodan.cn/163izxmfzrz.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.sxryk.cn/163qlpdqkey.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.sxryk.cn/163qwvlxyld.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.xuanzx.com/163rmqholkp.html

[J10] 取今天 / 本月第一天
来源：http://www.xuanzx.com/163hnawjicl.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.aibaodan.cn/163ehzwodrq.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.xuanzx.com/163mibielae.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.xuanzx.com/163zgrzlsfm.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.xuanzx.com/163rxoqwsbq.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.aibaodan.cn/163rfgmkjqm.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.aibaodan.cn/163trvtqzka.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.xuanzx.com/163ksorsnjs.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.sxryk.cn/163hcalkike.html

================================================================================
来源：http://www.sxryk.cn/163tysnxjpr.html

K. JSON 与序列化
来源：http://www.sxryk.cn/163njujnxnx.html

================================================================================
来源：http://www.xuanzx.com/163cpehxjoq.html

[K01] 对象转 JSON 字符串
来源：http://www.sxryk.cn/163tfzvgzmd.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.sxryk.cn/163hwdwtdaw.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163rksrlazm.html

JS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163obmlonry.html

TS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163ztxwcook.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.sxryk.cn/163kxpajjsu.html

Go:   json.Marshal(obj)
来源：http://www.sxryk.cn/163kupnxgba.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.xuanzx.com/163qqictmmh.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.aibaodan.cn/163arssecrj.html

[K02] JSON 字符串转对象
来源：http://www.sxryk.cn/163iutowpnn.html

Py:   json.loads(s)
来源：http://www.xuanzx.com/163dpdmskmv.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.aibaodan.cn/163ygateglh.html

JS:   JSON.parse(s)
来源：http://www.xuanzx.com/163cssqzjwi.html

TS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163yzjoyjgv.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.xuanzx.com/163rbakdcaz.html

Go:   json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163tvjqnavr.html

Ruby: JSON.parse(s)
来源：http://www.sxryk.cn/163rljeqzar.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.aibaodan.cn/163mubsxykb.html

[K03] JSON 美化输出（带缩进）
来源：http://www.sxryk.cn/163jvnnwqpi.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.aibaodan.cn/163ubsiwbks.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163dpsrlkrv.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163slwobsty.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163cnymzgzz.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.xuanzx.com/163iuunspwp.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.sxryk.cn/163krcigmfo.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.aibaodan.cn/163cihyjlwu.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.xuanzx.com/163tzcvbmag.html

[K04] 读取 JSON 文件
来源：http://www.sxryk.cn/163vxmdeghq.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.xuanzx.com/163revaklkt.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.aibaodan.cn/163ufeoonta.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163ewroaypi.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163rlscddto.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.xuanzx.com/163enmfdnkf.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163dcrmrfrw.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.aibaodan.cn/163vkjqkzmd.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.xuanzx.com/163jktixrhn.html

[K05] 深拷贝对象
来源：http://www.aibaodan.cn/163duinwlvm.html

Py:   copy.deepcopy(obj)
来源：http://www.xuanzx.com/163kgaticjl.html

PHP:  unserialize(serialize($obj));
来源：http://www.xuanzx.com/163bdjhxogl.html

JS:   structuredClone(obj)
来源：http://www.xuanzx.com/163vgatkteh.html

TS:   structuredClone(obj)
来源：http://www.sxryk.cn/163jmnwbkhs.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.xuanzx.com/163riemqsei.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.xuanzx.com/163tlwnyxzx.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.sxryk.cn/163fzvfwsvl.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.sxryk.cn/163uddzukzs.html

[K06] 解析 URL 查询串
来源：http://www.xuanzx.com/163uncjwmdj.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.sxryk.cn/163ovqjxwbv.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.xuanzx.com/163dzwoibbz.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163qzbesaya.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163znfaswxr.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.sxryk.cn/163xgabtrob.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.aibaodan.cn/163omlyzkwn.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.xuanzx.com/163qtogjzzj.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.sxryk.cn/163tmhcrmep.html

[K07] 进制转换
来源：http://www.xuanzx.com/163ughzqclb.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.sxryk.cn/163zviemejr.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.xuanzx.com/163jywqqqtq.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163llpqogxu.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163vwjkamwr.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.xuanzx.com/163ebzwpefu.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.aibaodan.cn/163ixccivuv.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.xuanzx.com/163xhofaksh.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.sxryk.cn/163ncondqbl.html

[K08] 二进制序列化（非 JSON）
来源：http://www.xuanzx.com/163ekyigmxx.html

Py:   pickle.dumps(obj)
来源：http://www.xuanzx.com/163eknfoksg.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.xuanzx.com/163ipkrpxzi.html

JS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163ncbeesqd.html

TS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163fbdbnbcd.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.xuanzx.com/163zpgabmqb.html

Go:   encoding/gob
来源：http://www.sxryk.cn/163niqeisbk.html

Ruby: Marshal.dump(obj)
来源：http://www.xuanzx.com/163yovypchz.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.sxryk.cn/163ptrjduwn.html

================================================================================
来源：http://www.aibaodan.cn/163ttlwnkbb.html

L. 网络请求
来源：http://www.aibaodan.cn/163heldylxi.html

================================================================================
来源：http://www.xuanzx.com/163gnwyyltz.html

[L01] 发送 GET 请求
来源：http://www.sxryk.cn/163esfafgip.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.aibaodan.cn/163lqkpyrnn.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.xuanzx.com/163lddckyzb.html

JS:   await fetch(url)
来源：http://www.xuanzx.com/163mwfdrjwi.html

TS:   await fetch(url)
来源：http://www.aibaodan.cn/163imfdapur.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.aibaodan.cn/163kpuxoyga.html


<!-- 参考信息 -->