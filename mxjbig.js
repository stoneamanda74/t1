外链999!wailian999！

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.xuanzx.com/163syjpzusf.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.sxryk.cn/163iaaepodr.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.xuanzx.com/163blqfikad.html

[H02] finally / ensure 收尾
来源：http://www.xuanzx.com/163iqltlkmd.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.aibaodan.cn/163pqvcagmr.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163wcppardr.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163sivlwtcw.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163yzjrgugo.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163xskirmty.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.aibaodan.cn/163jqywrfdy.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.sxryk.cn/163jnmcngjg.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.aibaodan.cn/163zaajfaih.html

[H03] 主动抛出异常
来源：http://www.aibaodan.cn/163skgpegtk.html

Py:   raise ValueError("错误信息")
来源：http://www.xuanzx.com/163wgezqujv.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.sxryk.cn/163fesfnypv.html

JS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163jgvolehs.html

TS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163irepawju.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.aibaodan.cn/163zvybbnyb.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.xuanzx.com/163thcrtpwc.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.aibaodan.cn/163mjjyjoim.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.aibaodan.cn/163ervrwrfh.html

[H04] 自定义异常类型
来源：http://www.xuanzx.com/163ssftdlnd.html

Py:   class MyError(Exception): pass
来源：http://www.sxryk.cn/163gudmvcce.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.sxryk.cn/163icuufewu.html

JS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163icrvdkep.html

TS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163bttnrorm.html

Java: class MyException extends RuntimeException {}
来源：http://www.aibaodan.cn/163lsnfudqj.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.aibaodan.cn/163ukgeokai.html

Ruby: class MyError < StandardError; end
来源：http://www.xuanzx.com/163srpuhhvx.html

C#:   class MyException : Exception {}
来源：http://www.xuanzx.com/163ymtxyish.html

[H05] 捕获特定类型
来源：http://www.xuanzx.com/163eqasaaym.html

Py:   except ValueError as e:
来源：http://www.xuanzx.com/163xoigordp.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.xuanzx.com/163zjehulew.html

JS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163pxqasfbg.html

TS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163gggahept.html

Java: catch (IOException | SQLException e) {}
来源：http://www.aibaodan.cn/163bfoxoevt.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.xuanzx.com/163euwyyywj.html

Ruby: rescue ArgumentError => e
来源：http://www.xuanzx.com/163xarnbrvp.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.aibaodan.cn/163lwfzpvir.html

[H06] 可选值 / 空值安全访问
来源：http://www.xuanzx.com/163fxyqemwt.html

Py:   value = d.get("k") or default
来源：http://www.aibaodan.cn/163pnlbugku.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.aibaodan.cn/163rnjogmds.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163npqezxom.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163feubcxsh.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.sxryk.cn/163elinjpfz.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.aibaodan.cn/163cwdkcrju.html

Ruby: d&.dig(:a, :b)
来源：http://www.xuanzx.com/163japqexbv.html

C#:   obj?.A?.B ?? default
来源：http://www.xuanzx.com/163wsmzxlkp.html

[H07] 断言
来源：http://www.xuanzx.com/163hsekqcal.html

Py:   assert x > 0, "必须为正"
来源：http://www.aibaodan.cn/163qfrfzgzn.html

PHP:  assert($x > 0);
来源：http://www.aibaodan.cn/163sansgikm.html

JS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163dbkkqavv.html

TS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163mqalidpf.html

Java: assert x > 0 : "必须为正";
来源：http://www.sxryk.cn/163gygidkux.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.aibaodan.cn/163kokrvlzy.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.sxryk.cn/163maveymeb.html

C#:   Debug.Assert(x > 0);
来源：http://www.sxryk.cn/163jzzzdfhd.html

[H08] 获取错误信息与堆栈
来源：http://www.aibaodan.cn/163qvlpldqx.html

Py:   str(e);  traceback.format_exc()
来源：http://www.aibaodan.cn/163tcmhuyxx.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.sxryk.cn/163tzzthloy.html

JS:   e.message;  e.stack
来源：http://www.sxryk.cn/163nqikokwb.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.aibaodan.cn/163sggwpeab.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.aibaodan.cn/163pgmzcnib.html

Go:   err.Error()
来源：http://www.aibaodan.cn/163cfwghctt.html

Ruby: e.message;  e.backtrace
来源：http://www.xuanzx.com/163ncdcjisa.html

C#:   e.Message;  e.StackTrace
来源：http://www.sxryk.cn/163rejkcawp.html

[H09] 带错误码的异常
来源：http://www.aibaodan.cn/163drdiewma.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.xuanzx.com/163buiuyclp.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.xuanzx.com/163kqjsaaon.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.aibaodan.cn/163tjbqgtfe.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.sxryk.cn/163omcaspdu.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.xuanzx.com/163tcamhzsa.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.xuanzx.com/163cunacmmc.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.xuanzx.com/163kqhecasa.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.sxryk.cn/163hzahfcoe.html

[H10] 资源自动释放
来源：http://www.xuanzx.com/163qhgtkdmj.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.aibaodan.cn/163qmmwuskm.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.xuanzx.com/163wdfqxdfx.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163wgjdynvf.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163zucrdfkx.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.sxryk.cn/163okncrius.html

Go:   defer f.Close()
来源：http://www.aibaodan.cn/163kcelhebd.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.sxryk.cn/163jbeaqmkw.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.sxryk.cn/163swwdxguo.html

================================================================================
来源：http://www.xuanzx.com/163jwvvplxx.html

I. 正则表达式
来源：http://www.xuanzx.com/163oidsklwr.html

================================================================================
来源：http://www.xuanzx.com/163oonvuhrf.html

[I01] 判断是否匹配
来源：http://www.xuanzx.com/163ngopxnuk.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.aibaodan.cn/163tpljlkly.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.xuanzx.com/163zhmmxfmr.html

JS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163xpowniwq.html

TS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163vxnjemqs.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.aibaodan.cn/163cfliaplo.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.sxryk.cn/163pvibtdmf.html

Ruby: s.match?(/\d+/)
来源：http://www.sxryk.cn/163wrjfofbk.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.sxryk.cn/163cdsvszph.html

[I02] 提取所有匹配
来源：http://www.xuanzx.com/163rblxlhdt.html

Py:   re.findall(r"\d+", s)
来源：http://www.sxryk.cn/163ekiahfwn.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.aibaodan.cn/163qyfzhxys.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.sxryk.cn/163cttuhtdu.html

TS:   s.match(/\d+/g)
来源：http://www.sxryk.cn/163mdklduwy.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.aibaodan.cn/163ovecddvn.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.xuanzx.com/163swlwqeqp.html

Ruby: s.scan(/\d+/)
来源：http://www.aibaodan.cn/163qqbkgvve.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.aibaodan.cn/163nccrnbal.html

[I03] 提取捕获分组
来源：http://www.xuanzx.com/163aapzjibl.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.xuanzx.com/163wzazyagf.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.aibaodan.cn/163ynzyfjll.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.aibaodan.cn/163eigltgas.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.xuanzx.com/163agdcldvk.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.aibaodan.cn/163gzhafhzj.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.sxryk.cn/163orfyntir.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.sxryk.cn/163smtculub.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.aibaodan.cn/163niewhpdw.html

[I04] 正则替换
来源：http://www.aibaodan.cn/163hpavlmyd.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.aibaodan.cn/163lrobtsgp.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163fdpzaqbz.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163fomqetfb.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163dxkpzzve.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.xuanzx.com/163skjckwwz.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.sxryk.cn/163jlfohity.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.aibaodan.cn/163olswawob.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.aibaodan.cn/163grluycsy.html

[I05] 按正则拆分
来源：http://www.xuanzx.com/163enawukng.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.xuanzx.com/163owembrls.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.xuanzx.com/163mmyavoon.html

JS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163sknioxpv.html

TS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163aoiffzxr.html

Java: s.split("\\s*,\\s*")
来源：http://www.xuanzx.com/163fzugrsyw.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.aibaodan.cn/163wffuccxa.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163pwzlxfyf.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.xuanzx.com/163dwxauzhy.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.aibaodan.cn/163vxbpomcr.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163aanqbiou.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.sxryk.cn/163ioxbsbjg.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163srhfdhag.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163mxsssfsu.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.aibaodan.cn/163iybxtmcf.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.sxryk.cn/163htdohagt.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.xuanzx.com/163vkzvntov.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163fnwduagm.html

[I07] 忽略大小写与多行模式
来源：http://www.sxryk.cn/163orpogkyb.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.xuanzx.com/163tzmyrmgv.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.aibaodan.cn/163gharlesm.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.sxryk.cn/163expyjhad.html

TS:   /error/gim
来源：http://www.xuanzx.com/163ozorlmth.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.xuanzx.com/163fmhvgvni.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.xuanzx.com/163fosmjesn.html

Ruby: s.scan(/error/i)
来源：http://www.sxryk.cn/163ylqkelxz.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.aibaodan.cn/163pktyguhi.html

[I08] 贪婪与非贪婪匹配
来源：http://www.aibaodan.cn/163lsxlldvd.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.aibaodan.cn/163tjbifbai.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.aibaodan.cn/163iskrsfwj.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163iuzlweka.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163ybnjdrhh.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.sxryk.cn/163plbhmkgq.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.aibaodan.cn/163auupsucg.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.aibaodan.cn/163yyaogssz.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.aibaodan.cn/163xtvvpzqi.html

================================================================================
来源：http://www.sxryk.cn/163jusuhsqw.html

J. 日期与时间
来源：http://www.xuanzx.com/163tcotfdeu.html

================================================================================
来源：http://www.xuanzx.com/163mgspghbc.html

[J01] 获取当前时间
来源：http://www.aibaodan.cn/163btgnojes.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.aibaodan.cn/163bjlctuxn.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163ywbwpumu.html

JS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163aaqoxroc.html

TS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163yyoxfskx.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.xuanzx.com/163yhwtvpqj.html

Go:   time.Now()
来源：http://www.sxryk.cn/163tqyeanti.html

Ruby: Time.now
来源：http://www.sxryk.cn/163kgefssol.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.sxryk.cn/163sgpxjoub.html

[J02] 格式化输出
来源：http://www.aibaodan.cn/163ydlkkekl.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163fcfeqqdn.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163gpxiicun.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.sxryk.cn/163rwkaugui.html

TS:   d.toISOString()
来源：http://www.sxryk.cn/163rfwwcrxg.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.aibaodan.cn/163coiqtebd.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.sxryk.cn/163vkhpxmyr.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163xttgovlx.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.xuanzx.com/163wkyrbbhz.html

[J03] 字符串解析为日期
来源：http://www.aibaodan.cn/163xibefuof.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.aibaodan.cn/163hwosezsy.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.aibaodan.cn/163hlbykrnj.html

JS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163pkvlxjxm.html

TS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163bhbzednn.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.aibaodan.cn/163alczveaq.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.xuanzx.com/163akorfnps.html

Ruby: Date.parse("2024-01-02")
来源：http://www.xuanzx.com/163swolhtjy.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.sxryk.cn/163mzumpojt.html

[J04] 时间戳与日期互转
来源：http://www.xuanzx.com/163cbcvtryr.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.xuanzx.com/163vlujbosa.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.aibaodan.cn/163vloenlnv.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.aibaodan.cn/163elkgufbp.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.aibaodan.cn/163zxopdgdc.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.sxryk.cn/163wsitskfy.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.aibaodan.cn/163anfwcyws.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.xuanzx.com/163iriyjldk.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.sxryk.cn/163buwrixfy.html

[J05] 时间加减（加 7 天）
来源：http://www.aibaodan.cn/163hnsfeoph.html

Py:   now + timedelta(days=7)
来源：http://www.sxryk.cn/163vnwbykbx.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.aibaodan.cn/163udncqssv.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163ajpblddo.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163xeosimtc.html

Java: LocalDate.now().plusDays(7)
来源：http://www.sxryk.cn/163kymhhnnn.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.sxryk.cn/163urbtbwzz.html

Ruby: Time.now + 7 * 86400
来源：http://www.aibaodan.cn/163owdwqcfi.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.sxryk.cn/163webknyvs.html

[J06] 计算两时间之差
来源：http://www.sxryk.cn/163cnfkweer.html

Py:   (end - start).total_seconds()
来源：http://www.aibaodan.cn/163bsfplsrp.html

PHP:  $end->diff($start)->days;
来源：http://www.sxryk.cn/163farzvmsx.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.aibaodan.cn/163ohytmurj.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.aibaodan.cn/163vlrpynoq.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.sxryk.cn/163norwyexr.html

Go:   end.Sub(start).Hours()
来源：http://www.sxryk.cn/163qwvfpcyk.html

Ruby: end - start                 # 返回秒数
来源：http://www.aibaodan.cn/163jvxogfsq.html

C#:   (end - start).TotalSeconds
来源：http://www.aibaodan.cn/163vvuiutcz.html

[J07] 比较两个日期
来源：http://www.aibaodan.cn/163weycicfl.html

Py:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163onyggvdq.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.aibaodan.cn/163zqiivrxs.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163nxnkrpif.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163uqauyeeu.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.xuanzx.com/163snmjgcyd.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.sxryk.cn/163nwtefhuu.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163uwrbitrj.html

C#:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163zycodpsh.html

[J08] 提取年月日与星期
来源：http://www.sxryk.cn/163tibtitmn.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.xuanzx.com/163uadodsgc.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.aibaodan.cn/163cfekchmj.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.xuanzx.com/163hfdwdnzs.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.sxryk.cn/163dppsdjog.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.sxryk.cn/163oswjeiap.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.xuanzx.com/163zirsrltv.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.xuanzx.com/163yrpsmwgi.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.sxryk.cn/163bvrkolns.html

[J09] 时区处理
来源：http://www.aibaodan.cn/163kpcnycaa.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.aibaodan.cn/163dvnyvklu.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.aibaodan.cn/163khrdsszs.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163ylxcyuhk.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163ldwctrvu.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.xuanzx.com/163fbbqtphc.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.sxryk.cn/163asiwkfom.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.sxryk.cn/163xnenboph.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.aibaodan.cn/163whgsnxtw.html

[J10] 取今天 / 本月第一天
来源：http://www.aibaodan.cn/163ncksyxfw.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.aibaodan.cn/163zhjemsax.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.xuanzx.com/163mrcxumid.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.sxryk.cn/163uoouowwn.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.sxryk.cn/163decmwgqi.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.sxryk.cn/163cfhqprdn.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.sxryk.cn/163dccmqtgz.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.aibaodan.cn/163kryfceix.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.xuanzx.com/163lpdzrtnm.html

================================================================================
来源：http://www.xuanzx.com/163kaxcepet.html

K. JSON 与序列化
来源：http://www.sxryk.cn/163lllfuzon.html

================================================================================
来源：http://www.aibaodan.cn/163zzrjfjuj.html

[K01] 对象转 JSON 字符串
来源：http://www.aibaodan.cn/163vxiemucn.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.xuanzx.com/163rgazhucp.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163oiskujpf.html

JS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163isavtckb.html

TS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163ujluidsr.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.xuanzx.com/163ygpxdwqd.html

Go:   json.Marshal(obj)
来源：http://www.aibaodan.cn/163lmgwdkuz.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.aibaodan.cn/163krtvvryk.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.xuanzx.com/163qwvywjpu.html

[K02] JSON 字符串转对象
来源：http://www.sxryk.cn/163wruosnyw.html

Py:   json.loads(s)
来源：http://www.sxryk.cn/163whlharqj.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.xuanzx.com/163qjlkorzl.html

JS:   JSON.parse(s)
来源：http://www.sxryk.cn/163zofihrks.html

TS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163emanzjzi.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.xuanzx.com/163pdwleihh.html

Go:   json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163txtddyzz.html

Ruby: JSON.parse(s)
来源：http://www.aibaodan.cn/163ulzmbqpf.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.aibaodan.cn/163keifgjzm.html

[K03] JSON 美化输出（带缩进）
来源：http://www.aibaodan.cn/163ezaqnflo.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.xuanzx.com/163ykhtsple.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163zrvaofxx.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163puhlupaj.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163mtxlkaev.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.sxryk.cn/163fdqyrnod.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.xuanzx.com/163acoynked.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.aibaodan.cn/163whijjzzu.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.sxryk.cn/163zfuvctlj.html

[K04] 读取 JSON 文件
来源：http://www.aibaodan.cn/163tkpqxile.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.xuanzx.com/163ocdqzhzv.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.sxryk.cn/163daflahpu.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163egjfvwyp.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163kphsnlgy.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.xuanzx.com/163zuuzhbqc.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163fescobil.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.xuanzx.com/163askhhqqr.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.sxryk.cn/163njvfxqzy.html

[K05] 深拷贝对象
来源：http://www.xuanzx.com/163ggrnaqjv.html

Py:   copy.deepcopy(obj)
来源：http://www.xuanzx.com/163rviifujh.html

PHP:  unserialize(serialize($obj));
来源：http://www.sxryk.cn/163ccbwwnuf.html

JS:   structuredClone(obj)
来源：http://www.sxryk.cn/163ryhcszmr.html

TS:   structuredClone(obj)
来源：http://www.sxryk.cn/163mozzizxj.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.xuanzx.com/163besuvtfv.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.sxryk.cn/163kasjnfqe.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.xuanzx.com/163mnnzcllg.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.aibaodan.cn/163uwoafkyx.html


<!-- 参考信息 -->