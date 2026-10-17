外链999!wailian999！

TS:   public / protected / private
来源：http://www.xuanzx.com/163zpiqduex.html

Java: public / protected / private / 默认包级
来源：http://www.xuanzx.com/163bgudrlqt.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.sxryk.cn/163ctjfkxpv.html

Ruby: public / protected / private
来源：http://www.sxryk.cn/163kxxzxkbn.html

C#:   public / protected / private / internal
来源：http://www.xuanzx.com/163pywabtim.html

[G11] getter / setter
来源：http://www.xuanzx.com/163kgogcapg.html

Py:   @property 与 @x.setter
来源：http://www.aibaodan.cn/163xecgblko.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.sxryk.cn/163cbvuezvc.html

JS:   get name() { return this._name; }
来源：http://www.xuanzx.com/163fjlqxchx.html

TS:   get name(): string { return this._name; }
来源：http://www.aibaodan.cn/163wlwvbdqk.html

Java: public String getName() { return name; }
来源：http://www.aibaodan.cn/163xuzymgce.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.aibaodan.cn/163gxxxvqvn.html

Ruby: attr_accessor :name
来源：http://www.aibaodan.cn/163ruldzepp.html

C#:   public string Name { get; set; }
来源：http://www.sxryk.cn/163qjnumoru.html

[G12] 对象转字符串
来源：http://www.aibaodan.cn/163gdgzzcsu.html

Py:   def __str__(self): return self.name
来源：http://www.sxryk.cn/163nzsydijw.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.sxryk.cn/163lbguedll.html

JS:   toString() { return this.name; }
来源：http://www.sxryk.cn/163axulfeep.html

TS:   toString(): string { return this.name; }
来源：http://www.xuanzx.com/163pqutirga.html

Java: @Override public String toString() { return name; }
来源：http://www.aibaodan.cn/163fqakvvoq.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.aibaodan.cn/163pxhoyaga.html

Ruby: def to_s; @name; end
来源：http://www.sxryk.cn/163kdfsceur.html

C#:   public override string ToString() => Name;
来源：http://www.sxryk.cn/163pvmfvhvy.html

[G13] 判断对象类型
来源：http://www.xuanzx.com/163botupypn.html

Py:   isinstance(u, User)
来源：http://www.xuanzx.com/163ezfeimrx.html

PHP:  $u instanceof User
来源：http://www.aibaodan.cn/163olacsacr.html

JS:   u instanceof User
来源：http://www.aibaodan.cn/163ibkbwhgb.html

TS:   u instanceof User
来源：http://www.sxryk.cn/163htoimpmb.html

Java: u instanceof User
来源：http://www.xuanzx.com/163vhzyvwsn.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.sxryk.cn/163stzrxqzf.html

Ruby: u.is_a?(User)
来源：http://www.xuanzx.com/163ftkujkeb.html

C#:   u is User
来源：http://www.xuanzx.com/163cyqtjtls.html

[G14] 数据类 / record
来源：http://www.sxryk.cn/163ervtbjcp.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.aibaodan.cn/163wcornpag.html

PHP:  // 用 readonly 属性模拟
来源：http://www.aibaodan.cn/163mwxnownk.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.aibaodan.cn/163emejsvwd.html

TS:   type User = { name: string; age: number };
来源：http://www.sxryk.cn/163hsrbzbjl.html

Java: record User(String name, int age) {}
来源：http://www.sxryk.cn/163zsrparpq.html

Go:   type User struct { Name string; Age int }
来源：http://www.aibaodan.cn/163wmoxgobf.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.aibaodan.cn/163dmupofxp.html

C#:   record User(string Name, int Age);
来源：http://www.xuanzx.com/163zmsyfbwr.html

[G15] 枚举
来源：http://www.xuanzx.com/163ljjceuhs.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.xuanzx.com/163akfcqfld.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.aibaodan.cn/163nirzwdgt.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.sxryk.cn/163wlgzfcdb.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163ipcpqorv.html

Java: enum Color { RED, GREEN }
来源：http://www.aibaodan.cn/163qchtzflq.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.sxryk.cn/163bihaqkyw.html

Ruby: Color = %i[red green].freeze
来源：http://www.sxryk.cn/163dltglngn.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163sgfymudn.html

[G16] 对象转数组 / 字典
来源：http://www.xuanzx.com/163fuumygxg.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.sxryk.cn/163binwbruj.html

PHP:  get_object_vars($obj);
来源：http://www.xuanzx.com/163oenoluvg.html

JS:   Object.entries(obj)
来源：http://www.sxryk.cn/163cvfhrnjk.html

TS:   Object.entries(obj)
来源：http://www.sxryk.cn/163cfwjznxd.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.xuanzx.com/163nrmjssal.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.sxryk.cn/163hqhrfxoh.html

Ruby: obj.instance_variables
来源：http://www.xuanzx.com/163mjjihbcp.html

C#:   // 用反射或 System.Text.Json
来源：http://www.xuanzx.com/163owfjmykc.html

================================================================================
来源：http://www.aibaodan.cn/163fbqczbzq.html

H. 异常与错误处理
来源：http://www.sxryk.cn/163mcohoyjd.html

================================================================================
来源：http://www.sxryk.cn/163rcwwgxev.html

[H01] try / catch 基础
来源：http://www.xuanzx.com/163vffwuawy.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.aibaodan.cn/163ufeqrvas.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.sxryk.cn/163xskhddvo.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163rhqlhcqg.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.aibaodan.cn/163kmbdadca.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.xuanzx.com/163omigooxa.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.xuanzx.com/163otsrrnxa.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.aibaodan.cn/163bvismijo.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.xuanzx.com/163vcptoadj.html

[H02] finally / ensure 收尾
来源：http://www.aibaodan.cn/163nejmjxst.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.aibaodan.cn/163owqvhcpu.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163qjwwzkpb.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163yolxjxiw.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163xpgdctjw.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163xvmrziwy.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.xuanzx.com/163qdtofwrk.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.aibaodan.cn/163ilirnnue.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.sxryk.cn/163pgjiajuu.html

[H03] 主动抛出异常
来源：http://www.sxryk.cn/163xxmvglex.html

Py:   raise ValueError("错误信息")
来源：http://www.sxryk.cn/163pqsyepcx.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.xuanzx.com/163eszqrkti.html

JS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163tolyywst.html

TS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163cwfbmdrl.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.aibaodan.cn/163ehiwbmvk.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.aibaodan.cn/163mguptazk.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.xuanzx.com/163tmvqeehq.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.xuanzx.com/163cczwkxzf.html

[H04] 自定义异常类型
来源：http://www.sxryk.cn/163sdmnltma.html

Py:   class MyError(Exception): pass
来源：http://www.aibaodan.cn/163hmdifdda.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.sxryk.cn/163dvnnmnhf.html

JS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163cmnhnpsy.html

TS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163lmbgbfka.html

Java: class MyException extends RuntimeException {}
来源：http://www.sxryk.cn/163mgksxmqc.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.sxryk.cn/163wnbaevpi.html

Ruby: class MyError < StandardError; end
来源：http://www.sxryk.cn/163zbxmeput.html

C#:   class MyException : Exception {}
来源：http://www.xuanzx.com/163zfewwbix.html

[H05] 捕获特定类型
来源：http://www.sxryk.cn/163pcivqgdn.html

Py:   except ValueError as e:
来源：http://www.aibaodan.cn/163tmhkyuqg.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.sxryk.cn/163ynbntkhi.html

JS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163lqlvbnvu.html

TS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163lhfavmzc.html

Java: catch (IOException | SQLException e) {}
来源：http://www.sxryk.cn/163rnuzaxsc.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.sxryk.cn/163gmqklejf.html

Ruby: rescue ArgumentError => e
来源：http://www.aibaodan.cn/163ndtzpvmp.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.sxryk.cn/163azyzguef.html

[H06] 可选值 / 空值安全访问
来源：http://www.aibaodan.cn/163xygjegel.html

Py:   value = d.get("k") or default
来源：http://www.xuanzx.com/163vvgsqtxo.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.sxryk.cn/163lvgnguyl.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163lfndftmj.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163iznxqiwx.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.sxryk.cn/163koctaeha.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.xuanzx.com/163utgflrbj.html

Ruby: d&.dig(:a, :b)
来源：http://www.xuanzx.com/163vmfwfsfj.html

C#:   obj?.A?.B ?? default
来源：http://www.sxryk.cn/163tlgtxykm.html

[H07] 断言
来源：http://www.sxryk.cn/163cjoevusw.html

Py:   assert x > 0, "必须为正"
来源：http://www.aibaodan.cn/163ovnxfjvr.html

PHP:  assert($x > 0);
来源：http://www.aibaodan.cn/163rmjaunye.html

JS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163usetguqi.html

TS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163hbwkzgah.html

Java: assert x > 0 : "必须为正";
来源：http://www.aibaodan.cn/163kkqbbvlv.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.xuanzx.com/163eubgqqwn.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.aibaodan.cn/163cvtstfxy.html

C#:   Debug.Assert(x > 0);
来源：http://www.xuanzx.com/163iuuaxbrh.html

[H08] 获取错误信息与堆栈
来源：http://www.sxryk.cn/163yveaamys.html

Py:   str(e);  traceback.format_exc()
来源：http://www.aibaodan.cn/163ximyihrk.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.sxryk.cn/163obezaeak.html

JS:   e.message;  e.stack
来源：http://www.xuanzx.com/163spumiegs.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.sxryk.cn/163kixmiysl.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.aibaodan.cn/163tnqkxcun.html

Go:   err.Error()
来源：http://www.xuanzx.com/163dbiwnsvt.html

Ruby: e.message;  e.backtrace
来源：http://www.aibaodan.cn/163fwugqcha.html

C#:   e.Message;  e.StackTrace
来源：http://www.sxryk.cn/163uohgnqgl.html

[H09] 带错误码的异常
来源：http://www.sxryk.cn/163nwldpnmk.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.sxryk.cn/163ftdcjkwy.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.aibaodan.cn/163ecfouovf.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.xuanzx.com/163cuukzpop.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.sxryk.cn/163wxxelrgb.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.xuanzx.com/163chxandoc.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.aibaodan.cn/163fkzbwjtw.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.xuanzx.com/163ccobhejs.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.xuanzx.com/163qjacwbbs.html

[H10] 资源自动释放
来源：http://www.aibaodan.cn/163uaykxpos.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.sxryk.cn/163wrpjezif.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.sxryk.cn/163yjjsblba.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163qgzpfuqp.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163vqsptzxe.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.xuanzx.com/163vwjdibej.html

Go:   defer f.Close()
来源：http://www.xuanzx.com/163zgauexzt.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.aibaodan.cn/163lzobadjy.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.sxryk.cn/163hunyrcol.html

================================================================================
来源：http://www.aibaodan.cn/163nzofdfrf.html

I. 正则表达式
来源：http://www.sxryk.cn/163ktponnlk.html

================================================================================
来源：http://www.aibaodan.cn/163uoohpsfw.html

[I01] 判断是否匹配
来源：http://www.xuanzx.com/163csjqgzrl.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.xuanzx.com/163huzjdxuy.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.xuanzx.com/163sskegrkr.html

JS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163icfuhkhs.html

TS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163qwqqmmop.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.aibaodan.cn/163ungbupsb.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.sxryk.cn/163zvlraltp.html

Ruby: s.match?(/\d+/)
来源：http://www.sxryk.cn/163wrhscdye.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.xuanzx.com/163kxlqbxvo.html

[I02] 提取所有匹配
来源：http://www.sxryk.cn/163ilbqaoeo.html

Py:   re.findall(r"\d+", s)
来源：http://www.sxryk.cn/163oqmbfksb.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.sxryk.cn/163lrgctxdd.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.xuanzx.com/163mixczldw.html

TS:   s.match(/\d+/g)
来源：http://www.sxryk.cn/163xbgfeanx.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.sxryk.cn/163fapwcmwv.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.aibaodan.cn/163kigrgdyh.html

Ruby: s.scan(/\d+/)
来源：http://www.xuanzx.com/163zjprotdo.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.aibaodan.cn/163mhpqiggc.html

[I03] 提取捕获分组
来源：http://www.xuanzx.com/163etrtccej.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.xuanzx.com/163stuefblz.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.aibaodan.cn/163hzwjrsok.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.aibaodan.cn/163wltzyief.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.xuanzx.com/163glacuosf.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.aibaodan.cn/163ozonvxnh.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.aibaodan.cn/163xgebpmta.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.sxryk.cn/163kbhjtppp.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.sxryk.cn/163pmcrdyzy.html

[I04] 正则替换
来源：http://www.aibaodan.cn/163qkpnbktr.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.xuanzx.com/163vvsevaia.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163mzgyuxpq.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163xtlorsga.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163cgfmmsnf.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.sxryk.cn/163tcaghgxn.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.xuanzx.com/163itrcdlpq.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.xuanzx.com/163oglxspoc.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.sxryk.cn/163kifwqwcn.html

[I05] 按正则拆分
来源：http://www.sxryk.cn/163gqbvghbr.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.xuanzx.com/163sinblpud.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.aibaodan.cn/163tqgjditv.html

JS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163irlvykan.html

TS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163qtltbuwx.html

Java: s.split("\\s*,\\s*")
来源：http://www.aibaodan.cn/163lhebriid.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.aibaodan.cn/163zbqtcczd.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163zjcxxnxa.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.aibaodan.cn/163aseqvwco.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.sxryk.cn/163mubkfntp.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163fqicxzul.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.aibaodan.cn/163ivdjerrs.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163izntgopq.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163olnhkwzd.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.aibaodan.cn/163ureyihzg.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.sxryk.cn/163mkpecmbe.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.xuanzx.com/163npanabzw.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163pyqqrcks.html

[I07] 忽略大小写与多行模式
来源：http://www.xuanzx.com/163nzwmugoj.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.aibaodan.cn/163fqmuwmdl.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.aibaodan.cn/163anibfgpp.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.xuanzx.com/163ycknfpxc.html

TS:   /error/gim
来源：http://www.sxryk.cn/163fgtwhkua.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.sxryk.cn/163ymdyjvku.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.xuanzx.com/163iqmenltn.html

Ruby: s.scan(/error/i)
来源：http://www.aibaodan.cn/163sfyggvft.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.sxryk.cn/163kbcitrng.html

[I08] 贪婪与非贪婪匹配
来源：http://www.aibaodan.cn/163uayeekfd.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.xuanzx.com/163mkmpanlg.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.xuanzx.com/163ygsdttyy.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163pxmdlcro.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163cncrcpxj.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.xuanzx.com/163iivuqecz.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.sxryk.cn/163mbpnmyta.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.sxryk.cn/163azfcmsfy.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.sxryk.cn/163yfmbbdti.html

================================================================================
来源：http://www.sxryk.cn/163zgnxdoiu.html

J. 日期与时间
来源：http://www.sxryk.cn/163tjbmiexr.html

================================================================================
来源：http://www.aibaodan.cn/163zfhwrumz.html

[J01] 获取当前时间
来源：http://www.xuanzx.com/163qnxjgmag.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.sxryk.cn/163sfaavkuj.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163glhtmrpj.html

JS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163iweryvch.html

TS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163bndxlrtz.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.aibaodan.cn/163xhwqvivj.html

Go:   time.Now()
来源：http://www.sxryk.cn/163pqlhmmzy.html

Ruby: Time.now
来源：http://www.aibaodan.cn/163gjvodwmw.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.xuanzx.com/163fykvubpt.html

[J02] 格式化输出
来源：http://www.aibaodan.cn/163krwynnho.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163adglembp.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163soyohnjs.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.xuanzx.com/163nhoqkvyo.html

TS:   d.toISOString()
来源：http://www.xuanzx.com/163mlfdebzp.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.xuanzx.com/163gnkjwzar.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.xuanzx.com/163gxypnktd.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163nwcepofu.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.sxryk.cn/163pasexswj.html

[J03] 字符串解析为日期
来源：http://www.aibaodan.cn/163tlbuirzu.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.sxryk.cn/163yhotqdnk.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.xuanzx.com/163iatltonb.html

JS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163cenxlgxt.html

TS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163gynmyaem.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.xuanzx.com/163itvyjaky.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.sxryk.cn/163xsrrpadc.html

Ruby: Date.parse("2024-01-02")
来源：http://www.aibaodan.cn/163eltrmoag.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.xuanzx.com/163agihqhbb.html

[J04] 时间戳与日期互转
来源：http://www.xuanzx.com/163zlmjspku.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.sxryk.cn/163gpxbwznm.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.aibaodan.cn/163koxqevfb.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.sxryk.cn/163akbahcvj.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.sxryk.cn/163odgoqwyx.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.sxryk.cn/163djkiwyyb.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.xuanzx.com/163jwhmeoze.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.aibaodan.cn/163kxcuxflt.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.aibaodan.cn/163prdqvpfn.html

[J05] 时间加减（加 7 天）
来源：http://www.xuanzx.com/163svttoldd.html

Py:   now + timedelta(days=7)
来源：http://www.aibaodan.cn/163amvsuljh.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.sxryk.cn/163ojcbbutf.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163jywgoelz.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163rntyunmv.html

Java: LocalDate.now().plusDays(7)
来源：http://www.xuanzx.com/163iqlptvjg.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.sxryk.cn/163nbfhqtio.html

Ruby: Time.now + 7 * 86400
来源：http://www.sxryk.cn/163ljadjwkk.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.aibaodan.cn/163nvjntvuh.html

[J06] 计算两时间之差
来源：http://www.aibaodan.cn/163wpqnwzcq.html

Py:   (end - start).total_seconds()
来源：http://www.aibaodan.cn/163mbeakvkt.html

PHP:  $end->diff($start)->days;
来源：http://www.xuanzx.com/163gnohglrm.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.sxryk.cn/163lfqtbtmo.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.sxryk.cn/163cwblukel.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.xuanzx.com/163cwfpvequ.html

Go:   end.Sub(start).Hours()
来源：http://www.aibaodan.cn/163rdskvrpm.html

Ruby: end - start                 # 返回秒数
来源：http://www.xuanzx.com/163gxagaviz.html

C#:   (end - start).TotalSeconds
来源：http://www.aibaodan.cn/163fyjsecal.html

[J07] 比较两个日期
来源：http://www.xuanzx.com/163nytowaqn.html

Py:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163yppotbyb.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.aibaodan.cn/163wnxcxpxo.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163lsepcjhw.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163ziwcuyjg.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.xuanzx.com/163lryrddzm.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.aibaodan.cn/163vwcwrgii.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163xfwllmwm.html

C#:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163yyhulzjt.html

[J08] 提取年月日与星期
来源：http://www.xuanzx.com/163ygcozesb.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.aibaodan.cn/163mtkvtait.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.aibaodan.cn/163hidoiavx.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.aibaodan.cn/163tnicmsxl.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.sxryk.cn/163gwdsswoq.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.sxryk.cn/163pkfodfso.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.xuanzx.com/163jlsouyqb.html


<!-- 参考信息 -->