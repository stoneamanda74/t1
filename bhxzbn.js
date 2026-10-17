外链999!wailian999！

JS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163sntirnda.html

TS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163gpwgjurz.html

Java: class MyException extends RuntimeException {}
来源：http://www.sxryk.cn/163nbdkahnt.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.aibaodan.cn/163vtvpdzat.html

Ruby: class MyError < StandardError; end
来源：http://www.aibaodan.cn/163kemnobot.html

C#:   class MyException : Exception {}
来源：http://www.xuanzx.com/163wjtegglm.html

[H05] 捕获特定类型
来源：http://www.aibaodan.cn/163emvfeptq.html

Py:   except ValueError as e:
来源：http://www.aibaodan.cn/163kpqveodq.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.sxryk.cn/163jxrmvimg.html

JS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163guxanfos.html

TS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163bbhlodzw.html

Java: catch (IOException | SQLException e) {}
来源：http://www.aibaodan.cn/163qhqtzaoq.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.sxryk.cn/163juwlffcj.html

Ruby: rescue ArgumentError => e
来源：http://www.sxryk.cn/163wvsftveu.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.xuanzx.com/163qldfjmet.html

[H06] 可选值 / 空值安全访问
来源：http://www.sxryk.cn/163fftnzbzd.html

Py:   value = d.get("k") or default
来源：http://www.xuanzx.com/163tvikusry.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.sxryk.cn/163nngatpsy.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163bymoafwv.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163khmeveww.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.xuanzx.com/163nfzjdhyy.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.sxryk.cn/163fyraewfp.html

Ruby: d&.dig(:a, :b)
来源：http://www.xuanzx.com/163bfbqzmfo.html

C#:   obj?.A?.B ?? default
来源：http://www.aibaodan.cn/163hckmqgwl.html

[H07] 断言
来源：http://www.xuanzx.com/163rosdlfbr.html

Py:   assert x > 0, "必须为正"
来源：http://www.aibaodan.cn/163iuuyrigg.html

PHP:  assert($x > 0);
来源：http://www.xuanzx.com/163pgholpml.html

JS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163tpgveshf.html

TS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163dzqqslzb.html

Java: assert x > 0 : "必须为正";
来源：http://www.sxryk.cn/163ksegelhu.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.sxryk.cn/163tkslfcsg.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.xuanzx.com/163wvsyffdp.html

C#:   Debug.Assert(x > 0);
来源：http://www.aibaodan.cn/163pxvevdsp.html

[H08] 获取错误信息与堆栈
来源：http://www.aibaodan.cn/163tebrvblw.html

Py:   str(e);  traceback.format_exc()
来源：http://www.aibaodan.cn/163xmikmqzv.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.xuanzx.com/163ddqhaxqr.html

JS:   e.message;  e.stack
来源：http://www.aibaodan.cn/163vhdvtmzf.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.sxryk.cn/163ggkinwdj.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.aibaodan.cn/163glnffiyw.html

Go:   err.Error()
来源：http://www.sxryk.cn/163imuxseaj.html

Ruby: e.message;  e.backtrace
来源：http://www.xuanzx.com/163fstwexga.html

C#:   e.Message;  e.StackTrace
来源：http://www.aibaodan.cn/163kwqlmnov.html

[H09] 带错误码的异常
来源：http://www.sxryk.cn/163jeazndou.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.sxryk.cn/163cbopynig.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.sxryk.cn/163spbglhqd.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.sxryk.cn/163odaxggsb.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.sxryk.cn/163cvtwdapc.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.aibaodan.cn/163emerxhvx.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.xuanzx.com/163cdwabnoz.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.xuanzx.com/163qnkdoaqp.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.aibaodan.cn/163zyzlbwzd.html

[H10] 资源自动释放
来源：http://www.xuanzx.com/163pchdqmmh.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.xuanzx.com/163ohukptqf.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.aibaodan.cn/163fcddxcan.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163ebritscf.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163bsedasxx.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.aibaodan.cn/163geftnboq.html

Go:   defer f.Close()
来源：http://www.sxryk.cn/163rixzztbl.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.sxryk.cn/163ggbbnawh.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.sxryk.cn/163pjxxhhvm.html

================================================================================
来源：http://www.xuanzx.com/163whmetqzh.html

I. 正则表达式
来源：http://www.sxryk.cn/163hrzohfds.html

================================================================================
来源：http://www.sxryk.cn/163killkfwn.html

[I01] 判断是否匹配
来源：http://www.aibaodan.cn/163akltjvcj.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.aibaodan.cn/163djqalxkz.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.xuanzx.com/163mwllvvok.html

JS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163skkjeiry.html

TS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163dkjdopgv.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.aibaodan.cn/163gghgpjqg.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.sxryk.cn/163jplmfayx.html

Ruby: s.match?(/\d+/)
来源：http://www.sxryk.cn/163ogwzuysk.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.sxryk.cn/163vgzzgbea.html

[I02] 提取所有匹配
来源：http://www.xuanzx.com/163kgxwcyrl.html

Py:   re.findall(r"\d+", s)
来源：http://www.sxryk.cn/163aimohqqm.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.sxryk.cn/163qgdjvgmq.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.xuanzx.com/163efpedahi.html

TS:   s.match(/\d+/g)
来源：http://www.sxryk.cn/163agaryvko.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.aibaodan.cn/163jgjovohy.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.sxryk.cn/163bqyamafh.html

Ruby: s.scan(/\d+/)
来源：http://www.sxryk.cn/163viwakvtc.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.xuanzx.com/163ncrzgogp.html

[I03] 提取捕获分组
来源：http://www.xuanzx.com/163trkfznux.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.sxryk.cn/163soxlscgk.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.xuanzx.com/163nhcudrdv.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.aibaodan.cn/163rbxbjqaa.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.xuanzx.com/163eezqklte.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.sxryk.cn/163copzknii.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.xuanzx.com/163mxftrnoy.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.xuanzx.com/163zufcnxvp.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.xuanzx.com/163mhibkywy.html

[I04] 正则替换
来源：http://www.xuanzx.com/163eoqiglyf.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.sxryk.cn/163ynfihrwd.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163bcnlmqmo.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163fsuhklke.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163gsnsarkq.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.sxryk.cn/163muiwkzrf.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.sxryk.cn/163rcwktoro.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.aibaodan.cn/163hdomarlg.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.sxryk.cn/163rmornrar.html

[I05] 按正则拆分
来源：http://www.sxryk.cn/163gekhxwwj.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.xuanzx.com/163frsygeym.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.aibaodan.cn/163jtzmcreb.html

JS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163atkiexsy.html

TS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163yyvwefiq.html

Java: s.split("\\s*,\\s*")
来源：http://www.xuanzx.com/163ytblpqzo.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.sxryk.cn/163vthfeuyg.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163mfcpjven.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.aibaodan.cn/163inhcjdtf.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.aibaodan.cn/163hanpuifo.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163tadlspbh.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.xuanzx.com/163tlpquxcf.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163oslwraau.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163pyjkgxnq.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.sxryk.cn/163vzupdrlv.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.sxryk.cn/163flfuknng.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.aibaodan.cn/163rposehsi.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163qnfgpyty.html

[I07] 忽略大小写与多行模式
来源：http://www.sxryk.cn/163efpojecm.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.sxryk.cn/163ufoldyan.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.xuanzx.com/163etxjauvc.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.xuanzx.com/163difvgwta.html

TS:   /error/gim
来源：http://www.xuanzx.com/163euqadmzb.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.sxryk.cn/163ejoqpdls.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.sxryk.cn/163uzijzzai.html

Ruby: s.scan(/error/i)
来源：http://www.xuanzx.com/163mdwtkcca.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.aibaodan.cn/163jesstfzd.html

[I08] 贪婪与非贪婪匹配
来源：http://www.sxryk.cn/163agovziqy.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.aibaodan.cn/163vurayyvg.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.xuanzx.com/163rdasgopu.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163utdxsiku.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163gkxnmprd.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.sxryk.cn/163yowhqvhe.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.sxryk.cn/163hxkgamzz.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.aibaodan.cn/163ztlsupzp.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.aibaodan.cn/163aprgbjad.html

================================================================================
来源：http://www.xuanzx.com/163yktdaypo.html

J. 日期与时间
来源：http://www.sxryk.cn/163hxyaiwan.html

================================================================================
来源：http://www.aibaodan.cn/163bngkqobp.html

[J01] 获取当前时间
来源：http://www.xuanzx.com/163piilyoiy.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.xuanzx.com/163wzeqoebw.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163maokkzzz.html

JS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163mulczlfz.html

TS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163nizehxqc.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.aibaodan.cn/163bbjlhsqv.html

Go:   time.Now()
来源：http://www.xuanzx.com/163myvppwcb.html

Ruby: Time.now
来源：http://www.aibaodan.cn/163qbrntnid.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.sxryk.cn/163phdyoodc.html

[J02] 格式化输出
来源：http://www.aibaodan.cn/163fkeljerq.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163aceevwdr.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163fizkqgat.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.aibaodan.cn/163auxprkaf.html

TS:   d.toISOString()
来源：http://www.xuanzx.com/163myhkwbkj.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.xuanzx.com/163nelweppn.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.xuanzx.com/163ihinozqr.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163pxqtburj.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.aibaodan.cn/163fcetwqcn.html

[J03] 字符串解析为日期
来源：http://www.xuanzx.com/163lnndkyoz.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.sxryk.cn/163xrcemmwr.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.sxryk.cn/163hdsazmmt.html

JS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163ouhudtyh.html

TS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163vbfezjnr.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.xuanzx.com/163vrcaoonu.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.sxryk.cn/163mackkilh.html

Ruby: Date.parse("2024-01-02")
来源：http://www.aibaodan.cn/163slnwystt.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.aibaodan.cn/163oauaglwq.html

[J04] 时间戳与日期互转
来源：http://www.xuanzx.com/163xhciigyi.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.xuanzx.com/163wshlscno.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.aibaodan.cn/163dnsusrao.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.aibaodan.cn/163jirazudk.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.aibaodan.cn/163hnyearmg.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.sxryk.cn/163tmwrzmgs.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.sxryk.cn/163vcclvkwh.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.xuanzx.com/163bcrcoome.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.xuanzx.com/163gtcexuac.html

[J05] 时间加减（加 7 天）
来源：http://www.sxryk.cn/163jqkkyejw.html

Py:   now + timedelta(days=7)
来源：http://www.sxryk.cn/163aidsoxud.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.aibaodan.cn/163zahkkipo.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163hzmippbv.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163abjxlooj.html

Java: LocalDate.now().plusDays(7)
来源：http://www.aibaodan.cn/163frlqexpu.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.xuanzx.com/163uzjcgznt.html

Ruby: Time.now + 7 * 86400
来源：http://www.sxryk.cn/163qhmxbegl.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.sxryk.cn/163eparfnyf.html

[J06] 计算两时间之差
来源：http://www.aibaodan.cn/163wfcioymt.html

Py:   (end - start).total_seconds()
来源：http://www.aibaodan.cn/163mwruxpvk.html

PHP:  $end->diff($start)->days;
来源：http://www.xuanzx.com/163vnmmenbd.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.aibaodan.cn/163tuzzfcnf.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.xuanzx.com/163jcxegnli.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.xuanzx.com/163gkarhvwp.html

Go:   end.Sub(start).Hours()
来源：http://www.aibaodan.cn/163mbbyminr.html

Ruby: end - start                 # 返回秒数
来源：http://www.xuanzx.com/163skbgtcms.html

C#:   (end - start).TotalSeconds
来源：http://www.aibaodan.cn/163qydmaovs.html

[J07] 比较两个日期
来源：http://www.sxryk.cn/163wlewlfcv.html

Py:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163zlbnsjqc.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.sxryk.cn/163mnpirncu.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163ymogaaeo.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163tmpepxup.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.aibaodan.cn/163sqigxxzx.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.xuanzx.com/163ltfushvn.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163hjcbxriq.html

C#:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163zsgngfuu.html

[J08] 提取年月日与星期
来源：http://www.sxryk.cn/163erovrfsq.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.aibaodan.cn/163emsimkxz.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.xuanzx.com/163osdyaudp.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.sxryk.cn/163ewqqzyph.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.sxryk.cn/163znfrvktw.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.xuanzx.com/163zsfipeqr.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.sxryk.cn/163obecsqli.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.aibaodan.cn/163wnobtbrk.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.aibaodan.cn/163ioolabhd.html

[J09] 时区处理
来源：http://www.sxryk.cn/163hsqqrmbg.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.xuanzx.com/163jukjxxnz.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.aibaodan.cn/163ueqkabzy.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163hqiizwbf.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163djnwjbdc.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.xuanzx.com/163hfqdnybo.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.sxryk.cn/163dxpxiczq.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.xuanzx.com/163rmlwywtp.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.aibaodan.cn/163rmtxwoav.html

[J10] 取今天 / 本月第一天
来源：http://www.sxryk.cn/163tmuufcvq.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.xuanzx.com/163spwbhndb.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.xuanzx.com/163wigqkost.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.aibaodan.cn/163cwqtjryv.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.aibaodan.cn/163dhsckdao.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.aibaodan.cn/163vtfhvjky.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.aibaodan.cn/163uowrkfwt.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.aibaodan.cn/163hkwscmdf.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.xuanzx.com/163firnjpvv.html

================================================================================
来源：http://www.xuanzx.com/163axnenise.html

K. JSON 与序列化
来源：http://www.xuanzx.com/163cnvbmmtr.html

================================================================================
来源：http://www.sxryk.cn/163gvjapjai.html

[K01] 对象转 JSON 字符串
来源：http://www.xuanzx.com/163jyzlscbo.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.sxryk.cn/163hsgdxwfu.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163lalyvodt.html

JS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163wkhhegrk.html

TS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163etxqtjik.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.sxryk.cn/163ghovarmn.html

Go:   json.Marshal(obj)
来源：http://www.aibaodan.cn/163onxlowkd.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.sxryk.cn/163mqkdpgnc.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.aibaodan.cn/163qtehpxhg.html

[K02] JSON 字符串转对象
来源：http://www.xuanzx.com/163keelvuzo.html

Py:   json.loads(s)
来源：http://www.xuanzx.com/163wpbbaufv.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.xuanzx.com/163jmuafrqg.html

JS:   JSON.parse(s)
来源：http://www.xuanzx.com/163mjhanyhk.html

TS:   JSON.parse(s)
来源：http://www.sxryk.cn/163atzsybzq.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.aibaodan.cn/163zrdlovee.html

Go:   json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163vshktspf.html

Ruby: JSON.parse(s)
来源：http://www.xuanzx.com/163vqsdubuo.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.sxryk.cn/163zmxckufu.html

[K03] JSON 美化输出（带缩进）
来源：http://www.sxryk.cn/163lcwvcktx.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.aibaodan.cn/163wxtktrol.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163lgfbxstf.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163oiogaqif.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163fyydfelj.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.aibaodan.cn/163fjgjnrlg.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.aibaodan.cn/163rbrauhlh.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.xuanzx.com/163bbrgzlxs.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.xuanzx.com/163fdefxfoc.html

[K04] 读取 JSON 文件
来源：http://www.sxryk.cn/163mpfajvxf.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.aibaodan.cn/163kevoaalh.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.xuanzx.com/163leyxjvbg.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163zyiectsd.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163wnnlqmyg.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.sxryk.cn/163hervjraq.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163dnadqdus.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.aibaodan.cn/163nszoevcq.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.xuanzx.com/163ochspoxw.html

[K05] 深拷贝对象
来源：http://www.xuanzx.com/163qpnhwoic.html

Py:   copy.deepcopy(obj)
来源：http://www.xuanzx.com/163attnolcn.html

PHP:  unserialize(serialize($obj));
来源：http://www.xuanzx.com/163fvpwzkmv.html

JS:   structuredClone(obj)
来源：http://www.xuanzx.com/163svosclog.html

TS:   structuredClone(obj)
来源：http://www.xuanzx.com/163ssszyucv.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.xuanzx.com/163nliaeziu.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.aibaodan.cn/163naemcwjn.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.aibaodan.cn/163nisgibcg.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.sxryk.cn/163xncvceja.html

[K06] 解析 URL 查询串
来源：http://www.sxryk.cn/163mkfhzdvp.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.aibaodan.cn/163xshshxsg.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.sxryk.cn/163xthhqiuq.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163pojqwtdg.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163yhornlhy.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.xuanzx.com/163dbxwagjq.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.aibaodan.cn/163pnqlfosb.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.sxryk.cn/163mmwqhobx.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.sxryk.cn/163fivbqjqw.html

[K07] 进制转换
来源：http://www.aibaodan.cn/163alzsgalz.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.sxryk.cn/163hmufmkmr.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.aibaodan.cn/163lhgcrcsu.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163pobnqsbb.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163cquhdtyr.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.sxryk.cn/163rdfdbpjx.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.xuanzx.com/163cluyvejw.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.aibaodan.cn/163cmhewrbr.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.aibaodan.cn/163uwsqmzrf.html

[K08] 二进制序列化（非 JSON）
来源：http://www.sxryk.cn/163rrfwkoey.html

Py:   pickle.dumps(obj)
来源：http://www.xuanzx.com/163rdajvuth.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.sxryk.cn/163uucjvjqy.html

JS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163zadjjzhz.html

TS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163syzxczvk.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.sxryk.cn/163uucyvruj.html


<!-- 参考信息 -->