外链999!wailian999！

PHP:  get_object_vars($obj);
来源：http://www.xuanzx.com/163xfhzkyyc.html

JS:   Object.entries(obj)
来源：http://www.xuanzx.com/163rmrbxusw.html

TS:   Object.entries(obj)
来源：http://www.xuanzx.com/163lsygqhth.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.sxryk.cn/163fazhoblk.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.sxryk.cn/163cvauryes.html

Ruby: obj.instance_variables
来源：http://www.sxryk.cn/163tfgynkkg.html

C#:   // 用反射或 System.Text.Json
来源：http://www.sxryk.cn/163idtuvvjp.html

================================================================================
来源：http://www.aibaodan.cn/163fmqyrdeh.html

H. 异常与错误处理
来源：http://www.xuanzx.com/163fhncnshq.html

================================================================================
来源：http://www.sxryk.cn/163tykivkfw.html

[H01] try / catch 基础
来源：http://www.aibaodan.cn/163ixnvxgjs.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.xuanzx.com/163fjcgbrwp.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.xuanzx.com/163etndmwyj.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163qpeqbgak.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.xuanzx.com/163rgtqduts.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.sxryk.cn/163vedvmqyr.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.sxryk.cn/163wpyuttnv.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.sxryk.cn/163pmhymwdx.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.xuanzx.com/163vyactsyj.html

[H02] finally / ensure 收尾
来源：http://www.xuanzx.com/163wtmjvwlr.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.aibaodan.cn/163pghebxdl.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163xkvvpqqe.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163glkfcczq.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163kowhhvhe.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163nogjnqoz.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.aibaodan.cn/163xwgdeljz.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.xuanzx.com/163thhdjmay.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.sxryk.cn/163gpxwsefg.html

[H03] 主动抛出异常
来源：http://www.aibaodan.cn/163lwgxxolc.html

Py:   raise ValueError("错误信息")
来源：http://www.aibaodan.cn/163ydgxiyqd.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.sxryk.cn/163gqfblvcd.html

JS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163fxtnuhmh.html

TS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163qmsujmzk.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.aibaodan.cn/163rgzsjvkj.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.sxryk.cn/163lelpxdwr.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.aibaodan.cn/163qqsxcjeh.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.sxryk.cn/163qlvzgtfd.html

[H04] 自定义异常类型
来源：http://www.xuanzx.com/163ixbwwkzz.html

Py:   class MyError(Exception): pass
来源：http://www.aibaodan.cn/163zffblnov.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.aibaodan.cn/163wsgdfqtc.html

JS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163hfububmi.html

TS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163bnpsohvv.html

Java: class MyException extends RuntimeException {}
来源：http://www.sxryk.cn/163ogisllcy.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.sxryk.cn/163fvjjpanz.html

Ruby: class MyError < StandardError; end
来源：http://www.aibaodan.cn/163qimyvnkg.html

C#:   class MyException : Exception {}
来源：http://www.xuanzx.com/163cdhomfle.html

[H05] 捕获特定类型
来源：http://www.sxryk.cn/163lrywwoxj.html

Py:   except ValueError as e:
来源：http://www.sxryk.cn/163igtpdgus.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.aibaodan.cn/163fjdlqmbu.html

JS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163qrldhlil.html

TS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163jbvebmwi.html

Java: catch (IOException | SQLException e) {}
来源：http://www.aibaodan.cn/163ywgcbrir.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.xuanzx.com/163slwdffrh.html

Ruby: rescue ArgumentError => e
来源：http://www.xuanzx.com/163cvcvtqoe.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.sxryk.cn/163vgkdemhx.html

[H06] 可选值 / 空值安全访问
来源：http://www.aibaodan.cn/163xkqzzyye.html

Py:   value = d.get("k") or default
来源：http://www.xuanzx.com/163hgmhkowz.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.sxryk.cn/163ujfebftd.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163ehdwzvku.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163djvgbbyo.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.xuanzx.com/163dnkpfwlz.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.aibaodan.cn/163jenemglm.html

Ruby: d&.dig(:a, :b)
来源：http://www.aibaodan.cn/163jlmzefwz.html

C#:   obj?.A?.B ?? default
来源：http://www.sxryk.cn/163ndwjaeld.html

[H07] 断言
来源：http://www.sxryk.cn/163swlcdbiz.html

Py:   assert x > 0, "必须为正"
来源：http://www.sxryk.cn/163nqvoemmj.html

PHP:  assert($x > 0);
来源：http://www.aibaodan.cn/163jkhaigqa.html

JS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163tbktnkuy.html

TS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163rqxsitne.html

Java: assert x > 0 : "必须为正";
来源：http://www.xuanzx.com/163ytoewvmm.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.xuanzx.com/163ljdqrkai.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.aibaodan.cn/163lbrqsngn.html

C#:   Debug.Assert(x > 0);
来源：http://www.xuanzx.com/163hupodupv.html

[H08] 获取错误信息与堆栈
来源：http://www.xuanzx.com/163dlafhvni.html

Py:   str(e);  traceback.format_exc()
来源：http://www.xuanzx.com/163dkkggqro.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.xuanzx.com/163dczqpeqt.html

JS:   e.message;  e.stack
来源：http://www.xuanzx.com/163jnrjhlhz.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.sxryk.cn/163dvicpshb.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.sxryk.cn/163jbgioldt.html

Go:   err.Error()
来源：http://www.xuanzx.com/163lzsledmd.html

Ruby: e.message;  e.backtrace
来源：http://www.sxryk.cn/163ttrryhnx.html

C#:   e.Message;  e.StackTrace
来源：http://www.xuanzx.com/163nnxkzhoh.html

[H09] 带错误码的异常
来源：http://www.aibaodan.cn/163zzjftkuu.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.aibaodan.cn/163dgzggfyz.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.sxryk.cn/163qdxgeakw.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.aibaodan.cn/163twopuwvi.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.xuanzx.com/163oxspplwu.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.sxryk.cn/163ftrgfqim.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.xuanzx.com/163wbrlpeam.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.sxryk.cn/163wfckyghr.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.xuanzx.com/163vocarrtr.html

[H10] 资源自动释放
来源：http://www.sxryk.cn/163kcnqlqyq.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.sxryk.cn/163nvzhcqon.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.aibaodan.cn/163plvrxujw.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163umdliffu.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163ppdjuhea.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.xuanzx.com/163mvgosvnu.html

Go:   defer f.Close()
来源：http://www.aibaodan.cn/163xntmqtft.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.xuanzx.com/163hfmszxfh.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.sxryk.cn/163omvermzl.html

================================================================================
来源：http://www.aibaodan.cn/163velyueyn.html

I. 正则表达式
来源：http://www.sxryk.cn/163mnbmnkha.html

================================================================================
来源：http://www.aibaodan.cn/163dctjiplx.html

[I01] 判断是否匹配
来源：http://www.aibaodan.cn/163wmpbfdti.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.aibaodan.cn/163gcaftxxh.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.xuanzx.com/163ouxgfxxa.html

JS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163foparqhi.html

TS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163hhvmwvlj.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.sxryk.cn/163whhcmrsq.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.xuanzx.com/163vpoywwgg.html

Ruby: s.match?(/\d+/)
来源：http://www.xuanzx.com/163snpkqznf.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.aibaodan.cn/163yrzmskee.html

[I02] 提取所有匹配
来源：http://www.sxryk.cn/163jmaaaacr.html

Py:   re.findall(r"\d+", s)
来源：http://www.sxryk.cn/163kmjsglzz.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.xuanzx.com/163ugrxjauq.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.sxryk.cn/163rixvwoau.html

TS:   s.match(/\d+/g)
来源：http://www.xuanzx.com/163hancwlkf.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.xuanzx.com/163kfkmssot.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.aibaodan.cn/163xvqdwvzq.html

Ruby: s.scan(/\d+/)
来源：http://www.sxryk.cn/163iacukenz.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.aibaodan.cn/163zouiybrj.html

[I03] 提取捕获分组
来源：http://www.sxryk.cn/163ycotlbfc.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.xuanzx.com/163bqqkvqwl.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.xuanzx.com/163qrtoqleg.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.aibaodan.cn/163ougtwaae.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.xuanzx.com/163qdovkory.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.sxryk.cn/163vqdtshdx.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.xuanzx.com/163qagvijku.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.aibaodan.cn/163xvznlcdc.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.xuanzx.com/163iagyresx.html

[I04] 正则替换
来源：http://www.sxryk.cn/163mckvozjl.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.aibaodan.cn/163nxjwpgqc.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163yuifwjzq.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163lguaydsr.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163nummabym.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.sxryk.cn/163gxlcfrnq.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.aibaodan.cn/163deillhaq.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.xuanzx.com/163jfevxwlg.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.xuanzx.com/163wktfamoj.html

[I05] 按正则拆分
来源：http://www.xuanzx.com/163mothhdpr.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.xuanzx.com/163vqxulupc.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.sxryk.cn/163bnwtfofj.html

JS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163mfroiakt.html

TS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163mkmdhhgh.html

Java: s.split("\\s*,\\s*")
来源：http://www.xuanzx.com/163ewlfzsga.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.sxryk.cn/163fvfqgcnq.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163dcdcmlyq.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.aibaodan.cn/163vdwzbxfp.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.aibaodan.cn/163junvqqum.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163ajrjakqs.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.xuanzx.com/163fmzpczhg.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163kloqsfze.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163uiiiaqbg.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.sxryk.cn/163cygaapyw.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.sxryk.cn/163ntmuspek.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.xuanzx.com/163jbdlgmoi.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163unmckbxw.html

[I07] 忽略大小写与多行模式
来源：http://www.aibaodan.cn/163nzygiubf.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.sxryk.cn/163jgzfuhlj.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.sxryk.cn/163rlimrumu.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.sxryk.cn/163jstjdclv.html

TS:   /error/gim
来源：http://www.sxryk.cn/163lgmgxhbh.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.aibaodan.cn/163ytsnorwr.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.sxryk.cn/163ewfijsmx.html

Ruby: s.scan(/error/i)
来源：http://www.xuanzx.com/163paylodkd.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.xuanzx.com/163edlzrkzd.html

[I08] 贪婪与非贪婪匹配
来源：http://www.sxryk.cn/163gpdszitt.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.xuanzx.com/163vqbxzgus.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.aibaodan.cn/163gyipadcj.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163nnvwoipq.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163kpobimhx.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.xuanzx.com/163ebtuegtq.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.aibaodan.cn/163johibfst.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.aibaodan.cn/163xljipftv.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.sxryk.cn/163ktylaavc.html

================================================================================
来源：http://www.xuanzx.com/163atqbzlms.html

J. 日期与时间
来源：http://www.aibaodan.cn/163arhbxshr.html

================================================================================
来源：http://www.xuanzx.com/163inhdfhmc.html

[J01] 获取当前时间
来源：http://www.aibaodan.cn/163bpnhrxao.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.sxryk.cn/163gzxdmgnk.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163diqwqpgq.html

JS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163uapihzvx.html

TS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163tszeznen.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.sxryk.cn/163dbngmeil.html

Go:   time.Now()
来源：http://www.sxryk.cn/163lcfhbjdi.html

Ruby: Time.now
来源：http://www.xuanzx.com/163xoggbcsw.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.aibaodan.cn/163ujuxjlyc.html

[J02] 格式化输出
来源：http://www.aibaodan.cn/163lobsqtjp.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163gcfuiwnj.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163bjmeamdg.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.sxryk.cn/163dyyryzay.html

TS:   d.toISOString()
来源：http://www.xuanzx.com/163wfvjkkwo.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.sxryk.cn/163fjgszixb.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.aibaodan.cn/163gzcfubjv.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163qedcynri.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.aibaodan.cn/163djxrceal.html

[J03] 字符串解析为日期
来源：http://www.sxryk.cn/163wnwnwpzu.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.sxryk.cn/163kjgvwiqz.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.aibaodan.cn/163gwquvpne.html

JS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163ydclheca.html

TS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163uvqeyixl.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.aibaodan.cn/163cwgvjxvf.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.aibaodan.cn/163meruxzxg.html

Ruby: Date.parse("2024-01-02")
来源：http://www.xuanzx.com/163nozngejm.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.sxryk.cn/163kkwljvut.html

[J04] 时间戳与日期互转
来源：http://www.sxryk.cn/163qqtgipwq.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.sxryk.cn/163zfnmhcrt.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.aibaodan.cn/163qcmlmhvd.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.xuanzx.com/163svvdbbla.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.xuanzx.com/163hyrqhtlg.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.xuanzx.com/163tqztegbo.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.aibaodan.cn/163ealdlhdi.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.aibaodan.cn/163hpocdwgg.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.xuanzx.com/163rlnjuvxm.html

[J05] 时间加减（加 7 天）
来源：http://www.aibaodan.cn/163kuzhufhj.html

Py:   now + timedelta(days=7)
来源：http://www.sxryk.cn/163jwmktrai.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.aibaodan.cn/163ygpshsdd.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163unhepsxc.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163buevytve.html

Java: LocalDate.now().plusDays(7)
来源：http://www.sxryk.cn/163yhsaluah.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.aibaodan.cn/163btoxjdsq.html

Ruby: Time.now + 7 * 86400
来源：http://www.sxryk.cn/163chtkgtol.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.sxryk.cn/163vrsnhwro.html

[J06] 计算两时间之差
来源：http://www.sxryk.cn/163xzahsexi.html

Py:   (end - start).total_seconds()
来源：http://www.xuanzx.com/163seglnzhw.html

PHP:  $end->diff($start)->days;
来源：http://www.xuanzx.com/163xczxbmja.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.sxryk.cn/163txxymaxp.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.sxryk.cn/163ngkfzqkw.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.sxryk.cn/163dizmfnoe.html

Go:   end.Sub(start).Hours()
来源：http://www.sxryk.cn/163vossmjvq.html

Ruby: end - start                 # 返回秒数
来源：http://www.aibaodan.cn/163ojstxsqa.html

C#:   (end - start).TotalSeconds
来源：http://www.xuanzx.com/163gseymxcb.html

[J07] 比较两个日期
来源：http://www.sxryk.cn/163tufqtysf.html

Py:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163dtaucitn.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.sxryk.cn/163ncqpofsi.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163fbcqjhqc.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163doroliyo.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.aibaodan.cn/163rgvbsfom.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.sxryk.cn/163hztkjwso.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163fjaslkca.html

C#:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163vhznwvlc.html

[J08] 提取年月日与星期
来源：http://www.sxryk.cn/163yfdzgiak.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.aibaodan.cn/163vdmpclox.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.xuanzx.com/163cxywluen.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.aibaodan.cn/163txqawlyh.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.aibaodan.cn/163hyjcabvx.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.xuanzx.com/163weazkgmz.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.sxryk.cn/163ilwkekez.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.xuanzx.com/163novevevg.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.sxryk.cn/163bahciqcq.html

[J09] 时区处理
来源：http://www.xuanzx.com/163ziipqwnz.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.xuanzx.com/163hjspbrbw.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.aibaodan.cn/163hwfbqslt.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163oatwjuxc.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163lvtmhlil.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.aibaodan.cn/163dezochrn.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.sxryk.cn/163gdjxynaj.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.aibaodan.cn/163myqaovtt.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.sxryk.cn/163ltuuibyc.html

[J10] 取今天 / 本月第一天
来源：http://www.xuanzx.com/163dsndeddg.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.aibaodan.cn/163trgcrnbf.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.xuanzx.com/163mkehtisu.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.xuanzx.com/163ttejwqhu.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.aibaodan.cn/163rjdpicty.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.sxryk.cn/163chayllel.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.aibaodan.cn/163ecnoidas.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.xuanzx.com/163pgaggdmo.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.aibaodan.cn/163hhlrrrkl.html

================================================================================
来源：http://www.sxryk.cn/163vjlinvla.html

K. JSON 与序列化
来源：http://www.sxryk.cn/163wpxnkdnb.html

================================================================================
来源：http://www.sxryk.cn/163bpldwigf.html

[K01] 对象转 JSON 字符串
来源：http://www.sxryk.cn/163ybaoobqu.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.xuanzx.com/163uhaqbanw.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163vkbglacj.html

JS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163ynzygqbl.html

TS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163mefevpbe.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.aibaodan.cn/163emchhidq.html

Go:   json.Marshal(obj)
来源：http://www.xuanzx.com/163xhtwqbbz.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.aibaodan.cn/163jstudqtd.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.sxryk.cn/163rhmhqqtx.html

[K02] JSON 字符串转对象
来源：http://www.xuanzx.com/163hkdyoiuh.html

Py:   json.loads(s)
来源：http://www.xuanzx.com/163olczmatc.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.xuanzx.com/163gaqiqimh.html

JS:   JSON.parse(s)
来源：http://www.xuanzx.com/163lbbmgijv.html

TS:   JSON.parse(s)
来源：http://www.sxryk.cn/163laejekki.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.xuanzx.com/163oymjcogn.html

Go:   json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163nfvkwrvl.html

Ruby: JSON.parse(s)
来源：http://www.sxryk.cn/163zkhvdvbw.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.xuanzx.com/163bfxfaplf.html

[K03] JSON 美化输出（带缩进）
来源：http://www.sxryk.cn/163oukaifkm.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.xuanzx.com/163pnwxnfev.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163fokdcvhx.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163aghtdclg.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163nmyznblp.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.aibaodan.cn/163wbphsofg.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.sxryk.cn/163awnzgpqw.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.aibaodan.cn/163stbvafoe.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.sxryk.cn/163tkkvgntr.html

[K04] 读取 JSON 文件
来源：http://www.aibaodan.cn/163iejhesbr.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.aibaodan.cn/163otswmdsj.html


<!-- 参考信息 -->