外链999!wailian999！

Java: try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163rojyrott.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.aibaodan.cn/163cepwenok.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.xuanzx.com/163ulsvgrtl.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.aibaodan.cn/163qmucdhsl.html

[H03] 主动抛出异常
来源：http://www.xuanzx.com/163doxdcimy.html

Py:   raise ValueError("错误信息")
来源：http://www.aibaodan.cn/163mnmbszed.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.xuanzx.com/163gmutcqty.html

JS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163yukifdic.html

TS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163bkxzfqsd.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.aibaodan.cn/163usdoyqmd.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.xuanzx.com/163yrptcytd.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.xuanzx.com/163hnpisery.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.sxryk.cn/163lyhdhdrr.html

[H04] 自定义异常类型
来源：http://www.sxryk.cn/163kfmsqyjz.html

Py:   class MyError(Exception): pass
来源：http://www.aibaodan.cn/163bmgkrxcj.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.xuanzx.com/163bmmgppfk.html

JS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163rxnorbdt.html

TS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163aduluqiw.html

Java: class MyException extends RuntimeException {}
来源：http://www.sxryk.cn/163fqoozjnd.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.sxryk.cn/163ekmeezaz.html

Ruby: class MyError < StandardError; end
来源：http://www.aibaodan.cn/163dqndvwot.html

C#:   class MyException : Exception {}
来源：http://www.aibaodan.cn/163zpppgenn.html

[H05] 捕获特定类型
来源：http://www.aibaodan.cn/163odcubaaa.html

Py:   except ValueError as e:
来源：http://www.sxryk.cn/163hawictgn.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.xuanzx.com/163qqanewfs.html

JS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163dhqiyaif.html

TS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163avkdbnlz.html

Java: catch (IOException | SQLException e) {}
来源：http://www.sxryk.cn/163bewrflln.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.xuanzx.com/163xtkpgvxz.html

Ruby: rescue ArgumentError => e
来源：http://www.sxryk.cn/163qpgzwmqx.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.sxryk.cn/163wkwhyogd.html

[H06] 可选值 / 空值安全访问
来源：http://www.aibaodan.cn/163tmwzoual.html

Py:   value = d.get("k") or default
来源：http://www.aibaodan.cn/163fvujjbxx.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.sxryk.cn/163cgowadkg.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163dslhsabm.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163ycsnwrnl.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.xuanzx.com/163qzasehzs.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.xuanzx.com/163hqdwaguz.html

Ruby: d&.dig(:a, :b)
来源：http://www.aibaodan.cn/163dokravnd.html

C#:   obj?.A?.B ?? default
来源：http://www.aibaodan.cn/163wpiblpwg.html

[H07] 断言
来源：http://www.xuanzx.com/163yoergjtx.html

Py:   assert x > 0, "必须为正"
来源：http://www.xuanzx.com/163iwkotsoy.html

PHP:  assert($x > 0);
来源：http://www.aibaodan.cn/163gvimiybd.html

JS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163hhiljfes.html

TS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163onksjbql.html

Java: assert x > 0 : "必须为正";
来源：http://www.sxryk.cn/163ejdgxghi.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.sxryk.cn/163zgbtkrii.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.aibaodan.cn/163ikhspnbc.html

C#:   Debug.Assert(x > 0);
来源：http://www.xuanzx.com/163xnaqkutb.html

[H08] 获取错误信息与堆栈
来源：http://www.sxryk.cn/163lrvhlapp.html

Py:   str(e);  traceback.format_exc()
来源：http://www.sxryk.cn/163pwoxbkfv.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.sxryk.cn/163rcniknqg.html

JS:   e.message;  e.stack
来源：http://www.sxryk.cn/163afdiqrwm.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.xuanzx.com/163melvxvut.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.aibaodan.cn/163wbfvuzee.html

Go:   err.Error()
来源：http://www.sxryk.cn/163nlgdcyaa.html

Ruby: e.message;  e.backtrace
来源：http://www.aibaodan.cn/163zgnkyszg.html

C#:   e.Message;  e.StackTrace
来源：http://www.xuanzx.com/163idfogzsh.html

[H09] 带错误码的异常
来源：http://www.sxryk.cn/163qwarsnbd.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.xuanzx.com/163qcihxyiz.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.sxryk.cn/163tizlankd.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.aibaodan.cn/163fkghdigw.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.aibaodan.cn/163pkrjzatg.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.xuanzx.com/163zxowldlj.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.xuanzx.com/163kpujhzel.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.xuanzx.com/163cfjkbfqd.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.aibaodan.cn/163wsopggic.html

[H10] 资源自动释放
来源：http://www.aibaodan.cn/163bfdipmrx.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.aibaodan.cn/163zkrpvdwh.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.sxryk.cn/163ckabmpvp.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163ctflfrgj.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163dlacwxok.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.xuanzx.com/163tvcvjkmm.html

Go:   defer f.Close()
来源：http://www.aibaodan.cn/163oboupjlo.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.xuanzx.com/163bxnwnjfc.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.aibaodan.cn/163fmrhrqlc.html

================================================================================
来源：http://www.aibaodan.cn/163djdspulz.html

I. 正则表达式
来源：http://www.sxryk.cn/163ouvxfkoi.html

================================================================================
来源：http://www.sxryk.cn/163qhsjbmwk.html

[I01] 判断是否匹配
来源：http://www.xuanzx.com/163abumxobj.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.aibaodan.cn/163qwzpgvtk.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.xuanzx.com/163paavebpp.html

JS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163ruichqec.html

TS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163jsrzqrpo.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.aibaodan.cn/163xhguqtfz.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.sxryk.cn/163dlrctruy.html

Ruby: s.match?(/\d+/)
来源：http://www.sxryk.cn/163creqzroz.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.sxryk.cn/163cgnihlky.html

[I02] 提取所有匹配
来源：http://www.sxryk.cn/163pixtqurd.html

Py:   re.findall(r"\d+", s)
来源：http://www.sxryk.cn/163exgryody.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.aibaodan.cn/163oatezgdu.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.aibaodan.cn/163xbainslm.html

TS:   s.match(/\d+/g)
来源：http://www.aibaodan.cn/163nrbzxohq.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.sxryk.cn/163gevonrgv.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.aibaodan.cn/163ofgnskfe.html

Ruby: s.scan(/\d+/)
来源：http://www.aibaodan.cn/163rmgghqax.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.sxryk.cn/163ptcblzhb.html

[I03] 提取捕获分组
来源：http://www.sxryk.cn/163llhhqeys.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.aibaodan.cn/163utskbiey.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.sxryk.cn/163iklmdvfu.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.aibaodan.cn/163lbqulmkx.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.aibaodan.cn/163xihacvte.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.sxryk.cn/163qgspbuzm.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.xuanzx.com/163ngfyqzpx.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.xuanzx.com/163fycqulzj.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.sxryk.cn/163rcwzkokl.html

[I04] 正则替换
来源：http://www.xuanzx.com/163edrrqajl.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.sxryk.cn/163twqoiopz.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163lwnollxx.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163euptnrnm.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163aeqnolsj.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.xuanzx.com/163tvalpiop.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.sxryk.cn/163rldgilhk.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.xuanzx.com/163amxmrubf.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.aibaodan.cn/163umztvqvj.html

[I05] 按正则拆分
来源：http://www.xuanzx.com/163larsdplp.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.xuanzx.com/163kcvlznne.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.sxryk.cn/163drsqzyag.html

JS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163rzexowal.html

TS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163lmuracjt.html

Java: s.split("\\s*,\\s*")
来源：http://www.sxryk.cn/163drkkhslf.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.sxryk.cn/163fyclcuuf.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163knnczdls.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.sxryk.cn/163yjnktiua.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.xuanzx.com/163xzsifglv.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163oiqkgrto.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.sxryk.cn/163zexetvvc.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163dbwolaxj.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163mogcarge.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.xuanzx.com/163qdyskelj.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.aibaodan.cn/163hrxdbkek.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.xuanzx.com/163maofnzen.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163dkobcmrh.html

[I07] 忽略大小写与多行模式
来源：http://www.sxryk.cn/163wbjcchfe.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.aibaodan.cn/163vzgyiqfn.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.aibaodan.cn/163scavyusk.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.aibaodan.cn/163aukgyket.html

TS:   /error/gim
来源：http://www.sxryk.cn/163puxtcese.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.sxryk.cn/163vldjlhlq.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.sxryk.cn/163kiqnrwxe.html

Ruby: s.scan(/error/i)
来源：http://www.sxryk.cn/163fvnvrpjr.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.xuanzx.com/163ciqlzhgh.html

[I08] 贪婪与非贪婪匹配
来源：http://www.xuanzx.com/163cbwxxtsw.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.aibaodan.cn/163benmulyd.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.sxryk.cn/163wfxgdghj.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163gwsecstr.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163pgypaipq.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.sxryk.cn/163roxbwhxz.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.aibaodan.cn/163cuvcpvly.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.sxryk.cn/163yydvwnda.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.sxryk.cn/163hpkmhdvo.html

================================================================================
来源：http://www.aibaodan.cn/163xluytyyf.html

J. 日期与时间
来源：http://www.xuanzx.com/163tyzgceng.html

================================================================================
来源：http://www.sxryk.cn/163mhcstwuo.html

[J01] 获取当前时间
来源：http://www.xuanzx.com/163jnoyxduy.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.xuanzx.com/163uvfyfbou.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163yytncfco.html

JS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163lomzrecz.html

TS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163tjdmupsr.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.aibaodan.cn/163yprgmvnu.html

Go:   time.Now()
来源：http://www.sxryk.cn/163endkrdun.html

Ruby: Time.now
来源：http://www.aibaodan.cn/163gxwngzql.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.xuanzx.com/163ivrykuao.html

[J02] 格式化输出
来源：http://www.aibaodan.cn/163psyncrse.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163jsiywdei.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163vlwitifm.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.aibaodan.cn/163xuzuykuo.html

TS:   d.toISOString()
来源：http://www.sxryk.cn/163evwhsfih.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.sxryk.cn/163vilzqyxb.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.sxryk.cn/163kceulkkq.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163glrcfqzn.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.xuanzx.com/163mmgvyfdh.html

[J03] 字符串解析为日期
来源：http://www.xuanzx.com/163walhonik.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.sxryk.cn/163eudaxoca.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.sxryk.cn/163ihtdhrkg.html

JS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163iztbbjmc.html

TS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163isxkgpzg.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.xuanzx.com/163gzfjoeuf.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.aibaodan.cn/163xvrxzeiv.html

Ruby: Date.parse("2024-01-02")
来源：http://www.xuanzx.com/163tnnghilv.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.xuanzx.com/163vzrvemqz.html

[J04] 时间戳与日期互转
来源：http://www.xuanzx.com/163lyvbgpeh.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.sxryk.cn/163jujfjgsb.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.xuanzx.com/163nrycbhmb.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.aibaodan.cn/163mgobcpwb.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.sxryk.cn/163zqgygvta.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.aibaodan.cn/163zkkucjnk.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.sxryk.cn/163gmjugvwf.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.sxryk.cn/163xalhllbi.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.aibaodan.cn/163cqarkgdr.html

[J05] 时间加减（加 7 天）
来源：http://www.xuanzx.com/163rajkhtck.html

Py:   now + timedelta(days=7)
来源：http://www.sxryk.cn/163bibzgaxc.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.aibaodan.cn/163tlwbeuly.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163lbnafmdg.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163wzvllzkd.html

Java: LocalDate.now().plusDays(7)
来源：http://www.aibaodan.cn/163ytolddje.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.sxryk.cn/163qfxhdpae.html

Ruby: Time.now + 7 * 86400
来源：http://www.xuanzx.com/163qlpeyowy.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.sxryk.cn/163wysgpmmq.html

[J06] 计算两时间之差
来源：http://www.xuanzx.com/163uiscfolw.html

Py:   (end - start).total_seconds()
来源：http://www.aibaodan.cn/163cuplmuxf.html

PHP:  $end->diff($start)->days;
来源：http://www.sxryk.cn/163sawysmje.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.aibaodan.cn/163yvynqinj.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.sxryk.cn/163sjhmrkwi.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.aibaodan.cn/163fcznagfx.html

Go:   end.Sub(start).Hours()
来源：http://www.xuanzx.com/163yvcqhgna.html

Ruby: end - start                 # 返回秒数
来源：http://www.sxryk.cn/163cuudspnk.html

C#:   (end - start).TotalSeconds
来源：http://www.sxryk.cn/163gmadyxvv.html

[J07] 比较两个日期
来源：http://www.sxryk.cn/163kwkmdopa.html

Py:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163vrqufpyf.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.sxryk.cn/163radgpcxu.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163tapsgzjy.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163mhdjmjze.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.sxryk.cn/163cmaguaxm.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.aibaodan.cn/163bjhkplsf.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163tyzpatxr.html

C#:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163uxjqxbun.html

[J08] 提取年月日与星期
来源：http://www.xuanzx.com/163zsnaljsq.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.aibaodan.cn/163zwsxtpns.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.aibaodan.cn/163bubaiyxn.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.sxryk.cn/163ktdofkki.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.sxryk.cn/163jtendytm.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.xuanzx.com/163iouoaiha.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.sxryk.cn/163axhxpnyj.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.xuanzx.com/163kmjxqzdc.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.aibaodan.cn/163sgshfsar.html

[J09] 时区处理
来源：http://www.aibaodan.cn/163arsrmoyr.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.xuanzx.com/163xqiujcdm.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.xuanzx.com/163ioztqbre.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163gftowisb.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163vhvtqeqc.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.aibaodan.cn/163hkdhpkuf.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.sxryk.cn/163aajrxbcu.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.aibaodan.cn/163bgnlghpv.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.sxryk.cn/163xqflqglh.html

[J10] 取今天 / 本月第一天
来源：http://www.xuanzx.com/163wmxwruxh.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.sxryk.cn/163knsczgrg.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.xuanzx.com/163aibnbtvq.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.xuanzx.com/163kvpratiz.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.xuanzx.com/163awdetimd.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.aibaodan.cn/163tcayluqj.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.aibaodan.cn/163ozchsdpv.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.aibaodan.cn/163wjhtpjxn.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.xuanzx.com/163xyorulfp.html

================================================================================
来源：http://www.sxryk.cn/163gqgnkcvx.html

K. JSON 与序列化
来源：http://www.aibaodan.cn/163kioqkcsz.html

================================================================================
来源：http://www.xuanzx.com/163atucoeve.html

[K01] 对象转 JSON 字符串
来源：http://www.aibaodan.cn/163opdbokqn.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.aibaodan.cn/163hpcntpgw.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163ocdtzhym.html

JS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163wvifhcyo.html

TS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163qywkkjim.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.aibaodan.cn/163hizfbnng.html

Go:   json.Marshal(obj)
来源：http://www.sxryk.cn/163nzzigjda.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.xuanzx.com/163rxohjonm.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.xuanzx.com/163lseavuhm.html

[K02] JSON 字符串转对象
来源：http://www.aibaodan.cn/163rlvokozi.html

Py:   json.loads(s)
来源：http://www.aibaodan.cn/163yaopoffu.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.xuanzx.com/163aghvmtgw.html

JS:   JSON.parse(s)
来源：http://www.xuanzx.com/163hurznqfl.html

TS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163gakiknhx.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.xuanzx.com/163dcvfzzxc.html

Go:   json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163aewbthuc.html

Ruby: JSON.parse(s)
来源：http://www.xuanzx.com/163wigwekey.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.aibaodan.cn/163sspjorsj.html

[K03] JSON 美化输出（带缩进）
来源：http://www.xuanzx.com/163zlihdbpv.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.xuanzx.com/163jfcrotky.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163ijqlqksp.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163tjnivbau.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163pstifnel.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.aibaodan.cn/163fjvedvxp.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.xuanzx.com/163knbsffrw.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.aibaodan.cn/163nzbakqna.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.aibaodan.cn/163vrbwxnkf.html

[K04] 读取 JSON 文件
来源：http://www.aibaodan.cn/163adpvvatm.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.xuanzx.com/163ihrwptji.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.xuanzx.com/163nxuqffpf.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163smmdazvg.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163frpeuybg.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.aibaodan.cn/163orbgvqcl.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163duchnvng.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.sxryk.cn/163nqyvxjaa.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.aibaodan.cn/163trbuyvxp.html

[K05] 深拷贝对象
来源：http://www.sxryk.cn/163hiamsahu.html

Py:   copy.deepcopy(obj)
来源：http://www.xuanzx.com/163cfbpufwj.html

PHP:  unserialize(serialize($obj));
来源：http://www.sxryk.cn/163dtflrhzo.html

JS:   structuredClone(obj)
来源：http://www.sxryk.cn/163rffryxbh.html

TS:   structuredClone(obj)
来源：http://www.xuanzx.com/163svkrajhq.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.aibaodan.cn/163nnjupwvz.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.xuanzx.com/163dtvtubfz.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.xuanzx.com/163viwjvpel.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.aibaodan.cn/163coealdle.html

[K06] 解析 URL 查询串
来源：http://www.sxryk.cn/163hfgzvtkd.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.aibaodan.cn/163hsmcytpz.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.aibaodan.cn/163penviddq.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163mwjeuzzu.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163bpexdkqn.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.xuanzx.com/163upbvctka.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.aibaodan.cn/163budyksmb.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.xuanzx.com/163wkpmzerl.html


<!-- 参考信息 -->