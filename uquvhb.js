外链999!wailian999！

H. 异常与错误处理
来源：http://www.sxryk.cn/163jqiospzo.html

================================================================================
来源：http://www.sxryk.cn/163bxjefucc.html

[H01] try / catch 基础
来源：http://www.sxryk.cn/163esmtddmb.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.xuanzx.com/163seuugjfw.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.aibaodan.cn/163zasvefgm.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163gqhbsvhs.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.aibaodan.cn/163wapffdqu.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.xuanzx.com/163lzkaimdw.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.xuanzx.com/163crbashyv.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.aibaodan.cn/163einqffrv.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.sxryk.cn/163xdmtlcgy.html

[H02] finally / ensure 收尾
来源：http://www.xuanzx.com/163xyqqqujz.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.aibaodan.cn/163eyrrcdlr.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163ublhzzdf.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163rqjsxlti.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163kwoezbhg.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163gbxavrpf.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.aibaodan.cn/163zzqhossw.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.aibaodan.cn/163ngjbknes.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.xuanzx.com/163qnuoedcr.html

[H03] 主动抛出异常
来源：http://www.sxryk.cn/163ookvqbwf.html

Py:   raise ValueError("错误信息")
来源：http://www.xuanzx.com/163yxamohiv.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.xuanzx.com/163ssgtjsug.html

JS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163sbbclfmz.html

TS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163jnbwxeer.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.xuanzx.com/163fdivcbel.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.sxryk.cn/163fvdqqhck.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.xuanzx.com/163rxeunroq.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.xuanzx.com/163fandbotl.html

[H04] 自定义异常类型
来源：http://www.sxryk.cn/163svfdeqkw.html

Py:   class MyError(Exception): pass
来源：http://www.sxryk.cn/163kvctintk.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.xuanzx.com/163gajiecjb.html

JS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163tguvempq.html

TS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163qcnmlnxk.html

Java: class MyException extends RuntimeException {}
来源：http://www.sxryk.cn/163gyokepuk.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.aibaodan.cn/163zzacyufj.html

Ruby: class MyError < StandardError; end
来源：http://www.aibaodan.cn/163zwriswcs.html

C#:   class MyException : Exception {}
来源：http://www.sxryk.cn/163xmykvfit.html

[H05] 捕获特定类型
来源：http://www.xuanzx.com/163tndwpklp.html

Py:   except ValueError as e:
来源：http://www.sxryk.cn/163ccceutei.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.xuanzx.com/163gvgxubgg.html

JS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163dyrbrgyh.html

TS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163ptqkjvdj.html

Java: catch (IOException | SQLException e) {}
来源：http://www.xuanzx.com/163ffoiikwt.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.aibaodan.cn/163tyrntcfc.html

Ruby: rescue ArgumentError => e
来源：http://www.xuanzx.com/163luhhuqxn.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.aibaodan.cn/163lcgmiyxe.html

[H06] 可选值 / 空值安全访问
来源：http://www.xuanzx.com/163wkykbkzk.html

Py:   value = d.get("k") or default
来源：http://www.aibaodan.cn/163rlbliroo.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.sxryk.cn/163niodjlhw.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163bvfssgvt.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163hjvksioh.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.aibaodan.cn/163nxznabsz.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.xuanzx.com/163kshxweop.html

Ruby: d&.dig(:a, :b)
来源：http://www.xuanzx.com/163ijvjyhec.html

C#:   obj?.A?.B ?? default
来源：http://www.sxryk.cn/163qhclgdtq.html

[H07] 断言
来源：http://www.sxryk.cn/163msaljyzb.html

Py:   assert x > 0, "必须为正"
来源：http://www.sxryk.cn/163ipxazieg.html

PHP:  assert($x > 0);
来源：http://www.xuanzx.com/163tlpmquyc.html

JS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163ujvjigob.html

TS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163cqiyuegp.html

Java: assert x > 0 : "必须为正";
来源：http://www.sxryk.cn/163mcfkwtjh.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.aibaodan.cn/163lwhwiyza.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.aibaodan.cn/163duhpcxdm.html

C#:   Debug.Assert(x > 0);
来源：http://www.xuanzx.com/163izlqstri.html

[H08] 获取错误信息与堆栈
来源：http://www.aibaodan.cn/163dwiookqt.html

Py:   str(e);  traceback.format_exc()
来源：http://www.sxryk.cn/163hdazjggd.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.aibaodan.cn/163zskhymsi.html

JS:   e.message;  e.stack
来源：http://www.sxryk.cn/163vbsifihp.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.aibaodan.cn/163qmpvoanq.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.sxryk.cn/163klppiyxn.html

Go:   err.Error()
来源：http://www.sxryk.cn/163uqktpcuw.html

Ruby: e.message;  e.backtrace
来源：http://www.xuanzx.com/163uvacbusf.html

C#:   e.Message;  e.StackTrace
来源：http://www.aibaodan.cn/163ukalvtjy.html

[H09] 带错误码的异常
来源：http://www.aibaodan.cn/163zcyhhjum.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.sxryk.cn/163gtlmxsju.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.aibaodan.cn/163tkquldye.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.aibaodan.cn/163ncvfzcig.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.aibaodan.cn/163ugejtwxp.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.sxryk.cn/163tecghejm.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.sxryk.cn/163qcyjymjn.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.aibaodan.cn/163cwlswayv.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.aibaodan.cn/163ugquceog.html

[H10] 资源自动释放
来源：http://www.aibaodan.cn/163kkkllcnf.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.sxryk.cn/163sbssncnu.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.sxryk.cn/163vyexoydp.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163lbglixbs.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163gxaxvtin.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.sxryk.cn/163byzvzusb.html

Go:   defer f.Close()
来源：http://www.aibaodan.cn/163estqtuow.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.aibaodan.cn/163szbwlwaf.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.aibaodan.cn/163swwbtvfg.html

================================================================================
来源：http://www.sxryk.cn/163mwwplmuy.html

I. 正则表达式
来源：http://www.sxryk.cn/163wioltlzl.html

================================================================================
来源：http://www.xuanzx.com/163ayubduhe.html

[I01] 判断是否匹配
来源：http://www.aibaodan.cn/163edogypsa.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.xuanzx.com/163byxwtboe.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.xuanzx.com/163jhwyqdaj.html

JS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163dcdbhgzy.html

TS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163zpuuldra.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.xuanzx.com/163mmachypl.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.aibaodan.cn/163nlehefvw.html

Ruby: s.match?(/\d+/)
来源：http://www.aibaodan.cn/163lyoitueg.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.aibaodan.cn/163clugytot.html

[I02] 提取所有匹配
来源：http://www.aibaodan.cn/163wulsizgi.html

Py:   re.findall(r"\d+", s)
来源：http://www.sxryk.cn/163awzvqfpy.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.aibaodan.cn/163duzixsvh.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.xuanzx.com/163laxjamra.html

TS:   s.match(/\d+/g)
来源：http://www.aibaodan.cn/163qftwimaz.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.sxryk.cn/163caaqylen.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.sxryk.cn/163bnuunqqt.html

Ruby: s.scan(/\d+/)
来源：http://www.aibaodan.cn/163pqxjwelp.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.sxryk.cn/163qlnfhqsp.html

[I03] 提取捕获分组
来源：http://www.aibaodan.cn/163baodtbkw.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.aibaodan.cn/163goegbvfl.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.xuanzx.com/163jzplwxgo.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.xuanzx.com/163pthvvwjh.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.xuanzx.com/163uhioptpj.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.xuanzx.com/163hpzgyqeh.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.aibaodan.cn/163fnyaiygh.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.sxryk.cn/163ldaodzvj.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.xuanzx.com/163xyuewvev.html

[I04] 正则替换
来源：http://www.xuanzx.com/163kfhlkpdh.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.sxryk.cn/163zqpuyuln.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163snazugpj.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163flequsis.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163cpkmpjll.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.xuanzx.com/163tiafohse.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.aibaodan.cn/163zvblvulp.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.xuanzx.com/163voxfbyji.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.sxryk.cn/163rjzmgdce.html

[I05] 按正则拆分
来源：http://www.xuanzx.com/163cxapocvq.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.xuanzx.com/163okhlokrd.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.sxryk.cn/163kblsuimm.html

JS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163mldtxaqm.html

TS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163ejpahehq.html

Java: s.split("\\s*,\\s*")
来源：http://www.sxryk.cn/163syjhzjvw.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.xuanzx.com/163wdhddayx.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163qlfjjfob.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.sxryk.cn/163dtkadlid.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.aibaodan.cn/163eunbrdlk.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163argcloli.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.sxryk.cn/163abskwebh.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163btbcobpk.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163gblnugml.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.aibaodan.cn/163euhhwdvi.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.sxryk.cn/163lnbbgckg.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.sxryk.cn/163nrddlgqy.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163uyvzskpe.html

[I07] 忽略大小写与多行模式
来源：http://www.aibaodan.cn/163cvbjdunp.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.xuanzx.com/163onexlthk.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.sxryk.cn/163bovjhakq.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.sxryk.cn/163zkeegwka.html

TS:   /error/gim
来源：http://www.xuanzx.com/163nefhbjdf.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.aibaodan.cn/163eibodyhn.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.aibaodan.cn/163nhiydvbc.html

Ruby: s.scan(/error/i)
来源：http://www.xuanzx.com/163ixoocret.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.sxryk.cn/163jqxurwon.html

[I08] 贪婪与非贪婪匹配
来源：http://www.xuanzx.com/163kcwgdsto.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.xuanzx.com/163kqknycjo.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.sxryk.cn/163qtdxapkz.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163msxjimor.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163gyikdgya.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.aibaodan.cn/163rgaleepk.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.sxryk.cn/163ypaegnic.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.aibaodan.cn/163wsxugbso.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.aibaodan.cn/163btsgtknf.html

================================================================================
来源：http://www.aibaodan.cn/163akwndklc.html

J. 日期与时间
来源：http://www.aibaodan.cn/163waucsnww.html

================================================================================
来源：http://www.xuanzx.com/163ljgrrwgh.html

[J01] 获取当前时间
来源：http://www.aibaodan.cn/163kfkibcbg.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.aibaodan.cn/163gddleqar.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163igxkymkm.html

JS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163dacuyjur.html

TS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163zujpnadc.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.aibaodan.cn/163ydjdqipq.html

Go:   time.Now()
来源：http://www.xuanzx.com/163jtkmwmtr.html

Ruby: Time.now
来源：http://www.aibaodan.cn/163nrowxecg.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.sxryk.cn/163qjpjohex.html

[J02] 格式化输出
来源：http://www.sxryk.cn/163golzvgyg.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163tgnhksbg.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163ckvfajmt.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.sxryk.cn/163igaqlxsc.html

TS:   d.toISOString()
来源：http://www.aibaodan.cn/163kmalvosk.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.xuanzx.com/163tuoetaow.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.sxryk.cn/163mecoofki.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163butiqzxm.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.sxryk.cn/163sbfcorxs.html

[J03] 字符串解析为日期
来源：http://www.xuanzx.com/163mxudrjrb.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.aibaodan.cn/163lovweyij.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.xuanzx.com/163isbwgpcj.html

JS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163bfjhvmna.html

TS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163bqbqbqlw.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.sxryk.cn/163kvzycedr.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.xuanzx.com/163eramjaoa.html

Ruby: Date.parse("2024-01-02")
来源：http://www.sxryk.cn/163vjtcavpm.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.xuanzx.com/163oqcsqlvg.html

[J04] 时间戳与日期互转
来源：http://www.sxryk.cn/163oxlsojjk.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.sxryk.cn/163sspkqzfr.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.aibaodan.cn/163tuizlolk.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.xuanzx.com/163ylyrbdsz.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.aibaodan.cn/163nbupursj.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.aibaodan.cn/163qlggadrm.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.sxryk.cn/163vnejaotj.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.aibaodan.cn/163xfqysrzf.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.aibaodan.cn/163dnnjnhyi.html

[J05] 时间加减（加 7 天）
来源：http://www.sxryk.cn/163pulzhhjt.html

Py:   now + timedelta(days=7)
来源：http://www.sxryk.cn/163weicgrmr.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.sxryk.cn/163odnqssev.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163xfsnpvcv.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163ordgxukz.html

Java: LocalDate.now().plusDays(7)
来源：http://www.xuanzx.com/163bgqtynax.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.sxryk.cn/163ntqxfpex.html

Ruby: Time.now + 7 * 86400
来源：http://www.aibaodan.cn/163gwfvmjjl.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.aibaodan.cn/163tdvsoeud.html

[J06] 计算两时间之差
来源：http://www.sxryk.cn/163ydvaozoj.html

Py:   (end - start).total_seconds()
来源：http://www.aibaodan.cn/163fqvyrefw.html

PHP:  $end->diff($start)->days;
来源：http://www.sxryk.cn/163kpqguyza.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.aibaodan.cn/163gmtxrobr.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.sxryk.cn/163rggsstpe.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.aibaodan.cn/163sgoiuspi.html

Go:   end.Sub(start).Hours()
来源：http://www.xuanzx.com/163uzhtnksm.html

Ruby: end - start                 # 返回秒数
来源：http://www.aibaodan.cn/163zbbckets.html

C#:   (end - start).TotalSeconds
来源：http://www.aibaodan.cn/163cpxqzlak.html

[J07] 比较两个日期
来源：http://www.aibaodan.cn/163frszcplf.html

Py:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163khfbbqlf.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.xuanzx.com/163chdbqxuq.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163ezbrqmqj.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163sugpznab.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.aibaodan.cn/163wtrsuxte.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.aibaodan.cn/163vjkhfekr.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163xurwwpno.html

C#:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163gmkreygk.html

[J08] 提取年月日与星期
来源：http://www.sxryk.cn/163zbdrzpxb.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.aibaodan.cn/163lqnjdkmt.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.xuanzx.com/163lbrggkfl.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.sxryk.cn/163urytkylg.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.aibaodan.cn/163jdbclvoi.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.xuanzx.com/163crtnkulu.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.sxryk.cn/163jjdlrclh.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.sxryk.cn/163dhgozrpc.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.aibaodan.cn/163bzqkwuzd.html

[J09] 时区处理
来源：http://www.xuanzx.com/163mnglzpor.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.xuanzx.com/163twbrvfxh.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.xuanzx.com/163hyvjmybc.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163fvhzrhdb.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163difbthpf.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.aibaodan.cn/163kgxaqopd.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.aibaodan.cn/163pjygtdwv.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.aibaodan.cn/163qrkdtwit.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.xuanzx.com/163rajbkjhh.html

[J10] 取今天 / 本月第一天
来源：http://www.sxryk.cn/163zdawmtxr.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.aibaodan.cn/163ucisyxfo.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.xuanzx.com/163pkdiouvu.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.xuanzx.com/163zbkhsorj.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.aibaodan.cn/163iyfpjfun.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.xuanzx.com/163saxchfdh.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.sxryk.cn/163phejmsjd.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.xuanzx.com/163yfhromag.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.xuanzx.com/163mevxiixq.html

================================================================================
来源：http://www.aibaodan.cn/163jajeauev.html

K. JSON 与序列化
来源：http://www.sxryk.cn/163yffkvglq.html

================================================================================
来源：http://www.xuanzx.com/163bpboqmnj.html

[K01] 对象转 JSON 字符串
来源：http://www.sxryk.cn/163kfrdxhsl.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.xuanzx.com/163pmfawhav.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163uahrfobj.html

JS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163wtbudcqb.html

TS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163xbeqzjca.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.xuanzx.com/163aeyepbkv.html

Go:   json.Marshal(obj)
来源：http://www.xuanzx.com/163ruqeqtvx.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.xuanzx.com/163ekgtmfkn.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.sxryk.cn/163rginxdid.html

[K02] JSON 字符串转对象
来源：http://www.xuanzx.com/163wpnntody.html

Py:   json.loads(s)
来源：http://www.sxryk.cn/163ynrwfeth.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.aibaodan.cn/163qgzgovkg.html

JS:   JSON.parse(s)
来源：http://www.sxryk.cn/163rkypqrxh.html

TS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163qfelhvgf.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.sxryk.cn/163ktflcooj.html

Go:   json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163hqfshrkb.html

Ruby: JSON.parse(s)
来源：http://www.aibaodan.cn/163bckksbpq.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.xuanzx.com/163iietovkq.html

[K03] JSON 美化输出（带缩进）
来源：http://www.xuanzx.com/163ujusrvxg.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.aibaodan.cn/163ygcxkczh.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163gxwbgvse.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163pyacmvlt.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163rgzuixve.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.xuanzx.com/163nmduktbh.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.aibaodan.cn/163axhdgqic.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.xuanzx.com/163zsrjdhqp.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.aibaodan.cn/163rncmjwjd.html

[K04] 读取 JSON 文件
来源：http://www.aibaodan.cn/163zhvbptjg.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.xuanzx.com/163uwrxxgei.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.aibaodan.cn/163csmnvqqq.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163tormuccp.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163htqjbjre.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.xuanzx.com/163stbgxdru.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163oxxnprxw.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.xuanzx.com/163yvskzsfn.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.aibaodan.cn/163pyjfsytn.html

[K05] 深拷贝对象
来源：http://www.sxryk.cn/163rmodbgmc.html


<!-- 参考信息 -->