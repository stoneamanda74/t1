外链999!wailian999！

TS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163iuklyezr.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.aibaodan.cn/163vyxftffa.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.sxryk.cn/163fcrokahw.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.xuanzx.com/163utxcmvqv.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.xuanzx.com/163rwyarwup.html

[H04] 自定义异常类型
来源：http://www.sxryk.cn/163szcdhigv.html

Py:   class MyError(Exception): pass
来源：http://www.xuanzx.com/163uyshoezc.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.sxryk.cn/163jisbmjiv.html

JS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163giirxzuz.html

TS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163pwroqmww.html

Java: class MyException extends RuntimeException {}
来源：http://www.xuanzx.com/163gzfbtmlc.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.sxryk.cn/163trepsrbh.html

Ruby: class MyError < StandardError; end
来源：http://www.sxryk.cn/163ntlpjfyk.html

C#:   class MyException : Exception {}
来源：http://www.xuanzx.com/163niksassk.html

[H05] 捕获特定类型
来源：http://www.aibaodan.cn/163gkigbbrd.html

Py:   except ValueError as e:
来源：http://www.xuanzx.com/163mcdsiipq.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.sxryk.cn/163qpfgvete.html

JS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163rooyugmx.html

TS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163lcishzjv.html

Java: catch (IOException | SQLException e) {}
来源：http://www.xuanzx.com/163zanyvkim.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.xuanzx.com/163xgwzbwdn.html

Ruby: rescue ArgumentError => e
来源：http://www.sxryk.cn/163rwukaxsy.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.xuanzx.com/163arbhrjsy.html

[H06] 可选值 / 空值安全访问
来源：http://www.sxryk.cn/163qyhkqbcq.html

Py:   value = d.get("k") or default
来源：http://www.aibaodan.cn/163unfpergv.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.sxryk.cn/163exgkdlxr.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163hjtxkjit.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163sarjphca.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.sxryk.cn/163eokdfjmi.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.xuanzx.com/163qmjfcnkb.html

Ruby: d&.dig(:a, :b)
来源：http://www.aibaodan.cn/163flyutzpi.html

C#:   obj?.A?.B ?? default
来源：http://www.sxryk.cn/163xwjwhmfe.html

[H07] 断言
来源：http://www.xuanzx.com/163ivfmabbz.html

Py:   assert x > 0, "必须为正"
来源：http://www.aibaodan.cn/163iojlarqq.html

PHP:  assert($x > 0);
来源：http://www.aibaodan.cn/163beajszff.html

JS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163eijmzyzq.html

TS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163fqwgxove.html

Java: assert x > 0 : "必须为正";
来源：http://www.xuanzx.com/163qbxvuciy.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.aibaodan.cn/163kjjvndze.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.xuanzx.com/163dmljymtn.html

C#:   Debug.Assert(x > 0);
来源：http://www.sxryk.cn/163ryopsqce.html

[H08] 获取错误信息与堆栈
来源：http://www.xuanzx.com/163qbnbsune.html

Py:   str(e);  traceback.format_exc()
来源：http://www.aibaodan.cn/163hbnwnesz.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.aibaodan.cn/163tswupwly.html

JS:   e.message;  e.stack
来源：http://www.xuanzx.com/163svqdoyta.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.sxryk.cn/163iwjbaqds.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.xuanzx.com/163kwpkhvpp.html

Go:   err.Error()
来源：http://www.aibaodan.cn/163feywgypd.html

Ruby: e.message;  e.backtrace
来源：http://www.sxryk.cn/163qczijtzv.html

C#:   e.Message;  e.StackTrace
来源：http://www.xuanzx.com/163isckxgkn.html

[H09] 带错误码的异常
来源：http://www.aibaodan.cn/163hviknjqe.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.xuanzx.com/163pjoghaab.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.aibaodan.cn/163hrhfhotn.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.xuanzx.com/163vqffmobx.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.aibaodan.cn/163advtprlo.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.xuanzx.com/163hhmjhmqg.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.aibaodan.cn/163profkvkt.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.aibaodan.cn/163azyvfmjd.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.aibaodan.cn/163viyemrpy.html

[H10] 资源自动释放
来源：http://www.aibaodan.cn/163yzrtxsgv.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.xuanzx.com/163xuwnvser.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.xuanzx.com/163wrmtgstn.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163zaijrguk.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163xsmuznjb.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.aibaodan.cn/163bvjditie.html

Go:   defer f.Close()
来源：http://www.sxryk.cn/163elwhoodj.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.sxryk.cn/163ummqlbnh.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.aibaodan.cn/163ondmmfhu.html

================================================================================
来源：http://www.aibaodan.cn/163unuyzegb.html

I. 正则表达式
来源：http://www.sxryk.cn/163isfjwwso.html

================================================================================
来源：http://www.xuanzx.com/163wdaxbjyz.html

[I01] 判断是否匹配
来源：http://www.sxryk.cn/163urnsfnvf.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.sxryk.cn/163bcpbyrjo.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.aibaodan.cn/163ppxpwnmj.html

JS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163akojoaay.html

TS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163zuydqskk.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.xuanzx.com/163mrohxqdx.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.sxryk.cn/163ejvewdfl.html

Ruby: s.match?(/\d+/)
来源：http://www.aibaodan.cn/163oopmhrrg.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.aibaodan.cn/163yzjcqjjj.html

[I02] 提取所有匹配
来源：http://www.aibaodan.cn/163plngijue.html

Py:   re.findall(r"\d+", s)
来源：http://www.aibaodan.cn/163hvvkuidh.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.aibaodan.cn/163qqytbpkh.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.xuanzx.com/163doieqfin.html

TS:   s.match(/\d+/g)
来源：http://www.xuanzx.com/163toxqrjjw.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.aibaodan.cn/163vihtoyey.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.sxryk.cn/163mediixjs.html

Ruby: s.scan(/\d+/)
来源：http://www.xuanzx.com/163zfmwfeoj.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.xuanzx.com/163extrhzdi.html

[I03] 提取捕获分组
来源：http://www.sxryk.cn/163jgwtdqyy.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.sxryk.cn/163hitkpwnx.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.aibaodan.cn/163qkzkemgu.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.aibaodan.cn/163dkhxizld.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.xuanzx.com/163imnzwomi.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.aibaodan.cn/163jwnqzxgk.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.sxryk.cn/163zenhyhll.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.aibaodan.cn/163nmiagarb.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.aibaodan.cn/163qdbihkpa.html

[I04] 正则替换
来源：http://www.xuanzx.com/163tjzsyihr.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.sxryk.cn/163oustqxhc.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163swxcwkms.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163txntoizf.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163eqiphcsb.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.xuanzx.com/163htzvnhvo.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.xuanzx.com/163tbwlygfn.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.xuanzx.com/163kltiwwui.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.aibaodan.cn/163qybtjmui.html

[I05] 按正则拆分
来源：http://www.sxryk.cn/163ctgzobry.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.aibaodan.cn/163lfgnjnww.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.sxryk.cn/163opbiyhho.html

JS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163jqtdbtkx.html

TS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163dtohtryv.html

Java: s.split("\\s*,\\s*")
来源：http://www.aibaodan.cn/163ypjqeezk.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.xuanzx.com/163vkpuwixp.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163tetugixi.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.sxryk.cn/163edaxnbed.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.aibaodan.cn/163ipeecvii.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163ulgrlddd.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.sxryk.cn/163rhbabvpa.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163dbqerchp.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163aokooilw.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.xuanzx.com/163wtivfjfa.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.xuanzx.com/163vabbmgrb.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.xuanzx.com/163kcdjbcwp.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163wyigvwgm.html

[I07] 忽略大小写与多行模式
来源：http://www.xuanzx.com/163ayctmcvg.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.xuanzx.com/163vwriedtk.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.sxryk.cn/163jlahynen.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.xuanzx.com/163kqzsvjpj.html

TS:   /error/gim
来源：http://www.aibaodan.cn/163pvujfvaa.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.xuanzx.com/163fyutsorn.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.aibaodan.cn/163dvzdfgrb.html

Ruby: s.scan(/error/i)
来源：http://www.xuanzx.com/163pvmnutax.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.xuanzx.com/163krbwpvpq.html

[I08] 贪婪与非贪婪匹配
来源：http://www.xuanzx.com/163cqteowil.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.sxryk.cn/163qlbzkjey.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.xuanzx.com/163kxxkgfte.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163jbcgidym.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163vwalbjcw.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.aibaodan.cn/163zwgblsoh.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.xuanzx.com/163zronacmp.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.sxryk.cn/163lvppkkxn.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.xuanzx.com/163nzdrbhfb.html

================================================================================
来源：http://www.sxryk.cn/163frygkupe.html

J. 日期与时间
来源：http://www.sxryk.cn/163zupnbgfu.html

================================================================================
来源：http://www.aibaodan.cn/163mjwgkpqx.html

[J01] 获取当前时间
来源：http://www.xuanzx.com/163allbxesy.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.aibaodan.cn/163ruxcrxnl.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163bgikziid.html

JS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163igyrbpgq.html

TS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163mbexzgly.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.aibaodan.cn/163amrkjujl.html

Go:   time.Now()
来源：http://www.xuanzx.com/163feynjfnl.html

Ruby: Time.now
来源：http://www.xuanzx.com/163utpxzmxk.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.aibaodan.cn/163rpxgsvyb.html

[J02] 格式化输出
来源：http://www.aibaodan.cn/163ghlwrsxb.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163jgybwkld.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163jcdgnqof.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.aibaodan.cn/163fhztxxou.html

TS:   d.toISOString()
来源：http://www.sxryk.cn/163rqcdskgw.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.sxryk.cn/163zakwyfny.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.xuanzx.com/163ybhgfvky.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163heahsdbj.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.aibaodan.cn/163samwvtug.html

[J03] 字符串解析为日期
来源：http://www.aibaodan.cn/163tyflnhjf.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.sxryk.cn/163irzoveat.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.xuanzx.com/163expinpqq.html

JS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163crjgddgu.html

TS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163zmgoqsus.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.xuanzx.com/163vtxsccbk.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.aibaodan.cn/163zfthynrm.html

Ruby: Date.parse("2024-01-02")
来源：http://www.aibaodan.cn/163nmlmwgks.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.aibaodan.cn/163dkzxrksc.html

[J04] 时间戳与日期互转
来源：http://www.xuanzx.com/163hbpnrylg.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.xuanzx.com/163opwffkxi.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.xuanzx.com/163iiszbrnd.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.sxryk.cn/163kffjqxom.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.aibaodan.cn/163sufyjmbq.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.xuanzx.com/163aaxdvsdb.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.aibaodan.cn/163vieqlgvm.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.aibaodan.cn/163pvxlzygf.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.sxryk.cn/163dlbjpetn.html

[J05] 时间加减（加 7 天）
来源：http://www.aibaodan.cn/163jgsjsycy.html

Py:   now + timedelta(days=7)
来源：http://www.xuanzx.com/163ydxitnns.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.sxryk.cn/163vkrabczb.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163nmkxnvjk.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163kvflsrwl.html

Java: LocalDate.now().plusDays(7)
来源：http://www.sxryk.cn/163qkjciyyy.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.sxryk.cn/163beucriea.html

Ruby: Time.now + 7 * 86400
来源：http://www.sxryk.cn/163wcqiukfr.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.sxryk.cn/163avqixisu.html

[J06] 计算两时间之差
来源：http://www.aibaodan.cn/163tsaipudj.html

Py:   (end - start).total_seconds()
来源：http://www.sxryk.cn/163lzjkuhzo.html

PHP:  $end->diff($start)->days;
来源：http://www.xuanzx.com/163eyffbnyy.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.xuanzx.com/163gxdwzkeo.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.sxryk.cn/163qfbbpslg.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.xuanzx.com/163vfwkwyoa.html

Go:   end.Sub(start).Hours()
来源：http://www.xuanzx.com/163cnfnhpjr.html

Ruby: end - start                 # 返回秒数
来源：http://www.aibaodan.cn/163ogmwsoba.html

C#:   (end - start).TotalSeconds
来源：http://www.xuanzx.com/163ftxhpasz.html

[J07] 比较两个日期
来源：http://www.aibaodan.cn/163qilxhldo.html

Py:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163asbtgdle.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.sxryk.cn/163gginbhdf.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163laetuzms.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163zynmzewf.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.xuanzx.com/163nmvfmsgq.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.aibaodan.cn/163dywycspv.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163ksgukepy.html

C#:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163gmzoqwbm.html

[J08] 提取年月日与星期
来源：http://www.sxryk.cn/163yczsjngl.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.aibaodan.cn/163mbtijmhl.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.aibaodan.cn/163hrxlswff.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.aibaodan.cn/163nakwpxzz.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.xuanzx.com/163yqruffmb.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.xuanzx.com/163hbzwevbt.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.aibaodan.cn/163dpwlceoj.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.xuanzx.com/163jnwferzn.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.xuanzx.com/163ywcfnnoq.html

[J09] 时区处理
来源：http://www.aibaodan.cn/163rnpkjvwq.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.aibaodan.cn/163rdisrwga.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.aibaodan.cn/163lvihlilm.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163zjmwgxds.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163zhsjtaft.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.xuanzx.com/163rkquhihz.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.sxryk.cn/163ncfnffxx.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.aibaodan.cn/163hzjmfrpw.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.sxryk.cn/163ucwjamlt.html

[J10] 取今天 / 本月第一天
来源：http://www.aibaodan.cn/163munyngrk.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.aibaodan.cn/163ddeykkyn.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.sxryk.cn/163dkgdgzpx.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.xuanzx.com/163okgyahhv.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.sxryk.cn/163xxljndzs.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.xuanzx.com/163kglhogjr.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.sxryk.cn/163oabhuhdx.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.aibaodan.cn/163chrbtppc.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.xuanzx.com/163kuehlfue.html

================================================================================
来源：http://www.xuanzx.com/163tqduxjrj.html

K. JSON 与序列化
来源：http://www.sxryk.cn/163phgfydjr.html

================================================================================
来源：http://www.aibaodan.cn/163qgrxldql.html

[K01] 对象转 JSON 字符串
来源：http://www.aibaodan.cn/163rsoiposm.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.aibaodan.cn/163jilehsxk.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163fvkhszob.html

JS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163xbtyyowm.html

TS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163aikifica.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.aibaodan.cn/163exreqoyl.html

Go:   json.Marshal(obj)
来源：http://www.aibaodan.cn/163yelmmwid.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.aibaodan.cn/163qxzvhvex.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.aibaodan.cn/163rcbjipbq.html

[K02] JSON 字符串转对象
来源：http://www.xuanzx.com/163nqqojvyf.html

Py:   json.loads(s)
来源：http://www.xuanzx.com/163qcovvxqj.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.aibaodan.cn/163wwuvjtss.html

JS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163huxxcekv.html

TS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163lfydkqkv.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.sxryk.cn/163yamltwxk.html

Go:   json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163cldkxvaw.html

Ruby: JSON.parse(s)
来源：http://www.sxryk.cn/163geqwmczp.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.sxryk.cn/163mhxbkmgn.html

[K03] JSON 美化输出（带缩进）
来源：http://www.sxryk.cn/163shujneaa.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.xuanzx.com/163gqanyuwm.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163uzgydypg.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163rhhjwofp.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163ifzabctd.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.xuanzx.com/163wprmytvn.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.aibaodan.cn/163mlsxconz.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.xuanzx.com/163clkuoxms.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.xuanzx.com/163yusvtlew.html

[K04] 读取 JSON 文件
来源：http://www.sxryk.cn/163omsynbaj.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.aibaodan.cn/163swlnrizp.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.xuanzx.com/163lxajmyem.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163auquauly.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163zbtieyxp.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.sxryk.cn/163lrawaqwq.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163dnjcetjz.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.xuanzx.com/163hoymtccs.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.sxryk.cn/163vsfcgsiv.html

[K05] 深拷贝对象
来源：http://www.sxryk.cn/163xxazkkzt.html

Py:   copy.deepcopy(obj)
来源：http://www.aibaodan.cn/163qxbrgpqy.html

PHP:  unserialize(serialize($obj));
来源：http://www.sxryk.cn/163igfptjtd.html

JS:   structuredClone(obj)
来源：http://www.sxryk.cn/163asewtfvu.html

TS:   structuredClone(obj)
来源：http://www.xuanzx.com/163uezshcle.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.aibaodan.cn/163vstthzjd.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.aibaodan.cn/163xhlyzddn.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.xuanzx.com/163lxnxrnid.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.xuanzx.com/163gtakpqpd.html

[K06] 解析 URL 查询串
来源：http://www.aibaodan.cn/163ebnhygmz.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.sxryk.cn/163qecuxmmp.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.xuanzx.com/163mpmeyzua.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163pspskgft.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163kivftshu.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.aibaodan.cn/163kfjevefe.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.xuanzx.com/163kzvdtaam.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.xuanzx.com/163kgxsvnqf.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.xuanzx.com/163nrcgawgt.html

[K07] 进制转换
来源：http://www.sxryk.cn/163brdcabtk.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.sxryk.cn/163mesofasa.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.xuanzx.com/163azvqogem.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163rfoapcrq.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163pjsyhhsf.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.xuanzx.com/163basjitqc.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.sxryk.cn/163gvrajmgn.html


<!-- 参考信息 -->