外链999!wailian999！

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.sxryk.cn/163sggxirzb.html

Ruby: rescue ArgumentError => e
来源：http://www.xuanzx.com/163obghfpay.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.sxryk.cn/163mjpmpbes.html

[H06] 可选值 / 空值安全访问
来源：http://www.aibaodan.cn/163pggorotc.html

Py:   value = d.get("k") or default
来源：http://www.aibaodan.cn/163uobkxtxm.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.xuanzx.com/163mtaofukn.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163ajtautst.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163vojrmnvc.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.aibaodan.cn/163vhoikfdh.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.sxryk.cn/163sbyekhkh.html

Ruby: d&.dig(:a, :b)
来源：http://www.aibaodan.cn/163urjweqwx.html

C#:   obj?.A?.B ?? default
来源：http://www.aibaodan.cn/163fqomesmy.html

[H07] 断言
来源：http://www.aibaodan.cn/163xqnoexmn.html

Py:   assert x > 0, "必须为正"
来源：http://www.aibaodan.cn/163etezqdmf.html

PHP:  assert($x > 0);
来源：http://www.sxryk.cn/163krkbmmzx.html

JS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163ohvpwibv.html

TS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163optvjfkd.html

Java: assert x > 0 : "必须为正";
来源：http://www.sxryk.cn/163cdzkoeqy.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.aibaodan.cn/163cqiyvmwi.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.aibaodan.cn/163dxgzttmj.html

C#:   Debug.Assert(x > 0);
来源：http://www.aibaodan.cn/163rnyqjjzk.html

[H08] 获取错误信息与堆栈
来源：http://www.xuanzx.com/163nhydfvbn.html

Py:   str(e);  traceback.format_exc()
来源：http://www.aibaodan.cn/163ytxszzuj.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.sxryk.cn/163tryooaze.html

JS:   e.message;  e.stack
来源：http://www.aibaodan.cn/163nyroctuc.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.aibaodan.cn/163nzabsosg.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.aibaodan.cn/163krobdnif.html

Go:   err.Error()
来源：http://www.aibaodan.cn/163omffrcnc.html

Ruby: e.message;  e.backtrace
来源：http://www.xuanzx.com/163qiviztqg.html

C#:   e.Message;  e.StackTrace
来源：http://www.aibaodan.cn/163yjhptllv.html

[H09] 带错误码的异常
来源：http://www.xuanzx.com/163zdpsaurg.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.aibaodan.cn/163gpvjphnp.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.aibaodan.cn/163czngblkt.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.sxryk.cn/163qirriwbq.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.xuanzx.com/163bofqkhyb.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.xuanzx.com/163tmlsearn.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.aibaodan.cn/163idxoorsv.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.sxryk.cn/163anlujqqz.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.aibaodan.cn/163ghrghozw.html

[H10] 资源自动释放
来源：http://www.sxryk.cn/163ctskqqvb.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.aibaodan.cn/163wxrcaudr.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.sxryk.cn/163nomjxhth.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163grgbythl.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163vgpoxgto.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.xuanzx.com/163ycfowdxf.html

Go:   defer f.Close()
来源：http://www.xuanzx.com/163mhehzrim.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.sxryk.cn/163pngjoxml.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.sxryk.cn/163spufrypw.html

================================================================================
来源：http://www.sxryk.cn/163ohvsatbi.html

I. 正则表达式
来源：http://www.sxryk.cn/163bimpjmeh.html

================================================================================
来源：http://www.xuanzx.com/163reaagddd.html

[I01] 判断是否匹配
来源：http://www.aibaodan.cn/163pfdrnhzm.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.aibaodan.cn/163ehugcilr.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.sxryk.cn/163arfcwkjy.html

JS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163giutkbmo.html

TS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163xtahgmpx.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.sxryk.cn/163pvgdwzdz.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.sxryk.cn/163vmronrey.html

Ruby: s.match?(/\d+/)
来源：http://www.sxryk.cn/163xukqdylo.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.xuanzx.com/163whonmcmt.html

[I02] 提取所有匹配
来源：http://www.aibaodan.cn/163ndbvkjkm.html

Py:   re.findall(r"\d+", s)
来源：http://www.xuanzx.com/163npkuhojd.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.xuanzx.com/163tbqjqmwl.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.aibaodan.cn/163zsvqaffl.html

TS:   s.match(/\d+/g)
来源：http://www.sxryk.cn/163amlryhjm.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.sxryk.cn/163boaropdo.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.sxryk.cn/163hbyrrstl.html

Ruby: s.scan(/\d+/)
来源：http://www.aibaodan.cn/163irpoxfbz.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.xuanzx.com/163ciywponw.html

[I03] 提取捕获分组
来源：http://www.sxryk.cn/163hmpemtir.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.aibaodan.cn/163kalownvx.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.xuanzx.com/163xubazyan.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.xuanzx.com/163thpzodez.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.aibaodan.cn/163yxxndfku.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.sxryk.cn/163gwmkkkri.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.sxryk.cn/163mmlyhkyg.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.aibaodan.cn/163kmmiwztg.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.sxryk.cn/163ovrstonh.html

[I04] 正则替换
来源：http://www.sxryk.cn/163zgwxktwo.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.aibaodan.cn/163vvycpgxi.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163pijyviyo.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163rqrvlzvx.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163lbgpcgjg.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.aibaodan.cn/163zluuobdb.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.sxryk.cn/163vcnumlax.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.sxryk.cn/163rqerhjqs.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.sxryk.cn/163bsqicntx.html

[I05] 按正则拆分
来源：http://www.aibaodan.cn/163gbjltxuo.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.xuanzx.com/163rphjibmz.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.sxryk.cn/163bgftuepx.html

JS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163ebmmgfhx.html

TS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163gtcijffo.html

Java: s.split("\\s*,\\s*")
来源：http://www.xuanzx.com/163uauyednt.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.aibaodan.cn/163xpbqbelj.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163qjdwykox.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.xuanzx.com/163predjsht.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.xuanzx.com/163pwhtszor.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163mwkztjji.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.aibaodan.cn/163vwlifiab.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163tqwmfyks.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163virjxxmf.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.sxryk.cn/163hybcopje.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.aibaodan.cn/163hqaaffjt.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.xuanzx.com/163pdoptgbt.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163sxwklcxk.html

[I07] 忽略大小写与多行模式
来源：http://www.xuanzx.com/163yfsyxyrc.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.xuanzx.com/163qroiwsqb.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.xuanzx.com/163nlbcysob.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.xuanzx.com/163pcxojzgg.html

TS:   /error/gim
来源：http://www.xuanzx.com/163jmvtjtwh.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.sxryk.cn/163wuyhfcjz.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.xuanzx.com/163ezbkldsl.html

Ruby: s.scan(/error/i)
来源：http://www.xuanzx.com/163yetnfzvv.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.aibaodan.cn/163fumptvkx.html

[I08] 贪婪与非贪婪匹配
来源：http://www.xuanzx.com/163frjooily.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.aibaodan.cn/163zqczfndx.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.xuanzx.com/163vuplmfni.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163phedkzft.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163kezgonff.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.aibaodan.cn/163cdkbtqlm.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.sxryk.cn/163chzmgthm.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.xuanzx.com/163rhwnmcms.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.xuanzx.com/163mtlnnkrj.html

================================================================================
来源：http://www.aibaodan.cn/163tggzmxwj.html

J. 日期与时间
来源：http://www.sxryk.cn/163gbktqibg.html

================================================================================
来源：http://www.sxryk.cn/163vawpgimt.html

[J01] 获取当前时间
来源：http://www.aibaodan.cn/163iwnjmpob.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.aibaodan.cn/163vfixbgoj.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163patwkdra.html

JS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163wwaanlfq.html

TS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163modszelj.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.xuanzx.com/163klrukmqk.html

Go:   time.Now()
来源：http://www.xuanzx.com/163xbwqiztz.html

Ruby: Time.now
来源：http://www.xuanzx.com/163yaftahrx.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.sxryk.cn/163zurifmli.html

[J02] 格式化输出
来源：http://www.xuanzx.com/163hcwxbkrt.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163raimspwy.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163hguzqxgp.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.xuanzx.com/163agpkmjzj.html

TS:   d.toISOString()
来源：http://www.aibaodan.cn/163ifmmjcvg.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.aibaodan.cn/163sagybntp.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.sxryk.cn/163vtahxhmt.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163ibakvlrk.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.xuanzx.com/163brwdakmb.html

[J03] 字符串解析为日期
来源：http://www.aibaodan.cn/163hmlpjaei.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.aibaodan.cn/163bmejlvui.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.aibaodan.cn/163jmzlgxxn.html

JS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163ngtqrgaq.html

TS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163mwtxulov.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.aibaodan.cn/163qquzyjfs.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.xuanzx.com/163vilhbhkm.html

Ruby: Date.parse("2024-01-02")
来源：http://www.sxryk.cn/163ioawwkxe.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.sxryk.cn/163ypbjotlb.html

[J04] 时间戳与日期互转
来源：http://www.xuanzx.com/163yjimxhqx.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.xuanzx.com/163wwmjrphi.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.xuanzx.com/163hjevoehk.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.sxryk.cn/163zmnzmzcn.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.aibaodan.cn/163wctjzwyg.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.aibaodan.cn/163vwqhszah.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.aibaodan.cn/163nocdbabh.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.sxryk.cn/163isrtyenn.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.xuanzx.com/163snetdipr.html

[J05] 时间加减（加 7 天）
来源：http://www.sxryk.cn/163vyqtnuiw.html

Py:   now + timedelta(days=7)
来源：http://www.sxryk.cn/163zdhvding.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.sxryk.cn/163gfywwcxh.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163lbqfxwtd.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163ffckcwph.html

Java: LocalDate.now().plusDays(7)
来源：http://www.sxryk.cn/163jzkdfsig.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.sxryk.cn/163rpupwyir.html

Ruby: Time.now + 7 * 86400
来源：http://www.aibaodan.cn/163dxtrlfch.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.aibaodan.cn/163cxpyovqc.html

[J06] 计算两时间之差
来源：http://www.xuanzx.com/163jrqrwriw.html

Py:   (end - start).total_seconds()
来源：http://www.aibaodan.cn/163obrjcowd.html

PHP:  $end->diff($start)->days;
来源：http://www.xuanzx.com/163ekvphdbi.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.sxryk.cn/163hwowvivg.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.xuanzx.com/163spfkiufk.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.sxryk.cn/163zbncrvur.html

Go:   end.Sub(start).Hours()
来源：http://www.aibaodan.cn/163iuomzbzd.html

Ruby: end - start                 # 返回秒数
来源：http://www.sxryk.cn/163zfblosph.html

C#:   (end - start).TotalSeconds
来源：http://www.aibaodan.cn/163zszjywrq.html

[J07] 比较两个日期
来源：http://www.xuanzx.com/163grribupb.html

Py:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163gszpuqli.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.xuanzx.com/163nnhqloyj.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163wmspsxih.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163mhyfuuvf.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.aibaodan.cn/163iiaukmbf.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.sxryk.cn/163bnxiurbc.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163xvdaqnfl.html

C#:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163lqwvmmel.html

[J08] 提取年月日与星期
来源：http://www.sxryk.cn/163yuaybqnn.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.sxryk.cn/163ecfstxob.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.aibaodan.cn/163ulpbwyqs.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.aibaodan.cn/163pvfulzww.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.xuanzx.com/163wbxmgsgr.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.aibaodan.cn/163pygyejbm.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.xuanzx.com/163ddyakusw.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.sxryk.cn/163azwgingh.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.aibaodan.cn/163crshmycv.html

[J09] 时区处理
来源：http://www.sxryk.cn/163bywulvwg.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.aibaodan.cn/163yihnknrc.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.xuanzx.com/163gkujxvrs.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163lbipdjbd.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163pycfczic.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.sxryk.cn/163hzozcqpp.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.sxryk.cn/163dxfcptwu.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.aibaodan.cn/163gmdvmtxj.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.xuanzx.com/163spaobsmm.html

[J10] 取今天 / 本月第一天
来源：http://www.aibaodan.cn/163trymgtgn.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.xuanzx.com/163vvnukmsx.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.sxryk.cn/163lsmfywim.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.aibaodan.cn/163kqquljoc.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.xuanzx.com/163qhajzjiq.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.aibaodan.cn/163gmigtojh.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.sxryk.cn/163xkcmeskl.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.sxryk.cn/163cybfgmui.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.xuanzx.com/163kosdyyyr.html

================================================================================
来源：http://www.sxryk.cn/163aqbbjbfw.html

K. JSON 与序列化
来源：http://www.xuanzx.com/163zclahwfh.html

================================================================================
来源：http://www.aibaodan.cn/163tigmtllp.html

[K01] 对象转 JSON 字符串
来源：http://www.sxryk.cn/163dgiruznp.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.sxryk.cn/163ehcxrpyi.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163cyqwpyak.html

JS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163exijiakp.html

TS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163hfrnakct.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.sxryk.cn/163xnfizxck.html

Go:   json.Marshal(obj)
来源：http://www.sxryk.cn/163jkdrgwiw.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.xuanzx.com/163hixajogc.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.xuanzx.com/163nzhelmcu.html

[K02] JSON 字符串转对象
来源：http://www.aibaodan.cn/163gspnopkq.html

Py:   json.loads(s)
来源：http://www.aibaodan.cn/163vnwfinnj.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.aibaodan.cn/163kzmoyrqh.html

JS:   JSON.parse(s)
来源：http://www.xuanzx.com/163iskmkbag.html

TS:   JSON.parse(s)
来源：http://www.xuanzx.com/163tenlgqhw.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.sxryk.cn/163fslueqps.html

Go:   json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163fgnfuuqs.html

Ruby: JSON.parse(s)
来源：http://www.sxryk.cn/163cqugtqxk.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.aibaodan.cn/163fmsrooib.html

[K03] JSON 美化输出（带缩进）
来源：http://www.xuanzx.com/163meswpkhf.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.aibaodan.cn/163xrsbeojr.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163isgdnchg.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163vqwcagez.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163nculfaib.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.xuanzx.com/163rgqfsrqr.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.xuanzx.com/163atpkydgk.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.sxryk.cn/163tturorju.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.xuanzx.com/163mrgepoeu.html

[K04] 读取 JSON 文件
来源：http://www.sxryk.cn/163odolzcdr.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.xuanzx.com/163ngispcgb.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.aibaodan.cn/163cbxencgo.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163qlbbovvm.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163xxhpdwnw.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.sxryk.cn/163butcsxvk.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163xlsyztfs.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.xuanzx.com/163qskqqans.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.sxryk.cn/163atidpyyn.html

[K05] 深拷贝对象
来源：http://www.xuanzx.com/163ibhlngom.html

Py:   copy.deepcopy(obj)
来源：http://www.xuanzx.com/163oasfyidj.html

PHP:  unserialize(serialize($obj));
来源：http://www.sxryk.cn/163vftarsaq.html

JS:   structuredClone(obj)
来源：http://www.sxryk.cn/163tvgzrygm.html

TS:   structuredClone(obj)
来源：http://www.xuanzx.com/163gplhjqwc.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.xuanzx.com/163wbceqmkm.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.aibaodan.cn/163fbgwpnpp.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.sxryk.cn/163ngddejpr.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.sxryk.cn/163liswgwxb.html

[K06] 解析 URL 查询串
来源：http://www.sxryk.cn/163vzqdpfhl.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.sxryk.cn/163jijisnwy.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.xuanzx.com/163ffjmvzfl.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163fwudafiu.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163ayoxtxov.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.xuanzx.com/163xmauprbz.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.sxryk.cn/163stkzuxqn.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.sxryk.cn/163chyweqox.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.xuanzx.com/163zdlptseu.html

[K07] 进制转换
来源：http://www.aibaodan.cn/163cvhuydke.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.aibaodan.cn/163nxbpkuvc.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.aibaodan.cn/163tmxugdcm.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163eqtgizxi.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163tkuvfqco.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.aibaodan.cn/163lvjecyyj.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.xuanzx.com/163kcgnqygh.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.aibaodan.cn/163hofuerqk.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.sxryk.cn/163vhnlsrel.html

[K08] 二进制序列化（非 JSON）
来源：http://www.xuanzx.com/163bvcfjziz.html

Py:   pickle.dumps(obj)
来源：http://www.aibaodan.cn/163kvjgrwer.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.aibaodan.cn/163nfhncres.html

JS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163opilchyb.html

TS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163wnonfnun.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.aibaodan.cn/163tdrabucq.html

Go:   encoding/gob
来源：http://www.sxryk.cn/163ovezcozq.html

Ruby: Marshal.dump(obj)
来源：http://www.sxryk.cn/163ooeefwpn.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.xuanzx.com/163hydacsmz.html

================================================================================
来源：http://www.aibaodan.cn/163sitgsdfn.html

L. 网络请求
来源：http://www.xuanzx.com/163emkxxner.html

================================================================================
来源：http://www.aibaodan.cn/163yvrokxjq.html

[L01] 发送 GET 请求
来源：http://www.xuanzx.com/163zqknfuda.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.xuanzx.com/163hphlofep.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.xuanzx.com/163dicngpmj.html

JS:   await fetch(url)
来源：http://www.sxryk.cn/163nzhibrqn.html

TS:   await fetch(url)
来源：http://www.xuanzx.com/163gcgldgep.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.sxryk.cn/163ovmmsclf.html


<!-- 参考信息 -->