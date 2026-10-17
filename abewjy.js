外链999!wailian999！

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.xuanzx.com/163wnmvxgxr.html

Ruby: def self.f; end
来源：http://www.xuanzx.com/163gldngsfx.html

C#:   public static void F() {}
来源：http://www.xuanzx.com/163cqeltksk.html

[G09] 接口 / 抽象类
来源：http://www.aibaodan.cn/163hzcvxefr.html

Py:   from abc import ABC, abstractmethod
来源：http://www.aibaodan.cn/163lsddlmke.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.aibaodan.cn/163gbcpbdlc.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.aibaodan.cn/163qsiepphi.html

TS:   interface Shape { area(): number; }
来源：http://www.xuanzx.com/163wqhjgfgr.html

Java: interface Shape { double area(); }
来源：http://www.xuanzx.com/163vqaudgfp.html

Go:   type Shape interface { Area() float64 }
来源：http://www.aibaodan.cn/163kqksweca.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.sxryk.cn/163qrpqngvh.html

C#:   interface IShape { double Area(); }
来源：http://www.aibaodan.cn/163fzgqsmlj.html

[G10] 访问控制
来源：http://www.xuanzx.com/163vzoksnso.html

Py:   约定 _protected / __private（不强制）
来源：http://www.sxryk.cn/163yjncffdt.html

PHP:  public / protected / private
来源：http://www.xuanzx.com/163gprtkisd.html

JS:   #private 字段；其余公开
来源：http://www.xuanzx.com/163qlljvdlm.html

TS:   public / protected / private
来源：http://www.aibaodan.cn/163sxhgclsv.html

Java: public / protected / private / 默认包级
来源：http://www.sxryk.cn/163ydqwgwma.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.xuanzx.com/163kskehjeb.html

Ruby: public / protected / private
来源：http://www.xuanzx.com/163hdjrvxoq.html

C#:   public / protected / private / internal
来源：http://www.aibaodan.cn/163byswcmxr.html

[G11] getter / setter
来源：http://www.sxryk.cn/163rlxeylxv.html

Py:   @property 与 @x.setter
来源：http://www.sxryk.cn/163uormokwg.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.xuanzx.com/163edrzzvho.html

JS:   get name() { return this._name; }
来源：http://www.aibaodan.cn/163byybacig.html

TS:   get name(): string { return this._name; }
来源：http://www.sxryk.cn/163tyjbuowg.html

Java: public String getName() { return name; }
来源：http://www.xuanzx.com/163dbyefpse.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.aibaodan.cn/163puqhcmjd.html

Ruby: attr_accessor :name
来源：http://www.sxryk.cn/163dedvdrfh.html

C#:   public string Name { get; set; }
来源：http://www.sxryk.cn/163yvqbdskl.html

[G12] 对象转字符串
来源：http://www.aibaodan.cn/163cppwhbqx.html

Py:   def __str__(self): return self.name
来源：http://www.sxryk.cn/163znwxgikc.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.aibaodan.cn/163hpgmhfyo.html

JS:   toString() { return this.name; }
来源：http://www.xuanzx.com/163ajcrlnsi.html

TS:   toString(): string { return this.name; }
来源：http://www.xuanzx.com/163ndiascjq.html

Java: @Override public String toString() { return name; }
来源：http://www.aibaodan.cn/163vfrvthnr.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.sxryk.cn/163jrfyyquv.html

Ruby: def to_s; @name; end
来源：http://www.aibaodan.cn/163dauvafiw.html

C#:   public override string ToString() => Name;
来源：http://www.sxryk.cn/163zqzhmrsl.html

[G13] 判断对象类型
来源：http://www.xuanzx.com/163bmulnzra.html

Py:   isinstance(u, User)
来源：http://www.xuanzx.com/163rnqjbktf.html

PHP:  $u instanceof User
来源：http://www.xuanzx.com/163mxfdhhjh.html

JS:   u instanceof User
来源：http://www.xuanzx.com/163zlwbsksu.html

TS:   u instanceof User
来源：http://www.xuanzx.com/163imiruwvg.html

Java: u instanceof User
来源：http://www.aibaodan.cn/163hgkbewya.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.xuanzx.com/163jvkzggkp.html

Ruby: u.is_a?(User)
来源：http://www.xuanzx.com/163wxommbnn.html

C#:   u is User
来源：http://www.aibaodan.cn/163wspmxbid.html

[G14] 数据类 / record
来源：http://www.sxryk.cn/163fspcpsix.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.aibaodan.cn/163joebyybm.html

PHP:  // 用 readonly 属性模拟
来源：http://www.aibaodan.cn/163xbxnxxtz.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.xuanzx.com/163czhevstr.html

TS:   type User = { name: string; age: number };
来源：http://www.aibaodan.cn/163rkcblppa.html

Java: record User(String name, int age) {}
来源：http://www.sxryk.cn/163qejoepdv.html

Go:   type User struct { Name string; Age int }
来源：http://www.aibaodan.cn/163zpxxxzuf.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.aibaodan.cn/163zlurebbn.html

C#:   record User(string Name, int Age);
来源：http://www.xuanzx.com/163ivxozqmd.html

[G15] 枚举
来源：http://www.aibaodan.cn/163labtarum.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.aibaodan.cn/163nngxwruy.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.aibaodan.cn/163uivvahyf.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.sxryk.cn/163hnbauthf.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163iyzsaukp.html

Java: enum Color { RED, GREEN }
来源：http://www.sxryk.cn/163ogdiuxcg.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.sxryk.cn/163gdiikvmz.html

Ruby: Color = %i[red green].freeze
来源：http://www.sxryk.cn/163sqnqijkj.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163iiybujsq.html

[G16] 对象转数组 / 字典
来源：http://www.sxryk.cn/163eosoyvno.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.aibaodan.cn/163abbxgkny.html

PHP:  get_object_vars($obj);
来源：http://www.aibaodan.cn/163eigzhrod.html

JS:   Object.entries(obj)
来源：http://www.xuanzx.com/163hgorrfvq.html

TS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163ejxlqolj.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.xuanzx.com/163zpvhkifl.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.sxryk.cn/163dpdbpmvh.html

Ruby: obj.instance_variables
来源：http://www.aibaodan.cn/163hwzsvgbo.html

C#:   // 用反射或 System.Text.Json
来源：http://www.aibaodan.cn/163pkpidymr.html

================================================================================
来源：http://www.xuanzx.com/163unrrxzgy.html

H. 异常与错误处理
来源：http://www.xuanzx.com/163ttghzmhh.html

================================================================================
来源：http://www.xuanzx.com/163thevxhtx.html

[H01] try / catch 基础
来源：http://www.sxryk.cn/163ceteusni.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.sxryk.cn/163errhxtze.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.xuanzx.com/163tohbcyyl.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163dcbyfchy.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.xuanzx.com/163kmzlljuf.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.xuanzx.com/163yoxlufav.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.sxryk.cn/163nvgaknrj.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.aibaodan.cn/163xciwjqdf.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.aibaodan.cn/163umjcjnhh.html

[H02] finally / ensure 收尾
来源：http://www.xuanzx.com/163ujvfoshe.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.aibaodan.cn/163rzruijtf.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163chfilajn.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163skdvrkym.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163xvaqnfqz.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163seqqkjjx.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.xuanzx.com/163dsupcqnb.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.aibaodan.cn/163yjnwvvpk.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.aibaodan.cn/163ghmczqtw.html

[H03] 主动抛出异常
来源：http://www.aibaodan.cn/163hbiujfga.html

Py:   raise ValueError("错误信息")
来源：http://www.aibaodan.cn/163jyxcewbx.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.xuanzx.com/163qkjgibtk.html

JS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163wkbvgnlu.html

TS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163wnccxdey.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.xuanzx.com/163afdznajq.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.xuanzx.com/163mltjnutx.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.xuanzx.com/163ovybqssv.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.aibaodan.cn/163wnddhfyu.html

[H04] 自定义异常类型
来源：http://www.xuanzx.com/163uivcsjyj.html

Py:   class MyError(Exception): pass
来源：http://www.sxryk.cn/163qevwocnk.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.aibaodan.cn/163tifciusz.html

JS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163suhgcqak.html

TS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163ubarenvf.html

Java: class MyException extends RuntimeException {}
来源：http://www.aibaodan.cn/163ubgxsugj.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.xuanzx.com/163xlsbhaxe.html

Ruby: class MyError < StandardError; end
来源：http://www.aibaodan.cn/163icqhaxvb.html

C#:   class MyException : Exception {}
来源：http://www.aibaodan.cn/163bnvcgqbu.html

[H05] 捕获特定类型
来源：http://www.aibaodan.cn/163ukhrxfqx.html

Py:   except ValueError as e:
来源：http://www.xuanzx.com/163esxnwplj.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.aibaodan.cn/163fiplyivn.html

JS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163gpvmwqtu.html

TS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163fwajfsey.html

Java: catch (IOException | SQLException e) {}
来源：http://www.sxryk.cn/163icfwuteg.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.xuanzx.com/163rxsjbuwt.html

Ruby: rescue ArgumentError => e
来源：http://www.xuanzx.com/163mzpvkpsf.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.aibaodan.cn/163zmbcdcvd.html

[H06] 可选值 / 空值安全访问
来源：http://www.xuanzx.com/163lqsgcdmi.html

Py:   value = d.get("k") or default
来源：http://www.aibaodan.cn/163kddwvipo.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.xuanzx.com/163ziystixu.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163rqitggpt.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163gsfaqspe.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.sxryk.cn/163rxcknspl.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.xuanzx.com/163xlfxgqev.html

Ruby: d&.dig(:a, :b)
来源：http://www.xuanzx.com/163lzsvdogc.html

C#:   obj?.A?.B ?? default
来源：http://www.sxryk.cn/163ahxjssti.html

[H07] 断言
来源：http://www.xuanzx.com/163lqdjiwrb.html

Py:   assert x > 0, "必须为正"
来源：http://www.xuanzx.com/163csalaakf.html

PHP:  assert($x > 0);
来源：http://www.sxryk.cn/163uveelhhd.html

JS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163pvaezljm.html

TS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163xkvafewe.html

Java: assert x > 0 : "必须为正";
来源：http://www.aibaodan.cn/163vzaeivti.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.aibaodan.cn/163hfqitgqf.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.sxryk.cn/163ykehzfgg.html

C#:   Debug.Assert(x > 0);
来源：http://www.xuanzx.com/163llhfglbj.html

[H08] 获取错误信息与堆栈
来源：http://www.xuanzx.com/163lmgzaggs.html

Py:   str(e);  traceback.format_exc()
来源：http://www.xuanzx.com/163geyiwsnp.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.xuanzx.com/163grbvwvil.html

JS:   e.message;  e.stack
来源：http://www.xuanzx.com/163stnladmb.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.aibaodan.cn/163msmfeyav.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.aibaodan.cn/163ocmgkxrp.html

Go:   err.Error()
来源：http://www.aibaodan.cn/163uebfaxkv.html

Ruby: e.message;  e.backtrace
来源：http://www.aibaodan.cn/163fhikhicv.html

C#:   e.Message;  e.StackTrace
来源：http://www.sxryk.cn/163qozqxifs.html

[H09] 带错误码的异常
来源：http://www.sxryk.cn/163flcxszdc.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.sxryk.cn/163yvejwfgs.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.sxryk.cn/163qbudyjoi.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.aibaodan.cn/163vdwhnbhj.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.xuanzx.com/163dezhiccl.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.aibaodan.cn/163cixmhjyx.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.xuanzx.com/163fgfaphfz.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.aibaodan.cn/163jqkbjdrv.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.xuanzx.com/163pgwafksv.html

[H10] 资源自动释放
来源：http://www.aibaodan.cn/163hhhsqxiu.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.aibaodan.cn/163ypcwcors.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.xuanzx.com/163cvyhhpov.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163junpiogr.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163ogrhejsh.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.aibaodan.cn/163adwkbjib.html

Go:   defer f.Close()
来源：http://www.aibaodan.cn/163hifzjnry.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.xuanzx.com/163cfkcpjsp.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.xuanzx.com/163hkvzjsiq.html

================================================================================
来源：http://www.sxryk.cn/163ndownqqf.html

I. 正则表达式
来源：http://www.xuanzx.com/163xwelmzsd.html

================================================================================
来源：http://www.sxryk.cn/163lapqlbnp.html

[I01] 判断是否匹配
来源：http://www.aibaodan.cn/163fcixnwef.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.xuanzx.com/163dwtogkfn.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.xuanzx.com/163cosxmqtm.html

JS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163bvumtpmj.html

TS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163apxilpow.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.xuanzx.com/163jzyygqxw.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.aibaodan.cn/163xdeqidqo.html

Ruby: s.match?(/\d+/)
来源：http://www.aibaodan.cn/163aqpfdgpi.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.xuanzx.com/163srqxexnn.html

[I02] 提取所有匹配
来源：http://www.xuanzx.com/163gfhqgjmj.html

Py:   re.findall(r"\d+", s)
来源：http://www.aibaodan.cn/163kpfpojin.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.aibaodan.cn/163akmtbcsi.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.aibaodan.cn/163vjnxxiez.html

TS:   s.match(/\d+/g)
来源：http://www.sxryk.cn/163wrzbwowk.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.sxryk.cn/163bastutra.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.xuanzx.com/163sdnzuxyj.html

Ruby: s.scan(/\d+/)
来源：http://www.sxryk.cn/163renbkmpq.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.aibaodan.cn/163paaybmtf.html

[I03] 提取捕获分组
来源：http://www.xuanzx.com/163kacuvvqs.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.xuanzx.com/163vfiicxvy.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.aibaodan.cn/163mshfqeyz.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.sxryk.cn/163yxhyrapb.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.xuanzx.com/163lazxartx.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.sxryk.cn/163coiuxoba.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.sxryk.cn/163mctsftax.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.aibaodan.cn/163qbxcfnrz.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.aibaodan.cn/163iczxkeuv.html

[I04] 正则替换
来源：http://www.aibaodan.cn/163zdkgrlsn.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.sxryk.cn/163oxrqkojs.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163xzxrmlfw.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163lohhfgvg.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163slijdgqj.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.xuanzx.com/163inpwiyfk.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.xuanzx.com/163rvcqgnbl.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.aibaodan.cn/163gaxjglhq.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.xuanzx.com/163luhobjsb.html

[I05] 按正则拆分
来源：http://www.aibaodan.cn/163cyaatgte.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.sxryk.cn/163rdemrbzw.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.sxryk.cn/163vpvkrxyu.html

JS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163jxkheuls.html

TS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163thoeznqu.html

Java: s.split("\\s*,\\s*")
来源：http://www.xuanzx.com/163gdqhbrwb.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.sxryk.cn/163beuxhpmr.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163osbniytb.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.xuanzx.com/163tzxvvspn.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.sxryk.cn/163rklgyvrx.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163klkqglyz.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.xuanzx.com/163ekqhfqvx.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163ekfwbxlw.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163qelguiai.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.xuanzx.com/163dzxrmbvu.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.aibaodan.cn/163llxzakxq.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.xuanzx.com/163zjvovoaa.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163yefkrqol.html

[I07] 忽略大小写与多行模式
来源：http://www.aibaodan.cn/163gxcrzpuc.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.aibaodan.cn/163ynavaryo.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.aibaodan.cn/163yemofheu.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.aibaodan.cn/163ekjarqfy.html

TS:   /error/gim
来源：http://www.aibaodan.cn/163nscgdutk.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.aibaodan.cn/163iqxquoyn.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.xuanzx.com/163pnmrehis.html

Ruby: s.scan(/error/i)
来源：http://www.xuanzx.com/163cvclpggl.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.sxryk.cn/163xlghnakd.html

[I08] 贪婪与非贪婪匹配
来源：http://www.aibaodan.cn/163cfajkbia.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.xuanzx.com/163xjmintmo.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.aibaodan.cn/163jqcubryj.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163wkznhtgk.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163datkmdda.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.xuanzx.com/163fyociscm.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.xuanzx.com/163kobxvkis.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.xuanzx.com/163qabysjis.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.sxryk.cn/163yclieiou.html

================================================================================
来源：http://www.aibaodan.cn/163edvigmzw.html

J. 日期与时间
来源：http://www.sxryk.cn/163oeqxxiin.html

================================================================================
来源：http://www.sxryk.cn/163ukzahaov.html

[J01] 获取当前时间
来源：http://www.aibaodan.cn/163yaxkfdfh.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.sxryk.cn/163pxmjyqgy.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163ylcgtjaz.html

JS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163gwtciznk.html

TS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163tgksdvxy.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.xuanzx.com/163wpfqmczy.html

Go:   time.Now()
来源：http://www.sxryk.cn/163xmpmwpgw.html

Ruby: Time.now
来源：http://www.xuanzx.com/163txmnhtnm.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.xuanzx.com/163tppkccws.html

[J02] 格式化输出
来源：http://www.xuanzx.com/163kieysrov.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163niugxxpv.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163zczbcdgf.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.aibaodan.cn/163tlhhlfdv.html

TS:   d.toISOString()
来源：http://www.sxryk.cn/163hvxpivex.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.sxryk.cn/163hxmqmbpv.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.sxryk.cn/163fzpnyzld.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163nnjjarqa.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.aibaodan.cn/163palaqfxz.html

[J03] 字符串解析为日期
来源：http://www.sxryk.cn/163vipdmywh.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.aibaodan.cn/163szwmdcco.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.aibaodan.cn/163eytuimoi.html

JS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163aaiogkua.html

TS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163iakhzrpm.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.aibaodan.cn/163vhjkwomd.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.sxryk.cn/163eslfschi.html

Ruby: Date.parse("2024-01-02")
来源：http://www.xuanzx.com/163lkfplwyb.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.aibaodan.cn/163bjrocetb.html

[J04] 时间戳与日期互转
来源：http://www.xuanzx.com/163owuyflvq.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.xuanzx.com/163ysavpqnm.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.aibaodan.cn/163rgqgdgyq.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.xuanzx.com/163dxunowwi.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.aibaodan.cn/163xiatixiv.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.aibaodan.cn/163qoqlxzyt.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.sxryk.cn/163zfscojhd.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.sxryk.cn/163rtffxxxt.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.xuanzx.com/163wgllkbqg.html

[J05] 时间加减（加 7 天）
来源：http://www.xuanzx.com/163ebzgubho.html

Py:   now + timedelta(days=7)
来源：http://www.xuanzx.com/163ozffxoya.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.sxryk.cn/163bmuhndin.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163mrihronq.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163yqzkybof.html

Java: LocalDate.now().plusDays(7)
来源：http://www.aibaodan.cn/163cmkxnjjb.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.xuanzx.com/163uwisklbv.html

Ruby: Time.now + 7 * 86400
来源：http://www.aibaodan.cn/163kjqjjarw.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.aibaodan.cn/163kmriseuy.html

[J06] 计算两时间之差
来源：http://www.xuanzx.com/163mpdkbmvm.html

Py:   (end - start).total_seconds()
来源：http://www.xuanzx.com/163swgxzrmv.html

PHP:  $end->diff($start)->days;
来源：http://www.sxryk.cn/163zqecessy.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.aibaodan.cn/163nfabwhyw.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.aibaodan.cn/163xkvcukdd.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.xuanzx.com/163oykbmqrq.html

Go:   end.Sub(start).Hours()
来源：http://www.aibaodan.cn/163xzmoifex.html

Ruby: end - start                 # 返回秒数
来源：http://www.sxryk.cn/163nqvvocfy.html

C#:   (end - start).TotalSeconds
来源：http://www.aibaodan.cn/163lymmfljm.html


<!-- 参考信息 -->