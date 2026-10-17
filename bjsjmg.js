外链999!wailian999！

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.xuanzx.com/163vmtkbwla.html

JS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163zmaidgdx.html

TS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163pfhmqioq.html

Java: catch (IOException | SQLException e) {}
来源：http://www.xuanzx.com/163skocxtxk.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.xuanzx.com/163wlhhgrfu.html

Ruby: rescue ArgumentError => e
来源：http://www.aibaodan.cn/163wdphtgcv.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.sxryk.cn/163nftgzstu.html

[H06] 可选值 / 空值安全访问
来源：http://www.xuanzx.com/163lkmhgrdb.html

Py:   value = d.get("k") or default
来源：http://www.sxryk.cn/163taugwrxm.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.xuanzx.com/163dznifpqg.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163ljpmalvb.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163hqlkowqy.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.xuanzx.com/163jdsyasqh.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.xuanzx.com/163rjojewss.html

Ruby: d&.dig(:a, :b)
来源：http://www.aibaodan.cn/163hhdmaqwr.html

C#:   obj?.A?.B ?? default
来源：http://www.xuanzx.com/163iivkdqod.html

[H07] 断言
来源：http://www.aibaodan.cn/163fhpjheoz.html

Py:   assert x > 0, "必须为正"
来源：http://www.sxryk.cn/163naowmshw.html

PHP:  assert($x > 0);
来源：http://www.xuanzx.com/163kkkjsren.html

JS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163enxwixlr.html

TS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163mdzqfcdz.html

Java: assert x > 0 : "必须为正";
来源：http://www.xuanzx.com/163tyzieqyl.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.aibaodan.cn/163wqkziuvr.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.xuanzx.com/163tpsqbdcb.html

C#:   Debug.Assert(x > 0);
来源：http://www.sxryk.cn/163lhdbfubp.html

[H08] 获取错误信息与堆栈
来源：http://www.sxryk.cn/163jhokcxby.html

Py:   str(e);  traceback.format_exc()
来源：http://www.aibaodan.cn/163nzydferq.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.sxryk.cn/163fyzplrrm.html

JS:   e.message;  e.stack
来源：http://www.xuanzx.com/163cgmddysb.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.aibaodan.cn/163ywfzvlpz.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.aibaodan.cn/163jarannxy.html

Go:   err.Error()
来源：http://www.sxryk.cn/163tpjbuqci.html

Ruby: e.message;  e.backtrace
来源：http://www.aibaodan.cn/163xsauiytw.html

C#:   e.Message;  e.StackTrace
来源：http://www.xuanzx.com/163drsxtkff.html

[H09] 带错误码的异常
来源：http://www.sxryk.cn/163yaihoerx.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.xuanzx.com/163donufmwi.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.xuanzx.com/163iohsjiec.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.xuanzx.com/163onafmkpu.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.sxryk.cn/163impicwwu.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.sxryk.cn/163nadwntmx.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.sxryk.cn/163nkbyyooe.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.aibaodan.cn/163klisgbqm.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.xuanzx.com/163bwhzmluf.html

[H10] 资源自动释放
来源：http://www.aibaodan.cn/163vmesxnqb.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.aibaodan.cn/163yrfkprcq.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.sxryk.cn/163wbneircp.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163idjdfyph.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163npfsgofg.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.sxryk.cn/163raxunixn.html

Go:   defer f.Close()
来源：http://www.xuanzx.com/163ahmnmrok.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.aibaodan.cn/163llgbdvlu.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.sxryk.cn/163woyfzsqk.html

================================================================================
来源：http://www.sxryk.cn/163sbkrmovv.html

I. 正则表达式
来源：http://www.xuanzx.com/163dxqeagto.html

================================================================================
来源：http://www.sxryk.cn/163ydxwfpds.html

[I01] 判断是否匹配
来源：http://www.xuanzx.com/163bwezeqdd.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.aibaodan.cn/163bopzleoy.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.sxryk.cn/163jxjlfcjp.html

JS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163xeavtxnv.html

TS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163jffhgepx.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.sxryk.cn/163ppwtxahv.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.sxryk.cn/163hswcghba.html

Ruby: s.match?(/\d+/)
来源：http://www.xuanzx.com/163novvwdxh.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.aibaodan.cn/163tvrdugpk.html

[I02] 提取所有匹配
来源：http://www.aibaodan.cn/163silfsmeh.html

Py:   re.findall(r"\d+", s)
来源：http://www.aibaodan.cn/163banvzuio.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.xuanzx.com/163kntaortq.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.xuanzx.com/163sasfinns.html

TS:   s.match(/\d+/g)
来源：http://www.aibaodan.cn/163wmfgddmh.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.sxryk.cn/163olbynemu.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.sxryk.cn/163cvtubtqt.html

Ruby: s.scan(/\d+/)
来源：http://www.xuanzx.com/163iianmxwd.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.aibaodan.cn/163qzfyyvpq.html

[I03] 提取捕获分组
来源：http://www.aibaodan.cn/163xuvantph.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.xuanzx.com/163pgualksd.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.aibaodan.cn/163tubfmgok.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.aibaodan.cn/163nzseomdi.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.aibaodan.cn/163sqlhtkuc.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.sxryk.cn/163shrpchym.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.aibaodan.cn/163alhecolm.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.xuanzx.com/163aojvurjz.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.xuanzx.com/163fjdmqkph.html

[I04] 正则替换
来源：http://www.aibaodan.cn/163chdclmqe.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.sxryk.cn/163fkwiskwn.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163sqdaeten.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163njkjekfs.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163ovbbnhpl.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.xuanzx.com/163infpxmdm.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.aibaodan.cn/163bcajvydr.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.sxryk.cn/163vbmlyeho.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.aibaodan.cn/163pedczext.html

[I05] 按正则拆分
来源：http://www.xuanzx.com/163hyvpmztv.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.sxryk.cn/163fnezygrb.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.sxryk.cn/163qwnpyybb.html

JS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163rdzegvlx.html

TS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163dssvwsrb.html

Java: s.split("\\s*,\\s*")
来源：http://www.aibaodan.cn/163bjyfuipg.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.xuanzx.com/163zsaewvlj.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163ellhtibq.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.aibaodan.cn/163ccpuqkfs.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.aibaodan.cn/163vqacqrde.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163aysegmbt.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.aibaodan.cn/163xoniqlfj.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163heiftmbw.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163ngxvgjti.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.sxryk.cn/163vtyexlzq.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.xuanzx.com/163ofmnsomw.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.aibaodan.cn/163lqgljvaf.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163hqdeltzz.html

[I07] 忽略大小写与多行模式
来源：http://www.aibaodan.cn/163retgjqhh.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.sxryk.cn/163pjikxcdp.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.aibaodan.cn/163cflqvoqa.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.xuanzx.com/163bsqjbuwd.html

TS:   /error/gim
来源：http://www.aibaodan.cn/163gepvhenj.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.sxryk.cn/163istvbiwh.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.aibaodan.cn/163brtiirjs.html

Ruby: s.scan(/error/i)
来源：http://www.xuanzx.com/163irzebxfv.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.xuanzx.com/163fjqtdmsa.html

[I08] 贪婪与非贪婪匹配
来源：http://www.xuanzx.com/163crlnibyu.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.aibaodan.cn/163ovdoaclp.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.xuanzx.com/163zygkmwmp.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163fxgdghlm.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163sqklsrwe.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.aibaodan.cn/163jkndukkn.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.aibaodan.cn/163ytpjelgz.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.aibaodan.cn/163cicvtceg.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.sxryk.cn/163ozftydnr.html

================================================================================
来源：http://www.sxryk.cn/163nkwraosi.html

J. 日期与时间
来源：http://www.aibaodan.cn/163hoolnhsh.html

================================================================================
来源：http://www.aibaodan.cn/163wjvvcxab.html

[J01] 获取当前时间
来源：http://www.aibaodan.cn/163jpyzplne.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.sxryk.cn/163napamqkv.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163kfpzqucf.html

JS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163ebkudsle.html

TS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163wshuntbd.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.sxryk.cn/163peqfhgrj.html

Go:   time.Now()
来源：http://www.aibaodan.cn/163vflucqxd.html

Ruby: Time.now
来源：http://www.xuanzx.com/163gawqmoqw.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.sxryk.cn/163xugievvp.html

[J02] 格式化输出
来源：http://www.sxryk.cn/163xlcxeeqp.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163xismiswj.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163qdinllpd.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.sxryk.cn/163jiheppie.html

TS:   d.toISOString()
来源：http://www.sxryk.cn/163ddjftxev.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.sxryk.cn/163pbjmfwdu.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.xuanzx.com/163ziyrynih.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163jpzlocxk.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.sxryk.cn/163igfukwdw.html

[J03] 字符串解析为日期
来源：http://www.aibaodan.cn/163uzfxdhrv.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.xuanzx.com/163lniaredu.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.aibaodan.cn/163jwqvcmve.html

JS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163zsakrzht.html

TS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163tmdrsdqi.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.aibaodan.cn/163otpwpawl.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.sxryk.cn/163xmjgslka.html

Ruby: Date.parse("2024-01-02")
来源：http://www.xuanzx.com/163wybnocki.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.xuanzx.com/163gkyaotnl.html

[J04] 时间戳与日期互转
来源：http://www.aibaodan.cn/163nyvmlswr.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.xuanzx.com/163nlquvtyv.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.aibaodan.cn/163hpgjmavd.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.sxryk.cn/163yyyminbe.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.xuanzx.com/163tcauagql.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.sxryk.cn/163iojdswdm.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.xuanzx.com/163bbfwzexv.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.aibaodan.cn/163wsccxbbm.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.xuanzx.com/163erfzpmrz.html

[J05] 时间加减（加 7 天）
来源：http://www.sxryk.cn/163bvsqsiwh.html

Py:   now + timedelta(days=7)
来源：http://www.aibaodan.cn/163cfnipdzr.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.aibaodan.cn/163aewnjjya.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163ujwkmmys.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163zvmknlnb.html

Java: LocalDate.now().plusDays(7)
来源：http://www.aibaodan.cn/163hftsmqhn.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.sxryk.cn/163ieuenhjc.html

Ruby: Time.now + 7 * 86400
来源：http://www.aibaodan.cn/163ghxovxpr.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.xuanzx.com/163yrhgrlez.html

[J06] 计算两时间之差
来源：http://www.sxryk.cn/163mpwgbsez.html

Py:   (end - start).total_seconds()
来源：http://www.sxryk.cn/163xiuqyher.html

PHP:  $end->diff($start)->days;
来源：http://www.sxryk.cn/163swvzkvvu.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.xuanzx.com/163cvtkxoxi.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.aibaodan.cn/163ytkmnjeu.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.xuanzx.com/163swtpfmyh.html

Go:   end.Sub(start).Hours()
来源：http://www.aibaodan.cn/163ylbmmmse.html

Ruby: end - start                 # 返回秒数
来源：http://www.sxryk.cn/163ekpkgyrm.html

C#:   (end - start).TotalSeconds
来源：http://www.xuanzx.com/163iusumtkz.html

[J07] 比较两个日期
来源：http://www.aibaodan.cn/163nrwvkrka.html

Py:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163fcuqqdsn.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.sxryk.cn/163msxsqxsn.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163cgchkvcl.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163xnmvajuq.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.aibaodan.cn/163viezkoms.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.xuanzx.com/163qvabgtgw.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163zzqdaean.html

C#:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163dowfvave.html

[J08] 提取年月日与星期
来源：http://www.sxryk.cn/163ijyowejk.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.xuanzx.com/163dyootirv.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.aibaodan.cn/163kbeonrkb.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.aibaodan.cn/163gutqoihw.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.xuanzx.com/163jphwpcmv.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.aibaodan.cn/163ltegitlo.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.aibaodan.cn/163vgldonqy.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.xuanzx.com/163dbhhqagt.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.aibaodan.cn/163fmtjenor.html

[J09] 时区处理
来源：http://www.sxryk.cn/163rudidxvt.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.aibaodan.cn/163qrahqfwc.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.xuanzx.com/163bqpqecfu.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163kcdaaasj.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163vdscakoq.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.xuanzx.com/163qylmzrwh.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.xuanzx.com/163cetfxskn.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.xuanzx.com/163xgnvkdfh.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.sxryk.cn/163kvqznljh.html

[J10] 取今天 / 本月第一天
来源：http://www.sxryk.cn/163sbbhdbqi.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.sxryk.cn/163bahheual.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.aibaodan.cn/163svnidhbf.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.sxryk.cn/163raqfnlhm.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.xuanzx.com/163eblukhxs.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.aibaodan.cn/163fahxtknr.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.sxryk.cn/163sdiqsrdm.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.sxryk.cn/163rfsdiogu.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.aibaodan.cn/163zptossci.html

================================================================================
来源：http://www.xuanzx.com/163emfeuuzm.html

K. JSON 与序列化
来源：http://www.xuanzx.com/163keebedbx.html

================================================================================
来源：http://www.sxryk.cn/163pisejnxj.html

[K01] 对象转 JSON 字符串
来源：http://www.aibaodan.cn/163ouijvcfi.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.xuanzx.com/163ngnmsumr.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163twxlwvoy.html

JS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163zbzzzlch.html

TS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163bftfhrdg.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.xuanzx.com/163quzmzttf.html

Go:   json.Marshal(obj)
来源：http://www.aibaodan.cn/163ehyrbbtc.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.aibaodan.cn/163koolkret.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.xuanzx.com/163lvmkeyqx.html

[K02] JSON 字符串转对象
来源：http://www.aibaodan.cn/163oqtdregd.html

Py:   json.loads(s)
来源：http://www.sxryk.cn/163invnnsbk.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.aibaodan.cn/163ngegknjh.html

JS:   JSON.parse(s)
来源：http://www.sxryk.cn/163qlgeanml.html

TS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163vflchhft.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.aibaodan.cn/163kyupriab.html

Go:   json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163mbfrqvmv.html

Ruby: JSON.parse(s)
来源：http://www.xuanzx.com/163fnwlhrbg.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.sxryk.cn/163uhnskhpz.html

[K03] JSON 美化输出（带缩进）
来源：http://www.xuanzx.com/163jizxgknq.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.sxryk.cn/163szezjcby.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163erahcdhb.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163lmwdnult.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163tsdawlbl.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.xuanzx.com/163fsbyzemq.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.xuanzx.com/163kvnacdhg.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.xuanzx.com/163ijtumqdi.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.aibaodan.cn/163qgfxpwty.html

[K04] 读取 JSON 文件
来源：http://www.aibaodan.cn/163giepqnkr.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.xuanzx.com/163elqzaqxt.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.sxryk.cn/163ychouygz.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163byeqqfsv.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163tgtwagxo.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.xuanzx.com/163wbgvfsmi.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163yehaltfj.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.xuanzx.com/163ryxhwdrq.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.sxryk.cn/163vbfhslfo.html

[K05] 深拷贝对象
来源：http://www.xuanzx.com/163knkneddn.html

Py:   copy.deepcopy(obj)
来源：http://www.xuanzx.com/163yfanmckd.html

PHP:  unserialize(serialize($obj));
来源：http://www.aibaodan.cn/163hcdieijx.html

JS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163cawhuijp.html

TS:   structuredClone(obj)
来源：http://www.sxryk.cn/163mxvdjooy.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.xuanzx.com/163hqsdlupt.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.sxryk.cn/163sydztpbr.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.xuanzx.com/163bkmurtcb.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.aibaodan.cn/163qyuqwust.html

[K06] 解析 URL 查询串
来源：http://www.aibaodan.cn/163nemrqsxj.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.xuanzx.com/163appnupiv.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.xuanzx.com/163biqadjyn.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163mlsxkfby.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163bjvbjrff.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.aibaodan.cn/163aiavuqkx.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.aibaodan.cn/163oqxwpwxr.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.aibaodan.cn/163xhdthbcm.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.aibaodan.cn/163jhmumtce.html

[K07] 进制转换
来源：http://www.aibaodan.cn/163wppbkjfc.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.sxryk.cn/163vwxnclea.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.aibaodan.cn/163xdwtljzw.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163azyrinyq.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163thenhkdr.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.xuanzx.com/163szdbbonj.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.sxryk.cn/163stagamur.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.xuanzx.com/163kqcwxkjz.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.xuanzx.com/163jcrfixon.html

[K08] 二进制序列化（非 JSON）
来源：http://www.sxryk.cn/163wcnfqelz.html

Py:   pickle.dumps(obj)
来源：http://www.xuanzx.com/163djlgwfew.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.sxryk.cn/163czgculux.html

JS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163sombwquq.html

TS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163fpijmxdb.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.xuanzx.com/163qcjslret.html

Go:   encoding/gob
来源：http://www.xuanzx.com/163viymixfd.html

Ruby: Marshal.dump(obj)
来源：http://www.xuanzx.com/163ctrtlvqg.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.xuanzx.com/163pqiawjsm.html

================================================================================
来源：http://www.aibaodan.cn/163gneebibm.html

L. 网络请求
来源：http://www.xuanzx.com/163ncqwdlhf.html

================================================================================
来源：http://www.aibaodan.cn/163cqmsfrnp.html

[L01] 发送 GET 请求
来源：http://www.aibaodan.cn/163ynbxioyv.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.sxryk.cn/163chjjxpna.html


<!-- 参考信息 -->