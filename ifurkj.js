外链999!wailian999！

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.xuanzx.com/163ablxwbyi.html

Ruby: def self.f; end
来源：http://www.aibaodan.cn/163rdjsznws.html

C#:   public static void F() {}
来源：http://www.xuanzx.com/163wnqcjllt.html

[G09] 接口 / 抽象类
来源：http://www.aibaodan.cn/163iizujlhk.html

Py:   from abc import ABC, abstractmethod
来源：http://www.aibaodan.cn/163qydvsyxa.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.xuanzx.com/163zkwlttno.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.sxryk.cn/163ckrxfnpo.html

TS:   interface Shape { area(): number; }
来源：http://www.aibaodan.cn/163rbgxtmfb.html

Java: interface Shape { double area(); }
来源：http://www.xuanzx.com/163ogocorat.html

Go:   type Shape interface { Area() float64 }
来源：http://www.xuanzx.com/163vdqldmtj.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.aibaodan.cn/163tjkozfor.html

C#:   interface IShape { double Area(); }
来源：http://www.aibaodan.cn/163kpjfydkx.html

[G10] 访问控制
来源：http://www.sxryk.cn/163pxzvchio.html

Py:   约定 _protected / __private（不强制）
来源：http://www.sxryk.cn/163kryogrck.html

PHP:  public / protected / private
来源：http://www.xuanzx.com/163bpyogwdz.html

JS:   #private 字段；其余公开
来源：http://www.sxryk.cn/163ivclouko.html

TS:   public / protected / private
来源：http://www.sxryk.cn/163ayovzglp.html

Java: public / protected / private / 默认包级
来源：http://www.sxryk.cn/163ddtbkgms.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.xuanzx.com/163uwejtmuz.html

Ruby: public / protected / private
来源：http://www.sxryk.cn/163talzuzsj.html

C#:   public / protected / private / internal
来源：http://www.xuanzx.com/163rzucybte.html

[G11] getter / setter
来源：http://www.xuanzx.com/163cksourwx.html

Py:   @property 与 @x.setter
来源：http://www.sxryk.cn/163bsoqqeah.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.sxryk.cn/163alxzmmsb.html

JS:   get name() { return this._name; }
来源：http://www.aibaodan.cn/163vrwobnws.html

TS:   get name(): string { return this._name; }
来源：http://www.aibaodan.cn/163ijrfbmva.html

Java: public String getName() { return name; }
来源：http://www.xuanzx.com/163irgefukr.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.xuanzx.com/163duekpfbo.html

Ruby: attr_accessor :name
来源：http://www.sxryk.cn/163fckothmo.html

C#:   public string Name { get; set; }
来源：http://www.sxryk.cn/163nkzztruj.html

[G12] 对象转字符串
来源：http://www.sxryk.cn/163tnctxaph.html

Py:   def __str__(self): return self.name
来源：http://www.sxryk.cn/163pqeefikd.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.xuanzx.com/163krimjmzo.html

JS:   toString() { return this.name; }
来源：http://www.sxryk.cn/163bfvjfhon.html

TS:   toString(): string { return this.name; }
来源：http://www.xuanzx.com/163hjalkkcp.html

Java: @Override public String toString() { return name; }
来源：http://www.xuanzx.com/163raurbngt.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.aibaodan.cn/163somrreyq.html

Ruby: def to_s; @name; end
来源：http://www.aibaodan.cn/163skibekxg.html

C#:   public override string ToString() => Name;
来源：http://www.aibaodan.cn/163jeykhskq.html

[G13] 判断对象类型
来源：http://www.xuanzx.com/163porwljwi.html

Py:   isinstance(u, User)
来源：http://www.xuanzx.com/163xecxtyvt.html

PHP:  $u instanceof User
来源：http://www.aibaodan.cn/163hcltaukg.html

JS:   u instanceof User
来源：http://www.xuanzx.com/163vmosmaon.html

TS:   u instanceof User
来源：http://www.aibaodan.cn/163jcahkata.html

Java: u instanceof User
来源：http://www.sxryk.cn/163avwvfyvw.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.sxryk.cn/163sovlaszr.html

Ruby: u.is_a?(User)
来源：http://www.sxryk.cn/163xbizwddx.html

C#:   u is User
来源：http://www.sxryk.cn/163gcolvyay.html

[G14] 数据类 / record
来源：http://www.sxryk.cn/163yqldvowv.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.aibaodan.cn/163vunmlsts.html

PHP:  // 用 readonly 属性模拟
来源：http://www.sxryk.cn/163qzhpciiu.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.sxryk.cn/163hhoizelc.html

TS:   type User = { name: string; age: number };
来源：http://www.aibaodan.cn/163xqqeypzc.html

Java: record User(String name, int age) {}
来源：http://www.xuanzx.com/163lbydibqc.html

Go:   type User struct { Name string; Age int }
来源：http://www.aibaodan.cn/163aphtgzjq.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.xuanzx.com/163kwkhfmko.html

C#:   record User(string Name, int Age);
来源：http://www.aibaodan.cn/163utncnxav.html

[G15] 枚举
来源：http://www.aibaodan.cn/163bwgkmgna.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.sxryk.cn/163ufjhellr.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.aibaodan.cn/163cjtbkzas.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.xuanzx.com/163ziexrfdu.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163vvaxumxs.html

Java: enum Color { RED, GREEN }
来源：http://www.aibaodan.cn/163htekneuq.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.xuanzx.com/163eqlbbkoi.html

Ruby: Color = %i[red green].freeze
来源：http://www.sxryk.cn/163cruhwylj.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163kebvpwjg.html

[G16] 对象转数组 / 字典
来源：http://www.sxryk.cn/163eacclfit.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.xuanzx.com/163ugblmirm.html

PHP:  get_object_vars($obj);
来源：http://www.aibaodan.cn/163zklgegue.html

JS:   Object.entries(obj)
来源：http://www.xuanzx.com/163yemloepv.html

TS:   Object.entries(obj)
来源：http://www.xuanzx.com/163fxqmkqcx.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.sxryk.cn/163vuhimxhe.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.aibaodan.cn/163uqjliprw.html

Ruby: obj.instance_variables
来源：http://www.aibaodan.cn/163mhvtfjye.html

C#:   // 用反射或 System.Text.Json
来源：http://www.xuanzx.com/163nlatcmzw.html

================================================================================
来源：http://www.xuanzx.com/163ivvgqfcy.html

H. 异常与错误处理
来源：http://www.xuanzx.com/163bdlxiwlu.html

================================================================================
来源：http://www.aibaodan.cn/163vzwknowo.html

[H01] try / catch 基础
来源：http://www.xuanzx.com/163qvczibom.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.xuanzx.com/163reqewdmx.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.aibaodan.cn/163hfuojfli.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163nhgqtjsx.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.aibaodan.cn/163igyyxfor.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.xuanzx.com/163duagugwc.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.aibaodan.cn/163popoihmf.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.sxryk.cn/163kzfjqysh.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.aibaodan.cn/163cyjzuwms.html

[H02] finally / ensure 收尾
来源：http://www.sxryk.cn/163kuacbwcn.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.aibaodan.cn/163kfszocch.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163yrqovdza.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163repehjsi.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163mvizplyn.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163ybevcafg.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.aibaodan.cn/163cfcmljsb.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.sxryk.cn/163jymjqehb.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.xuanzx.com/163jkebkuts.html

[H03] 主动抛出异常
来源：http://www.aibaodan.cn/163vzfddqam.html

Py:   raise ValueError("错误信息")
来源：http://www.xuanzx.com/163foywfzjh.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.aibaodan.cn/163jkvfvhaz.html

JS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163yyqkdwlx.html

TS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163isqogxhx.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.sxryk.cn/163bnzhxvzf.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.aibaodan.cn/163jnjosqdt.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.xuanzx.com/163ofndsnqy.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.sxryk.cn/163seofvhmo.html

[H04] 自定义异常类型
来源：http://www.xuanzx.com/163zwzdntwn.html

Py:   class MyError(Exception): pass
来源：http://www.aibaodan.cn/163sijnwlli.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.xuanzx.com/163ifgkghiu.html

JS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163kpkpxozl.html

TS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163quujuwfc.html

Java: class MyException extends RuntimeException {}
来源：http://www.xuanzx.com/163zlpsssel.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.aibaodan.cn/163zsalfdhj.html

Ruby: class MyError < StandardError; end
来源：http://www.xuanzx.com/163nbgufiup.html

C#:   class MyException : Exception {}
来源：http://www.aibaodan.cn/163xgyrjrof.html

[H05] 捕获特定类型
来源：http://www.xuanzx.com/163bxfwnecd.html

Py:   except ValueError as e:
来源：http://www.xuanzx.com/163rfrwluzg.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.sxryk.cn/163gzaazvec.html

JS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163rnlbvhnv.html

TS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163dhbjufvd.html

Java: catch (IOException | SQLException e) {}
来源：http://www.xuanzx.com/163gdcabyxz.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.sxryk.cn/163jeumwmbk.html

Ruby: rescue ArgumentError => e
来源：http://www.aibaodan.cn/163pygdwicd.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.xuanzx.com/163nooayfwy.html

[H06] 可选值 / 空值安全访问
来源：http://www.sxryk.cn/163pzlivijf.html

Py:   value = d.get("k") or default
来源：http://www.aibaodan.cn/163bjaghaqi.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.sxryk.cn/163rpceqipn.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163evbshshi.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163qqsmjjbk.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.xuanzx.com/163dgylmhdq.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.sxryk.cn/163dnzyhzpp.html

Ruby: d&.dig(:a, :b)
来源：http://www.sxryk.cn/163luhnrafo.html

C#:   obj?.A?.B ?? default
来源：http://www.sxryk.cn/163hmilwmeh.html

[H07] 断言
来源：http://www.sxryk.cn/163opuivxuc.html

Py:   assert x > 0, "必须为正"
来源：http://www.aibaodan.cn/163oxxqapqh.html

PHP:  assert($x > 0);
来源：http://www.aibaodan.cn/163hbcleqnx.html

JS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163fvpxqooo.html

TS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163lrjcjpam.html

Java: assert x > 0 : "必须为正";
来源：http://www.aibaodan.cn/163ugsvriye.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.aibaodan.cn/163kkbujptq.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.xuanzx.com/163lyowopqh.html

C#:   Debug.Assert(x > 0);
来源：http://www.sxryk.cn/163bmeartum.html

[H08] 获取错误信息与堆栈
来源：http://www.aibaodan.cn/163ywqlzmrn.html

Py:   str(e);  traceback.format_exc()
来源：http://www.xuanzx.com/163mljgcwqp.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.xuanzx.com/163rqteeghz.html

JS:   e.message;  e.stack
来源：http://www.aibaodan.cn/163dpcczmxb.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.xuanzx.com/163ecgorxuk.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.sxryk.cn/163vtkhcsuy.html

Go:   err.Error()
来源：http://www.xuanzx.com/163bzfxeetm.html

Ruby: e.message;  e.backtrace
来源：http://www.sxryk.cn/163jhsnkcyf.html

C#:   e.Message;  e.StackTrace
来源：http://www.aibaodan.cn/163bssjtqma.html

[H09] 带错误码的异常
来源：http://www.sxryk.cn/163axxezuyb.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.sxryk.cn/163qluzimla.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.sxryk.cn/163ryutvrcg.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.sxryk.cn/163sxdxbwpg.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.sxryk.cn/163sxdfegwg.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.xuanzx.com/163amdpzxfs.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.xuanzx.com/163apyocsie.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.aibaodan.cn/163dzcliqqk.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.xuanzx.com/163ddgohurd.html

[H10] 资源自动释放
来源：http://www.xuanzx.com/163afmvlqxi.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.sxryk.cn/163onptmbvb.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.aibaodan.cn/163tzoagccz.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163vxffamtz.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163iwdcgoiy.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.sxryk.cn/163qlslmpip.html

Go:   defer f.Close()
来源：http://www.xuanzx.com/163pqqbfhkq.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.sxryk.cn/163tmyepelt.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.sxryk.cn/163kqkuyskx.html

================================================================================
来源：http://www.xuanzx.com/163ajhyyztc.html

I. 正则表达式
来源：http://www.xuanzx.com/163smdyzozq.html

================================================================================
来源：http://www.aibaodan.cn/163cbyqfzvg.html

[I01] 判断是否匹配
来源：http://www.aibaodan.cn/163nthwswhi.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.aibaodan.cn/163lbvjclcb.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.sxryk.cn/163mypgetuq.html

JS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163pddaeppb.html

TS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163npucropx.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.xuanzx.com/163gbwzpmcr.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.aibaodan.cn/163snsakqot.html

Ruby: s.match?(/\d+/)
来源：http://www.aibaodan.cn/163grxatage.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.aibaodan.cn/163bxnomhsy.html

[I02] 提取所有匹配
来源：http://www.sxryk.cn/163bwauczqh.html

Py:   re.findall(r"\d+", s)
来源：http://www.aibaodan.cn/163yqmxlkve.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.aibaodan.cn/163qpctxwsx.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.aibaodan.cn/163yorzbniz.html

TS:   s.match(/\d+/g)
来源：http://www.aibaodan.cn/163curmvpob.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.xuanzx.com/163msohjedz.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.aibaodan.cn/163ibomdaop.html

Ruby: s.scan(/\d+/)
来源：http://www.xuanzx.com/163ofolmdov.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.xuanzx.com/163casxoiun.html

[I03] 提取捕获分组
来源：http://www.sxryk.cn/163oxixidyi.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.sxryk.cn/163cvpyctky.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.xuanzx.com/163typxtaxd.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.sxryk.cn/163yrhelrdz.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.aibaodan.cn/163fqgdhzdx.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.aibaodan.cn/163cyzhjxkj.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.aibaodan.cn/163tbvknrbf.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.sxryk.cn/163nexjbgjy.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.sxryk.cn/163vtmmdukw.html

[I04] 正则替换
来源：http://www.xuanzx.com/163iprwssgu.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.xuanzx.com/163rsxpzeus.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163xxafaomq.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163niauxrjr.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163qzyhcqma.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.sxryk.cn/163axccnojq.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.xuanzx.com/163zuptdibw.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.xuanzx.com/163wokadsuf.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.sxryk.cn/163whdchwzd.html

[I05] 按正则拆分
来源：http://www.sxryk.cn/163ahwgutcs.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.xuanzx.com/163mpqephyo.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.aibaodan.cn/163vnkbnynu.html

JS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163pitjecwn.html

TS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163lrthqnpv.html

Java: s.split("\\s*,\\s*")
来源：http://www.aibaodan.cn/163jubxaywi.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.aibaodan.cn/163xvbsfxbp.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163robhkjwz.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.xuanzx.com/163vmvwisbt.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.aibaodan.cn/163ueodfmit.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163msosmpaz.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.sxryk.cn/163pezqxlnt.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163nzgxvcmd.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163qcwaazgj.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.sxryk.cn/163chskfpzh.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.xuanzx.com/163lkcloqmd.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.sxryk.cn/163ukesayrd.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163loipszac.html

[I07] 忽略大小写与多行模式
来源：http://www.aibaodan.cn/163jxkdyulk.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.aibaodan.cn/163xlskexib.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.xuanzx.com/163vlyhojwa.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.aibaodan.cn/163rwjfvybv.html

TS:   /error/gim
来源：http://www.sxryk.cn/163ykmypdhm.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.aibaodan.cn/163ynibhbgq.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.xuanzx.com/163bircdtmc.html

Ruby: s.scan(/error/i)
来源：http://www.aibaodan.cn/163qohuwrlw.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.xuanzx.com/163pmtzpaak.html

[I08] 贪婪与非贪婪匹配
来源：http://www.sxryk.cn/163pkygwpux.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.xuanzx.com/163uhuwqwff.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.xuanzx.com/163myzphjja.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163tlaqpcey.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163cootscuq.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.sxryk.cn/163zorqzqmb.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.xuanzx.com/163szwyqtun.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.aibaodan.cn/163ijowypbc.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.aibaodan.cn/163kyejzmvh.html

================================================================================
来源：http://www.xuanzx.com/163mhgcsaus.html

J. 日期与时间
来源：http://www.sxryk.cn/163mrksydrw.html

================================================================================
来源：http://www.aibaodan.cn/163epsirztv.html

[J01] 获取当前时间
来源：http://www.sxryk.cn/163kulbdjdp.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.aibaodan.cn/163hfnwzbjr.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163gedwuplq.html

JS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163ohwlpqjr.html

TS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163eiejarnx.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.sxryk.cn/163wtycbqad.html

Go:   time.Now()
来源：http://www.aibaodan.cn/163nkqslwht.html

Ruby: Time.now
来源：http://www.aibaodan.cn/163myzqkwpk.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.sxryk.cn/163rgvvzcfi.html

[J02] 格式化输出
来源：http://www.xuanzx.com/163dwkaflub.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163kpqpogcb.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163kaxzengs.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.sxryk.cn/163vvomgfus.html

TS:   d.toISOString()
来源：http://www.aibaodan.cn/163mcaxsvbi.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.sxryk.cn/163uuxztvft.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.xuanzx.com/163gdefskwq.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163chtrxvmi.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.xuanzx.com/163xwfkduax.html

[J03] 字符串解析为日期
来源：http://www.aibaodan.cn/163vdayfyzp.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.sxryk.cn/163cobjajym.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.sxryk.cn/163qywrleiv.html

JS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163pbdimjnr.html

TS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163draagskm.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.sxryk.cn/163hfexqcmn.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.xuanzx.com/163sayvgdrv.html

Ruby: Date.parse("2024-01-02")
来源：http://www.sxryk.cn/163jkjzwcqx.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.xuanzx.com/163oyqpmtmq.html

[J04] 时间戳与日期互转
来源：http://www.aibaodan.cn/163gjwacsaz.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.aibaodan.cn/163quayfpwy.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.aibaodan.cn/163yswoikwe.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.aibaodan.cn/163bvecmoxt.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.xuanzx.com/163nrwxrpfd.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.sxryk.cn/163unmhbyxc.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.aibaodan.cn/163gqihrvkm.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.aibaodan.cn/163fdjlwxcg.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.aibaodan.cn/163qzrrevkh.html

[J05] 时间加减（加 7 天）
来源：http://www.sxryk.cn/163rtvxquyn.html

Py:   now + timedelta(days=7)
来源：http://www.sxryk.cn/163vnyfdoww.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.aibaodan.cn/163qoabcqxm.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163ghdtetya.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163hslyovza.html

Java: LocalDate.now().plusDays(7)
来源：http://www.xuanzx.com/163hqenebdh.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.xuanzx.com/163idzusydn.html

Ruby: Time.now + 7 * 86400
来源：http://www.xuanzx.com/163vvfyjosq.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.xuanzx.com/163qjckamfl.html

[J06] 计算两时间之差
来源：http://www.sxryk.cn/163udfxigsz.html

Py:   (end - start).total_seconds()
来源：http://www.aibaodan.cn/163xuhqilit.html

PHP:  $end->diff($start)->days;
来源：http://www.xuanzx.com/163cxmapsip.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.aibaodan.cn/163svcpppel.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.aibaodan.cn/163cedzsyqg.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.sxryk.cn/163mqhddnmy.html

Go:   end.Sub(start).Hours()
来源：http://www.sxryk.cn/163hhnxagix.html

Ruby: end - start                 # 返回秒数
来源：http://www.aibaodan.cn/163kchfpxyw.html

C#:   (end - start).TotalSeconds
来源：http://www.xuanzx.com/163efmwxqcz.html


<!-- 参考信息 -->