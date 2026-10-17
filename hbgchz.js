外链999!wailian999！

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.xuanzx.com/163hyjtfvto.html

Ruby: def self.f; end
来源：http://www.aibaodan.cn/163mnmfbunc.html

C#:   public static void F() {}
来源：http://www.aibaodan.cn/163pafrljmn.html

[G09] 接口 / 抽象类
来源：http://www.sxryk.cn/163xrtchnhl.html

Py:   from abc import ABC, abstractmethod
来源：http://www.sxryk.cn/163rlilvspa.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.aibaodan.cn/163hvshnqdk.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.sxryk.cn/163uxfwsyxp.html

TS:   interface Shape { area(): number; }
来源：http://www.sxryk.cn/163ewvzeyog.html

Java: interface Shape { double area(); }
来源：http://www.aibaodan.cn/163iinmggga.html

Go:   type Shape interface { Area() float64 }
来源：http://www.sxryk.cn/163kriaxgyt.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.aibaodan.cn/163ezitioqo.html

C#:   interface IShape { double Area(); }
来源：http://www.sxryk.cn/163tesigvax.html

[G10] 访问控制
来源：http://www.sxryk.cn/163qvgrider.html

Py:   约定 _protected / __private（不强制）
来源：http://www.xuanzx.com/163rjurqtpj.html

PHP:  public / protected / private
来源：http://www.xuanzx.com/163cfcnlyps.html

JS:   #private 字段；其余公开
来源：http://www.aibaodan.cn/163ywmjakgp.html

TS:   public / protected / private
来源：http://www.sxryk.cn/163zgmbsjku.html

Java: public / protected / private / 默认包级
来源：http://www.sxryk.cn/163wxsynoml.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.xuanzx.com/163gjvkjjpa.html

Ruby: public / protected / private
来源：http://www.aibaodan.cn/163vjebbfas.html

C#:   public / protected / private / internal
来源：http://www.aibaodan.cn/163psqxlxja.html

[G11] getter / setter
来源：http://www.xuanzx.com/163ybevaxjy.html

Py:   @property 与 @x.setter
来源：http://www.xuanzx.com/163zasravoh.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.aibaodan.cn/163yyqxcmun.html

JS:   get name() { return this._name; }
来源：http://www.aibaodan.cn/163ajgvikit.html

TS:   get name(): string { return this._name; }
来源：http://www.xuanzx.com/163pcohorwr.html

Java: public String getName() { return name; }
来源：http://www.xuanzx.com/163gmxfprmf.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.xuanzx.com/163xdyhssdk.html

Ruby: attr_accessor :name
来源：http://www.aibaodan.cn/163deiazjfx.html

C#:   public string Name { get; set; }
来源：http://www.xuanzx.com/163keesdgrp.html

[G12] 对象转字符串
来源：http://www.xuanzx.com/163cqnwnbaw.html

Py:   def __str__(self): return self.name
来源：http://www.xuanzx.com/163zipwkeys.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.sxryk.cn/163bnjwnzxa.html

JS:   toString() { return this.name; }
来源：http://www.xuanzx.com/163ddhsxeaf.html

TS:   toString(): string { return this.name; }
来源：http://www.sxryk.cn/163kflttdwu.html

Java: @Override public String toString() { return name; }
来源：http://www.xuanzx.com/163hifbvddv.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.xuanzx.com/163fjfrjvwj.html

Ruby: def to_s; @name; end
来源：http://www.sxryk.cn/163jkvuxqxc.html

C#:   public override string ToString() => Name;
来源：http://www.aibaodan.cn/163rcojqxqs.html

[G13] 判断对象类型
来源：http://www.aibaodan.cn/163grvkobnb.html

Py:   isinstance(u, User)
来源：http://www.xuanzx.com/163nzehuoqd.html

PHP:  $u instanceof User
来源：http://www.sxryk.cn/163ifzkputa.html

JS:   u instanceof User
来源：http://www.xuanzx.com/163ywqpbzbg.html

TS:   u instanceof User
来源：http://www.xuanzx.com/163dqteppdv.html

Java: u instanceof User
来源：http://www.sxryk.cn/163lkrusqry.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.sxryk.cn/163parvjwzm.html

Ruby: u.is_a?(User)
来源：http://www.sxryk.cn/163zxpnyxcu.html

C#:   u is User
来源：http://www.xuanzx.com/163sqwfocsc.html

[G14] 数据类 / record
来源：http://www.aibaodan.cn/163tjbcdrrf.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.sxryk.cn/163usddrrbr.html

PHP:  // 用 readonly 属性模拟
来源：http://www.xuanzx.com/163hwaubxzs.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.xuanzx.com/163rxbbcxnm.html

TS:   type User = { name: string; age: number };
来源：http://www.aibaodan.cn/163tzxorpvt.html

Java: record User(String name, int age) {}
来源：http://www.sxryk.cn/163jebbvtbv.html

Go:   type User struct { Name string; Age int }
来源：http://www.sxryk.cn/163hxqkibdp.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.xuanzx.com/163ffonlycp.html

C#:   record User(string Name, int Age);
来源：http://www.xuanzx.com/163irzbdoqo.html

[G15] 枚举
来源：http://www.xuanzx.com/163linwxpot.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.aibaodan.cn/163lgrqfmlm.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.xuanzx.com/163uanutqhz.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.aibaodan.cn/163lawdlfmx.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163sreojkfs.html

Java: enum Color { RED, GREEN }
来源：http://www.xuanzx.com/163nmsbysdp.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.xuanzx.com/163yohwlrtu.html

Ruby: Color = %i[red green].freeze
来源：http://www.aibaodan.cn/163tadesbap.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163opbbqfcj.html

[G16] 对象转数组 / 字典
来源：http://www.xuanzx.com/163oohwgdhf.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.xuanzx.com/163noiroubw.html

PHP:  get_object_vars($obj);
来源：http://www.aibaodan.cn/163pbemshoz.html

JS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163xkwzsyhb.html

TS:   Object.entries(obj)
来源：http://www.sxryk.cn/163ttnfehbh.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.sxryk.cn/163frpwkqrn.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.aibaodan.cn/163pgaidsch.html

Ruby: obj.instance_variables
来源：http://www.aibaodan.cn/163ageliajb.html

C#:   // 用反射或 System.Text.Json
来源：http://www.aibaodan.cn/163ctuaduft.html

================================================================================
来源：http://www.xuanzx.com/163midtlnef.html

H. 异常与错误处理
来源：http://www.xuanzx.com/163oybtihov.html

================================================================================
来源：http://www.sxryk.cn/163eoqzmhio.html

[H01] try / catch 基础
来源：http://www.aibaodan.cn/163gzbpvsdo.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.sxryk.cn/163uqplefyw.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.aibaodan.cn/163fsthqtea.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163zhgdgymm.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.xuanzx.com/163ozchuruz.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.sxryk.cn/163fseillml.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.aibaodan.cn/163gvhsdhea.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.xuanzx.com/163gcrtzprx.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.sxryk.cn/163zxdyvggx.html

[H02] finally / ensure 收尾
来源：http://www.aibaodan.cn/163odxoqfii.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.sxryk.cn/163jrfqpptn.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163lwleanub.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163rsrvpnad.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163brioyofo.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163cursvvuo.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.sxryk.cn/163uoczytqa.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.xuanzx.com/163znlfnsmo.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.aibaodan.cn/163edgvevjv.html

[H03] 主动抛出异常
来源：http://www.sxryk.cn/163vpzqcdkx.html

Py:   raise ValueError("错误信息")
来源：http://www.aibaodan.cn/163pcvhbxda.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.aibaodan.cn/163fixfqmbh.html

JS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163yobnwhtv.html

TS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163hjjirazp.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.xuanzx.com/163fyupwszw.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.sxryk.cn/163viwqiwcy.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.xuanzx.com/163ecsvwfuf.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.xuanzx.com/163nygrmkwi.html

[H04] 自定义异常类型
来源：http://www.aibaodan.cn/163ktfzoipf.html

Py:   class MyError(Exception): pass
来源：http://www.xuanzx.com/163axuyljyc.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.sxryk.cn/163xjmdzfcy.html

JS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163qvjkxrgc.html

TS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163duoruhil.html

Java: class MyException extends RuntimeException {}
来源：http://www.xuanzx.com/163ajcmqzwg.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.xuanzx.com/163zvpnhibj.html

Ruby: class MyError < StandardError; end
来源：http://www.xuanzx.com/163cloiuyai.html

C#:   class MyException : Exception {}
来源：http://www.xuanzx.com/163auzxfhuz.html

[H05] 捕获特定类型
来源：http://www.xuanzx.com/163hehlrazt.html

Py:   except ValueError as e:
来源：http://www.xuanzx.com/163uoemspyo.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.sxryk.cn/163ljhufsxb.html

JS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163zcxepypq.html

TS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163jmpfmsib.html

Java: catch (IOException | SQLException e) {}
来源：http://www.aibaodan.cn/163jfllwysn.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.sxryk.cn/163ykontahs.html

Ruby: rescue ArgumentError => e
来源：http://www.xuanzx.com/163wkzaocdx.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.sxryk.cn/163fdudmqyf.html

[H06] 可选值 / 空值安全访问
来源：http://www.xuanzx.com/163toufhtal.html

Py:   value = d.get("k") or default
来源：http://www.aibaodan.cn/163uukdtukt.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.sxryk.cn/163jeoqidqz.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163gkhrjcvl.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163yfsgkhnr.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.sxryk.cn/163iylgrdlx.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.xuanzx.com/163havergds.html

Ruby: d&.dig(:a, :b)
来源：http://www.aibaodan.cn/163kfyybxrd.html

C#:   obj?.A?.B ?? default
来源：http://www.aibaodan.cn/163nqicerrh.html

[H07] 断言
来源：http://www.xuanzx.com/163tppovcuh.html

Py:   assert x > 0, "必须为正"
来源：http://www.aibaodan.cn/163bugecumv.html

PHP:  assert($x > 0);
来源：http://www.xuanzx.com/163bukijxvo.html

JS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163jjlkkwup.html

TS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163helbyorn.html

Java: assert x > 0 : "必须为正";
来源：http://www.xuanzx.com/163vbkiqxqt.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.sxryk.cn/163hwvbqtmz.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.aibaodan.cn/163hibbjzsg.html

C#:   Debug.Assert(x > 0);
来源：http://www.sxryk.cn/163mgpfxxol.html

[H08] 获取错误信息与堆栈
来源：http://www.sxryk.cn/163mfadzhdm.html

Py:   str(e);  traceback.format_exc()
来源：http://www.xuanzx.com/163wqdzulpf.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.xuanzx.com/163zhvsteph.html

JS:   e.message;  e.stack
来源：http://www.xuanzx.com/163wpdtosmj.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.aibaodan.cn/163opdebpko.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.aibaodan.cn/163glclwglf.html

Go:   err.Error()
来源：http://www.sxryk.cn/163awmljkit.html

Ruby: e.message;  e.backtrace
来源：http://www.xuanzx.com/163pvwqilzf.html

C#:   e.Message;  e.StackTrace
来源：http://www.xuanzx.com/163mrrifkze.html

[H09] 带错误码的异常
来源：http://www.xuanzx.com/163bkwdgiyz.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.sxryk.cn/163lgqkehlx.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.aibaodan.cn/163usgheobs.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.aibaodan.cn/163xijhagoc.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.aibaodan.cn/163fyvfmnzy.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.aibaodan.cn/163uqpzpdjc.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.sxryk.cn/163zttrbpgw.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.xuanzx.com/163egxqvuwd.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.xuanzx.com/163zpggzixf.html

[H10] 资源自动释放
来源：http://www.aibaodan.cn/163lopxnbar.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.xuanzx.com/163nfpvofca.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.xuanzx.com/163xnxzeilh.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163lcynncjm.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163kupwjwyz.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.xuanzx.com/163mklmgzgl.html

Go:   defer f.Close()
来源：http://www.aibaodan.cn/163xsbaxohg.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.sxryk.cn/163jcukmkeh.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.sxryk.cn/163lxxxrnkz.html

================================================================================
来源：http://www.aibaodan.cn/163kmnejcgx.html

I. 正则表达式
来源：http://www.aibaodan.cn/163ptpmuutn.html

================================================================================
来源：http://www.aibaodan.cn/163wgcgsemv.html

[I01] 判断是否匹配
来源：http://www.xuanzx.com/163apgtzcft.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.xuanzx.com/163qiycysqz.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.aibaodan.cn/163uolpjlyh.html

JS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163kgrepsqn.html

TS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163rryuxcvt.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.sxryk.cn/163yvwgijtu.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.sxryk.cn/163cvxziyup.html

Ruby: s.match?(/\d+/)
来源：http://www.xuanzx.com/163xqhdgmho.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.aibaodan.cn/163ofgdvzkq.html

[I02] 提取所有匹配
来源：http://www.aibaodan.cn/163zmovkkpo.html

Py:   re.findall(r"\d+", s)
来源：http://www.aibaodan.cn/163vekwmcez.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.sxryk.cn/163sqnpsfea.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.aibaodan.cn/163jkxbnatq.html

TS:   s.match(/\d+/g)
来源：http://www.sxryk.cn/163eabqwkyt.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.sxryk.cn/163iqeizmmn.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.sxryk.cn/163hwauidpp.html

Ruby: s.scan(/\d+/)
来源：http://www.xuanzx.com/163eimqcnym.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.xuanzx.com/163ejusiwas.html

[I03] 提取捕获分组
来源：http://www.xuanzx.com/163vjguzvei.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.xuanzx.com/163ntxcyily.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.aibaodan.cn/163avqicsck.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.sxryk.cn/163ejqvcvfl.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.xuanzx.com/163ityzhzie.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.xuanzx.com/163fjwsynei.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.aibaodan.cn/163lvmvisxn.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.sxryk.cn/163oyhnjwzr.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.aibaodan.cn/163tmebqbyi.html

[I04] 正则替换
来源：http://www.xuanzx.com/163difpzdbr.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.xuanzx.com/163dlqsafxq.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163jdpiqkka.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163cbmghxsv.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163fuuxugth.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.sxryk.cn/163hnfbqtjp.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.sxryk.cn/163ycpsojof.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.xuanzx.com/163djufqmqq.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.sxryk.cn/163aguozbgk.html

[I05] 按正则拆分
来源：http://www.sxryk.cn/163sctpaqmi.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.aibaodan.cn/163mcqiippq.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.sxryk.cn/163srwpassi.html

JS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163qyfgiwrl.html

TS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163ifwgexbv.html

Java: s.split("\\s*,\\s*")
来源：http://www.xuanzx.com/163roudyypk.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.xuanzx.com/163mkvghsfw.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163qpddphac.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.aibaodan.cn/163aawwnjcu.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.aibaodan.cn/163dtcoennk.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163seisgniv.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.aibaodan.cn/163xcqzrajd.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163whxtqeet.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163nkblflem.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.aibaodan.cn/163hwngnuuq.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.sxryk.cn/163dejnmzxc.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.aibaodan.cn/163ourdaohk.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163stuoujox.html

[I07] 忽略大小写与多行模式
来源：http://www.sxryk.cn/163hwcaopjc.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.aibaodan.cn/163yueipbrq.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.xuanzx.com/163yhhhizjo.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.xuanzx.com/163vutixyhu.html

TS:   /error/gim
来源：http://www.aibaodan.cn/163lixodoya.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.xuanzx.com/163jwnuwjtp.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.aibaodan.cn/163nezgvgap.html

Ruby: s.scan(/error/i)
来源：http://www.aibaodan.cn/163qzejyifw.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.aibaodan.cn/163ehxjoibr.html

[I08] 贪婪与非贪婪匹配
来源：http://www.xuanzx.com/163zwpqocip.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.aibaodan.cn/163aybjrboh.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.sxryk.cn/163axjwmqiw.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163xkjqaxtc.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163ayuoinsy.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.xuanzx.com/163ilcaixkh.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.sxryk.cn/163shfejfjw.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.aibaodan.cn/163corwwgfx.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.sxryk.cn/163nwefozdm.html

================================================================================
来源：http://www.sxryk.cn/163oaxdbjpj.html

J. 日期与时间
来源：http://www.aibaodan.cn/163neiavcja.html

================================================================================
来源：http://www.aibaodan.cn/163tugndtya.html

[J01] 获取当前时间
来源：http://www.aibaodan.cn/163xhzvzzoy.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.aibaodan.cn/163xclmpgtu.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163cxskjhbc.html

JS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163feebcyfd.html

TS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163hguvayyu.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.aibaodan.cn/163muzbyzwk.html

Go:   time.Now()
来源：http://www.aibaodan.cn/163hbtcwtpl.html

Ruby: Time.now
来源：http://www.sxryk.cn/163pqxjhipw.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.aibaodan.cn/163ifzjsrpt.html

[J02] 格式化输出
来源：http://www.aibaodan.cn/163cmgzmjyk.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163ztahfhmo.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163eamgbnax.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.sxryk.cn/163pgcfcicu.html

TS:   d.toISOString()
来源：http://www.aibaodan.cn/163ruhtdxvr.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.aibaodan.cn/163kmxzvicz.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.aibaodan.cn/163axotzdgq.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163tdtdiabz.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.sxryk.cn/163wmcfxvsv.html

[J03] 字符串解析为日期
来源：http://www.xuanzx.com/163gszbkgwx.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.xuanzx.com/163mpzfsaqc.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.sxryk.cn/163qkwtixta.html

JS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163yuqayshd.html

TS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163miucphui.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.sxryk.cn/163ncrddffn.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.sxryk.cn/163mnhbddwm.html

Ruby: Date.parse("2024-01-02")
来源：http://www.sxryk.cn/163jejnlbax.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.aibaodan.cn/163ogycpfct.html

[J04] 时间戳与日期互转
来源：http://www.xuanzx.com/163alqakzkl.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.aibaodan.cn/163dcgynllw.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.xuanzx.com/163crrouoyj.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.aibaodan.cn/163dbycuoue.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.aibaodan.cn/163ijnwsoyp.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.sxryk.cn/163scqgjtyl.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.xuanzx.com/163cqiqlwsa.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.xuanzx.com/163mglratie.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.xuanzx.com/163oayloxab.html

[J05] 时间加减（加 7 天）
来源：http://www.aibaodan.cn/163tsbkzbzh.html

Py:   now + timedelta(days=7)
来源：http://www.aibaodan.cn/163kpzmeyji.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.aibaodan.cn/163oxasbswp.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163ihrdzvoc.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163hcjtiakr.html

Java: LocalDate.now().plusDays(7)
来源：http://www.sxryk.cn/163vovbrgol.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.aibaodan.cn/163kjejmywd.html

Ruby: Time.now + 7 * 86400
来源：http://www.aibaodan.cn/163ohivaktn.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.aibaodan.cn/163attmhxdq.html

[J06] 计算两时间之差
来源：http://www.xuanzx.com/163xnhcnoel.html

Py:   (end - start).total_seconds()
来源：http://www.sxryk.cn/163enaytavn.html

PHP:  $end->diff($start)->days;
来源：http://www.aibaodan.cn/163qacadooq.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.xuanzx.com/163sdtvyngs.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.xuanzx.com/163aidabqoc.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.xuanzx.com/163ykvrqlpa.html

Go:   end.Sub(start).Hours()
来源：http://www.aibaodan.cn/163rczczors.html

Ruby: end - start                 # 返回秒数
来源：http://www.sxryk.cn/163zzxlsdrf.html

C#:   (end - start).TotalSeconds
来源：http://www.xuanzx.com/163hmperdaa.html


<!-- 参考信息 -->