外链999!wailian999！

Java: interface Shape { double area(); }
来源：http://www.xuanzx.com/163biuutcdb.html

Go:   type Shape interface { Area() float64 }
来源：http://www.aibaodan.cn/163mpddipwp.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.sxryk.cn/163semwaavc.html

C#:   interface IShape { double Area(); }
来源：http://www.aibaodan.cn/163tlbmzoeq.html

[G10] 访问控制
来源：http://www.aibaodan.cn/163reypcmff.html

Py:   约定 _protected / __private（不强制）
来源：http://www.aibaodan.cn/163pfmbpmmk.html

PHP:  public / protected / private
来源：http://www.aibaodan.cn/163zgaxfwrc.html

JS:   #private 字段；其余公开
来源：http://www.sxryk.cn/163kvedupnq.html

TS:   public / protected / private
来源：http://www.aibaodan.cn/163oyjoiopl.html

Java: public / protected / private / 默认包级
来源：http://www.sxryk.cn/163fuozkqgy.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.sxryk.cn/163ftqdmdml.html

Ruby: public / protected / private
来源：http://www.sxryk.cn/163rzkljxod.html

C#:   public / protected / private / internal
来源：http://www.sxryk.cn/163dfcjwurp.html

[G11] getter / setter
来源：http://www.xuanzx.com/163drwcxirc.html

Py:   @property 与 @x.setter
来源：http://www.xuanzx.com/163xpaxrest.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.sxryk.cn/163gwvdqfvv.html

JS:   get name() { return this._name; }
来源：http://www.aibaodan.cn/163ofnxogbr.html

TS:   get name(): string { return this._name; }
来源：http://www.xuanzx.com/163iopgkiqx.html

Java: public String getName() { return name; }
来源：http://www.aibaodan.cn/163odggsfxx.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.xuanzx.com/163klogpqcu.html

Ruby: attr_accessor :name
来源：http://www.xuanzx.com/163uewlnnyt.html

C#:   public string Name { get; set; }
来源：http://www.xuanzx.com/163zrczekiq.html

[G12] 对象转字符串
来源：http://www.aibaodan.cn/163pajbbfot.html

Py:   def __str__(self): return self.name
来源：http://www.xuanzx.com/163khpjnbyq.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.aibaodan.cn/163rdszrzeb.html

JS:   toString() { return this.name; }
来源：http://www.sxryk.cn/163iagjqadb.html

TS:   toString(): string { return this.name; }
来源：http://www.xuanzx.com/163gdnfgdzd.html

Java: @Override public String toString() { return name; }
来源：http://www.sxryk.cn/163mpukrium.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.aibaodan.cn/163zpxeynsv.html

Ruby: def to_s; @name; end
来源：http://www.xuanzx.com/163dshkubxc.html

C#:   public override string ToString() => Name;
来源：http://www.aibaodan.cn/163gsipowtr.html

[G13] 判断对象类型
来源：http://www.sxryk.cn/163egqgzlel.html

Py:   isinstance(u, User)
来源：http://www.xuanzx.com/163yyhammfq.html

PHP:  $u instanceof User
来源：http://www.xuanzx.com/163jalsvgjz.html

JS:   u instanceof User
来源：http://www.sxryk.cn/163vvrtkccc.html

TS:   u instanceof User
来源：http://www.aibaodan.cn/163ybgfgxfu.html

Java: u instanceof User
来源：http://www.aibaodan.cn/163ydkqepvf.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.xuanzx.com/163yozcwjdi.html

Ruby: u.is_a?(User)
来源：http://www.xuanzx.com/163euojkybx.html

C#:   u is User
来源：http://www.sxryk.cn/163wobwcgsm.html

[G14] 数据类 / record
来源：http://www.sxryk.cn/163rthntjxz.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.xuanzx.com/163lhmghvii.html

PHP:  // 用 readonly 属性模拟
来源：http://www.xuanzx.com/163tanpnqmw.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.sxryk.cn/163rfnkyrku.html

TS:   type User = { name: string; age: number };
来源：http://www.xuanzx.com/163prbjjwid.html

Java: record User(String name, int age) {}
来源：http://www.sxryk.cn/163kkaayoee.html

Go:   type User struct { Name string; Age int }
来源：http://www.aibaodan.cn/163oapkqwqw.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.aibaodan.cn/163xnrgojpp.html

C#:   record User(string Name, int Age);
来源：http://www.xuanzx.com/163yhlwtdsl.html

[G15] 枚举
来源：http://www.sxryk.cn/163utlygqau.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.xuanzx.com/163rrsuhoax.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.aibaodan.cn/163buuknfgk.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.sxryk.cn/163mzteeysp.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163leqdfwar.html

Java: enum Color { RED, GREEN }
来源：http://www.sxryk.cn/163dxwlxtxk.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.xuanzx.com/163pjfcxouc.html

Ruby: Color = %i[red green].freeze
来源：http://www.xuanzx.com/163mttvnfpp.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163iqdrdcrf.html

[G16] 对象转数组 / 字典
来源：http://www.sxryk.cn/163vrilnlhh.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.xuanzx.com/163azegtwwj.html

PHP:  get_object_vars($obj);
来源：http://www.sxryk.cn/163ohxbxpkl.html

JS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163qaoizmna.html

TS:   Object.entries(obj)
来源：http://www.xuanzx.com/163hpjcnulu.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.xuanzx.com/163lbwbwzqe.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.xuanzx.com/163hsfwaohj.html

Ruby: obj.instance_variables
来源：http://www.sxryk.cn/163sttevsxb.html

C#:   // 用反射或 System.Text.Json
来源：http://www.sxryk.cn/163glgsqims.html

================================================================================
来源：http://www.sxryk.cn/163yacatgcr.html

H. 异常与错误处理
来源：http://www.sxryk.cn/163easusvuf.html

================================================================================
来源：http://www.xuanzx.com/163jcbwkagz.html

[H01] try / catch 基础
来源：http://www.aibaodan.cn/163orguluum.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.aibaodan.cn/163gwirdiwc.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.aibaodan.cn/163noetoycu.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163sogxxkra.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.xuanzx.com/163nuunmqum.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.xuanzx.com/163jdoowzsa.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.aibaodan.cn/163zzmuosjv.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.sxryk.cn/163somioptx.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.xuanzx.com/163bivnsknn.html

[H02] finally / ensure 收尾
来源：http://www.aibaodan.cn/163nbbsatnd.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.aibaodan.cn/163pblvjmhz.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163shajxxry.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163kplyymfn.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163dshtxndf.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163cydzhtvf.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.aibaodan.cn/163qwzxmcab.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.sxryk.cn/163ccsnzkqa.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.sxryk.cn/163ejlaaywm.html

[H03] 主动抛出异常
来源：http://www.sxryk.cn/163klqzeldb.html

Py:   raise ValueError("错误信息")
来源：http://www.sxryk.cn/163xgypwpgm.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.aibaodan.cn/163kariynlm.html

JS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163lytmzywy.html

TS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163wwbrssjt.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.sxryk.cn/163chzqwqlg.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.aibaodan.cn/163dgpsegfm.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.sxryk.cn/163snhlcfob.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.aibaodan.cn/163ezbxmomc.html

[H04] 自定义异常类型
来源：http://www.sxryk.cn/163bzhypwvx.html

Py:   class MyError(Exception): pass
来源：http://www.xuanzx.com/163phpqaqrf.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.sxryk.cn/163voowdnld.html

JS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163klannwcb.html

TS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163mmrqzigx.html

Java: class MyException extends RuntimeException {}
来源：http://www.aibaodan.cn/163ovgekywy.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.aibaodan.cn/163rbwazxnd.html

Ruby: class MyError < StandardError; end
来源：http://www.xuanzx.com/163saqnchzi.html

C#:   class MyException : Exception {}
来源：http://www.sxryk.cn/163ymvrhaci.html

[H05] 捕获特定类型
来源：http://www.xuanzx.com/163zdrmlznz.html

Py:   except ValueError as e:
来源：http://www.sxryk.cn/163ixafhqah.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.sxryk.cn/163cpsfbqqz.html

JS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163grsanyua.html

TS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163vwunypxn.html

Java: catch (IOException | SQLException e) {}
来源：http://www.aibaodan.cn/163suhgjxjg.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.xuanzx.com/163zxlmlduz.html

Ruby: rescue ArgumentError => e
来源：http://www.sxryk.cn/163ebvdedfy.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.sxryk.cn/163asuxcvsg.html

[H06] 可选值 / 空值安全访问
来源：http://www.sxryk.cn/163tqkmergm.html

Py:   value = d.get("k") or default
来源：http://www.xuanzx.com/163jyeohhnm.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.xuanzx.com/163iapakbjo.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163ozhxffmp.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163tvlgvosp.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.xuanzx.com/163wqesmhot.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.sxryk.cn/163qcumybve.html

Ruby: d&.dig(:a, :b)
来源：http://www.aibaodan.cn/163ijuhheaq.html

C#:   obj?.A?.B ?? default
来源：http://www.sxryk.cn/163fdnqbpij.html

[H07] 断言
来源：http://www.aibaodan.cn/163waosgbxo.html

Py:   assert x > 0, "必须为正"
来源：http://www.xuanzx.com/163bshyusqe.html

PHP:  assert($x > 0);
来源：http://www.aibaodan.cn/163uppagvxj.html

JS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163pcykocte.html

TS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163gsglppky.html

Java: assert x > 0 : "必须为正";
来源：http://www.sxryk.cn/163gdqvftid.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.xuanzx.com/163ayhabuah.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.aibaodan.cn/163hharnwvp.html

C#:   Debug.Assert(x > 0);
来源：http://www.xuanzx.com/163fqcwvahr.html

[H08] 获取错误信息与堆栈
来源：http://www.sxryk.cn/163xhnjvxqi.html

Py:   str(e);  traceback.format_exc()
来源：http://www.sxryk.cn/163mxdimuxv.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.xuanzx.com/163pinevdzo.html

JS:   e.message;  e.stack
来源：http://www.sxryk.cn/163adzvmfye.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.aibaodan.cn/163yxraneet.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.xuanzx.com/163vcbqhaau.html

Go:   err.Error()
来源：http://www.aibaodan.cn/163beodddmq.html

Ruby: e.message;  e.backtrace
来源：http://www.xuanzx.com/163rmbixhxa.html

C#:   e.Message;  e.StackTrace
来源：http://www.sxryk.cn/163tdsxankx.html

[H09] 带错误码的异常
来源：http://www.sxryk.cn/163xfcuvwml.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.aibaodan.cn/163yhmifwea.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.sxryk.cn/163ziodbgrh.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.sxryk.cn/163tysefjnj.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.xuanzx.com/163kxdidbnu.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.xuanzx.com/163amfwmdvq.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.aibaodan.cn/163apkorbde.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.xuanzx.com/163vjifrrck.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.aibaodan.cn/163ufjbgcrp.html

[H10] 资源自动释放
来源：http://www.aibaodan.cn/163jyruhqkf.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.sxryk.cn/163zvyipzwb.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.aibaodan.cn/163ketsipff.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163lszitoxb.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163uhsjjxqq.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.sxryk.cn/163syncqols.html

Go:   defer f.Close()
来源：http://www.sxryk.cn/163dghizsqt.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.xuanzx.com/163avaqjuek.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.aibaodan.cn/163xghxjulo.html

================================================================================
来源：http://www.xuanzx.com/163fhjodole.html

I. 正则表达式
来源：http://www.aibaodan.cn/163vpxdutto.html

================================================================================
来源：http://www.aibaodan.cn/163cbmiczwy.html

[I01] 判断是否匹配
来源：http://www.aibaodan.cn/163aemzfnju.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.sxryk.cn/163qzmxnjwz.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.sxryk.cn/163mnypmxmq.html

JS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163kcvcrsqh.html

TS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163ultwaafv.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.sxryk.cn/163mwkgsrdb.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.xuanzx.com/163xafxtant.html

Ruby: s.match?(/\d+/)
来源：http://www.aibaodan.cn/163ueyrdrai.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.sxryk.cn/163dhmbgbrp.html

[I02] 提取所有匹配
来源：http://www.aibaodan.cn/163iopyuqhn.html

Py:   re.findall(r"\d+", s)
来源：http://www.xuanzx.com/163rvwcilsu.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.aibaodan.cn/163dzlqzxyo.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.sxryk.cn/163fyogaehm.html

TS:   s.match(/\d+/g)
来源：http://www.aibaodan.cn/163rdzqywod.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.aibaodan.cn/163gkrfoymh.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.sxryk.cn/163nitntass.html

Ruby: s.scan(/\d+/)
来源：http://www.sxryk.cn/163xhlxbctu.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.sxryk.cn/163qtnxnzci.html

[I03] 提取捕获分组
来源：http://www.sxryk.cn/163lfsxntwf.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.sxryk.cn/163fvqohenj.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.sxryk.cn/163vlpagefl.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.sxryk.cn/163ndjzjasq.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.sxryk.cn/163jqwvmvkv.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.xuanzx.com/163mlolsair.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.xuanzx.com/163onwjxqza.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.aibaodan.cn/163iswkugfk.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.xuanzx.com/163zjyycyyk.html

[I04] 正则替换
来源：http://www.aibaodan.cn/163gwfyyfrw.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.sxryk.cn/163mgzwxffx.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163bpjzkban.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163hgcruted.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163aunkjrzy.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.aibaodan.cn/163mgxauzhu.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.xuanzx.com/163rsiuoptv.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.xuanzx.com/163nbxtqpsf.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.sxryk.cn/163sphoyykq.html

[I05] 按正则拆分
来源：http://www.aibaodan.cn/163kqegxllb.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.sxryk.cn/163oqxaycxb.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.xuanzx.com/163udmggoiu.html

JS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163bpbirdgq.html

TS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163xctdyyqi.html

Java: s.split("\\s*,\\s*")
来源：http://www.sxryk.cn/163hzmbighq.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.sxryk.cn/163ivjgnkyz.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163qspuxycm.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.sxryk.cn/163aayepjaz.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.sxryk.cn/163uhnrnwcx.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163ohmoayup.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.aibaodan.cn/163ruucocvx.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163jiqjxkcu.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163dcaitudk.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.sxryk.cn/163ymrumiwe.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.xuanzx.com/163rcbnrvhs.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.aibaodan.cn/163kximynmg.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163nyvmdnuz.html

[I07] 忽略大小写与多行模式
来源：http://www.aibaodan.cn/163seapnqmc.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.aibaodan.cn/163avizuptu.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.aibaodan.cn/163tdwoxawq.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.xuanzx.com/163kmoqvxyh.html

TS:   /error/gim
来源：http://www.aibaodan.cn/163elzpgaop.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.xuanzx.com/163xxijllfj.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.xuanzx.com/163pdguqkhf.html

Ruby: s.scan(/error/i)
来源：http://www.xuanzx.com/163caojgcya.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.aibaodan.cn/163zizhxudv.html

[I08] 贪婪与非贪婪匹配
来源：http://www.sxryk.cn/163ugfykhwi.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.xuanzx.com/163csnfentr.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.sxryk.cn/163pnirharl.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163roqlorti.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163bpvfitjp.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.aibaodan.cn/163xaogvxcl.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.sxryk.cn/163cuuirpsb.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.aibaodan.cn/163ouvdxyop.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.aibaodan.cn/163ertttrha.html

================================================================================
来源：http://www.aibaodan.cn/163nhspwofd.html

J. 日期与时间
来源：http://www.xuanzx.com/163kfeanhzb.html

================================================================================
来源：http://www.sxryk.cn/163qlbvarkn.html

[J01] 获取当前时间
来源：http://www.xuanzx.com/163sgldqshx.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.sxryk.cn/163heuwvkpz.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163ogmayghl.html

JS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163vkakpulh.html

TS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163pqoqktdt.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.xuanzx.com/163yrwvxegl.html

Go:   time.Now()
来源：http://www.sxryk.cn/163qgbjonsz.html

Ruby: Time.now
来源：http://www.aibaodan.cn/163speuiemb.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.sxryk.cn/163jezmtshx.html

[J02] 格式化输出
来源：http://www.aibaodan.cn/163kjleuxai.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163jfzjsjqc.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163svkqvktc.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.sxryk.cn/163wsxmzwyh.html

TS:   d.toISOString()
来源：http://www.sxryk.cn/163nbignkhx.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.xuanzx.com/163cwskiymk.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.xuanzx.com/163wxigysyo.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163bvumfecj.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.xuanzx.com/163ctrejoet.html

[J03] 字符串解析为日期
来源：http://www.xuanzx.com/163oadyyqon.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.xuanzx.com/163wsvmcook.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.aibaodan.cn/163yxkkqyfp.html

JS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163zhreazml.html

TS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163nwfvwwne.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.aibaodan.cn/163zvthyyym.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.xuanzx.com/163hbauaqcp.html

Ruby: Date.parse("2024-01-02")
来源：http://www.sxryk.cn/163dqqcnoyw.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.xuanzx.com/163agcbgwvo.html

[J04] 时间戳与日期互转
来源：http://www.xuanzx.com/163yqoyqykx.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.aibaodan.cn/163xocmigas.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.aibaodan.cn/163yeqddsmn.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.aibaodan.cn/163qwqfkvjd.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.aibaodan.cn/163szvawtbn.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.xuanzx.com/163oduslgtz.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.aibaodan.cn/163qggedhgh.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.aibaodan.cn/163xgpflitq.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.xuanzx.com/163hhqayqyx.html

[J05] 时间加减（加 7 天）
来源：http://www.sxryk.cn/163vvcyutuc.html

Py:   now + timedelta(days=7)
来源：http://www.aibaodan.cn/163akfsngsk.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.aibaodan.cn/163vfnwklfs.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163uubjuwui.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163nyaxtuzh.html

Java: LocalDate.now().plusDays(7)
来源：http://www.sxryk.cn/163kilocjhe.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.xuanzx.com/163irerldyy.html

Ruby: Time.now + 7 * 86400
来源：http://www.xuanzx.com/163gvgmento.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.xuanzx.com/163qggijsdg.html

[J06] 计算两时间之差
来源：http://www.aibaodan.cn/163silyqpca.html

Py:   (end - start).total_seconds()
来源：http://www.sxryk.cn/163ruxnmpqt.html

PHP:  $end->diff($start)->days;
来源：http://www.xuanzx.com/163bllrnbte.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.sxryk.cn/163ssuguvzj.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.xuanzx.com/163qujfympa.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.aibaodan.cn/163hezjkhik.html

Go:   end.Sub(start).Hours()
来源：http://www.aibaodan.cn/163msbmskzl.html

Ruby: end - start                 # 返回秒数
来源：http://www.aibaodan.cn/163uethwvrx.html

C#:   (end - start).TotalSeconds
来源：http://www.sxryk.cn/163aswppasm.html

[J07] 比较两个日期
来源：http://www.sxryk.cn/163gnxvevlw.html

Py:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163uowkabfs.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.sxryk.cn/163ivqzwnum.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163rbmtqzrp.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163lfejioyz.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.aibaodan.cn/163goxzizhg.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.aibaodan.cn/163qzvvrrhi.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163mezybmmo.html


<!-- 参考信息 -->