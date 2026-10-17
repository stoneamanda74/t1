外链999!wailian999！

TS:   type User = { name: string; age: number };
来源：http://www.sxryk.cn/163ohrryifz.html

Java: record User(String name, int age) {}
来源：http://www.xuanzx.com/163jwhzdwhu.html

Go:   type User struct { Name string; Age int }
来源：http://www.xuanzx.com/163itlfqfvb.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.aibaodan.cn/163ickjqmld.html

C#:   record User(string Name, int Age);
来源：http://www.xuanzx.com/163bvkwclsq.html

[G15] 枚举
来源：http://www.aibaodan.cn/163itcgsxvo.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.xuanzx.com/163wnwhvzuu.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.aibaodan.cn/163awovgspf.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.aibaodan.cn/163wecgkfzy.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163twodjkqv.html

Java: enum Color { RED, GREEN }
来源：http://www.aibaodan.cn/163xmrfnhra.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.aibaodan.cn/163undtmzxt.html

Ruby: Color = %i[red green].freeze
来源：http://www.sxryk.cn/163vfmntdqu.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163zilykegu.html

[G16] 对象转数组 / 字典
来源：http://www.sxryk.cn/163iphqecee.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.aibaodan.cn/163kjagglve.html

PHP:  get_object_vars($obj);
来源：http://www.aibaodan.cn/163ughogzkz.html

JS:   Object.entries(obj)
来源：http://www.sxryk.cn/163rpnclhsg.html

TS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163uzpblfvm.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.aibaodan.cn/163xmzahlvn.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.xuanzx.com/163wpwfddpo.html

Ruby: obj.instance_variables
来源：http://www.xuanzx.com/163pwyvnjbu.html

C#:   // 用反射或 System.Text.Json
来源：http://www.sxryk.cn/163xcpkwybs.html

================================================================================
来源：http://www.xuanzx.com/163zaqucvgj.html

H. 异常与错误处理
来源：http://www.xuanzx.com/163aezvgzfi.html

================================================================================
来源：http://www.sxryk.cn/163sykhwzeb.html

[H01] try / catch 基础
来源：http://www.xuanzx.com/163aypdsgob.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.sxryk.cn/163fniljpwh.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.xuanzx.com/163sjibvokl.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163eslhkyjl.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.xuanzx.com/163itvhecwt.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.sxryk.cn/163dnrsxhhv.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.sxryk.cn/163cskpzmcj.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.aibaodan.cn/163xwvqrpcf.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.sxryk.cn/163gtygvawt.html

[H02] finally / ensure 收尾
来源：http://www.aibaodan.cn/163wxfhvyfr.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.aibaodan.cn/163fddqvbgp.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163yvfyppdq.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163qftkpunx.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163hdoqzllk.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163lwmfkobq.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.xuanzx.com/163virywuac.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.xuanzx.com/163qxsbheyb.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.aibaodan.cn/163ruikbbks.html

[H03] 主动抛出异常
来源：http://www.aibaodan.cn/163krucmlwa.html

Py:   raise ValueError("错误信息")
来源：http://www.sxryk.cn/163akerxfif.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.aibaodan.cn/163gqottbnz.html

JS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163ojmigynx.html

TS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163dbjxdbhk.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.aibaodan.cn/163feiwdajr.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.xuanzx.com/163hkofwljr.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.sxryk.cn/163coqdrwlx.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.sxryk.cn/163rqonkgqz.html

[H04] 自定义异常类型
来源：http://www.sxryk.cn/163qgarqjmy.html

Py:   class MyError(Exception): pass
来源：http://www.xuanzx.com/163xdvjkmwl.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.xuanzx.com/163wxlyeney.html

JS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163ggfchhva.html

TS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163oezxwrcw.html

Java: class MyException extends RuntimeException {}
来源：http://www.aibaodan.cn/163zgywychs.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.sxryk.cn/163lssjhaxo.html

Ruby: class MyError < StandardError; end
来源：http://www.xuanzx.com/163nnfulwux.html

C#:   class MyException : Exception {}
来源：http://www.sxryk.cn/163pclcatuk.html

[H05] 捕获特定类型
来源：http://www.xuanzx.com/163cvhnkdyd.html

Py:   except ValueError as e:
来源：http://www.aibaodan.cn/163vmdhqsfp.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.aibaodan.cn/163rmnnnufz.html

JS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163izjwpule.html

TS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163lplkxwzx.html

Java: catch (IOException | SQLException e) {}
来源：http://www.aibaodan.cn/163sdwluojq.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.aibaodan.cn/163sbhoodvt.html

Ruby: rescue ArgumentError => e
来源：http://www.aibaodan.cn/163kaghwpsf.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.xuanzx.com/163pvkbawoe.html

[H06] 可选值 / 空值安全访问
来源：http://www.xuanzx.com/163qfjzguws.html

Py:   value = d.get("k") or default
来源：http://www.sxryk.cn/163ngctjjvh.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.aibaodan.cn/163soideneh.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163tnisgcgg.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163ddmsregt.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.xuanzx.com/163swrugyec.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.sxryk.cn/163abyzzysc.html

Ruby: d&.dig(:a, :b)
来源：http://www.sxryk.cn/163owveperc.html

C#:   obj?.A?.B ?? default
来源：http://www.aibaodan.cn/163vnstbzgs.html

[H07] 断言
来源：http://www.aibaodan.cn/163wypfjjub.html

Py:   assert x > 0, "必须为正"
来源：http://www.xuanzx.com/163lyyiaztn.html

PHP:  assert($x > 0);
来源：http://www.sxryk.cn/163xvxqfwgp.html

JS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163lwouxjfo.html

TS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163jmloxcye.html

Java: assert x > 0 : "必须为正";
来源：http://www.aibaodan.cn/163fexjhjcd.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.sxryk.cn/163vflrnusq.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.xuanzx.com/163restuger.html

C#:   Debug.Assert(x > 0);
来源：http://www.sxryk.cn/163tsgxzvrs.html

[H08] 获取错误信息与堆栈
来源：http://www.aibaodan.cn/163nkayfeqb.html

Py:   str(e);  traceback.format_exc()
来源：http://www.sxryk.cn/163adcovemq.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.xuanzx.com/163xiilqvip.html

JS:   e.message;  e.stack
来源：http://www.aibaodan.cn/163ebarajjf.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.sxryk.cn/163vtzbtbln.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.xuanzx.com/163gbgzfwsr.html

Go:   err.Error()
来源：http://www.xuanzx.com/163aczggxza.html

Ruby: e.message;  e.backtrace
来源：http://www.aibaodan.cn/163ixobtvie.html

C#:   e.Message;  e.StackTrace
来源：http://www.xuanzx.com/163alzlrjvj.html

[H09] 带错误码的异常
来源：http://www.sxryk.cn/163vdepinkv.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.xuanzx.com/163acrxreph.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.aibaodan.cn/163evviumiz.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.sxryk.cn/163olpncuod.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.aibaodan.cn/163pgrnmmqu.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.sxryk.cn/163bjqmzerh.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.xuanzx.com/163mqiewkix.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.aibaodan.cn/163nqlbfnpl.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.sxryk.cn/163dywhnsua.html

[H10] 资源自动释放
来源：http://www.sxryk.cn/163xvakbdlg.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.xuanzx.com/163ixcablcs.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.sxryk.cn/163xcllopmf.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163ykhcjobq.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163tymciebo.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.aibaodan.cn/163viquwxkp.html

Go:   defer f.Close()
来源：http://www.aibaodan.cn/163dekmqqhg.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.aibaodan.cn/163uobqxtsb.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.aibaodan.cn/163wtdveavt.html

================================================================================
来源：http://www.xuanzx.com/163slcvcejy.html

I. 正则表达式
来源：http://www.sxryk.cn/163iteqnhfw.html

================================================================================
来源：http://www.sxryk.cn/163cmlivrpr.html

[I01] 判断是否匹配
来源：http://www.sxryk.cn/163wgypuley.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.aibaodan.cn/163knkmfmyz.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.xuanzx.com/163rncophcv.html

JS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163ddnqagiz.html

TS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163ackrqkkq.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.sxryk.cn/163wvvlrjin.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.xuanzx.com/163dgnjgedc.html

Ruby: s.match?(/\d+/)
来源：http://www.aibaodan.cn/163rcxwdyav.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.xuanzx.com/163vzrufcmm.html

[I02] 提取所有匹配
来源：http://www.sxryk.cn/163qgpeamdf.html

Py:   re.findall(r"\d+", s)
来源：http://www.sxryk.cn/163vjurrxaq.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.sxryk.cn/163ejadmrkg.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.sxryk.cn/163adgtlbly.html

TS:   s.match(/\d+/g)
来源：http://www.xuanzx.com/163gunokntk.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.xuanzx.com/163sikevrat.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.sxryk.cn/163fostjkvy.html

Ruby: s.scan(/\d+/)
来源：http://www.sxryk.cn/163ijzlnfjd.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.xuanzx.com/163mtduvhnu.html

[I03] 提取捕获分组
来源：http://www.sxryk.cn/163aoepqezo.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.aibaodan.cn/163wzaxoanz.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.sxryk.cn/163rmxcflmg.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.xuanzx.com/163pgjjmfyd.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.aibaodan.cn/163gujhlqix.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.xuanzx.com/163gzybyifv.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.aibaodan.cn/163ootwbsfp.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.aibaodan.cn/163xmgnwyog.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.aibaodan.cn/163lnrqmucv.html

[I04] 正则替换
来源：http://www.sxryk.cn/163wcvbdrdm.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.aibaodan.cn/163besxyhoy.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163lhhacuhv.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163rknwypis.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163prmrxwlr.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.aibaodan.cn/163lqxadgev.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.sxryk.cn/163cqiydfmi.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.aibaodan.cn/163muduitkw.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.aibaodan.cn/163gxcdzyzp.html

[I05] 按正则拆分
来源：http://www.sxryk.cn/163pfalqijm.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.xuanzx.com/163hgauhlxo.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.aibaodan.cn/163shzekazr.html

JS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163njksavtt.html

TS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163amnfxfra.html

Java: s.split("\\s*,\\s*")
来源：http://www.aibaodan.cn/163dqzjryxc.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.xuanzx.com/163oekirlqw.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163sihqbkdd.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.xuanzx.com/163sfynaosh.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.xuanzx.com/163cpwzrfnj.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163vbyookxo.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.xuanzx.com/163yfkakeys.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163gaowjeyn.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163lcvgrhmb.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.sxryk.cn/163utwxqovv.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.aibaodan.cn/163owqsgueo.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.aibaodan.cn/163rmoghevm.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163srkvhfmn.html

[I07] 忽略大小写与多行模式
来源：http://www.sxryk.cn/163sjlbfsuo.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.sxryk.cn/163alkibbqo.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.xuanzx.com/163cbizcpic.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.aibaodan.cn/163ukatjkjw.html

TS:   /error/gim
来源：http://www.aibaodan.cn/163osuennrp.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.xuanzx.com/163vrliiczr.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.aibaodan.cn/163grjqurog.html

Ruby: s.scan(/error/i)
来源：http://www.sxryk.cn/163elyoeena.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.sxryk.cn/163dkmcyrqj.html

[I08] 贪婪与非贪婪匹配
来源：http://www.sxryk.cn/163uxitvnpw.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.aibaodan.cn/163daxdsewh.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.aibaodan.cn/163smjnghtf.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163senjbscv.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163vxbdmapt.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.aibaodan.cn/163xucrjgxp.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.aibaodan.cn/163wkbqulqb.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.aibaodan.cn/163amhevibc.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.sxryk.cn/163zzewhadp.html

================================================================================
来源：http://www.xuanzx.com/163vwheeqgl.html

J. 日期与时间
来源：http://www.xuanzx.com/163oyqenrlo.html

================================================================================
来源：http://www.xuanzx.com/163zvprfucv.html

[J01] 获取当前时间
来源：http://www.xuanzx.com/163wnqwpqze.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.sxryk.cn/163vgniygun.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163nwgnciba.html

JS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163zahifzfo.html

TS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163dehdseph.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.sxryk.cn/163xjshfcdr.html

Go:   time.Now()
来源：http://www.xuanzx.com/163xdjevdyt.html

Ruby: Time.now
来源：http://www.aibaodan.cn/163inriqkst.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.xuanzx.com/163pwuiwqji.html

[J02] 格式化输出
来源：http://www.sxryk.cn/163clbmhzxa.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163llhhclts.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163ezlvaxcb.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.sxryk.cn/163tskariik.html

TS:   d.toISOString()
来源：http://www.xuanzx.com/163xndasaow.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.xuanzx.com/163msyrfzhm.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.xuanzx.com/163jrvkqggi.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163dersvzns.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.sxryk.cn/163pycyayyj.html

[J03] 字符串解析为日期
来源：http://www.xuanzx.com/163ipvofqyv.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.aibaodan.cn/163qvyankte.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.sxryk.cn/163ieobhofv.html

JS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163ckuqoxfi.html

TS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163ioxpnjuy.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.xuanzx.com/163koqqputv.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.xuanzx.com/163vafglydm.html

Ruby: Date.parse("2024-01-02")
来源：http://www.sxryk.cn/163pgfgztvm.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.sxryk.cn/163seddiqis.html

[J04] 时间戳与日期互转
来源：http://www.sxryk.cn/163rssnfmlk.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.sxryk.cn/163vulcjtxd.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.xuanzx.com/163iebudyol.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.sxryk.cn/163odomfvrg.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.aibaodan.cn/163obgzvnnw.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.sxryk.cn/163mlilbgfe.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.sxryk.cn/163wsavygsz.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.aibaodan.cn/163eonmswiw.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.xuanzx.com/163ypkdkbqg.html

[J05] 时间加减（加 7 天）
来源：http://www.xuanzx.com/163xzmnvnef.html

Py:   now + timedelta(days=7)
来源：http://www.sxryk.cn/163aitsatha.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.aibaodan.cn/163ijkiusyp.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163wuxwkguh.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163wpvidcgm.html

Java: LocalDate.now().plusDays(7)
来源：http://www.sxryk.cn/163rrkkqnvr.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.aibaodan.cn/163ibzdyknw.html

Ruby: Time.now + 7 * 86400
来源：http://www.xuanzx.com/163ajyuzytc.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.xuanzx.com/163xbhkajth.html

[J06] 计算两时间之差
来源：http://www.sxryk.cn/163hxzjhlrz.html

Py:   (end - start).total_seconds()
来源：http://www.aibaodan.cn/163oxnpudcv.html

PHP:  $end->diff($start)->days;
来源：http://www.xuanzx.com/163bwhfprzg.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.sxryk.cn/163eyezimqv.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.sxryk.cn/163njnzoxhw.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.sxryk.cn/163xzistbal.html

Go:   end.Sub(start).Hours()
来源：http://www.aibaodan.cn/163hrxyeako.html

Ruby: end - start                 # 返回秒数
来源：http://www.sxryk.cn/163vymdcvog.html

C#:   (end - start).TotalSeconds
来源：http://www.aibaodan.cn/163ywwsaeqh.html

[J07] 比较两个日期
来源：http://www.aibaodan.cn/163uzicylcq.html

Py:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163vfuowujl.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.aibaodan.cn/163rhefecyu.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163wwopfmnw.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163xzdzrshh.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.aibaodan.cn/163rfwvjnph.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.sxryk.cn/163ktzozwkh.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163rcpkjerc.html

C#:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163lxoewmwb.html

[J08] 提取年月日与星期
来源：http://www.sxryk.cn/163jpskxeet.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.sxryk.cn/163dnycvukv.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.sxryk.cn/163ucwesyye.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.sxryk.cn/163lquqnktl.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.aibaodan.cn/163ikvzblze.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.sxryk.cn/163pcjmeomj.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.aibaodan.cn/163qrqiykxg.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.xuanzx.com/163tmtgpwhb.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.aibaodan.cn/163waktbqeb.html

[J09] 时区处理
来源：http://www.xuanzx.com/163paqwjfaa.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.sxryk.cn/163gwurcoud.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.aibaodan.cn/163wjglgilg.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163lqelrqqo.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163xgvfvccy.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.aibaodan.cn/163qguwahwd.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.sxryk.cn/163glptilgy.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.sxryk.cn/163gnuiwnqp.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.sxryk.cn/163onfrbwhd.html

[J10] 取今天 / 本月第一天
来源：http://www.xuanzx.com/163wrbgwipc.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.xuanzx.com/163phrvrjvc.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.xuanzx.com/163pebftxxx.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.aibaodan.cn/163gcuakwaa.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.xuanzx.com/163klaotavx.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.aibaodan.cn/163xshnseby.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.aibaodan.cn/163zrwldvzx.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.aibaodan.cn/163uzkmxxjb.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.sxryk.cn/163gmdwghld.html

================================================================================
来源：http://www.aibaodan.cn/163jqhvxxxb.html

K. JSON 与序列化
来源：http://www.xuanzx.com/163kwomyqci.html

================================================================================
来源：http://www.aibaodan.cn/163akcsnivo.html

[K01] 对象转 JSON 字符串
来源：http://www.sxryk.cn/163srzqmzhi.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.aibaodan.cn/163eempnwvt.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163vnrjnrgb.html

JS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163llzlpjnj.html

TS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163woevjzef.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.xuanzx.com/163wcgconku.html

Go:   json.Marshal(obj)
来源：http://www.xuanzx.com/163tyqokpdv.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.sxryk.cn/163mmhyuhgi.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.xuanzx.com/163abcqjstz.html

[K02] JSON 字符串转对象
来源：http://www.xuanzx.com/163ooiiqpnd.html

Py:   json.loads(s)
来源：http://www.aibaodan.cn/163jzfpzgnb.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.aibaodan.cn/163uoivuttc.html

JS:   JSON.parse(s)
来源：http://www.sxryk.cn/163qwpitqwo.html


<!-- 参考信息 -->