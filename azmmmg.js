外链999!wailian999！

JS:   get name() { return this._name; }
来源：http://www.sxryk.cn/163jenyqkgt.html

TS:   get name(): string { return this._name; }
来源：http://www.sxryk.cn/163titojpla.html

Java: public String getName() { return name; }
来源：http://www.xuanzx.com/163tbkwykvz.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.sxryk.cn/163ybbgbvrf.html

Ruby: attr_accessor :name
来源：http://www.xuanzx.com/163vxrmvzux.html

C#:   public string Name { get; set; }
来源：http://www.sxryk.cn/163lxwitsqr.html

[G12] 对象转字符串
来源：http://www.sxryk.cn/163damzamgv.html

Py:   def __str__(self): return self.name
来源：http://www.xuanzx.com/163aqgdyaiw.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.sxryk.cn/163xllzrath.html

JS:   toString() { return this.name; }
来源：http://www.aibaodan.cn/163gepyrzin.html

TS:   toString(): string { return this.name; }
来源：http://www.xuanzx.com/163ioearfxe.html

Java: @Override public String toString() { return name; }
来源：http://www.sxryk.cn/163foxtvmjg.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.aibaodan.cn/163tueszdpx.html

Ruby: def to_s; @name; end
来源：http://www.sxryk.cn/163zbvcbcqd.html

C#:   public override string ToString() => Name;
来源：http://www.sxryk.cn/163bozddpox.html

[G13] 判断对象类型
来源：http://www.aibaodan.cn/163jtvijmcv.html

Py:   isinstance(u, User)
来源：http://www.aibaodan.cn/163msmiolrl.html

PHP:  $u instanceof User
来源：http://www.sxryk.cn/163ilwvwnly.html

JS:   u instanceof User
来源：http://www.sxryk.cn/163mgdozcym.html

TS:   u instanceof User
来源：http://www.sxryk.cn/163mydrtnwm.html

Java: u instanceof User
来源：http://www.xuanzx.com/163vtsnffyc.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.xuanzx.com/163hhvocuyi.html

Ruby: u.is_a?(User)
来源：http://www.sxryk.cn/163rpnsslux.html

C#:   u is User
来源：http://www.sxryk.cn/163cojrmibc.html

[G14] 数据类 / record
来源：http://www.xuanzx.com/163biutwouf.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.aibaodan.cn/163teutmsoj.html

PHP:  // 用 readonly 属性模拟
来源：http://www.aibaodan.cn/163rdykbqiw.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.sxryk.cn/163cwrbknuu.html

TS:   type User = { name: string; age: number };
来源：http://www.xuanzx.com/163fitmnkwz.html

Java: record User(String name, int age) {}
来源：http://www.aibaodan.cn/163izkkpvxl.html

Go:   type User struct { Name string; Age int }
来源：http://www.aibaodan.cn/163angbnjme.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.sxryk.cn/163wmzcycjy.html

C#:   record User(string Name, int Age);
来源：http://www.sxryk.cn/163dumtaofc.html

[G15] 枚举
来源：http://www.xuanzx.com/163evfisneq.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.aibaodan.cn/163fttcsdeo.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.aibaodan.cn/163sgazthwe.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.xuanzx.com/163wfynzclv.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163nkadmlin.html

Java: enum Color { RED, GREEN }
来源：http://www.xuanzx.com/163pwdkyejg.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.sxryk.cn/163bjoafwnb.html

Ruby: Color = %i[red green].freeze
来源：http://www.sxryk.cn/163yfpotofz.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163kddvpssj.html

[G16] 对象转数组 / 字典
来源：http://www.aibaodan.cn/163vhtnzvfj.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.xuanzx.com/163jjsovdma.html

PHP:  get_object_vars($obj);
来源：http://www.aibaodan.cn/163yewribdn.html

JS:   Object.entries(obj)
来源：http://www.sxryk.cn/163jpxlnvoz.html

TS:   Object.entries(obj)
来源：http://www.xuanzx.com/163rjlecnqz.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.xuanzx.com/163rbcuvkki.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.aibaodan.cn/163yrxfnxuf.html

Ruby: obj.instance_variables
来源：http://www.xuanzx.com/163cbeajezz.html

C#:   // 用反射或 System.Text.Json
来源：http://www.xuanzx.com/163awqijlns.html

================================================================================
来源：http://www.sxryk.cn/163qidvfibj.html

H. 异常与错误处理
来源：http://www.aibaodan.cn/163wyrulifl.html

================================================================================
来源：http://www.xuanzx.com/163coxwfgeu.html

[H01] try / catch 基础
来源：http://www.aibaodan.cn/163plzdxbof.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.sxryk.cn/163yjxqrelo.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.sxryk.cn/163ibehmdww.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163waraqlah.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.sxryk.cn/163pinhnohc.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.sxryk.cn/163hmvtrxmv.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.aibaodan.cn/163eovejdmg.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.aibaodan.cn/163jdfupjmv.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.xuanzx.com/163smmtecdo.html

[H02] finally / ensure 收尾
来源：http://www.sxryk.cn/163plznaxzk.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.sxryk.cn/163etjdpfca.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163hbakftdl.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163cmtrdhkt.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163ajpzpvrq.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163kzlcbbil.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.xuanzx.com/163adguaars.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.sxryk.cn/163kbgfliyo.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.sxryk.cn/163unycxygu.html

[H03] 主动抛出异常
来源：http://www.xuanzx.com/163wgdlgkog.html

Py:   raise ValueError("错误信息")
来源：http://www.sxryk.cn/163mkjrtdos.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.xuanzx.com/163cvbdfmjz.html

JS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163pfqgnsfs.html

TS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163xcfriowl.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.sxryk.cn/163ycnyhdlj.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.sxryk.cn/163sfzucmiu.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.sxryk.cn/163gbphotsg.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.xuanzx.com/163tazohrha.html

[H04] 自定义异常类型
来源：http://www.xuanzx.com/163bukofwar.html

Py:   class MyError(Exception): pass
来源：http://www.aibaodan.cn/163ohxmjyap.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.xuanzx.com/163zgwehowc.html

JS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163ndfpiapb.html

TS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163dkdnmvhu.html

Java: class MyException extends RuntimeException {}
来源：http://www.sxryk.cn/163ppjcbtip.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.sxryk.cn/163wwfeargt.html

Ruby: class MyError < StandardError; end
来源：http://www.sxryk.cn/163pqysqvlr.html

C#:   class MyException : Exception {}
来源：http://www.sxryk.cn/163djpslrzr.html

[H05] 捕获特定类型
来源：http://www.sxryk.cn/163bhztnjgy.html

Py:   except ValueError as e:
来源：http://www.aibaodan.cn/163imzehcgh.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.xuanzx.com/163qurbkvhk.html

JS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163ybeqmkfx.html

TS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163stczxydx.html

Java: catch (IOException | SQLException e) {}
来源：http://www.aibaodan.cn/163vttwkcid.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.sxryk.cn/163kmourskd.html

Ruby: rescue ArgumentError => e
来源：http://www.aibaodan.cn/163ujigazoa.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.xuanzx.com/163bllzzyym.html

[H06] 可选值 / 空值安全访问
来源：http://www.aibaodan.cn/163tsectbtr.html

Py:   value = d.get("k") or default
来源：http://www.xuanzx.com/163weomcbez.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.aibaodan.cn/163ffmcdnvw.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163cziocjno.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163lvkzbril.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.aibaodan.cn/163aypddorp.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.aibaodan.cn/163zuvwtjsb.html

Ruby: d&.dig(:a, :b)
来源：http://www.xuanzx.com/163zfywyxjb.html

C#:   obj?.A?.B ?? default
来源：http://www.sxryk.cn/163pwptgyhc.html

[H07] 断言
来源：http://www.sxryk.cn/163oincirbp.html

Py:   assert x > 0, "必须为正"
来源：http://www.aibaodan.cn/163uzkqgcjg.html

PHP:  assert($x > 0);
来源：http://www.xuanzx.com/163ubugvlrd.html

JS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163wmotbrlt.html

TS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163nyrcimbm.html

Java: assert x > 0 : "必须为正";
来源：http://www.xuanzx.com/163amjgsokq.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.aibaodan.cn/163vighxlkb.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.xuanzx.com/163ugljphax.html

C#:   Debug.Assert(x > 0);
来源：http://www.aibaodan.cn/163ogflrcce.html

[H08] 获取错误信息与堆栈
来源：http://www.xuanzx.com/163zafcmrij.html

Py:   str(e);  traceback.format_exc()
来源：http://www.xuanzx.com/163jowljmbv.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.xuanzx.com/163kxyekumy.html

JS:   e.message;  e.stack
来源：http://www.xuanzx.com/163aktnmbsj.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.sxryk.cn/163flyzgrgb.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.xuanzx.com/163wncpodkk.html

Go:   err.Error()
来源：http://www.aibaodan.cn/163cowraoqa.html

Ruby: e.message;  e.backtrace
来源：http://www.aibaodan.cn/163wfggeeoy.html

C#:   e.Message;  e.StackTrace
来源：http://www.aibaodan.cn/163kegbkwnk.html

[H09] 带错误码的异常
来源：http://www.xuanzx.com/163ttiidhlg.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.xuanzx.com/163aekualkg.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.sxryk.cn/163qnksioxf.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.sxryk.cn/163uupmeipf.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.sxryk.cn/163avvamhiq.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.aibaodan.cn/163bubukgle.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.aibaodan.cn/163xaolvvuy.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.sxryk.cn/163ugldcczx.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.xuanzx.com/163evrpfqhx.html

[H10] 资源自动释放
来源：http://www.aibaodan.cn/163keljophc.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.sxryk.cn/163fqhbebnz.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.sxryk.cn/163eakzpmsb.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163sjhuifbc.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163zrlptawy.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.xuanzx.com/163xcpbdwkl.html

Go:   defer f.Close()
来源：http://www.xuanzx.com/163uzupaxex.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.aibaodan.cn/163rlpqlqhi.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.xuanzx.com/163husyrkmz.html

================================================================================
来源：http://www.sxryk.cn/163pfwvrtcc.html

I. 正则表达式
来源：http://www.xuanzx.com/163cczscmaj.html

================================================================================
来源：http://www.xuanzx.com/163gsvejtyf.html

[I01] 判断是否匹配
来源：http://www.aibaodan.cn/163uabydxai.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.xuanzx.com/163sqghfroy.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.sxryk.cn/163xreqsdwc.html

JS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163xtrsjyma.html

TS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163teksxgok.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.xuanzx.com/163tgyujrpr.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.aibaodan.cn/163qorxrmxz.html

Ruby: s.match?(/\d+/)
来源：http://www.sxryk.cn/163hjaobshn.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.sxryk.cn/163kkoivdqr.html

[I02] 提取所有匹配
来源：http://www.sxryk.cn/163lsdelwff.html

Py:   re.findall(r"\d+", s)
来源：http://www.xuanzx.com/163qqnmcwya.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.aibaodan.cn/163rhndekqx.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.xuanzx.com/163ieywacyz.html

TS:   s.match(/\d+/g)
来源：http://www.aibaodan.cn/163skuvvtpo.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.aibaodan.cn/163vllqlsog.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.sxryk.cn/163lfatuwgo.html

Ruby: s.scan(/\d+/)
来源：http://www.sxryk.cn/163nahvcbht.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.xuanzx.com/163gqioqdui.html

[I03] 提取捕获分组
来源：http://www.sxryk.cn/163pyjaybxy.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.xuanzx.com/163mjnaygtg.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.sxryk.cn/163hzzafwti.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.sxryk.cn/163xjeynxfc.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.sxryk.cn/163fcjiykbv.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.aibaodan.cn/163mycupxjs.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.sxryk.cn/163vhozyzcl.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.xuanzx.com/163hjzxkknj.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.xuanzx.com/163kysekyst.html

[I04] 正则替换
来源：http://www.xuanzx.com/163ttutohlp.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.aibaodan.cn/163bgsbnmkm.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163ojasemjs.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163fuqendmq.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163vmjqoaku.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.aibaodan.cn/163prsgtxoc.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.xuanzx.com/163mjgfqfet.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.aibaodan.cn/163uxlxfvfd.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.aibaodan.cn/163tdeyvdai.html

[I05] 按正则拆分
来源：http://www.sxryk.cn/163ovijokpk.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.xuanzx.com/163bejjadsd.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.sxryk.cn/163kedyaoml.html

JS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163aocjxyjl.html

TS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163kyiwdpla.html

Java: s.split("\\s*,\\s*")
来源：http://www.sxryk.cn/163oyytfkmb.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.aibaodan.cn/163odiwsnfa.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163ldofrhtj.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.xuanzx.com/163bwechzsj.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.sxryk.cn/163kyazuseb.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163skkgklqj.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.aibaodan.cn/163vdpjxlxu.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163rnnvjcxz.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163wqdjauaz.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.sxryk.cn/163buptfvik.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.aibaodan.cn/163zklsozqd.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.xuanzx.com/163bgyxkrei.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163kwufymfz.html

[I07] 忽略大小写与多行模式
来源：http://www.xuanzx.com/163rplgvowp.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.xuanzx.com/163dxecnxwu.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.aibaodan.cn/163jrclvigt.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.aibaodan.cn/163kvncpcyn.html

TS:   /error/gim
来源：http://www.sxryk.cn/163nueukyjh.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.xuanzx.com/163guhihyha.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.aibaodan.cn/163gusatvhs.html

Ruby: s.scan(/error/i)
来源：http://www.xuanzx.com/163ngwqjbcy.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.sxryk.cn/163tttanzem.html

[I08] 贪婪与非贪婪匹配
来源：http://www.sxryk.cn/163imatqomz.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.aibaodan.cn/163nieqqvhq.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.aibaodan.cn/163gmsxydcl.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163ibbgqvtb.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163assrwsts.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.aibaodan.cn/163rgcdttha.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.xuanzx.com/163vdbhqtdn.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.aibaodan.cn/163vzkzmcdv.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.xuanzx.com/163aqrsrljb.html

================================================================================
来源：http://www.xuanzx.com/163akniwqsa.html

J. 日期与时间
来源：http://www.xuanzx.com/163oyrpxtgh.html

================================================================================
来源：http://www.xuanzx.com/163pxjwrnwv.html

[J01] 获取当前时间
来源：http://www.xuanzx.com/163wbbttdoh.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.sxryk.cn/163qhjpsgjx.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163wkyqgkfe.html

JS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163zuwwqmgy.html

TS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163bgeydmxi.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.aibaodan.cn/163weazecar.html

Go:   time.Now()
来源：http://www.sxryk.cn/163aaffayfm.html

Ruby: Time.now
来源：http://www.sxryk.cn/163jdgcambv.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.aibaodan.cn/163fpphhgij.html

[J02] 格式化输出
来源：http://www.xuanzx.com/163dxknofkm.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163osxdgtqy.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163wqfnsazp.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.xuanzx.com/163vaxtjiiy.html

TS:   d.toISOString()
来源：http://www.sxryk.cn/163ljjjabvj.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.xuanzx.com/163sellbgzf.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.sxryk.cn/163kvcagimp.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163nxcpoefp.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.xuanzx.com/163rarfvkzx.html

[J03] 字符串解析为日期
来源：http://www.xuanzx.com/163iqsacepw.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.aibaodan.cn/163goubocxq.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.xuanzx.com/163qpnjbxhj.html

JS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163qsstcspi.html

TS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163ddeoccvf.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.sxryk.cn/163tadaiaee.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.aibaodan.cn/163cpdqcjmw.html

Ruby: Date.parse("2024-01-02")
来源：http://www.xuanzx.com/163rcmrdtkk.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.sxryk.cn/163swrknnex.html

[J04] 时间戳与日期互转
来源：http://www.xuanzx.com/163ndqidtxk.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.sxryk.cn/163zgvpjmpz.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.xuanzx.com/163hywphsua.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.sxryk.cn/163gjxeifay.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.xuanzx.com/163dlhhfaqq.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.sxryk.cn/163vlurhlfi.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.aibaodan.cn/163sxugbaya.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.xuanzx.com/163kocxcilr.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.xuanzx.com/163qfigcyou.html

[J05] 时间加减（加 7 天）
来源：http://www.sxryk.cn/163pygfmgts.html

Py:   now + timedelta(days=7)
来源：http://www.aibaodan.cn/163djadmmbq.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.sxryk.cn/163biqptorj.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163udbutiok.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163dtzpiujc.html

Java: LocalDate.now().plusDays(7)
来源：http://www.xuanzx.com/163vgzswbmf.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.aibaodan.cn/163iesuzagv.html

Ruby: Time.now + 7 * 86400
来源：http://www.aibaodan.cn/163uhmeotht.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.aibaodan.cn/163kabgpiwi.html

[J06] 计算两时间之差
来源：http://www.aibaodan.cn/163fdzxpqwn.html

Py:   (end - start).total_seconds()
来源：http://www.sxryk.cn/163rliglyac.html

PHP:  $end->diff($start)->days;
来源：http://www.sxryk.cn/163ocqfhuqv.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.xuanzx.com/163skkhmrwa.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.aibaodan.cn/163ecexkglt.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.xuanzx.com/163vfxmoqiy.html

Go:   end.Sub(start).Hours()
来源：http://www.sxryk.cn/163mqrmezwn.html

Ruby: end - start                 # 返回秒数
来源：http://www.sxryk.cn/163anflvsjc.html

C#:   (end - start).TotalSeconds
来源：http://www.aibaodan.cn/163futqvhph.html

[J07] 比较两个日期
来源：http://www.xuanzx.com/163cuoagmsz.html

Py:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163bmnnnlfj.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.aibaodan.cn/163snmyueai.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163aejmahyp.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163urndmoyh.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.xuanzx.com/163svdhtvud.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.sxryk.cn/163vjezjkux.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163rcbbbjvp.html

C#:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163foudqfjp.html

[J08] 提取年月日与星期
来源：http://www.xuanzx.com/163dcyeeslb.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.aibaodan.cn/163bqegkcoi.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.sxryk.cn/163kjlqpkoi.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.xuanzx.com/163dhioolic.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.aibaodan.cn/163edspenip.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.xuanzx.com/163kfqsydni.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.aibaodan.cn/163icizeclv.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.xuanzx.com/163cefrhkyt.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.aibaodan.cn/163hqhfhmft.html

[J09] 时区处理
来源：http://www.xuanzx.com/163tzxdxvae.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.sxryk.cn/163sylajoet.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.sxryk.cn/163ffhrpsrz.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163zejxgzsx.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163euotbqrb.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.xuanzx.com/163nlnzizda.html


<!-- 参考信息 -->