外链999!wailian999！

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.xuanzx.com/163fciplwhp.html

JS:   toString() { return this.name; }
来源：http://www.xuanzx.com/163jlfiuhap.html

TS:   toString(): string { return this.name; }
来源：http://www.xuanzx.com/163wsgaqcdd.html

Java: @Override public String toString() { return name; }
来源：http://www.sxryk.cn/163fmsuzyxt.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.aibaodan.cn/163gdubmzuv.html

Ruby: def to_s; @name; end
来源：http://www.aibaodan.cn/163fnfnbtsw.html

C#:   public override string ToString() => Name;
来源：http://www.aibaodan.cn/163rnllwkpj.html

[G13] 判断对象类型
来源：http://www.xuanzx.com/163yidpkxzf.html

Py:   isinstance(u, User)
来源：http://www.aibaodan.cn/163vzrrrvnp.html

PHP:  $u instanceof User
来源：http://www.xuanzx.com/163jcwceatm.html

JS:   u instanceof User
来源：http://www.xuanzx.com/163ybdckbwk.html

TS:   u instanceof User
来源：http://www.xuanzx.com/163nyuhuvza.html

Java: u instanceof User
来源：http://www.xuanzx.com/163vqajxvmk.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.aibaodan.cn/163hmdbklbt.html

Ruby: u.is_a?(User)
来源：http://www.xuanzx.com/163srgdxjkp.html

C#:   u is User
来源：http://www.sxryk.cn/163tnuiwajj.html

[G14] 数据类 / record
来源：http://www.aibaodan.cn/163vpufzxho.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.aibaodan.cn/163kfzbdcib.html

PHP:  // 用 readonly 属性模拟
来源：http://www.aibaodan.cn/163ikmwlhuz.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.aibaodan.cn/163annurwba.html

TS:   type User = { name: string; age: number };
来源：http://www.xuanzx.com/163qpfptwpd.html

Java: record User(String name, int age) {}
来源：http://www.sxryk.cn/163ljtxrjwd.html

Go:   type User struct { Name string; Age int }
来源：http://www.xuanzx.com/163sazlfmrk.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.aibaodan.cn/163kneznzwh.html

C#:   record User(string Name, int Age);
来源：http://www.aibaodan.cn/163zifznwnz.html

[G15] 枚举
来源：http://www.aibaodan.cn/163mvciirht.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.xuanzx.com/163maptsvuy.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.xuanzx.com/163uaozjksi.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.aibaodan.cn/163zqkjeptz.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163cilrlney.html

Java: enum Color { RED, GREEN }
来源：http://www.sxryk.cn/163bmvbcagt.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.aibaodan.cn/163xnlmfotv.html

Ruby: Color = %i[red green].freeze
来源：http://www.aibaodan.cn/163uzjiqemy.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163tbuunebp.html

[G16] 对象转数组 / 字典
来源：http://www.xuanzx.com/163zacolecc.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.aibaodan.cn/163qwolpyhb.html

PHP:  get_object_vars($obj);
来源：http://www.sxryk.cn/163jmoeckwt.html

JS:   Object.entries(obj)
来源：http://www.sxryk.cn/163lhpmptiq.html

TS:   Object.entries(obj)
来源：http://www.sxryk.cn/163pjifvqsv.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.xuanzx.com/163zhddfcfv.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.sxryk.cn/163hstoqtbq.html

Ruby: obj.instance_variables
来源：http://www.aibaodan.cn/163hxdczsae.html

C#:   // 用反射或 System.Text.Json
来源：http://www.sxryk.cn/163znsmvgtt.html

================================================================================
来源：http://www.xuanzx.com/163ysqhyrpf.html

H. 异常与错误处理
来源：http://www.xuanzx.com/163kahmqrkk.html

================================================================================
来源：http://www.sxryk.cn/163dsitallq.html

[H01] try / catch 基础
来源：http://www.xuanzx.com/163xddlbria.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.aibaodan.cn/163iuofuynk.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.aibaodan.cn/163vhzfzezn.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163ezvaxmhb.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.xuanzx.com/163saaktjoj.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.aibaodan.cn/163rthcleum.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.aibaodan.cn/163kgiwwupy.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.xuanzx.com/163qxosuahd.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.sxryk.cn/163anuqepuj.html

[H02] finally / ensure 收尾
来源：http://www.xuanzx.com/163arbnyfxv.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.aibaodan.cn/163lpagpquz.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163kncvfxcg.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163ikovmckr.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163gbosrelp.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163edvhinmc.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.sxryk.cn/163ajqovlmy.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.sxryk.cn/163duiepnjb.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.sxryk.cn/163aytjvlyj.html

[H03] 主动抛出异常
来源：http://www.aibaodan.cn/163ksgqgrxe.html

Py:   raise ValueError("错误信息")
来源：http://www.sxryk.cn/163bjfllxtb.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.sxryk.cn/163examsinj.html

JS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163ecjmbkzb.html

TS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163qfbqxeyy.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.xuanzx.com/163cedaauel.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.aibaodan.cn/163opkmfjft.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.aibaodan.cn/163wwozuuor.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.sxryk.cn/163oftljhtz.html

[H04] 自定义异常类型
来源：http://www.aibaodan.cn/163spxccdev.html

Py:   class MyError(Exception): pass
来源：http://www.xuanzx.com/163ysviamnb.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.xuanzx.com/163qdexgcxu.html

JS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163iebjgrmr.html

TS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163sesxmbwf.html

Java: class MyException extends RuntimeException {}
来源：http://www.aibaodan.cn/163wubmgoif.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.sxryk.cn/163yrtcanum.html

Ruby: class MyError < StandardError; end
来源：http://www.sxryk.cn/163alfvsjik.html

C#:   class MyException : Exception {}
来源：http://www.xuanzx.com/163wdrjituf.html

[H05] 捕获特定类型
来源：http://www.aibaodan.cn/163lcdfgkcc.html

Py:   except ValueError as e:
来源：http://www.aibaodan.cn/163mpnkarog.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.sxryk.cn/163msdlyiqg.html

JS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163sdrlqjvj.html

TS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163rusqyioj.html

Java: catch (IOException | SQLException e) {}
来源：http://www.xuanzx.com/163zoskucua.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.sxryk.cn/163forpinbu.html

Ruby: rescue ArgumentError => e
来源：http://www.xuanzx.com/163zxhziiem.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.aibaodan.cn/163zyjcuntr.html

[H06] 可选值 / 空值安全访问
来源：http://www.aibaodan.cn/163znhdeybs.html

Py:   value = d.get("k") or default
来源：http://www.aibaodan.cn/163yxkxjjxt.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.xuanzx.com/163ijnnkbcx.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163ylpgkyap.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163cvyzcaii.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.xuanzx.com/163xbajoszi.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.xuanzx.com/163fvpgiybt.html

Ruby: d&.dig(:a, :b)
来源：http://www.sxryk.cn/163diztypld.html

C#:   obj?.A?.B ?? default
来源：http://www.aibaodan.cn/163vmtepjls.html

[H07] 断言
来源：http://www.xuanzx.com/163libleblw.html

Py:   assert x > 0, "必须为正"
来源：http://www.aibaodan.cn/163nidpjukh.html

PHP:  assert($x > 0);
来源：http://www.xuanzx.com/163izgwcbsk.html

JS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163wfvxenhl.html

TS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163kwzbwwia.html

Java: assert x > 0 : "必须为正";
来源：http://www.aibaodan.cn/163coxipqli.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.aibaodan.cn/163fkyaszsh.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.sxryk.cn/163dsrrpksf.html

C#:   Debug.Assert(x > 0);
来源：http://www.sxryk.cn/163alzlcnud.html

[H08] 获取错误信息与堆栈
来源：http://www.sxryk.cn/163jmuxnybe.html

Py:   str(e);  traceback.format_exc()
来源：http://www.aibaodan.cn/163eypwdbdy.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.sxryk.cn/163yavqekpo.html

JS:   e.message;  e.stack
来源：http://www.aibaodan.cn/163xqdbzlhd.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.sxryk.cn/163tlfiwtzl.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.sxryk.cn/163iyrzpdol.html

Go:   err.Error()
来源：http://www.xuanzx.com/163ftaskpkz.html

Ruby: e.message;  e.backtrace
来源：http://www.sxryk.cn/163hfoqqrwb.html

C#:   e.Message;  e.StackTrace
来源：http://www.aibaodan.cn/163vhelxvhd.html

[H09] 带错误码的异常
来源：http://www.xuanzx.com/163gcmpueoz.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.sxryk.cn/163lftszrjr.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.aibaodan.cn/163igluswzy.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.xuanzx.com/163hjjbpixh.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.aibaodan.cn/163agznpcjg.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.sxryk.cn/163pqgiblva.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.aibaodan.cn/163ytfrrzsw.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.sxryk.cn/163jptvbydz.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.xuanzx.com/163ixntkpzx.html

[H10] 资源自动释放
来源：http://www.aibaodan.cn/163cinbezik.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.sxryk.cn/163xnndjzah.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.aibaodan.cn/163nubekjea.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163gopqzoxz.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163hxzhbdcz.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.xuanzx.com/163wwwobkku.html

Go:   defer f.Close()
来源：http://www.aibaodan.cn/163ahchynyx.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.xuanzx.com/163epzcqjjs.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.xuanzx.com/163wfywatdv.html

================================================================================
来源：http://www.sxryk.cn/163inrnjojy.html

I. 正则表达式
来源：http://www.sxryk.cn/163clirwxtf.html

================================================================================
来源：http://www.sxryk.cn/163ajflstwq.html

[I01] 判断是否匹配
来源：http://www.xuanzx.com/163akvihevs.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.aibaodan.cn/163cxmbryuv.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.aibaodan.cn/163psnkqoxl.html

JS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163rhytaypx.html

TS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163fyiuhcwf.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.xuanzx.com/163pycuzroe.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.xuanzx.com/163cbfjyfkp.html

Ruby: s.match?(/\d+/)
来源：http://www.xuanzx.com/163bdjqtazy.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.aibaodan.cn/163fokpadlu.html

[I02] 提取所有匹配
来源：http://www.aibaodan.cn/163luqujwpw.html

Py:   re.findall(r"\d+", s)
来源：http://www.xuanzx.com/163mtijncfv.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.sxryk.cn/163kieldpzr.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.aibaodan.cn/163qnuyldey.html

TS:   s.match(/\d+/g)
来源：http://www.aibaodan.cn/163ylhtmbvu.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.aibaodan.cn/163clfutlrl.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.aibaodan.cn/163hhnoqsfz.html

Ruby: s.scan(/\d+/)
来源：http://www.xuanzx.com/163jflsxoqd.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.sxryk.cn/163basyvguy.html

[I03] 提取捕获分组
来源：http://www.xuanzx.com/163ftbfopxx.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.aibaodan.cn/163lekoneax.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.sxryk.cn/163ykrhdeby.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.xuanzx.com/163mwfrlxtw.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.aibaodan.cn/163lerfjrty.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.aibaodan.cn/163tufhizhe.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.xuanzx.com/163myymukqv.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.aibaodan.cn/163zpmwjoiu.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.aibaodan.cn/163qyisrtob.html

[I04] 正则替换
来源：http://www.xuanzx.com/163ueuwryzv.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.sxryk.cn/163xwxavjbj.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163olzjujbn.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163gtefepyi.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163xswwkwid.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.xuanzx.com/163tifnubki.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.aibaodan.cn/163lqqtddvb.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.sxryk.cn/163durxpmca.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.xuanzx.com/163zaegxdxm.html

[I05] 按正则拆分
来源：http://www.sxryk.cn/163rawpjgdm.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.sxryk.cn/163wzptvqey.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.aibaodan.cn/163osnkztqk.html

JS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163oyzhlhwv.html

TS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163sqsgpatb.html

Java: s.split("\\s*,\\s*")
来源：http://www.xuanzx.com/163qxgiioye.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.sxryk.cn/163jwrnyryp.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163pmajdece.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.sxryk.cn/163wmijdimb.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.sxryk.cn/163brwoqted.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163lzwpkstn.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.xuanzx.com/163hcohdvqj.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163ebqlbtnm.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163atrlxlvh.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.aibaodan.cn/163yosrctjd.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.sxryk.cn/163pawfietw.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.xuanzx.com/163vauomixp.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163iqeygkdl.html

[I07] 忽略大小写与多行模式
来源：http://www.sxryk.cn/163evsolwso.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.aibaodan.cn/163ocnvvqge.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.xuanzx.com/163hpdqnqoe.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.aibaodan.cn/163zaiuixtt.html

TS:   /error/gim
来源：http://www.aibaodan.cn/163hrdddmgo.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.xuanzx.com/163bfaowenz.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.aibaodan.cn/163csxyvxdc.html

Ruby: s.scan(/error/i)
来源：http://www.xuanzx.com/163lkukxmqk.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.aibaodan.cn/163rklymqaj.html

[I08] 贪婪与非贪婪匹配
来源：http://www.sxryk.cn/163tufguwye.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.sxryk.cn/163kqebikdp.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.xuanzx.com/163gtlirwkf.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163gwavffhj.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163ueheisck.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.sxryk.cn/163pwdaqubo.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.sxryk.cn/163kgwradvi.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.xuanzx.com/163exxnsmbc.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.aibaodan.cn/163atrpurih.html

================================================================================
来源：http://www.xuanzx.com/163jikebvbr.html

J. 日期与时间
来源：http://www.sxryk.cn/163edufgimg.html

================================================================================
来源：http://www.xuanzx.com/163jrkiwtff.html

[J01] 获取当前时间
来源：http://www.sxryk.cn/163hbojkvvj.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.sxryk.cn/163elehwhnq.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163eclawdhz.html

JS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163fsjzziig.html

TS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163sgdnbilt.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.sxryk.cn/163rgccrogb.html

Go:   time.Now()
来源：http://www.aibaodan.cn/163nbbcnlys.html

Ruby: Time.now
来源：http://www.aibaodan.cn/163znesvkcv.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.xuanzx.com/163ewevbbwy.html

[J02] 格式化输出
来源：http://www.xuanzx.com/163hlwscaod.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163pmomgcbu.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163oviihmro.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.xuanzx.com/163slcnynqo.html

TS:   d.toISOString()
来源：http://www.aibaodan.cn/163dfettnvn.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.sxryk.cn/163stauytpz.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.xuanzx.com/163fvmtocwg.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163nyanlhwk.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.xuanzx.com/163abomldhj.html

[J03] 字符串解析为日期
来源：http://www.xuanzx.com/163fmtwumym.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.aibaodan.cn/163vhutxegi.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.sxryk.cn/163caethmht.html

JS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163tbrglcrg.html

TS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163tdrlbkxv.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.xuanzx.com/163ttynjskq.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.xuanzx.com/163uduhskwl.html

Ruby: Date.parse("2024-01-02")
来源：http://www.xuanzx.com/163tuntsglz.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.sxryk.cn/163uhxgjhjx.html

[J04] 时间戳与日期互转
来源：http://www.aibaodan.cn/163zqwkujln.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.aibaodan.cn/163rxdrzfxr.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.xuanzx.com/163eqymqvov.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.aibaodan.cn/163mqfaowwj.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.aibaodan.cn/163qzcypsov.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.sxryk.cn/163burgnllh.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.sxryk.cn/163moelfqfu.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.aibaodan.cn/163gugjrfgj.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.sxryk.cn/163adgcpgeq.html

[J05] 时间加减（加 7 天）
来源：http://www.xuanzx.com/163oyerdtcw.html

Py:   now + timedelta(days=7)
来源：http://www.sxryk.cn/163pqambrfu.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.xuanzx.com/163biprpsqe.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163twtdmilx.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163navbbmvb.html

Java: LocalDate.now().plusDays(7)
来源：http://www.aibaodan.cn/163qacwughr.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.sxryk.cn/163fldchojt.html

Ruby: Time.now + 7 * 86400
来源：http://www.aibaodan.cn/163rltcicdm.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.aibaodan.cn/163msdjghtt.html

[J06] 计算两时间之差
来源：http://www.aibaodan.cn/163bcrvjbpg.html

Py:   (end - start).total_seconds()
来源：http://www.aibaodan.cn/163rzvcjifk.html

PHP:  $end->diff($start)->days;
来源：http://www.aibaodan.cn/163gvpldyio.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.aibaodan.cn/163ztyortdh.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.sxryk.cn/163mzjhxfbw.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.aibaodan.cn/163jcfyyuyf.html

Go:   end.Sub(start).Hours()
来源：http://www.sxryk.cn/163wtelkveq.html

Ruby: end - start                 # 返回秒数
来源：http://www.xuanzx.com/163tovbriun.html

C#:   (end - start).TotalSeconds
来源：http://www.sxryk.cn/163rhysjlai.html

[J07] 比较两个日期
来源：http://www.xuanzx.com/163ieyuoifs.html

Py:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163fgbbfvab.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.aibaodan.cn/163ncxtrsar.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163xlpxppzx.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163xxpcyuco.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.xuanzx.com/163fpgwjkxh.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.aibaodan.cn/163ajwtotdd.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163hhymebpr.html

C#:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163zycgsewl.html

[J08] 提取年月日与星期
来源：http://www.aibaodan.cn/163tpmvywrh.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.sxryk.cn/163aiagsijp.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.xuanzx.com/163didymllw.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.aibaodan.cn/163xacdogwc.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.aibaodan.cn/163scotwzco.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.xuanzx.com/163mhsmatrr.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.xuanzx.com/163tcznpydr.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.aibaodan.cn/163uaohllvy.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.sxryk.cn/163oferzwbe.html

[J09] 时区处理
来源：http://www.sxryk.cn/163lelslvjr.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.xuanzx.com/163wntigtlu.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.sxryk.cn/163gizszmyy.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163hjaigmpa.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163ulrilcwz.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.aibaodan.cn/163rjpsyvlv.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.aibaodan.cn/163vijxkson.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.aibaodan.cn/163vkavpyor.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.xuanzx.com/163kthjrgwe.html

[J10] 取今天 / 本月第一天
来源：http://www.aibaodan.cn/163xfcznfca.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.aibaodan.cn/163jzggeprk.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.aibaodan.cn/163clkpcier.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.sxryk.cn/163xmlrycxr.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.aibaodan.cn/163oijquvsf.html


<!-- 参考信息 -->