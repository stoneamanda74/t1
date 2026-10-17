外链999!wailian999！

C#:   throw new ArgumentException("错误信息");
来源：http://www.aibaodan.cn/163bihimeyf.html

[H04] 自定义异常类型
来源：http://www.aibaodan.cn/163nhjrvlni.html

Py:   class MyError(Exception): pass
来源：http://www.sxryk.cn/163ewzdnicf.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.aibaodan.cn/163llbembfn.html

JS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163ztcxpini.html

TS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163lmimtmep.html

Java: class MyException extends RuntimeException {}
来源：http://www.sxryk.cn/163yffzdepy.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.aibaodan.cn/163qjrbtllp.html

Ruby: class MyError < StandardError; end
来源：http://www.xuanzx.com/163irlcfsmh.html

C#:   class MyException : Exception {}
来源：http://www.aibaodan.cn/163byvqsmgr.html

[H05] 捕获特定类型
来源：http://www.xuanzx.com/163yizkspkm.html

Py:   except ValueError as e:
来源：http://www.xuanzx.com/163ikvkfbvz.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.sxryk.cn/163cnncurnv.html

JS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163bxckhmby.html

TS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163hxuzahlc.html

Java: catch (IOException | SQLException e) {}
来源：http://www.xuanzx.com/163cghmoodl.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.xuanzx.com/163hhgevjev.html

Ruby: rescue ArgumentError => e
来源：http://www.xuanzx.com/163drvsqmet.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.sxryk.cn/163afrqxqzo.html

[H06] 可选值 / 空值安全访问
来源：http://www.xuanzx.com/163pvwaling.html

Py:   value = d.get("k") or default
来源：http://www.xuanzx.com/163lxjyhuvg.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.sxryk.cn/163lduhupvy.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163nwjecfgk.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163nybzaaia.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.xuanzx.com/163cydznbrd.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.sxryk.cn/163tdulykgh.html

Ruby: d&.dig(:a, :b)
来源：http://www.xuanzx.com/163nceipnyv.html

C#:   obj?.A?.B ?? default
来源：http://www.xuanzx.com/163bprcahuo.html

[H07] 断言
来源：http://www.xuanzx.com/163ohdziyes.html

Py:   assert x > 0, "必须为正"
来源：http://www.sxryk.cn/163ybrctkrl.html

PHP:  assert($x > 0);
来源：http://www.aibaodan.cn/163xijpwkmx.html

JS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163ewfhamcg.html

TS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163dtxougef.html

Java: assert x > 0 : "必须为正";
来源：http://www.aibaodan.cn/163lcfcxnci.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.sxryk.cn/163cgzsxnst.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.aibaodan.cn/163gmokbixl.html

C#:   Debug.Assert(x > 0);
来源：http://www.sxryk.cn/163puatrqsu.html

[H08] 获取错误信息与堆栈
来源：http://www.sxryk.cn/163isksuhxw.html

Py:   str(e);  traceback.format_exc()
来源：http://www.aibaodan.cn/163sfnsuecf.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.aibaodan.cn/163lmfyjvqp.html

JS:   e.message;  e.stack
来源：http://www.sxryk.cn/163qxtuzpdz.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.sxryk.cn/163eyuiojvp.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.xuanzx.com/163wvppfqoc.html

Go:   err.Error()
来源：http://www.aibaodan.cn/163issxpvij.html

Ruby: e.message;  e.backtrace
来源：http://www.aibaodan.cn/163fjzvznwz.html

C#:   e.Message;  e.StackTrace
来源：http://www.aibaodan.cn/163aujxaexx.html

[H09] 带错误码的异常
来源：http://www.sxryk.cn/163ynuvcfmu.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.aibaodan.cn/163pfbranwj.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.xuanzx.com/163ekhxivdq.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.sxryk.cn/163ppxwsnda.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.sxryk.cn/163nmqujhtj.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.sxryk.cn/163kbtqgfvw.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.aibaodan.cn/163qrfycyly.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.xuanzx.com/163dgnsyzaq.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.aibaodan.cn/163ecvaqboq.html

[H10] 资源自动释放
来源：http://www.sxryk.cn/163eyxbkrev.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.aibaodan.cn/163rottszkf.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.sxryk.cn/163objdfvkj.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163rpqzamcy.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163boxytqwr.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.xuanzx.com/163znmelsuu.html

Go:   defer f.Close()
来源：http://www.aibaodan.cn/163byvlhasl.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.sxryk.cn/163wwexbdhh.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.aibaodan.cn/163rtxscvcy.html

================================================================================
来源：http://www.sxryk.cn/163lklshili.html

I. 正则表达式
来源：http://www.xuanzx.com/163jdomoetx.html

================================================================================
来源：http://www.aibaodan.cn/163hnktyzpf.html

[I01] 判断是否匹配
来源：http://www.aibaodan.cn/163xjqystpr.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.aibaodan.cn/163redewoaf.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.xuanzx.com/163qzwjknwv.html

JS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163yvsipvme.html

TS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163dfsgpkpu.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.sxryk.cn/163bwcolxqh.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.sxryk.cn/163idkdtcoc.html

Ruby: s.match?(/\d+/)
来源：http://www.aibaodan.cn/163qdpljagf.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.aibaodan.cn/163kycvaunu.html

[I02] 提取所有匹配
来源：http://www.sxryk.cn/163xmtwjgjb.html

Py:   re.findall(r"\d+", s)
来源：http://www.sxryk.cn/163bltrghcl.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.xuanzx.com/163xnsbgacr.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.aibaodan.cn/163dfcjxnjm.html

TS:   s.match(/\d+/g)
来源：http://www.xuanzx.com/163xftrzuqa.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.aibaodan.cn/163zancumpx.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.xuanzx.com/163epjkgwvv.html

Ruby: s.scan(/\d+/)
来源：http://www.xuanzx.com/163wqyxnwaw.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.aibaodan.cn/163npoabuvb.html

[I03] 提取捕获分组
来源：http://www.xuanzx.com/163gchnbark.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.aibaodan.cn/163iglbktbs.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.xuanzx.com/163shgsdvdo.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.sxryk.cn/163ncodihku.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.xuanzx.com/163rjxtnqbs.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.xuanzx.com/163haknevyb.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.aibaodan.cn/163khoclaca.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.xuanzx.com/163dpwzxelo.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.xuanzx.com/163hjdtfwsa.html

[I04] 正则替换
来源：http://www.aibaodan.cn/163pgkrttzb.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.xuanzx.com/163assnyfwf.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163bqizgwhl.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163lnjdkecl.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163xlgymmop.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.aibaodan.cn/163ghzonlia.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.aibaodan.cn/163qobzescy.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.sxryk.cn/163ocamrgzl.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.xuanzx.com/163hxjubpgd.html

[I05] 按正则拆分
来源：http://www.sxryk.cn/163qdpjvkpe.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.aibaodan.cn/163xwervogy.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.xuanzx.com/163njqphihu.html

JS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163izqowzpr.html

TS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163yrivzjmz.html

Java: s.split("\\s*,\\s*")
来源：http://www.aibaodan.cn/163ikwarjvm.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.aibaodan.cn/163xerqfdzp.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163gnftpzvr.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.xuanzx.com/163zxgginkj.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.aibaodan.cn/163zfvuvchl.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163anshywyj.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.xuanzx.com/163hicrtxqz.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163ddimcpei.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163orjmkyhe.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.xuanzx.com/163vqgqimdg.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.aibaodan.cn/163sorcjtca.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.aibaodan.cn/163wuyjtsvc.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163txcimzjm.html

[I07] 忽略大小写与多行模式
来源：http://www.xuanzx.com/163bobsapgx.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.xuanzx.com/163unhoggkl.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.aibaodan.cn/163xvvplyqx.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.xuanzx.com/163hhxxitdi.html

TS:   /error/gim
来源：http://www.xuanzx.com/163gzqypbcv.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.aibaodan.cn/163ialwhgrv.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.aibaodan.cn/163iiewxnhq.html

Ruby: s.scan(/error/i)
来源：http://www.xuanzx.com/163ovacunpc.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.xuanzx.com/163edonvoso.html

[I08] 贪婪与非贪婪匹配
来源：http://www.aibaodan.cn/163dmcxsorf.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.sxryk.cn/163alzcsxom.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.xuanzx.com/163licqqwyy.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163wshhbtxm.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163oyhhrvzg.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.aibaodan.cn/163iedhzbiq.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.aibaodan.cn/163dcywdznp.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.aibaodan.cn/163cagbrmrn.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.sxryk.cn/163jbsnefev.html

================================================================================
来源：http://www.sxryk.cn/163agltmmbm.html

J. 日期与时间
来源：http://www.sxryk.cn/163uhdogpel.html

================================================================================
来源：http://www.xuanzx.com/163tuyhqhqd.html

[J01] 获取当前时间
来源：http://www.aibaodan.cn/163ihfvzjmq.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.xuanzx.com/163injuyqxp.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163edvyobsk.html

JS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163zptplnem.html

TS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163bdypegcz.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.sxryk.cn/163wwtlzebt.html

Go:   time.Now()
来源：http://www.sxryk.cn/163sbluyupm.html

Ruby: Time.now
来源：http://www.sxryk.cn/163wvdhndgq.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.aibaodan.cn/163nescdrtv.html

[J02] 格式化输出
来源：http://www.aibaodan.cn/163uykymjeg.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163cbcbwytl.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163phnlisew.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.xuanzx.com/163uophhosl.html

TS:   d.toISOString()
来源：http://www.sxryk.cn/163vuzbljdw.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.sxryk.cn/163ivjboqtr.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.sxryk.cn/163hvnvbxbl.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163egtrfbsv.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.sxryk.cn/163sakjljws.html

[J03] 字符串解析为日期
来源：http://www.xuanzx.com/163ivasrenj.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.xuanzx.com/163rraaimrc.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.aibaodan.cn/163cllkdzcr.html

JS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163nbycbprn.html

TS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163tuktiuia.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.sxryk.cn/163ynobzvsw.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.aibaodan.cn/163plzracxj.html

Ruby: Date.parse("2024-01-02")
来源：http://www.sxryk.cn/163qfxqipob.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.xuanzx.com/163acpsvmbd.html

[J04] 时间戳与日期互转
来源：http://www.aibaodan.cn/163hadwlvrd.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.sxryk.cn/163vuwuhrcj.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.sxryk.cn/163hxwjpekk.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.aibaodan.cn/163gqynacqc.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.aibaodan.cn/163cujoyywy.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.sxryk.cn/163fussxfwc.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.xuanzx.com/163oqllnvis.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.aibaodan.cn/163eynkqshp.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.sxryk.cn/163yhlecgyx.html

[J05] 时间加减（加 7 天）
来源：http://www.aibaodan.cn/163iwkxhaar.html

Py:   now + timedelta(days=7)
来源：http://www.sxryk.cn/163afzlhxzt.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.aibaodan.cn/163gpnzthec.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163vmfnffin.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163bzyayvim.html

Java: LocalDate.now().plusDays(7)
来源：http://www.sxryk.cn/163xwhprjsj.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.sxryk.cn/163lxdmtqkw.html

Ruby: Time.now + 7 * 86400
来源：http://www.sxryk.cn/163msuywurq.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.sxryk.cn/163bhokwynd.html

[J06] 计算两时间之差
来源：http://www.sxryk.cn/163loanmepm.html

Py:   (end - start).total_seconds()
来源：http://www.sxryk.cn/163gutdyrun.html

PHP:  $end->diff($start)->days;
来源：http://www.xuanzx.com/163crrrvjma.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.aibaodan.cn/163vrepwfjp.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.sxryk.cn/163tqrlqyxm.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.sxryk.cn/163ztiilclj.html

Go:   end.Sub(start).Hours()
来源：http://www.xuanzx.com/163vrivcwty.html

Ruby: end - start                 # 返回秒数
来源：http://www.aibaodan.cn/163xdjqpznf.html

C#:   (end - start).TotalSeconds
来源：http://www.sxryk.cn/163soswwtii.html

[J07] 比较两个日期
来源：http://www.xuanzx.com/163lmbqzkqz.html

Py:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163eatvefkb.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.xuanzx.com/163afxwssjz.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163zyfaqyjx.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163lbuqhyrc.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.aibaodan.cn/163yqbbuscw.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.sxryk.cn/163tryzvxhb.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163xysqsccb.html

C#:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163egkbpxao.html

[J08] 提取年月日与星期
来源：http://www.sxryk.cn/163pxebcfcy.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.sxryk.cn/163jsttcdfr.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.sxryk.cn/163fdpcjzds.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.sxryk.cn/163kfbeqsuc.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.aibaodan.cn/163fmtjmyoq.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.sxryk.cn/163aswhaneg.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.sxryk.cn/163oorcnled.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.aibaodan.cn/163nnipvodj.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.aibaodan.cn/163lvybqxna.html

[J09] 时区处理
来源：http://www.aibaodan.cn/163twlyubvu.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.xuanzx.com/163lmexqsaz.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.aibaodan.cn/163fasfqjja.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163dtgeouor.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163mkdijsdk.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.sxryk.cn/163smdnkjez.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.xuanzx.com/163xfdgvmtt.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.xuanzx.com/163avcncwlm.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.sxryk.cn/163soiobuwm.html

[J10] 取今天 / 本月第一天
来源：http://www.aibaodan.cn/163hyfngqwa.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.xuanzx.com/163uctexcvu.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.aibaodan.cn/163edbhhxdu.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.sxryk.cn/163kydkihbg.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.xuanzx.com/163ajnqihzc.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.sxryk.cn/163bpccybxm.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.sxryk.cn/163zqjrbdsh.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.aibaodan.cn/163rkrbpwpz.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.aibaodan.cn/163xtcwdtpj.html

================================================================================
来源：http://www.xuanzx.com/163xeysvxiu.html

K. JSON 与序列化
来源：http://www.aibaodan.cn/163svmihzvt.html

================================================================================
来源：http://www.xuanzx.com/163tywfmmzi.html

[K01] 对象转 JSON 字符串
来源：http://www.aibaodan.cn/163adbaigjs.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.xuanzx.com/163rdtmsjrp.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163repwzmyq.html

JS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163eflyvgnv.html

TS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163xpsufklg.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.sxryk.cn/163bshdxwhq.html

Go:   json.Marshal(obj)
来源：http://www.sxryk.cn/163vvelvoju.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.sxryk.cn/163mhimvsqt.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.sxryk.cn/163nrrbzqlt.html

[K02] JSON 字符串转对象
来源：http://www.xuanzx.com/163heiimipl.html

Py:   json.loads(s)
来源：http://www.xuanzx.com/163dduwomqf.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.sxryk.cn/163tdclqpwm.html

JS:   JSON.parse(s)
来源：http://www.sxryk.cn/163druccvwb.html

TS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163adhudlbt.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.xuanzx.com/163ptwqznoa.html

Go:   json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163cnbstxgh.html

Ruby: JSON.parse(s)
来源：http://www.sxryk.cn/163yyrvhejk.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.aibaodan.cn/163cpskjgcg.html

[K03] JSON 美化输出（带缩进）
来源：http://www.xuanzx.com/163teruxbyu.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.sxryk.cn/163uafkliic.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163svutlysk.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163zavzdtkp.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163xoijqogp.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.aibaodan.cn/163swjpxgpl.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.aibaodan.cn/163weovbfsd.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.aibaodan.cn/163bxpoojbf.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.sxryk.cn/163jztiqzvg.html

[K04] 读取 JSON 文件
来源：http://www.xuanzx.com/163vspkajor.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.sxryk.cn/163xoxujqaw.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.aibaodan.cn/163vaknkfgv.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163gqyeyzim.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163vjbqypls.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.xuanzx.com/163vidqnkyx.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163glvluyki.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.xuanzx.com/163mkljlbyb.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.aibaodan.cn/163ueopfqal.html

[K05] 深拷贝对象
来源：http://www.sxryk.cn/163vpmlnzbo.html

Py:   copy.deepcopy(obj)
来源：http://www.sxryk.cn/163zpysrqiw.html

PHP:  unserialize(serialize($obj));
来源：http://www.aibaodan.cn/163xvcomtfi.html

JS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163ywjgsjso.html

TS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163mzjsexui.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.xuanzx.com/163xginmerl.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.sxryk.cn/163pupconsh.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.sxryk.cn/163snugspye.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.xuanzx.com/163uqcrtzdi.html

[K06] 解析 URL 查询串
来源：http://www.sxryk.cn/163fcncssmg.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.xuanzx.com/163egluicsf.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.sxryk.cn/163imtqalra.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163ewcixetr.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163xhjrptph.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.sxryk.cn/163wmcqgvxv.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.aibaodan.cn/163ywernvft.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.aibaodan.cn/163xgzjhkkb.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.sxryk.cn/163msxagzoi.html

[K07] 进制转换
来源：http://www.xuanzx.com/163flaetazf.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.sxryk.cn/163mkhgsert.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.xuanzx.com/163tdrqisyx.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163fjoxtawa.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163xkpbvsji.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.aibaodan.cn/163quqqoyko.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.aibaodan.cn/163tksuhjcl.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.aibaodan.cn/163mdomgvpl.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.sxryk.cn/163hwhwazje.html

[K08] 二进制序列化（非 JSON）
来源：http://www.sxryk.cn/163frpifjmd.html

Py:   pickle.dumps(obj)
来源：http://www.aibaodan.cn/163cptjotom.html


<!-- 参考信息 -->