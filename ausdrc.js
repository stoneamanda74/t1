外链999!wailian999！

Py:   from abc import ABC, abstractmethod
来源：http://www.xuanzx.com/163rmyfnvpp.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.sxryk.cn/163yihoteyg.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.aibaodan.cn/163qjgydnfd.html

TS:   interface Shape { area(): number; }
来源：http://www.sxryk.cn/163trjsnwwo.html

Java: interface Shape { double area(); }
来源：http://www.sxryk.cn/163oxeccsml.html

Go:   type Shape interface { Area() float64 }
来源：http://www.sxryk.cn/163euwxqoud.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.sxryk.cn/163ocyevyem.html

C#:   interface IShape { double Area(); }
来源：http://www.sxryk.cn/163kufxpfxn.html

[G10] 访问控制
来源：http://www.sxryk.cn/163lycwoihq.html

Py:   约定 _protected / __private（不强制）
来源：http://www.sxryk.cn/163wgowvuvq.html

PHP:  public / protected / private
来源：http://www.xuanzx.com/163qaitfhty.html

JS:   #private 字段；其余公开
来源：http://www.sxryk.cn/163ibepohhz.html

TS:   public / protected / private
来源：http://www.aibaodan.cn/163pxqoobas.html

Java: public / protected / private / 默认包级
来源：http://www.xuanzx.com/163bylzvhnl.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.aibaodan.cn/163xqmbkext.html

Ruby: public / protected / private
来源：http://www.xuanzx.com/163qqdugupq.html

C#:   public / protected / private / internal
来源：http://www.aibaodan.cn/163ipwjcmyr.html

[G11] getter / setter
来源：http://www.xuanzx.com/163saobkahr.html

Py:   @property 与 @x.setter
来源：http://www.sxryk.cn/163qaivetkp.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.aibaodan.cn/163vxxzeurq.html

JS:   get name() { return this._name; }
来源：http://www.aibaodan.cn/163luhfjohm.html

TS:   get name(): string { return this._name; }
来源：http://www.xuanzx.com/163bfptippc.html

Java: public String getName() { return name; }
来源：http://www.aibaodan.cn/163mstaflsy.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.sxryk.cn/163wszijrhq.html

Ruby: attr_accessor :name
来源：http://www.aibaodan.cn/163kslseyfs.html

C#:   public string Name { get; set; }
来源：http://www.xuanzx.com/163oauyxvmo.html

[G12] 对象转字符串
来源：http://www.xuanzx.com/163guomkbwe.html

Py:   def __str__(self): return self.name
来源：http://www.aibaodan.cn/163invwxuct.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.sxryk.cn/163gzjlljeq.html

JS:   toString() { return this.name; }
来源：http://www.aibaodan.cn/163mefgnlus.html

TS:   toString(): string { return this.name; }
来源：http://www.aibaodan.cn/163qvgmmhrq.html

Java: @Override public String toString() { return name; }
来源：http://www.aibaodan.cn/163ooufaebj.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.xuanzx.com/163gdbdphhf.html

Ruby: def to_s; @name; end
来源：http://www.xuanzx.com/163hmeqshve.html

C#:   public override string ToString() => Name;
来源：http://www.aibaodan.cn/163wqdhzqos.html

[G13] 判断对象类型
来源：http://www.aibaodan.cn/163vulieqvv.html

Py:   isinstance(u, User)
来源：http://www.aibaodan.cn/163mutvhojq.html

PHP:  $u instanceof User
来源：http://www.sxryk.cn/163zhxrfiwb.html

JS:   u instanceof User
来源：http://www.xuanzx.com/163jjxibzgn.html

TS:   u instanceof User
来源：http://www.xuanzx.com/163azbarojb.html

Java: u instanceof User
来源：http://www.sxryk.cn/163dwebfdth.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.sxryk.cn/163txlcenoe.html

Ruby: u.is_a?(User)
来源：http://www.sxryk.cn/163tsgafptt.html

C#:   u is User
来源：http://www.sxryk.cn/163bskluxsc.html

[G14] 数据类 / record
来源：http://www.sxryk.cn/163tgixqcsv.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.aibaodan.cn/163mnwcpjeb.html

PHP:  // 用 readonly 属性模拟
来源：http://www.xuanzx.com/163euniclpb.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.aibaodan.cn/163bttsspdr.html

TS:   type User = { name: string; age: number };
来源：http://www.sxryk.cn/163ojmddxul.html

Java: record User(String name, int age) {}
来源：http://www.xuanzx.com/163bbbqawne.html

Go:   type User struct { Name string; Age int }
来源：http://www.sxryk.cn/163zpriobju.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.aibaodan.cn/163nvhqvbga.html

C#:   record User(string Name, int Age);
来源：http://www.aibaodan.cn/163pkliynvb.html

[G15] 枚举
来源：http://www.aibaodan.cn/163gbguunwv.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.sxryk.cn/163deepwlni.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.sxryk.cn/163qlioxjla.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.xuanzx.com/163ymnhlklu.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163ttqqptuh.html

Java: enum Color { RED, GREEN }
来源：http://www.aibaodan.cn/163znffonby.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.aibaodan.cn/163fupjijja.html

Ruby: Color = %i[red green].freeze
来源：http://www.sxryk.cn/163sjppbsez.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163gbjpilns.html

[G16] 对象转数组 / 字典
来源：http://www.xuanzx.com/163iqykkdsp.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.xuanzx.com/163iotkbpgk.html

PHP:  get_object_vars($obj);
来源：http://www.aibaodan.cn/163ffmviwci.html

JS:   Object.entries(obj)
来源：http://www.sxryk.cn/163ywrlhmll.html

TS:   Object.entries(obj)
来源：http://www.xuanzx.com/163pebxipwr.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.sxryk.cn/163tntybird.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.aibaodan.cn/163tfoybqoe.html

Ruby: obj.instance_variables
来源：http://www.sxryk.cn/163fyifqvps.html

C#:   // 用反射或 System.Text.Json
来源：http://www.sxryk.cn/163ercxdwep.html

================================================================================
来源：http://www.sxryk.cn/163ezxrlocf.html

H. 异常与错误处理
来源：http://www.xuanzx.com/163tucorhrb.html

================================================================================
来源：http://www.xuanzx.com/163thldzjem.html

[H01] try / catch 基础
来源：http://www.xuanzx.com/163hvvhxhtl.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.sxryk.cn/163zvajegeb.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.sxryk.cn/163nnzuzplr.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163fduamrsb.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.aibaodan.cn/163odkuhlqe.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.xuanzx.com/163ukpsvgcg.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.aibaodan.cn/163yizarwzx.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.xuanzx.com/163udgedoao.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.sxryk.cn/163qtqmwpxl.html

[H02] finally / ensure 收尾
来源：http://www.sxryk.cn/163tcjspnbs.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.xuanzx.com/163nyjhilfl.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163gbxgoqbq.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163lzejjjhd.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163nurbxmol.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163tvbupzdu.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.aibaodan.cn/163spmnoyyv.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.xuanzx.com/163cfvtcvno.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.xuanzx.com/163blclocov.html

[H03] 主动抛出异常
来源：http://www.xuanzx.com/163lotbvznt.html

Py:   raise ValueError("错误信息")
来源：http://www.aibaodan.cn/163iqxenjeo.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.xuanzx.com/163wgjmevym.html

JS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163nlmmlvly.html

TS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163frqqsbbk.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.xuanzx.com/163hdszkzvi.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.aibaodan.cn/163rxzykezg.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.aibaodan.cn/163ecklmzyi.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.xuanzx.com/163fhxupnar.html

[H04] 自定义异常类型
来源：http://www.sxryk.cn/163upppiyvw.html

Py:   class MyError(Exception): pass
来源：http://www.aibaodan.cn/163zvzcbzdf.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.aibaodan.cn/163ebztenoz.html

JS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163ozdopmza.html

TS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163lcpimppt.html

Java: class MyException extends RuntimeException {}
来源：http://www.aibaodan.cn/163uusdzpiv.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.xuanzx.com/163ruhxgdam.html

Ruby: class MyError < StandardError; end
来源：http://www.aibaodan.cn/163xjqmlptd.html

C#:   class MyException : Exception {}
来源：http://www.xuanzx.com/163kxegqzwe.html

[H05] 捕获特定类型
来源：http://www.aibaodan.cn/163tnyvgczu.html

Py:   except ValueError as e:
来源：http://www.aibaodan.cn/163lkqruqtj.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.xuanzx.com/163hvarkphm.html

JS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163zigimceg.html

TS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163vnuthaot.html

Java: catch (IOException | SQLException e) {}
来源：http://www.sxryk.cn/163bnotrnmw.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.aibaodan.cn/163suyjycmk.html

Ruby: rescue ArgumentError => e
来源：http://www.aibaodan.cn/163rsotvims.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.xuanzx.com/163ddyrwlit.html

[H06] 可选值 / 空值安全访问
来源：http://www.aibaodan.cn/163hmxhgfcq.html

Py:   value = d.get("k") or default
来源：http://www.xuanzx.com/163gxkiwjzd.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.xuanzx.com/163sdbmmmhr.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163oguhpqff.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163yqxevoui.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.sxryk.cn/163axsgmheq.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.sxryk.cn/163abxnwgkv.html

Ruby: d&.dig(:a, :b)
来源：http://www.sxryk.cn/163txdwczod.html

C#:   obj?.A?.B ?? default
来源：http://www.aibaodan.cn/163uxoqpbwv.html

[H07] 断言
来源：http://www.sxryk.cn/163fuedbbhb.html

Py:   assert x > 0, "必须为正"
来源：http://www.aibaodan.cn/163ecrakazv.html

PHP:  assert($x > 0);
来源：http://www.aibaodan.cn/163tbohvbxx.html

JS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163glktrsss.html

TS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163nkrxjcem.html

Java: assert x > 0 : "必须为正";
来源：http://www.xuanzx.com/163mdjsbcnk.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.aibaodan.cn/163yzrxyrqz.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.aibaodan.cn/163icklzxnq.html

C#:   Debug.Assert(x > 0);
来源：http://www.sxryk.cn/163nnnmhsbt.html

[H08] 获取错误信息与堆栈
来源：http://www.xuanzx.com/163bgduluwr.html

Py:   str(e);  traceback.format_exc()
来源：http://www.sxryk.cn/163doftlwyo.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.sxryk.cn/163fldgsykv.html

JS:   e.message;  e.stack
来源：http://www.xuanzx.com/163zssunspx.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.sxryk.cn/163fseaatup.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.sxryk.cn/163ylfgcmqa.html

Go:   err.Error()
来源：http://www.sxryk.cn/163erilqrtn.html

Ruby: e.message;  e.backtrace
来源：http://www.xuanzx.com/163aqxdhfwr.html

C#:   e.Message;  e.StackTrace
来源：http://www.xuanzx.com/163sklwmzaf.html

[H09] 带错误码的异常
来源：http://www.xuanzx.com/163jtapjvrw.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.xuanzx.com/163ibiseeba.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.xuanzx.com/163eqqnijrx.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.aibaodan.cn/163ijmnxquv.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.sxryk.cn/163gwccjnhp.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.sxryk.cn/163nrlccgsw.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.aibaodan.cn/163iyqkanxo.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.xuanzx.com/163ztpuwdwq.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.sxryk.cn/163hxfmcopc.html

[H10] 资源自动释放
来源：http://www.sxryk.cn/163uwmdoueq.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.xuanzx.com/163qkalwfur.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.xuanzx.com/163vbuphojq.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163ymugrwiz.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163bldbvuya.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.aibaodan.cn/163ziomzabp.html

Go:   defer f.Close()
来源：http://www.xuanzx.com/163izilokdu.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.aibaodan.cn/163ooocuhrc.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.sxryk.cn/163rmysaopu.html

================================================================================
来源：http://www.xuanzx.com/163vcpmlnoo.html

I. 正则表达式
来源：http://www.aibaodan.cn/163wowwqiek.html

================================================================================
来源：http://www.xuanzx.com/163qwfpnyzm.html

[I01] 判断是否匹配
来源：http://www.aibaodan.cn/163dapytwuh.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.xuanzx.com/163woiosvlf.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.aibaodan.cn/163tvprjqin.html

JS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163zqadgupw.html

TS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163dzzkyobx.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.xuanzx.com/163focmhpqw.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.sxryk.cn/163oezsdezr.html

Ruby: s.match?(/\d+/)
来源：http://www.sxryk.cn/163ycjznsmh.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.aibaodan.cn/163dljvdbuw.html

[I02] 提取所有匹配
来源：http://www.aibaodan.cn/163bwkxgdlw.html

Py:   re.findall(r"\d+", s)
来源：http://www.sxryk.cn/163vntkpppk.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.sxryk.cn/163vkzfwewf.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.sxryk.cn/163yavqvdcg.html

TS:   s.match(/\d+/g)
来源：http://www.aibaodan.cn/163vwsvfjpk.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.aibaodan.cn/163xiojmwyf.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.xuanzx.com/163yeaqmcei.html

Ruby: s.scan(/\d+/)
来源：http://www.xuanzx.com/163oqquuuwb.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.xuanzx.com/163zphzujvm.html

[I03] 提取捕获分组
来源：http://www.aibaodan.cn/163bjpvwaig.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.sxryk.cn/163suchgvta.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.xuanzx.com/163epymqjwh.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.aibaodan.cn/163ikbvzjwu.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.sxryk.cn/163btacrhzj.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.aibaodan.cn/163koikgzdw.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.sxryk.cn/163bzlkctii.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.aibaodan.cn/163gczjoayn.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.aibaodan.cn/163nliyamkw.html

[I04] 正则替换
来源：http://www.xuanzx.com/163tfgiekts.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.sxryk.cn/163ziqxayqp.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163ctrfaxpm.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163fintfhkp.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163nqmevxcq.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.aibaodan.cn/163duzeykgj.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.sxryk.cn/163uxhtupxy.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.sxryk.cn/163jlijvqgv.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.xuanzx.com/163mdzgoqhg.html

[I05] 按正则拆分
来源：http://www.aibaodan.cn/163xsvhlnzx.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.sxryk.cn/163izbixvsk.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.aibaodan.cn/163zoqmzujo.html

JS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163ixjowmjo.html

TS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163yohrvwwy.html

Java: s.split("\\s*,\\s*")
来源：http://www.xuanzx.com/163hdakzfwg.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.xuanzx.com/163yyuofgjd.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163rrotzbzm.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.sxryk.cn/163fynowlet.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.xuanzx.com/163bxrzhwxt.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163xnpuqopz.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.aibaodan.cn/163bmslusct.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163ufbqoqws.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163doctqwvn.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.sxryk.cn/163jeodnxdw.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.sxryk.cn/163atnbtikk.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.aibaodan.cn/163ohfntjpz.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163crikssaq.html

[I07] 忽略大小写与多行模式
来源：http://www.xuanzx.com/163nfoaalai.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.sxryk.cn/163kemipsrn.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.sxryk.cn/163smcubawx.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.aibaodan.cn/163ndalnkqb.html

TS:   /error/gim
来源：http://www.sxryk.cn/163flxhkcsw.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.aibaodan.cn/163euzpwleu.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.aibaodan.cn/163bnagfkcd.html

Ruby: s.scan(/error/i)
来源：http://www.xuanzx.com/163sqoqqimo.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.xuanzx.com/163kyixsgty.html

[I08] 贪婪与非贪婪匹配
来源：http://www.sxryk.cn/163fvutrixp.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.aibaodan.cn/163ckkuaohv.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.aibaodan.cn/163yureffgf.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163pwondmdk.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163ebqujibv.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.aibaodan.cn/163mpxjysyz.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.aibaodan.cn/163frwhrgpk.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.sxryk.cn/163tfabxrbr.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.aibaodan.cn/163hzlhkiwp.html

================================================================================
来源：http://www.aibaodan.cn/163tiyfmtxq.html

J. 日期与时间
来源：http://www.xuanzx.com/163gbarardr.html

================================================================================
来源：http://www.xuanzx.com/163nvdbzsha.html

[J01] 获取当前时间
来源：http://www.aibaodan.cn/163htjpwyev.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.aibaodan.cn/163dyjjslrt.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163rmoowzsw.html

JS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163toyiphwh.html

TS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163uoqkdehk.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.xuanzx.com/163siyiknru.html

Go:   time.Now()
来源：http://www.sxryk.cn/163luunbtrs.html

Ruby: Time.now
来源：http://www.aibaodan.cn/163uxxbmwzm.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.xuanzx.com/163qbplxafc.html

[J02] 格式化输出
来源：http://www.xuanzx.com/163rfwahynl.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163kisvimqe.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163jkhzvqos.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.sxryk.cn/163praxtcqi.html

TS:   d.toISOString()
来源：http://www.sxryk.cn/163halxgdbo.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.aibaodan.cn/163lrgcrxqi.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.xuanzx.com/163noxeqesv.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163fhbaubta.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.xuanzx.com/163grsfqfxl.html

[J03] 字符串解析为日期
来源：http://www.sxryk.cn/163jpidzgac.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.xuanzx.com/163xhejstna.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.xuanzx.com/163rxdplkzp.html

JS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163kusmbogh.html

TS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163xscrjisy.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.sxryk.cn/163wkrskipk.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.sxryk.cn/163osgogdiz.html

Ruby: Date.parse("2024-01-02")
来源：http://www.xuanzx.com/163biqzxulj.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.aibaodan.cn/163mzlxbzyz.html

[J04] 时间戳与日期互转
来源：http://www.aibaodan.cn/163oeojeyqz.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.sxryk.cn/163cepwfkhd.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.sxryk.cn/163scmezpne.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.aibaodan.cn/163rcudvgwo.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.aibaodan.cn/163hclvpenx.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.sxryk.cn/163brprvcgt.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.aibaodan.cn/163txeghcax.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.sxryk.cn/163eumyapyw.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.xuanzx.com/163fwnceugi.html

[J05] 时间加减（加 7 天）
来源：http://www.sxryk.cn/163cyaiwuyu.html

Py:   now + timedelta(days=7)
来源：http://www.aibaodan.cn/163bepfooyj.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.sxryk.cn/163srfkbspe.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163hijugntz.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163nxezhxss.html

Java: LocalDate.now().plusDays(7)
来源：http://www.sxryk.cn/163okeqtkrj.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.aibaodan.cn/163zxjujynv.html

Ruby: Time.now + 7 * 86400
来源：http://www.sxryk.cn/163izmcgwbq.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.xuanzx.com/163twqwizjj.html

[J06] 计算两时间之差
来源：http://www.xuanzx.com/163cmioguvb.html

Py:   (end - start).total_seconds()
来源：http://www.aibaodan.cn/163ucwtxsst.html

PHP:  $end->diff($start)->days;
来源：http://www.xuanzx.com/163pnjiixyb.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.xuanzx.com/163ydsjolzx.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.sxryk.cn/163efvycgvb.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.aibaodan.cn/163brmwdkll.html

Go:   end.Sub(start).Hours()
来源：http://www.sxryk.cn/163ouzkuphv.html

Ruby: end - start                 # 返回秒数
来源：http://www.sxryk.cn/163hwscwpcp.html

C#:   (end - start).TotalSeconds
来源：http://www.sxryk.cn/163iltevyiy.html

[J07] 比较两个日期
来源：http://www.xuanzx.com/163eotdlaxx.html

Py:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163yuxtcgwf.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.aibaodan.cn/163ezszwolt.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163hjcpronl.html


<!-- 参考信息 -->