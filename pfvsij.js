外链999!wailian999！

TS:   public / protected / private
来源：http://www.aibaodan.cn/163ycvfaezn.html

Java: public / protected / private / 默认包级
来源：http://www.aibaodan.cn/163amtosnqu.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.sxryk.cn/163lfdqwgmo.html

Ruby: public / protected / private
来源：http://www.aibaodan.cn/163lrpkcumv.html

C#:   public / protected / private / internal
来源：http://www.xuanzx.com/163vmujdkie.html

[G11] getter / setter
来源：http://www.aibaodan.cn/163mztcelbs.html

Py:   @property 与 @x.setter
来源：http://www.xuanzx.com/163jchkniig.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.sxryk.cn/163cvbpieze.html

JS:   get name() { return this._name; }
来源：http://www.aibaodan.cn/163nidefrms.html

TS:   get name(): string { return this._name; }
来源：http://www.aibaodan.cn/163digmxmqi.html

Java: public String getName() { return name; }
来源：http://www.aibaodan.cn/163khrpclqn.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.xuanzx.com/163juxtobju.html

Ruby: attr_accessor :name
来源：http://www.xuanzx.com/163gqpicrom.html

C#:   public string Name { get; set; }
来源：http://www.sxryk.cn/163fflxsefm.html

[G12] 对象转字符串
来源：http://www.xuanzx.com/163bfquwykc.html

Py:   def __str__(self): return self.name
来源：http://www.xuanzx.com/163rmpxreza.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.xuanzx.com/163uaqyaqfr.html

JS:   toString() { return this.name; }
来源：http://www.aibaodan.cn/163lnzufxqh.html

TS:   toString(): string { return this.name; }
来源：http://www.xuanzx.com/163juinohrb.html

Java: @Override public String toString() { return name; }
来源：http://www.aibaodan.cn/163nnbqmuze.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.sxryk.cn/163apbhrzjx.html

Ruby: def to_s; @name; end
来源：http://www.sxryk.cn/163auplvzbo.html

C#:   public override string ToString() => Name;
来源：http://www.xuanzx.com/163kqgrxdid.html

[G13] 判断对象类型
来源：http://www.xuanzx.com/163vnzludgc.html

Py:   isinstance(u, User)
来源：http://www.sxryk.cn/163iohinleo.html

PHP:  $u instanceof User
来源：http://www.sxryk.cn/163ezjdwhul.html

JS:   u instanceof User
来源：http://www.xuanzx.com/163syicmwex.html

TS:   u instanceof User
来源：http://www.sxryk.cn/163sfqweowo.html

Java: u instanceof User
来源：http://www.aibaodan.cn/163nyvxfjkf.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.aibaodan.cn/163vvysnrwb.html

Ruby: u.is_a?(User)
来源：http://www.xuanzx.com/163vchckhiu.html

C#:   u is User
来源：http://www.sxryk.cn/163vqqtvbaj.html

[G14] 数据类 / record
来源：http://www.aibaodan.cn/163vaeukfcd.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.aibaodan.cn/163eballcjx.html

PHP:  // 用 readonly 属性模拟
来源：http://www.aibaodan.cn/163ummxayky.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.aibaodan.cn/163lhziafhq.html

TS:   type User = { name: string; age: number };
来源：http://www.aibaodan.cn/163zojxthpm.html

Java: record User(String name, int age) {}
来源：http://www.aibaodan.cn/163ymkpbivr.html

Go:   type User struct { Name string; Age int }
来源：http://www.sxryk.cn/163jzmyypgs.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.xuanzx.com/163algiexnf.html

C#:   record User(string Name, int Age);
来源：http://www.sxryk.cn/163buzahpsy.html

[G15] 枚举
来源：http://www.sxryk.cn/163boklklvd.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.aibaodan.cn/163smduohyb.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.aibaodan.cn/163tsgzudto.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.xuanzx.com/163lgnvrvjv.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163huzopksw.html

Java: enum Color { RED, GREEN }
来源：http://www.sxryk.cn/163oytcjxsd.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.aibaodan.cn/163uxtiomco.html

Ruby: Color = %i[red green].freeze
来源：http://www.xuanzx.com/163sarukqqk.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163jvzxudbl.html

[G16] 对象转数组 / 字典
来源：http://www.xuanzx.com/163ywdtajzl.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.aibaodan.cn/163pgvwasvc.html

PHP:  get_object_vars($obj);
来源：http://www.xuanzx.com/163xcasbywx.html

JS:   Object.entries(obj)
来源：http://www.sxryk.cn/163dxffebzq.html

TS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163wubwahal.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.sxryk.cn/163byeznchf.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.sxryk.cn/163otidluef.html

Ruby: obj.instance_variables
来源：http://www.xuanzx.com/163pwfiisxe.html

C#:   // 用反射或 System.Text.Json
来源：http://www.xuanzx.com/163vigxekgp.html

================================================================================
来源：http://www.sxryk.cn/163ylmmclrk.html

H. 异常与错误处理
来源：http://www.sxryk.cn/163cleyxlra.html

================================================================================
来源：http://www.xuanzx.com/163raxpxnhh.html

[H01] try / catch 基础
来源：http://www.sxryk.cn/163qoyixvrg.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.xuanzx.com/163svmbupkx.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.sxryk.cn/163hgvhtdby.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163xylysxgq.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.xuanzx.com/163hjnjxxaf.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.aibaodan.cn/163qpienfjz.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.xuanzx.com/163oteaxjnl.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.xuanzx.com/163heoxajrf.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.xuanzx.com/163ectimqfo.html

[H02] finally / ensure 收尾
来源：http://www.aibaodan.cn/163wzwgbkfx.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.sxryk.cn/163ufmpfymf.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163jkmcraew.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163hskvijmr.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163gtorpgdp.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163fwajzcza.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.aibaodan.cn/163konvmdjm.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.aibaodan.cn/163itqhpykg.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.xuanzx.com/163zexhzkav.html

[H03] 主动抛出异常
来源：http://www.xuanzx.com/163rblycqvx.html

Py:   raise ValueError("错误信息")
来源：http://www.aibaodan.cn/163blxhezwe.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.aibaodan.cn/163uriekkoz.html

JS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163hnfzmplr.html

TS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163mlhxsqgk.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.sxryk.cn/163gnuykqkr.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.sxryk.cn/163sopqcvca.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.xuanzx.com/163pjijwfop.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.xuanzx.com/163mmzdewlr.html

[H04] 自定义异常类型
来源：http://www.aibaodan.cn/163woiammic.html

Py:   class MyError(Exception): pass
来源：http://www.aibaodan.cn/163omcwsoai.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.sxryk.cn/163tkzlvypc.html

JS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163vqynhqte.html

TS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163baznqluc.html

Java: class MyException extends RuntimeException {}
来源：http://www.sxryk.cn/163bngxxoby.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.aibaodan.cn/163kxievoya.html

Ruby: class MyError < StandardError; end
来源：http://www.sxryk.cn/163xohodvwl.html

C#:   class MyException : Exception {}
来源：http://www.sxryk.cn/163ckecafid.html

[H05] 捕获特定类型
来源：http://www.sxryk.cn/163plitsszb.html

Py:   except ValueError as e:
来源：http://www.sxryk.cn/163yvojzypu.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.aibaodan.cn/163kxnglhoz.html

JS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163xyrvysnu.html

TS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163igakxwtm.html

Java: catch (IOException | SQLException e) {}
来源：http://www.aibaodan.cn/163ykkbuuwe.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.sxryk.cn/163fjzbhtdb.html

Ruby: rescue ArgumentError => e
来源：http://www.sxryk.cn/163dppcfinz.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.xuanzx.com/163cyfqdbzw.html

[H06] 可选值 / 空值安全访问
来源：http://www.xuanzx.com/163cdxvzczm.html

Py:   value = d.get("k") or default
来源：http://www.xuanzx.com/163vifqljsv.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.xuanzx.com/163pemxpdkx.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163yykrwgkv.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163ymsdtfxs.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.aibaodan.cn/163qriwfisq.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.aibaodan.cn/163glenzvty.html

Ruby: d&.dig(:a, :b)
来源：http://www.sxryk.cn/163xljitdhj.html

C#:   obj?.A?.B ?? default
来源：http://www.sxryk.cn/163kgnobyfi.html

[H07] 断言
来源：http://www.xuanzx.com/163gdczcoff.html

Py:   assert x > 0, "必须为正"
来源：http://www.xuanzx.com/163qugwceoz.html

PHP:  assert($x > 0);
来源：http://www.xuanzx.com/163itcydida.html

JS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163xtrcvbrg.html

TS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163yanvksrs.html

Java: assert x > 0 : "必须为正";
来源：http://www.xuanzx.com/163aoupxhed.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.sxryk.cn/163tcczccve.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.sxryk.cn/163qsvqcxoy.html

C#:   Debug.Assert(x > 0);
来源：http://www.xuanzx.com/163vnkbnkha.html

[H08] 获取错误信息与堆栈
来源：http://www.aibaodan.cn/163mummyvjo.html

Py:   str(e);  traceback.format_exc()
来源：http://www.xuanzx.com/163rmugalil.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.aibaodan.cn/163mvwjdrfr.html

JS:   e.message;  e.stack
来源：http://www.xuanzx.com/163svomhtmz.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.aibaodan.cn/163dfnimhef.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.sxryk.cn/163qtpepvom.html

Go:   err.Error()
来源：http://www.sxryk.cn/163laotciiq.html

Ruby: e.message;  e.backtrace
来源：http://www.aibaodan.cn/163bsutfibm.html

C#:   e.Message;  e.StackTrace
来源：http://www.sxryk.cn/163duawknkn.html

[H09] 带错误码的异常
来源：http://www.sxryk.cn/163wyzgvqys.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.sxryk.cn/163duuwtcqo.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.aibaodan.cn/163zuzwides.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.sxryk.cn/163edukkngf.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.aibaodan.cn/163lgcwmycy.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.xuanzx.com/163rbajhyeu.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.aibaodan.cn/163daquuxog.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.sxryk.cn/163fhsrpnvy.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.xuanzx.com/163xhavzsfl.html

[H10] 资源自动释放
来源：http://www.aibaodan.cn/163ecxnnudn.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.aibaodan.cn/163svnawcyx.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.sxryk.cn/163iynrcdot.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163jiizuaex.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163hmyjiads.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.xuanzx.com/163hatzuppt.html

Go:   defer f.Close()
来源：http://www.sxryk.cn/163cdhujvsl.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.sxryk.cn/163tgfgvkio.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.xuanzx.com/163vryrtkkz.html

================================================================================
来源：http://www.xuanzx.com/163nbvgwaqv.html

I. 正则表达式
来源：http://www.aibaodan.cn/163hvdyzgeq.html

================================================================================
来源：http://www.xuanzx.com/163yxlidldc.html

[I01] 判断是否匹配
来源：http://www.xuanzx.com/163yaxymoga.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.aibaodan.cn/163koqultdh.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.xuanzx.com/163nbiukvaz.html

JS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163zemsezgl.html

TS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163anncachh.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.aibaodan.cn/163rowsjkjk.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.sxryk.cn/163plsstirm.html

Ruby: s.match?(/\d+/)
来源：http://www.aibaodan.cn/163uxtnfgyh.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.sxryk.cn/163hgxubbil.html

[I02] 提取所有匹配
来源：http://www.xuanzx.com/163vjmcxozv.html

Py:   re.findall(r"\d+", s)
来源：http://www.sxryk.cn/163hxmjamwj.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.sxryk.cn/163pkjelcrj.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.aibaodan.cn/163boyfaues.html

TS:   s.match(/\d+/g)
来源：http://www.sxryk.cn/163kurlcnib.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.xuanzx.com/163psatwbld.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.sxryk.cn/163hiedrwvu.html

Ruby: s.scan(/\d+/)
来源：http://www.xuanzx.com/163xwguzbza.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.sxryk.cn/163aonovtrf.html

[I03] 提取捕获分组
来源：http://www.xuanzx.com/163hvklhxyo.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.sxryk.cn/163hzeqxovv.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.xuanzx.com/163hfdvtsur.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.sxryk.cn/163ramgcxak.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.xuanzx.com/163jxkocsdh.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.aibaodan.cn/163qdwoiooh.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.xuanzx.com/163fbqofvgy.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.xuanzx.com/163oxjusqle.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.aibaodan.cn/163rdkgorus.html

[I04] 正则替换
来源：http://www.sxryk.cn/163aysdwsgq.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.xuanzx.com/163kdkvwckg.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163xqqoygha.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163eyrovbyx.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163cyesywvi.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.aibaodan.cn/163kwwjiilx.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.xuanzx.com/163bvjnzdka.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.sxryk.cn/163ezyywclg.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.sxryk.cn/163imigafyw.html

[I05] 按正则拆分
来源：http://www.xuanzx.com/163rqdmpjqu.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.sxryk.cn/163csiikpiz.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.sxryk.cn/163anpukato.html

JS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163xdfpnzxh.html

TS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163acpvjxkt.html

Java: s.split("\\s*,\\s*")
来源：http://www.aibaodan.cn/163snafhmec.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.aibaodan.cn/163pegeafpy.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163rtohtygm.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.sxryk.cn/163yjkhnbhq.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.xuanzx.com/163ucdarzgs.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163ejycxehm.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.xuanzx.com/163kkjhprnj.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163wcsscyju.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163axbandnz.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.xuanzx.com/163mcokotsi.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.aibaodan.cn/163gbibetep.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.xuanzx.com/163kqoehuux.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163cpkquqhr.html

[I07] 忽略大小写与多行模式
来源：http://www.sxryk.cn/163pwbhqqyx.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.sxryk.cn/163ktaljgkm.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.sxryk.cn/163sdmxtexz.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.aibaodan.cn/163txenoosv.html

TS:   /error/gim
来源：http://www.sxryk.cn/163dyslhqcd.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.sxryk.cn/163kdgtucdm.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.xuanzx.com/163rcvpqwvg.html

Ruby: s.scan(/error/i)
来源：http://www.aibaodan.cn/163gilinxsf.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.sxryk.cn/163tkfqjrfz.html

[I08] 贪婪与非贪婪匹配
来源：http://www.xuanzx.com/163bfxkhpgb.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.xuanzx.com/163yjluzmxv.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.sxryk.cn/163wrkuysow.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163zrooefun.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163snyjmkaa.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.sxryk.cn/163rcymiokv.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.xuanzx.com/163hfvgthez.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.aibaodan.cn/163jcmcpofx.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.aibaodan.cn/163wvcqpwkj.html

================================================================================
来源：http://www.aibaodan.cn/163geqvxita.html

J. 日期与时间
来源：http://www.sxryk.cn/163joogepbm.html

================================================================================
来源：http://www.aibaodan.cn/163rzpzlwav.html

[J01] 获取当前时间
来源：http://www.sxryk.cn/163odnuxfsx.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.aibaodan.cn/163idjyvyug.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163eqpbjbwh.html

JS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163lgizzskc.html

TS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163ccrxzryi.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.xuanzx.com/163wnvfcban.html

Go:   time.Now()
来源：http://www.aibaodan.cn/163mpnvjnln.html

Ruby: Time.now
来源：http://www.sxryk.cn/163ojmdqyov.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.sxryk.cn/163jufyqfmp.html

[J02] 格式化输出
来源：http://www.xuanzx.com/163snwygwql.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163frdprwbm.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163mgbrlfmb.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.sxryk.cn/163bcmwwgwi.html

TS:   d.toISOString()
来源：http://www.xuanzx.com/163cqmynyyo.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.xuanzx.com/163wcwnhrjd.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.aibaodan.cn/163kgzoxrqv.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163nuqzyhyk.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.sxryk.cn/163ibpqfzaf.html

[J03] 字符串解析为日期
来源：http://www.sxryk.cn/163zxmcuaom.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.sxryk.cn/163yiwpzpmi.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.xuanzx.com/163khxufpxi.html

JS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163mwkfngst.html

TS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163dnnmvvtz.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.xuanzx.com/163fyhekkbq.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.sxryk.cn/163igihrphv.html

Ruby: Date.parse("2024-01-02")
来源：http://www.xuanzx.com/163lzzrkacc.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.xuanzx.com/163ayjitspf.html

[J04] 时间戳与日期互转
来源：http://www.sxryk.cn/163usrkqors.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.xuanzx.com/163skxarpqa.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.sxryk.cn/163oblfoved.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.aibaodan.cn/163luszvfph.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.xuanzx.com/163fogkfszd.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.xuanzx.com/163uthezmou.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.sxryk.cn/163hvskncpb.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.sxryk.cn/163mqhxntqn.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.aibaodan.cn/163yuxngdta.html

[J05] 时间加减（加 7 天）
来源：http://www.xuanzx.com/163zohrgulx.html

Py:   now + timedelta(days=7)
来源：http://www.sxryk.cn/163raxrtvby.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.aibaodan.cn/163sgkngxby.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163warlngdd.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163siudskfz.html

Java: LocalDate.now().plusDays(7)
来源：http://www.xuanzx.com/163qmqbttto.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.xuanzx.com/163scdflwns.html

Ruby: Time.now + 7 * 86400
来源：http://www.sxryk.cn/163yaafysxg.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.aibaodan.cn/163sietgyff.html

[J06] 计算两时间之差
来源：http://www.sxryk.cn/163slovopck.html

Py:   (end - start).total_seconds()
来源：http://www.sxryk.cn/163ctomurhc.html

PHP:  $end->diff($start)->days;
来源：http://www.aibaodan.cn/163cxbgtchk.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.sxryk.cn/163lfpeplmf.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.xuanzx.com/163pbppnzdt.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.sxryk.cn/163ubewdgjc.html

Go:   end.Sub(start).Hours()
来源：http://www.sxryk.cn/163divlyfkh.html

Ruby: end - start                 # 返回秒数
来源：http://www.sxryk.cn/163cnpmilrw.html

C#:   (end - start).TotalSeconds
来源：http://www.aibaodan.cn/163rmxegqil.html

[J07] 比较两个日期
来源：http://www.aibaodan.cn/163bionhkfn.html

Py:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163fikenasp.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.aibaodan.cn/163ladkrjzi.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163eyqtgsqv.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163yqexoymu.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.xuanzx.com/163ovbmzeum.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.aibaodan.cn/163byoymgcr.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163xlmbgkbe.html

C#:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163qyjngssl.html

[J08] 提取年月日与星期
来源：http://www.xuanzx.com/163ruvyalkl.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.sxryk.cn/163lrzobeqe.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.sxryk.cn/163txoedwxm.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.xuanzx.com/163ywgystuo.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.aibaodan.cn/163hthhhpon.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.xuanzx.com/163qpeycziq.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.xuanzx.com/163trexfjij.html


<!-- 参考信息 -->