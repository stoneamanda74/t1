外链999!wailian999！

Java: interface Shape { double area(); }
来源：http://www.xuanzx.com/163xiufeccx.html

Go:   type Shape interface { Area() float64 }
来源：http://www.sxryk.cn/163mkwlazvr.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.xuanzx.com/163ubwampzr.html

C#:   interface IShape { double Area(); }
来源：http://www.xuanzx.com/163ieltuiqd.html

[G10] 访问控制
来源：http://www.sxryk.cn/163rpyvenvh.html

Py:   约定 _protected / __private（不强制）
来源：http://www.sxryk.cn/163fxcwxsnt.html

PHP:  public / protected / private
来源：http://www.sxryk.cn/163fdxvtgfu.html

JS:   #private 字段；其余公开
来源：http://www.xuanzx.com/163siozyssn.html

TS:   public / protected / private
来源：http://www.xuanzx.com/163rhqodoll.html

Java: public / protected / private / 默认包级
来源：http://www.aibaodan.cn/163kthdnuun.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.sxryk.cn/163rvreydlf.html

Ruby: public / protected / private
来源：http://www.aibaodan.cn/163cednpmdt.html

C#:   public / protected / private / internal
来源：http://www.aibaodan.cn/163nekcpkpq.html

[G11] getter / setter
来源：http://www.sxryk.cn/163nlmzexvd.html

Py:   @property 与 @x.setter
来源：http://www.sxryk.cn/163ifmhvaig.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.aibaodan.cn/163eqxyzhgs.html

JS:   get name() { return this._name; }
来源：http://www.xuanzx.com/163chmqlpzv.html

TS:   get name(): string { return this._name; }
来源：http://www.aibaodan.cn/163zmebnuvm.html

Java: public String getName() { return name; }
来源：http://www.aibaodan.cn/163aehrhxvf.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.sxryk.cn/163epojgawl.html

Ruby: attr_accessor :name
来源：http://www.xuanzx.com/163rpmvlxac.html

C#:   public string Name { get; set; }
来源：http://www.aibaodan.cn/163tjfrykch.html

[G12] 对象转字符串
来源：http://www.sxryk.cn/163ufgktsjg.html

Py:   def __str__(self): return self.name
来源：http://www.xuanzx.com/163mvhzqnhc.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.sxryk.cn/163kvnlzqyk.html

JS:   toString() { return this.name; }
来源：http://www.sxryk.cn/163qyvloycb.html

TS:   toString(): string { return this.name; }
来源：http://www.aibaodan.cn/163jycmqjgz.html

Java: @Override public String toString() { return name; }
来源：http://www.sxryk.cn/163fudddnjy.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.sxryk.cn/163gojolmgz.html

Ruby: def to_s; @name; end
来源：http://www.aibaodan.cn/163myakpnfs.html

C#:   public override string ToString() => Name;
来源：http://www.aibaodan.cn/163hndmymkz.html

[G13] 判断对象类型
来源：http://www.sxryk.cn/163onlnsazn.html

Py:   isinstance(u, User)
来源：http://www.aibaodan.cn/163xgcrebrl.html

PHP:  $u instanceof User
来源：http://www.sxryk.cn/163vpedqyym.html

JS:   u instanceof User
来源：http://www.aibaodan.cn/163bbwvxmgr.html

TS:   u instanceof User
来源：http://www.xuanzx.com/163xzkhkjqu.html

Java: u instanceof User
来源：http://www.xuanzx.com/163yzrayyic.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.sxryk.cn/163ejpfhoap.html

Ruby: u.is_a?(User)
来源：http://www.xuanzx.com/163pbcohhbj.html

C#:   u is User
来源：http://www.sxryk.cn/163zmxybcui.html

[G14] 数据类 / record
来源：http://www.sxryk.cn/163orzchfaz.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.xuanzx.com/163isgzvfvu.html

PHP:  // 用 readonly 属性模拟
来源：http://www.aibaodan.cn/163rpdhppzr.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.aibaodan.cn/163ktptncox.html

TS:   type User = { name: string; age: number };
来源：http://www.xuanzx.com/163kbiarifv.html

Java: record User(String name, int age) {}
来源：http://www.xuanzx.com/163quvxxdsj.html

Go:   type User struct { Name string; Age int }
来源：http://www.xuanzx.com/163nvtdlkqv.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.xuanzx.com/163dsedaokf.html

C#:   record User(string Name, int Age);
来源：http://www.sxryk.cn/163ksetjrfj.html

[G15] 枚举
来源：http://www.xuanzx.com/163gunlgoxl.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.xuanzx.com/163rfilainw.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.sxryk.cn/163ihnbukls.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.sxryk.cn/163zbqyzwfp.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163creniptg.html

Java: enum Color { RED, GREEN }
来源：http://www.xuanzx.com/163vcymsdun.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.aibaodan.cn/163tfqufxjx.html

Ruby: Color = %i[red green].freeze
来源：http://www.sxryk.cn/163olalcqtp.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163kblrqdar.html

[G16] 对象转数组 / 字典
来源：http://www.xuanzx.com/163mkummpvk.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.sxryk.cn/163zbrialnj.html

PHP:  get_object_vars($obj);
来源：http://www.aibaodan.cn/163caoyumwu.html

JS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163msnzpiav.html

TS:   Object.entries(obj)
来源：http://www.sxryk.cn/163xigrlmmv.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.aibaodan.cn/163bytgphth.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.xuanzx.com/163mccghvft.html

Ruby: obj.instance_variables
来源：http://www.sxryk.cn/163azpuumav.html

C#:   // 用反射或 System.Text.Json
来源：http://www.xuanzx.com/163sldvdhay.html

================================================================================
来源：http://www.xuanzx.com/163xptozpgh.html

H. 异常与错误处理
来源：http://www.aibaodan.cn/163iuhufctp.html

================================================================================
来源：http://www.sxryk.cn/163vhvcbale.html

[H01] try / catch 基础
来源：http://www.sxryk.cn/163rwhexsxn.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.aibaodan.cn/163gcofhgui.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.xuanzx.com/163kqgaueqt.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163vdjwmehk.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.xuanzx.com/163sflfhenf.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.aibaodan.cn/163htyjxaav.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.xuanzx.com/163xdscgnoh.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.xuanzx.com/163ebozcyim.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.aibaodan.cn/163efqembnc.html

[H02] finally / ensure 收尾
来源：http://www.xuanzx.com/163hewjxqyc.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.sxryk.cn/163ypkmvsey.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163howtvlov.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163bfcstkmr.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163klfvuegw.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163euhrcosw.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.sxryk.cn/163secynjwk.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.sxryk.cn/163jafjlswe.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.sxryk.cn/163tcenprbe.html

[H03] 主动抛出异常
来源：http://www.aibaodan.cn/163spqieill.html

Py:   raise ValueError("错误信息")
来源：http://www.aibaodan.cn/163ampnepnb.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.sxryk.cn/163kksfnvyx.html

JS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163fwibbtzx.html

TS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163kvlyzhai.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.sxryk.cn/163xwplinvg.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.xuanzx.com/163gwgtnzyo.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.xuanzx.com/163vlowczwn.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.aibaodan.cn/163mgkrsxrt.html

[H04] 自定义异常类型
来源：http://www.xuanzx.com/163ffxzafin.html

Py:   class MyError(Exception): pass
来源：http://www.sxryk.cn/163tojmvsso.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.sxryk.cn/163qnwyopam.html

JS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163idmjlipc.html

TS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163jqswjczt.html

Java: class MyException extends RuntimeException {}
来源：http://www.aibaodan.cn/163vyzfysop.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.aibaodan.cn/163swymgnus.html

Ruby: class MyError < StandardError; end
来源：http://www.sxryk.cn/163ikygoova.html

C#:   class MyException : Exception {}
来源：http://www.sxryk.cn/163enufdhyy.html

[H05] 捕获特定类型
来源：http://www.xuanzx.com/163pvusnwvd.html

Py:   except ValueError as e:
来源：http://www.xuanzx.com/163wbebnpks.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.xuanzx.com/163vaiezlmr.html

JS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163blavcyrb.html

TS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163gwtctjcm.html

Java: catch (IOException | SQLException e) {}
来源：http://www.sxryk.cn/163nhorcasw.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.sxryk.cn/163ndzxsjlc.html

Ruby: rescue ArgumentError => e
来源：http://www.aibaodan.cn/163szmydxfk.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.xuanzx.com/163jgfmpgdb.html

[H06] 可选值 / 空值安全访问
来源：http://www.aibaodan.cn/163qdzpxkiq.html

Py:   value = d.get("k") or default
来源：http://www.aibaodan.cn/163pdfridxk.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.aibaodan.cn/163evarqntk.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163oryvglwc.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163fodqtrhz.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.sxryk.cn/163nmcvjmtd.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.xuanzx.com/163ewjpoaxg.html

Ruby: d&.dig(:a, :b)
来源：http://www.sxryk.cn/163jkcpkcsp.html

C#:   obj?.A?.B ?? default
来源：http://www.sxryk.cn/163vqfkwqyh.html

[H07] 断言
来源：http://www.aibaodan.cn/163iubdlffx.html

Py:   assert x > 0, "必须为正"
来源：http://www.aibaodan.cn/163nzkugeqh.html

PHP:  assert($x > 0);
来源：http://www.xuanzx.com/163inmhjryd.html

JS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163kbipkrrb.html

TS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163lvdqacdd.html

Java: assert x > 0 : "必须为正";
来源：http://www.xuanzx.com/163eqzsjfpt.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.xuanzx.com/163fumkxvov.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.sxryk.cn/163qnlgjwxh.html

C#:   Debug.Assert(x > 0);
来源：http://www.sxryk.cn/163nquyrhxa.html

[H08] 获取错误信息与堆栈
来源：http://www.xuanzx.com/163lzfvzntj.html

Py:   str(e);  traceback.format_exc()
来源：http://www.xuanzx.com/163quwrjgoj.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.xuanzx.com/163ymfcneth.html

JS:   e.message;  e.stack
来源：http://www.aibaodan.cn/163eybweevt.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.xuanzx.com/163nxscbbdn.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.sxryk.cn/163iqezhlvl.html

Go:   err.Error()
来源：http://www.aibaodan.cn/163uebxgsif.html

Ruby: e.message;  e.backtrace
来源：http://www.aibaodan.cn/163rnzqqlhn.html

C#:   e.Message;  e.StackTrace
来源：http://www.sxryk.cn/163byyxpvef.html

[H09] 带错误码的异常
来源：http://www.sxryk.cn/163ixnkllsz.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.sxryk.cn/163jwklaujq.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.xuanzx.com/163eymmocnp.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.sxryk.cn/163wjxomrhi.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.aibaodan.cn/163glivejvd.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.sxryk.cn/163djpmqety.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.sxryk.cn/163zllhldcb.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.xuanzx.com/163svwzcglw.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.sxryk.cn/163svxabxqk.html

[H10] 资源自动释放
来源：http://www.xuanzx.com/163uouzlxhi.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.aibaodan.cn/163dcnqkfrg.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.sxryk.cn/163tadtqqwj.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163dwrgazcl.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163xkenhrcb.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.sxryk.cn/163idrfskky.html

Go:   defer f.Close()
来源：http://www.xuanzx.com/163vgyklcwi.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.xuanzx.com/163iwechfjx.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.xuanzx.com/163oudeniqh.html

================================================================================
来源：http://www.sxryk.cn/163mzhkgobj.html

I. 正则表达式
来源：http://www.aibaodan.cn/163ivxlvbel.html

================================================================================
来源：http://www.sxryk.cn/163usgwopnk.html

[I01] 判断是否匹配
来源：http://www.sxryk.cn/163ccfmoqpo.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.aibaodan.cn/163jgowxvrx.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.sxryk.cn/163zupzbdgh.html

JS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163xvyebufr.html

TS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163dtcyldww.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.sxryk.cn/163eawydwek.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.aibaodan.cn/163mwjmoohq.html

Ruby: s.match?(/\d+/)
来源：http://www.aibaodan.cn/163pkrqciqt.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.xuanzx.com/163uojwnriy.html

[I02] 提取所有匹配
来源：http://www.sxryk.cn/163lqjpjhvt.html

Py:   re.findall(r"\d+", s)
来源：http://www.sxryk.cn/163qbghmkiu.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.xuanzx.com/163fqihlufe.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.aibaodan.cn/163iihxhqdv.html

TS:   s.match(/\d+/g)
来源：http://www.sxryk.cn/163cvecqfyl.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.xuanzx.com/163yiggtblr.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.sxryk.cn/163lhlzdhlc.html

Ruby: s.scan(/\d+/)
来源：http://www.xuanzx.com/163iozcqwut.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.sxryk.cn/163xuewmmdh.html

[I03] 提取捕获分组
来源：http://www.sxryk.cn/163rhboczfq.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.xuanzx.com/163cmtgrczv.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.sxryk.cn/163mqknzkst.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.sxryk.cn/163aovktiin.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.sxryk.cn/163jttxauqq.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.xuanzx.com/163tevpulnc.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.sxryk.cn/163rhirpzcg.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.xuanzx.com/163edgnvlvz.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.xuanzx.com/163fojataad.html

[I04] 正则替换
来源：http://www.aibaodan.cn/163jjdlaycd.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.sxryk.cn/163naxkdzde.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163hfqjbeqz.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163bbsagdjn.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163myzqbors.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.sxryk.cn/163yvhawaky.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.xuanzx.com/163xhfwerfs.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.aibaodan.cn/163inlfpqrg.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.xuanzx.com/163zeduajip.html

[I05] 按正则拆分
来源：http://www.xuanzx.com/163yfplszty.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.xuanzx.com/163ckusklfl.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.xuanzx.com/163whxnlszu.html

JS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163cmuvrotw.html

TS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163ilqxukpp.html

Java: s.split("\\s*,\\s*")
来源：http://www.aibaodan.cn/163dxuasrix.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.xuanzx.com/163abqspftg.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163yyrsavgr.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.xuanzx.com/163wnjmfgkc.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.aibaodan.cn/163zajfzxqq.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163uyrmbpcv.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.aibaodan.cn/163qgynxhvc.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163dkybovkr.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163lshufsgp.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.sxryk.cn/163zidehzoc.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.aibaodan.cn/163abqmxkat.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.xuanzx.com/163ahgdxpod.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163cvsddutu.html

[I07] 忽略大小写与多行模式
来源：http://www.aibaodan.cn/163mvgcbopt.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.aibaodan.cn/163fmnzttqr.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.sxryk.cn/163olamhxhd.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.sxryk.cn/163axxryqab.html

TS:   /error/gim
来源：http://www.aibaodan.cn/163venmbeey.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.sxryk.cn/163mwutxkkd.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.aibaodan.cn/163igdrnvay.html

Ruby: s.scan(/error/i)
来源：http://www.aibaodan.cn/163devnrhqt.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.aibaodan.cn/163eudqhtbh.html

[I08] 贪婪与非贪婪匹配
来源：http://www.aibaodan.cn/163nlhkaqyv.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.aibaodan.cn/163dntseqwv.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.sxryk.cn/163hnfkagqw.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163gqokrbue.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163tklrebby.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.sxryk.cn/163udmwojhh.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.xuanzx.com/163phsubxfi.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.sxryk.cn/163fohturtf.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.sxryk.cn/163xqxyxotl.html

================================================================================
来源：http://www.sxryk.cn/163uariunmx.html

J. 日期与时间
来源：http://www.aibaodan.cn/163tysvvpmb.html

================================================================================
来源：http://www.sxryk.cn/163hllyvzan.html

[J01] 获取当前时间
来源：http://www.sxryk.cn/163jrmejnif.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.sxryk.cn/163gvghzjch.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163wqisixby.html

JS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163grglswgt.html

TS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163dowpmmqp.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.aibaodan.cn/163ctkgjvbx.html

Go:   time.Now()
来源：http://www.sxryk.cn/163emignlcy.html

Ruby: Time.now
来源：http://www.sxryk.cn/163ryhgdapx.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.aibaodan.cn/163aijgbckj.html

[J02] 格式化输出
来源：http://www.aibaodan.cn/163mxgiaitf.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163roueypgx.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163veoiiath.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.sxryk.cn/163rzfyayfl.html

TS:   d.toISOString()
来源：http://www.sxryk.cn/163dpjupsas.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.xuanzx.com/163qxfappbo.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.sxryk.cn/163ljgmobjp.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163uomrbubw.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.aibaodan.cn/163uykoshgg.html

[J03] 字符串解析为日期
来源：http://www.sxryk.cn/163fnnupxlg.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.aibaodan.cn/163cfaabunz.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.sxryk.cn/163pmbvdprc.html

JS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163zngsclqr.html

TS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163lkrcbuqh.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.aibaodan.cn/163jylgfwyk.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.xuanzx.com/163wbsxpsfq.html

Ruby: Date.parse("2024-01-02")
来源：http://www.aibaodan.cn/163twozsvuy.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.aibaodan.cn/163jzpqshtv.html

[J04] 时间戳与日期互转
来源：http://www.aibaodan.cn/163rfcvglxi.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.sxryk.cn/163mkvoiqly.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.sxryk.cn/163eisyhdfi.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.aibaodan.cn/163dhxqmaco.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.xuanzx.com/163spzghtcv.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.aibaodan.cn/163xlvrxfqv.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.xuanzx.com/163jvmnvxay.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.sxryk.cn/163dskejcns.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.xuanzx.com/163upjhcdcv.html

[J05] 时间加减（加 7 天）
来源：http://www.aibaodan.cn/163cocckmdi.html

Py:   now + timedelta(days=7)
来源：http://www.sxryk.cn/163lckmbkol.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.xuanzx.com/163nqeddwnc.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163jqataonj.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163xmgvxsnc.html

Java: LocalDate.now().plusDays(7)
来源：http://www.xuanzx.com/163wkqmlvbl.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.sxryk.cn/163goetzgxu.html

Ruby: Time.now + 7 * 86400
来源：http://www.sxryk.cn/163drvizesb.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.aibaodan.cn/163ypgwkoqv.html

[J06] 计算两时间之差
来源：http://www.sxryk.cn/163xcrltzqg.html

Py:   (end - start).total_seconds()
来源：http://www.sxryk.cn/163kohmqugi.html

PHP:  $end->diff($start)->days;
来源：http://www.aibaodan.cn/163dgyiwlrf.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.aibaodan.cn/163ptsicuiz.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.xuanzx.com/163uirvyomy.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.sxryk.cn/163fsestczy.html

Go:   end.Sub(start).Hours()
来源：http://www.aibaodan.cn/163zledkrel.html

Ruby: end - start                 # 返回秒数
来源：http://www.sxryk.cn/163navdwszi.html

C#:   (end - start).TotalSeconds
来源：http://www.aibaodan.cn/163hfyvxzdh.html

[J07] 比较两个日期
来源：http://www.aibaodan.cn/163uzxvcndf.html

Py:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163sqvpmmuu.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.sxryk.cn/163rhqhcvsl.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163uymaomoz.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163cewwwlkn.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.aibaodan.cn/163uqdmpmki.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.sxryk.cn/163ogngkthf.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163pdwwdshm.html


<!-- 参考信息 -->