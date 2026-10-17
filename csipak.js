外链999!wailian999！

C#:   throw new ArgumentException("错误信息");
来源：http://www.aibaodan.cn/163comsaxpi.html

[H04] 自定义异常类型
来源：http://www.aibaodan.cn/163xanybyqk.html

Py:   class MyError(Exception): pass
来源：http://www.aibaodan.cn/163lzgkoixy.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.aibaodan.cn/163icpcvmyw.html

JS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163cgrverim.html

TS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163zvydftcs.html

Java: class MyException extends RuntimeException {}
来源：http://www.xuanzx.com/163fuehplqv.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.xuanzx.com/163bqpzpdms.html

Ruby: class MyError < StandardError; end
来源：http://www.sxryk.cn/163jiysbtgo.html

C#:   class MyException : Exception {}
来源：http://www.xuanzx.com/163vmcfcslb.html

[H05] 捕获特定类型
来源：http://www.sxryk.cn/163qkjhkwpb.html

Py:   except ValueError as e:
来源：http://www.xuanzx.com/163ukzlvgub.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.aibaodan.cn/163hjbjihel.html

JS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163xqmtdxzp.html

TS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163kauuqmbs.html

Java: catch (IOException | SQLException e) {}
来源：http://www.xuanzx.com/163qvedbcck.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.aibaodan.cn/163amigrjta.html

Ruby: rescue ArgumentError => e
来源：http://www.aibaodan.cn/163fcddcyeg.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.aibaodan.cn/163wmivtcvq.html

[H06] 可选值 / 空值安全访问
来源：http://www.sxryk.cn/163zzqjmdrt.html

Py:   value = d.get("k") or default
来源：http://www.aibaodan.cn/163jrjpwdcm.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.sxryk.cn/163rkkgpjox.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163qkinecnv.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163qtzvehvj.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.aibaodan.cn/163debjezxp.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.xuanzx.com/163tobrtbkg.html

Ruby: d&.dig(:a, :b)
来源：http://www.sxryk.cn/163bzbqstnj.html

C#:   obj?.A?.B ?? default
来源：http://www.aibaodan.cn/163wujysssl.html

[H07] 断言
来源：http://www.aibaodan.cn/163uglqjeti.html

Py:   assert x > 0, "必须为正"
来源：http://www.xuanzx.com/163ibmgksia.html

PHP:  assert($x > 0);
来源：http://www.aibaodan.cn/163daogxnpw.html

JS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163jueftdck.html

TS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163rwofxgem.html

Java: assert x > 0 : "必须为正";
来源：http://www.xuanzx.com/163veedzukr.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.xuanzx.com/163ijpgqtze.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.sxryk.cn/163pazxkdfu.html

C#:   Debug.Assert(x > 0);
来源：http://www.sxryk.cn/163pnyuankx.html

[H08] 获取错误信息与堆栈
来源：http://www.xuanzx.com/163oajijzwb.html

Py:   str(e);  traceback.format_exc()
来源：http://www.xuanzx.com/163zaxswfgh.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.aibaodan.cn/163hujwlmjw.html

JS:   e.message;  e.stack
来源：http://www.xuanzx.com/163qncnbrud.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.aibaodan.cn/163mvtlwgir.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.sxryk.cn/163jhzzhgjb.html

Go:   err.Error()
来源：http://www.sxryk.cn/163mnqcoawc.html

Ruby: e.message;  e.backtrace
来源：http://www.sxryk.cn/163sfkprvio.html

C#:   e.Message;  e.StackTrace
来源：http://www.sxryk.cn/163veapjumq.html

[H09] 带错误码的异常
来源：http://www.sxryk.cn/163fucmzisu.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.aibaodan.cn/163ucqnwsdr.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.xuanzx.com/163jhwfdgou.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.xuanzx.com/163xajcpekg.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.sxryk.cn/163zmbapfqh.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.sxryk.cn/163njjonezr.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.aibaodan.cn/163vudeoice.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.xuanzx.com/163lehgfmqu.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.sxryk.cn/163ndwhfolc.html

[H10] 资源自动释放
来源：http://www.sxryk.cn/163nllcrala.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.sxryk.cn/163xlfvlwgc.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.aibaodan.cn/163kfhviill.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163otmwjnrk.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163jwouccmb.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.xuanzx.com/163gfooyewr.html

Go:   defer f.Close()
来源：http://www.aibaodan.cn/163thnqazit.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.aibaodan.cn/163qefhqpdi.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.aibaodan.cn/163kowujltn.html

================================================================================
来源：http://www.sxryk.cn/163gfnpzpsx.html

I. 正则表达式
来源：http://www.xuanzx.com/163wddtqkbj.html

================================================================================
来源：http://www.xuanzx.com/163uvehtmph.html

[I01] 判断是否匹配
来源：http://www.aibaodan.cn/163fgtiqfju.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.xuanzx.com/163qssqrrpu.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.sxryk.cn/163wvcexzyj.html

JS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163fzxorkgt.html

TS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163geudsxza.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.xuanzx.com/163gmmxljae.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.aibaodan.cn/163lkmezqvo.html

Ruby: s.match?(/\d+/)
来源：http://www.aibaodan.cn/163xdbjbfxv.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.xuanzx.com/163ngbcokqo.html

[I02] 提取所有匹配
来源：http://www.xuanzx.com/163bnyhvcqj.html

Py:   re.findall(r"\d+", s)
来源：http://www.aibaodan.cn/163aeexjmbj.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.aibaodan.cn/163wetkyurk.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.xuanzx.com/163tjncybxr.html

TS:   s.match(/\d+/g)
来源：http://www.aibaodan.cn/163yngueswu.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.aibaodan.cn/163xycsqfiw.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.aibaodan.cn/163gkmtvlpe.html

Ruby: s.scan(/\d+/)
来源：http://www.xuanzx.com/163zvzsohno.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.sxryk.cn/163hgtthsgr.html

[I03] 提取捕获分组
来源：http://www.aibaodan.cn/163asotpntt.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.xuanzx.com/163bdgcfoth.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.sxryk.cn/163hpdplkwc.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.aibaodan.cn/163hgkpoife.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.aibaodan.cn/163xunsuydf.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.sxryk.cn/163hjpjwyog.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.xuanzx.com/163dtjpifgr.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.aibaodan.cn/163yqdiaeob.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.sxryk.cn/163sosfojch.html

[I04] 正则替换
来源：http://www.xuanzx.com/163hckxntbj.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.aibaodan.cn/163sxgaeqhn.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163copqrpmn.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163rtjuhujc.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163tbqhkxqh.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.sxryk.cn/163tqomrnyf.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.xuanzx.com/163peroaihi.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.sxryk.cn/163kzfuebfp.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.xuanzx.com/163ajzpaqni.html

[I05] 按正则拆分
来源：http://www.sxryk.cn/163ncvlwijf.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.xuanzx.com/163htwfigqh.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.aibaodan.cn/163mptrptuf.html

JS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163jkkexezt.html

TS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163lssxzjla.html

Java: s.split("\\s*,\\s*")
来源：http://www.sxryk.cn/163vyyghjgw.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.xuanzx.com/163ancvbwdw.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163tamsvwyo.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.xuanzx.com/163ozetjmia.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.sxryk.cn/163tdxuslbp.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163hnjfvpzp.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.sxryk.cn/163cwvqflym.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163biiduikh.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163urqxfcvj.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.xuanzx.com/163zlibdmgr.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.aibaodan.cn/163rltxlxad.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.aibaodan.cn/163lokbtcvx.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163wcqhikmr.html

[I07] 忽略大小写与多行模式
来源：http://www.xuanzx.com/163behjelve.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.sxryk.cn/163adggfnsa.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.aibaodan.cn/163liccdhuc.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.sxryk.cn/163przegglm.html

TS:   /error/gim
来源：http://www.aibaodan.cn/163ueuyoprs.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.aibaodan.cn/163syfyvwnh.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.xuanzx.com/163gmaoyqkj.html

Ruby: s.scan(/error/i)
来源：http://www.xuanzx.com/163jozhvllr.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.aibaodan.cn/163ulgvwxsg.html

[I08] 贪婪与非贪婪匹配
来源：http://www.aibaodan.cn/163dbfnhhxb.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.xuanzx.com/163wwowrite.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.aibaodan.cn/163flfpxmah.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163xxtumepb.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163jrtswvzu.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.sxryk.cn/163wivgevdh.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.xuanzx.com/163pozmedry.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.aibaodan.cn/163flntehtn.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.sxryk.cn/163emcesggl.html

================================================================================
来源：http://www.xuanzx.com/163lxgxjucb.html

J. 日期与时间
来源：http://www.sxryk.cn/163tdndypuk.html

================================================================================
来源：http://www.aibaodan.cn/163seekxuax.html

[J01] 获取当前时间
来源：http://www.xuanzx.com/163ccltaddu.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.aibaodan.cn/163pmkmokss.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163gtostdls.html

JS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163oemofipm.html

TS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163ebnsrtsk.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.sxryk.cn/163yhdbxoic.html

Go:   time.Now()
来源：http://www.aibaodan.cn/163xzxqjljo.html

Ruby: Time.now
来源：http://www.aibaodan.cn/163ivnsftgp.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.aibaodan.cn/163erxqjmeo.html

[J02] 格式化输出
来源：http://www.sxryk.cn/163qgfyjyai.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163thoqorlg.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163runclsim.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.aibaodan.cn/163clxupnby.html

TS:   d.toISOString()
来源：http://www.xuanzx.com/163spcchyrq.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.aibaodan.cn/163irnwoiqb.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.xuanzx.com/163ukpckhvo.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163bznkqtdh.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.sxryk.cn/163klssjkyj.html

[J03] 字符串解析为日期
来源：http://www.xuanzx.com/163srutjvbq.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.xuanzx.com/163mseujcfo.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.sxryk.cn/163jzbkvuio.html

JS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163lgxgakhj.html

TS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163uoeqopor.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.sxryk.cn/163kketekmc.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.sxryk.cn/163rkqcmrgw.html

Ruby: Date.parse("2024-01-02")
来源：http://www.xuanzx.com/163nxuarymj.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.aibaodan.cn/163vfnqrzdy.html

[J04] 时间戳与日期互转
来源：http://www.sxryk.cn/163ukbkmmyt.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.sxryk.cn/163uceyonbj.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.aibaodan.cn/163wyvkqfdx.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.sxryk.cn/163uuradsmo.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.sxryk.cn/163dmiqwfke.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.xuanzx.com/163qbodkoem.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.sxryk.cn/163mzajnajn.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.sxryk.cn/163tsmtdzbr.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.xuanzx.com/163pvxnljuq.html

[J05] 时间加减（加 7 天）
来源：http://www.xuanzx.com/163cyyhxegh.html

Py:   now + timedelta(days=7)
来源：http://www.sxryk.cn/163xhgjujzc.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.aibaodan.cn/163ngvmmsev.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163vdgcawgx.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163xhsszkxo.html

Java: LocalDate.now().plusDays(7)
来源：http://www.aibaodan.cn/163pnyifudx.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.xuanzx.com/163jntrjvgc.html

Ruby: Time.now + 7 * 86400
来源：http://www.xuanzx.com/163xluekzph.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.xuanzx.com/163mrrzzmkf.html

[J06] 计算两时间之差
来源：http://www.aibaodan.cn/163bauagrvl.html

Py:   (end - start).total_seconds()
来源：http://www.aibaodan.cn/163lplimimu.html

PHP:  $end->diff($start)->days;
来源：http://www.xuanzx.com/163ctzacibd.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.sxryk.cn/163qaqipbar.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.aibaodan.cn/163rpgsyghy.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.sxryk.cn/163xmtiblib.html

Go:   end.Sub(start).Hours()
来源：http://www.sxryk.cn/163kdqwlcix.html

Ruby: end - start                 # 返回秒数
来源：http://www.aibaodan.cn/163ntogergz.html

C#:   (end - start).TotalSeconds
来源：http://www.aibaodan.cn/163dfypivai.html

[J07] 比较两个日期
来源：http://www.xuanzx.com/163rzxzsefj.html

Py:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163znkahcjz.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.aibaodan.cn/163dcgfvrvp.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163bqybuuss.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163jgzxmvjo.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.sxryk.cn/163xuqtbswa.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.xuanzx.com/163afmosccp.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163hstjsfmr.html

C#:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163dnamekqj.html

[J08] 提取年月日与星期
来源：http://www.aibaodan.cn/163mmjugagr.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.xuanzx.com/163pllfmmqv.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.sxryk.cn/163dyytwbme.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.xuanzx.com/163ynvodwdg.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.sxryk.cn/163fzippyld.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.sxryk.cn/163suumwyiw.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.xuanzx.com/163gfrjndol.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.aibaodan.cn/163aeeqlyav.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.xuanzx.com/163dgzdjelh.html

[J09] 时区处理
来源：http://www.sxryk.cn/163jcnyqicy.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.aibaodan.cn/163rsvwyuig.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.aibaodan.cn/163jzdasajo.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163xphnsxij.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163uyjfgnqy.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.xuanzx.com/163dcnetrml.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.sxryk.cn/163gdseedlj.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.sxryk.cn/163gwcjyldb.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.sxryk.cn/163kezsefrc.html

[J10] 取今天 / 本月第一天
来源：http://www.sxryk.cn/163ddanxzry.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.aibaodan.cn/163nucfoqno.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.aibaodan.cn/163osbsmqcy.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.xuanzx.com/163ldyducni.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.xuanzx.com/163oonlmxpd.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.aibaodan.cn/163npootiqm.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.sxryk.cn/163gidfmxxv.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.aibaodan.cn/163hbvzxisw.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.aibaodan.cn/163obffqxrc.html

================================================================================
来源：http://www.aibaodan.cn/163jpsutpzt.html

K. JSON 与序列化
来源：http://www.xuanzx.com/163hxjrvnnd.html

================================================================================
来源：http://www.sxryk.cn/163pkvmfjmc.html

[K01] 对象转 JSON 字符串
来源：http://www.aibaodan.cn/163wgscvyjd.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.sxryk.cn/163xgugjpkv.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163grlrxbkd.html

JS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163ahohycwd.html

TS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163xprzezzj.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.aibaodan.cn/163sjsrlaza.html

Go:   json.Marshal(obj)
来源：http://www.xuanzx.com/163rmhhhhoo.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.sxryk.cn/163mmkslmaw.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.aibaodan.cn/163clvqdxnw.html

[K02] JSON 字符串转对象
来源：http://www.xuanzx.com/163pcwvpzsq.html

Py:   json.loads(s)
来源：http://www.xuanzx.com/163btgeykjz.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.sxryk.cn/163lqikqcwd.html

JS:   JSON.parse(s)
来源：http://www.sxryk.cn/163eqmvndxy.html

TS:   JSON.parse(s)
来源：http://www.xuanzx.com/163yigjuyaw.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.sxryk.cn/163ibkipmcz.html

Go:   json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163ohktbcxz.html

Ruby: JSON.parse(s)
来源：http://www.aibaodan.cn/163zwaowncw.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.sxryk.cn/163zoasoiug.html

[K03] JSON 美化输出（带缩进）
来源：http://www.aibaodan.cn/163auhjtzdj.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.aibaodan.cn/163pvwommtd.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163quewlckv.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163xtqpzgei.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163sowxdulj.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.sxryk.cn/163lcggkvuj.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.aibaodan.cn/163ewsuwtxl.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.xuanzx.com/163uiksprvp.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.xuanzx.com/163bllwgcby.html

[K04] 读取 JSON 文件
来源：http://www.sxryk.cn/163iqobrdxb.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.xuanzx.com/163vjucfaya.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.xuanzx.com/163qjpxhfqs.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163qlclqbrw.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163pfymuzlm.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.aibaodan.cn/163ixkrjvop.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163ueepzare.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.aibaodan.cn/163ubyrkwao.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.aibaodan.cn/163oyjfzrcx.html

[K05] 深拷贝对象
来源：http://www.sxryk.cn/163trkmjvmo.html

Py:   copy.deepcopy(obj)
来源：http://www.xuanzx.com/163trxuytwe.html

PHP:  unserialize(serialize($obj));
来源：http://www.xuanzx.com/163qgjtjmbn.html

JS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163tlrewpus.html

TS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163uvymdpim.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.sxryk.cn/163jgkjholl.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.sxryk.cn/163hmwvnavu.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.sxryk.cn/163dvidctqw.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.sxryk.cn/163uaopddqr.html

[K06] 解析 URL 查询串
来源：http://www.xuanzx.com/163nszihucx.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.xuanzx.com/163vpnlbimd.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.sxryk.cn/163sesuawkt.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163fzvkpnep.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163rdltmcrs.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.aibaodan.cn/163asukqftz.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.aibaodan.cn/163vmhihcay.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.xuanzx.com/163bbcyrnfh.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.sxryk.cn/163grixqdwv.html

[K07] 进制转换
来源：http://www.sxryk.cn/163bfqqzjmz.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.xuanzx.com/163syixlbjg.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.aibaodan.cn/163buujftsk.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163lzgdmgdm.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163ptljhlss.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.aibaodan.cn/163vyitfkjz.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.xuanzx.com/163igcqzzwq.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.sxryk.cn/163sesgfhed.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.aibaodan.cn/163axdhwncv.html

[K08] 二进制序列化（非 JSON）
来源：http://www.sxryk.cn/163eqbzpnuf.html

Py:   pickle.dumps(obj)
来源：http://www.xuanzx.com/163uhowvvqa.html


<!-- 参考信息 -->