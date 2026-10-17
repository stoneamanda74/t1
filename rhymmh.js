外链999!wailian999！

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.xuanzx.com/163wpcniuhl.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.sxryk.cn/163kjtfttnl.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.aibaodan.cn/163iumiabay.html

[H02] finally / ensure 收尾
来源：http://www.sxryk.cn/163lcslbswi.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.xuanzx.com/163dtzgktjj.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163quqctcmy.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163fbbmbbmh.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163znjllgwk.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163uhezqoyc.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.xuanzx.com/163azgzfrjf.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.xuanzx.com/163ntesalul.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.aibaodan.cn/163qjanlukt.html

[H03] 主动抛出异常
来源：http://www.xuanzx.com/163lvcfsrfn.html

Py:   raise ValueError("错误信息")
来源：http://www.xuanzx.com/163pcqtbbum.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.sxryk.cn/163feklcwyi.html

JS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163jhmylhme.html

TS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163tswdlgax.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.sxryk.cn/163looejbit.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.xuanzx.com/163bcrroeqv.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.sxryk.cn/163trhjmhkz.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.aibaodan.cn/163wkzvygmx.html

[H04] 自定义异常类型
来源：http://www.aibaodan.cn/163rsxoaoaz.html

Py:   class MyError(Exception): pass
来源：http://www.xuanzx.com/163vfvxslgt.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.sxryk.cn/163nikimeem.html

JS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163codpqfxo.html

TS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163nxsvuyef.html

Java: class MyException extends RuntimeException {}
来源：http://www.aibaodan.cn/163qmkximsu.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.aibaodan.cn/163tqqmggrt.html

Ruby: class MyError < StandardError; end
来源：http://www.sxryk.cn/163lcslvtec.html

C#:   class MyException : Exception {}
来源：http://www.xuanzx.com/163ijlidtmn.html

[H05] 捕获特定类型
来源：http://www.sxryk.cn/163kjzbmclw.html

Py:   except ValueError as e:
来源：http://www.aibaodan.cn/163khkxneeu.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.sxryk.cn/163mguqfwer.html

JS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163pcwzkksq.html

TS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163wekgyoht.html

Java: catch (IOException | SQLException e) {}
来源：http://www.sxryk.cn/163vcvrsyij.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.sxryk.cn/163wneefqjl.html

Ruby: rescue ArgumentError => e
来源：http://www.xuanzx.com/163mgtajaem.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.xuanzx.com/163wkffdlxe.html

[H06] 可选值 / 空值安全访问
来源：http://www.aibaodan.cn/163vxwgdaos.html

Py:   value = d.get("k") or default
来源：http://www.xuanzx.com/163vozrtrfj.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.aibaodan.cn/163nwjqvbyo.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163acgagqux.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163yhpgmjvb.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.aibaodan.cn/163xzikcthv.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.sxryk.cn/163wnkzzufk.html

Ruby: d&.dig(:a, :b)
来源：http://www.sxryk.cn/163xdwbikjr.html

C#:   obj?.A?.B ?? default
来源：http://www.sxryk.cn/163uycttdtg.html

[H07] 断言
来源：http://www.xuanzx.com/163yqtiswyc.html

Py:   assert x > 0, "必须为正"
来源：http://www.aibaodan.cn/163zxxyldaj.html

PHP:  assert($x > 0);
来源：http://www.xuanzx.com/163bolkpgow.html

JS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163fxnfchnv.html

TS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163cxjivaqs.html

Java: assert x > 0 : "必须为正";
来源：http://www.xuanzx.com/163xkdlrfdg.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.xuanzx.com/163nfsgmcjp.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.xuanzx.com/163vaownwpa.html

C#:   Debug.Assert(x > 0);
来源：http://www.aibaodan.cn/163jkgonupk.html

[H08] 获取错误信息与堆栈
来源：http://www.xuanzx.com/163sbdedxgq.html

Py:   str(e);  traceback.format_exc()
来源：http://www.xuanzx.com/163gkrlmmuc.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.aibaodan.cn/163gspsughk.html

JS:   e.message;  e.stack
来源：http://www.sxryk.cn/163mtmzawvc.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.xuanzx.com/163ylpkqzae.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.sxryk.cn/163tbrxgzdw.html

Go:   err.Error()
来源：http://www.sxryk.cn/163thhefttn.html

Ruby: e.message;  e.backtrace
来源：http://www.xuanzx.com/163twuuhlph.html

C#:   e.Message;  e.StackTrace
来源：http://www.aibaodan.cn/163pzrqzyzn.html

[H09] 带错误码的异常
来源：http://www.xuanzx.com/163jmwnubvb.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.xuanzx.com/163fekuziaw.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.xuanzx.com/163pfumoayq.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.aibaodan.cn/163evlpnqso.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.xuanzx.com/163vgqdhgnj.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.sxryk.cn/163psjzopdj.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.aibaodan.cn/163vobrqqwu.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.aibaodan.cn/163pbilcgfo.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.sxryk.cn/163ldpnxlnu.html

[H10] 资源自动释放
来源：http://www.aibaodan.cn/163djtksxhc.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.sxryk.cn/163yzbmiqns.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.xuanzx.com/163rimwlipc.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163cylmgsgr.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163rsvycvmu.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.sxryk.cn/163exruetuo.html

Go:   defer f.Close()
来源：http://www.sxryk.cn/163lbspzrzd.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.aibaodan.cn/163waqjanqp.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.sxryk.cn/163rvupjngr.html

================================================================================
来源：http://www.xuanzx.com/163vbterdfo.html

I. 正则表达式
来源：http://www.sxryk.cn/163jxcpfxba.html

================================================================================
来源：http://www.sxryk.cn/163mssirulb.html

[I01] 判断是否匹配
来源：http://www.aibaodan.cn/163rkzojilg.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.xuanzx.com/163ffcjsnni.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.sxryk.cn/163ylyaklqd.html

JS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163kjdycmzo.html

TS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163szjioxhr.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.sxryk.cn/163wkoxaruo.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.sxryk.cn/163omyhqniw.html

Ruby: s.match?(/\d+/)
来源：http://www.sxryk.cn/163cjdjbjyd.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.sxryk.cn/163lvwlnsxj.html

[I02] 提取所有匹配
来源：http://www.aibaodan.cn/163lzyxoubf.html

Py:   re.findall(r"\d+", s)
来源：http://www.sxryk.cn/163ogvdgbwv.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.sxryk.cn/163mvymoczj.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.aibaodan.cn/163neyqumtc.html

TS:   s.match(/\d+/g)
来源：http://www.xuanzx.com/163weohyhul.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.sxryk.cn/163jarrqtqy.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.xuanzx.com/163chbqvrui.html

Ruby: s.scan(/\d+/)
来源：http://www.aibaodan.cn/163mutddifj.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.sxryk.cn/163jeldozil.html

[I03] 提取捕获分组
来源：http://www.xuanzx.com/163mrijzwhx.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.aibaodan.cn/163ypklpimf.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.xuanzx.com/163bnkytqar.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.aibaodan.cn/163nfmjaule.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.aibaodan.cn/163xnycsxba.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.sxryk.cn/163hvxytybo.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.aibaodan.cn/163sebmpgbe.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.sxryk.cn/163jzaojvma.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.aibaodan.cn/163xcxdapuu.html

[I04] 正则替换
来源：http://www.sxryk.cn/163xzkqcdtj.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.sxryk.cn/163atsaiiur.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163eldxwfjn.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163cpilpscm.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163uhxfmhmv.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.xuanzx.com/163ihllmphu.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.sxryk.cn/163cmbtxmlo.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.xuanzx.com/163gpafnzdr.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.xuanzx.com/163ryujlmjb.html

[I05] 按正则拆分
来源：http://www.xuanzx.com/163czdfzzsu.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.sxryk.cn/163hwwsbusp.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.xuanzx.com/163gqzlyacr.html

JS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163wiqgxhwm.html

TS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163dqtppshb.html

Java: s.split("\\s*,\\s*")
来源：http://www.sxryk.cn/163igsmcout.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.xuanzx.com/163likjkrdo.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163bgbuvdwl.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.aibaodan.cn/163ncrdyddm.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.xuanzx.com/163qpbdeoog.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163xcesotjl.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.sxryk.cn/163egardyri.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163ftsumbbd.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163xjtapurm.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.sxryk.cn/163pkeihrae.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.aibaodan.cn/163prnfvrin.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.aibaodan.cn/163dsevjjzi.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163egykwcru.html

[I07] 忽略大小写与多行模式
来源：http://www.aibaodan.cn/163edexcbhb.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.aibaodan.cn/163xcgcydzw.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.xuanzx.com/163pfersxsy.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.aibaodan.cn/163hcjgnysx.html

TS:   /error/gim
来源：http://www.xuanzx.com/163rvejlwej.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.xuanzx.com/163zrzofseg.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.aibaodan.cn/163dgfkuxir.html

Ruby: s.scan(/error/i)
来源：http://www.aibaodan.cn/163raebusfv.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.aibaodan.cn/163wgepuofq.html

[I08] 贪婪与非贪婪匹配
来源：http://www.sxryk.cn/163lmndnqxw.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.xuanzx.com/163lwspyqwv.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.aibaodan.cn/163fjeodwqq.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163nppzgjep.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163mshfmqin.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.sxryk.cn/163mvyjqwrv.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.sxryk.cn/163wqbattex.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.sxryk.cn/163pxeclhnk.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.aibaodan.cn/163taqzooof.html

================================================================================
来源：http://www.aibaodan.cn/163wmbhtrxp.html

J. 日期与时间
来源：http://www.aibaodan.cn/163gptofwge.html

================================================================================
来源：http://www.xuanzx.com/163gongaxjo.html

[J01] 获取当前时间
来源：http://www.aibaodan.cn/163payndlbf.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.aibaodan.cn/163yabbwclf.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163dvkjifsz.html

JS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163rbkkrthk.html

TS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163hjafbkfj.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.xuanzx.com/163zqfbxwfp.html

Go:   time.Now()
来源：http://www.sxryk.cn/163soyyyfwo.html

Ruby: Time.now
来源：http://www.xuanzx.com/163ycoptaam.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.aibaodan.cn/163oazomwyw.html

[J02] 格式化输出
来源：http://www.sxryk.cn/163bfimhtec.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163rswflxtw.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163dpdrohpl.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.aibaodan.cn/163lbpgjidw.html

TS:   d.toISOString()
来源：http://www.sxryk.cn/163mlaydbxl.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.sxryk.cn/163glivejww.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.sxryk.cn/163elewoxdu.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163knxbrtcd.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.sxryk.cn/163tthyyzwn.html

[J03] 字符串解析为日期
来源：http://www.aibaodan.cn/163ajjzgmmh.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.xuanzx.com/163dfaycbio.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.aibaodan.cn/163mzpsyhtb.html

JS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163haconcjd.html

TS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163axhlboqh.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.xuanzx.com/163tgjaplou.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.aibaodan.cn/163txaajrdl.html

Ruby: Date.parse("2024-01-02")
来源：http://www.sxryk.cn/163cubkdcre.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.aibaodan.cn/163qxjwmxvh.html

[J04] 时间戳与日期互转
来源：http://www.xuanzx.com/163avtofrja.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.sxryk.cn/163uevncmty.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.aibaodan.cn/163dlrqeuun.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.xuanzx.com/163rbzsuref.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.aibaodan.cn/163urxovjus.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.sxryk.cn/163tqpjnzlp.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.sxryk.cn/163mnuenlmk.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.sxryk.cn/163tpejjjlm.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.xuanzx.com/163cfyribzi.html

[J05] 时间加减（加 7 天）
来源：http://www.aibaodan.cn/163xlsymhnb.html

Py:   now + timedelta(days=7)
来源：http://www.aibaodan.cn/163fehiqonm.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.xuanzx.com/163oyiwsoxa.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163kifegbzz.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163ghhqreoa.html

Java: LocalDate.now().plusDays(7)
来源：http://www.sxryk.cn/163qdlnebcl.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.xuanzx.com/163wmoumkxf.html

Ruby: Time.now + 7 * 86400
来源：http://www.xuanzx.com/163zlsdhiag.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.aibaodan.cn/163kbujbpjn.html

[J06] 计算两时间之差
来源：http://www.aibaodan.cn/163yoyvfnvp.html

Py:   (end - start).total_seconds()
来源：http://www.sxryk.cn/163tshmwjwd.html

PHP:  $end->diff($start)->days;
来源：http://www.sxryk.cn/163lymmjqhr.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.sxryk.cn/163pmrduxtu.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.aibaodan.cn/163lqatdfaf.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.sxryk.cn/163txoywacq.html

Go:   end.Sub(start).Hours()
来源：http://www.sxryk.cn/163yenalopa.html

Ruby: end - start                 # 返回秒数
来源：http://www.aibaodan.cn/163nrqgyfdl.html

C#:   (end - start).TotalSeconds
来源：http://www.sxryk.cn/163pbquoftr.html

[J07] 比较两个日期
来源：http://www.aibaodan.cn/163qtktmuzd.html

Py:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163ctnglklj.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.xuanzx.com/163wfbosjnr.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163ckzzoznm.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163xdvqebnp.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.aibaodan.cn/163geuaggqc.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.xuanzx.com/163xeqmcxzu.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163sibvtdcv.html

C#:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163tqkimwck.html

[J08] 提取年月日与星期
来源：http://www.xuanzx.com/163rkspxjvd.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.sxryk.cn/163jpfgrvxo.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.xuanzx.com/163edsygsrx.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.xuanzx.com/163jlhwtysu.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.xuanzx.com/163dcmyiujc.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.sxryk.cn/163yszmfelb.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.aibaodan.cn/163zddtzwsh.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.aibaodan.cn/163xfwlinzd.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.sxryk.cn/163ctytvwpb.html

[J09] 时区处理
来源：http://www.aibaodan.cn/163ztertltz.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.sxryk.cn/163janhfreu.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.sxryk.cn/163gghibqzl.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163puzjisce.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163xjcbjchh.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.aibaodan.cn/163wexdugnn.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.sxryk.cn/163vfzefryh.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.aibaodan.cn/163knuzbjll.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.aibaodan.cn/163fvzgfvav.html

[J10] 取今天 / 本月第一天
来源：http://www.xuanzx.com/163fvuzusfg.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.aibaodan.cn/163abictfdr.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.sxryk.cn/163uovsqrbf.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.sxryk.cn/163haxcmmib.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.aibaodan.cn/163zlyhmzsa.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.aibaodan.cn/163znspyonh.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.xuanzx.com/163sgbyifez.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.aibaodan.cn/163zrkbcahv.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.sxryk.cn/163btjeecnq.html

================================================================================
来源：http://www.sxryk.cn/163hjfjyhcb.html

K. JSON 与序列化
来源：http://www.aibaodan.cn/163becmhhye.html

================================================================================
来源：http://www.aibaodan.cn/163ppcjcuth.html

[K01] 对象转 JSON 字符串
来源：http://www.sxryk.cn/163pisumkvj.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.sxryk.cn/163udzmeujd.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163ksljnvef.html

JS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163hqsrpizp.html

TS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163yuufslqn.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.aibaodan.cn/163uarnpohu.html

Go:   json.Marshal(obj)
来源：http://www.aibaodan.cn/163tqlwomya.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.sxryk.cn/163ucmffuou.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.xuanzx.com/163ozwdrtgr.html

[K02] JSON 字符串转对象
来源：http://www.sxryk.cn/163vxopswyu.html

Py:   json.loads(s)
来源：http://www.aibaodan.cn/163leuhxbmi.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.aibaodan.cn/163slpfmejz.html

JS:   JSON.parse(s)
来源：http://www.sxryk.cn/163mmnxuajk.html

TS:   JSON.parse(s)
来源：http://www.xuanzx.com/163snjwiaje.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.aibaodan.cn/163pvitvevz.html

Go:   json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163zoyfktrn.html

Ruby: JSON.parse(s)
来源：http://www.sxryk.cn/163jiqymacn.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.aibaodan.cn/163rwedmjbr.html

[K03] JSON 美化输出（带缩进）
来源：http://www.xuanzx.com/163qrbxfasr.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.xuanzx.com/163dwebazgt.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163qswrhkdd.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163niqvwtfz.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163cgbsbzpm.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.xuanzx.com/163ifwwdhwg.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.aibaodan.cn/163lyqhazrv.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.sxryk.cn/163obnoitng.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.xuanzx.com/163wcsxqdiv.html

[K04] 读取 JSON 文件
来源：http://www.sxryk.cn/163ibffyacr.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.sxryk.cn/163hmdrenzq.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.aibaodan.cn/163texlkixf.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163ieoehyho.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163ukldccqo.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.sxryk.cn/163shvumemn.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163maipdmeq.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.aibaodan.cn/163olukynll.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.xuanzx.com/163noxyetwt.html

[K05] 深拷贝对象
来源：http://www.xuanzx.com/163lahsyemq.html

Py:   copy.deepcopy(obj)
来源：http://www.xuanzx.com/163rgewiysz.html

PHP:  unserialize(serialize($obj));
来源：http://www.sxryk.cn/163hotnzbqn.html

JS:   structuredClone(obj)
来源：http://www.xuanzx.com/163euicgjdm.html

TS:   structuredClone(obj)
来源：http://www.xuanzx.com/163vbdocafl.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.sxryk.cn/163ouiebdse.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.aibaodan.cn/163kmsdbldv.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.xuanzx.com/163xaponijb.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.aibaodan.cn/163vptshdpa.html


<!-- 参考信息 -->