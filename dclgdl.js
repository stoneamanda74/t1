外链999!wailian999！

C#:   public / protected / private / internal
来源：http://www.aibaodan.cn/163inpjerys.html

[G11] getter / setter
来源：http://www.sxryk.cn/163yqtgwtxe.html

Py:   @property 与 @x.setter
来源：http://www.aibaodan.cn/163nkqzoane.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.aibaodan.cn/163jvqtfrpl.html

JS:   get name() { return this._name; }
来源：http://www.sxryk.cn/163rvbqtrwp.html

TS:   get name(): string { return this._name; }
来源：http://www.sxryk.cn/163buiivshi.html

Java: public String getName() { return name; }
来源：http://www.sxryk.cn/163ykfbguxs.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.xuanzx.com/163nexnmqhe.html

Ruby: attr_accessor :name
来源：http://www.xuanzx.com/163fgnzhzzx.html

C#:   public string Name { get; set; }
来源：http://www.aibaodan.cn/163gvzpknpg.html

[G12] 对象转字符串
来源：http://www.sxryk.cn/163qigeujdd.html

Py:   def __str__(self): return self.name
来源：http://www.xuanzx.com/163vqhoccos.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.xuanzx.com/163kfmamcxh.html

JS:   toString() { return this.name; }
来源：http://www.aibaodan.cn/163aqatfacr.html

TS:   toString(): string { return this.name; }
来源：http://www.xuanzx.com/163ykvxtkrn.html

Java: @Override public String toString() { return name; }
来源：http://www.xuanzx.com/163pbtlhviv.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.xuanzx.com/163ldwyuskq.html

Ruby: def to_s; @name; end
来源：http://www.xuanzx.com/163vhtlamad.html

C#:   public override string ToString() => Name;
来源：http://www.sxryk.cn/163mvsvawap.html

[G13] 判断对象类型
来源：http://www.sxryk.cn/163erlazyup.html

Py:   isinstance(u, User)
来源：http://www.xuanzx.com/163sgosvlhw.html

PHP:  $u instanceof User
来源：http://www.sxryk.cn/163qiwvcjph.html

JS:   u instanceof User
来源：http://www.sxryk.cn/163acnckekp.html

TS:   u instanceof User
来源：http://www.xuanzx.com/163mclrinrk.html

Java: u instanceof User
来源：http://www.xuanzx.com/163dugihvqg.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.aibaodan.cn/163hngppnpu.html

Ruby: u.is_a?(User)
来源：http://www.sxryk.cn/163aftlybqv.html

C#:   u is User
来源：http://www.sxryk.cn/163sntaqnqs.html

[G14] 数据类 / record
来源：http://www.sxryk.cn/163fbwlaivr.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.xuanzx.com/163podoiyhm.html

PHP:  // 用 readonly 属性模拟
来源：http://www.sxryk.cn/163smwjslqd.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.xuanzx.com/163fjqzhzwe.html

TS:   type User = { name: string; age: number };
来源：http://www.xuanzx.com/163iwmiceyz.html

Java: record User(String name, int age) {}
来源：http://www.sxryk.cn/163zhgcexyl.html

Go:   type User struct { Name string; Age int }
来源：http://www.sxryk.cn/163rppmivxd.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.xuanzx.com/163icfrckzc.html

C#:   record User(string Name, int Age);
来源：http://www.xuanzx.com/163heztsuhk.html

[G15] 枚举
来源：http://www.aibaodan.cn/163vqmwblbj.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.xuanzx.com/163xfoyxmdj.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.sxryk.cn/163duwcysyr.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.sxryk.cn/163snpmcsst.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163edgvjuym.html

Java: enum Color { RED, GREEN }
来源：http://www.xuanzx.com/163axbsdcpd.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.xuanzx.com/163syzmtpkr.html

Ruby: Color = %i[red green].freeze
来源：http://www.sxryk.cn/163pglgoarl.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163towbayqb.html

[G16] 对象转数组 / 字典
来源：http://www.aibaodan.cn/163nnoztidg.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.xuanzx.com/163jccbzyfg.html

PHP:  get_object_vars($obj);
来源：http://www.aibaodan.cn/163rlckhunr.html

JS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163dbwanghn.html

TS:   Object.entries(obj)
来源：http://www.xuanzx.com/163yermivti.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.sxryk.cn/163pwzfueyn.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.aibaodan.cn/163apmgvlfu.html

Ruby: obj.instance_variables
来源：http://www.xuanzx.com/163iyitnmnt.html

C#:   // 用反射或 System.Text.Json
来源：http://www.sxryk.cn/163vzolkehh.html

================================================================================
来源：http://www.sxryk.cn/163dxvmgbpe.html

H. 异常与错误处理
来源：http://www.aibaodan.cn/163tdwkmtpv.html

================================================================================
来源：http://www.aibaodan.cn/163utcppqmj.html

[H01] try / catch 基础
来源：http://www.xuanzx.com/163twlzpuqu.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.sxryk.cn/163qdriookh.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.xuanzx.com/163lmpdahgk.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163kyqiehtk.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.sxryk.cn/163fpfnglym.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.aibaodan.cn/163muvmvoux.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.aibaodan.cn/163pntorhhc.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.sxryk.cn/163vhbyjlsr.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.xuanzx.com/163ifjaygzw.html

[H02] finally / ensure 收尾
来源：http://www.sxryk.cn/163rephjxul.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.xuanzx.com/163pzpqhycd.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163eeahcdvy.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163wyfbqkpo.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163zywatfki.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163njgwrgfv.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.xuanzx.com/163hzdcvihr.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.sxryk.cn/163zsmtvkba.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.aibaodan.cn/163utvyjbkn.html

[H03] 主动抛出异常
来源：http://www.sxryk.cn/163pdzskbkl.html

Py:   raise ValueError("错误信息")
来源：http://www.sxryk.cn/163visdvlxz.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.xuanzx.com/163gafjtvwv.html

JS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163xbskcnvw.html

TS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163nvfsvvqy.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.xuanzx.com/163tbgwgczy.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.sxryk.cn/163rgapswer.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.aibaodan.cn/163lpvyhaik.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.sxryk.cn/163vinislkv.html

[H04] 自定义异常类型
来源：http://www.aibaodan.cn/163slziruvk.html

Py:   class MyError(Exception): pass
来源：http://www.xuanzx.com/163exyxepew.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.aibaodan.cn/163nbcxjtsf.html

JS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163wneagpww.html

TS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163ocpfjmze.html

Java: class MyException extends RuntimeException {}
来源：http://www.sxryk.cn/163rwsrfihh.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.xuanzx.com/163xmcfwrhj.html

Ruby: class MyError < StandardError; end
来源：http://www.sxryk.cn/163paclwqok.html

C#:   class MyException : Exception {}
来源：http://www.sxryk.cn/163gkcxuopm.html

[H05] 捕获特定类型
来源：http://www.sxryk.cn/163khstpuwb.html

Py:   except ValueError as e:
来源：http://www.aibaodan.cn/163ewzdgwjp.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.xuanzx.com/163yeddtrnu.html

JS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163fywtrhpy.html

TS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163haylsslw.html

Java: catch (IOException | SQLException e) {}
来源：http://www.sxryk.cn/163ptaoxqno.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.aibaodan.cn/163zfdecost.html

Ruby: rescue ArgumentError => e
来源：http://www.aibaodan.cn/163codhzgfs.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.xuanzx.com/163atukehgo.html

[H06] 可选值 / 空值安全访问
来源：http://www.sxryk.cn/163jezygugs.html

Py:   value = d.get("k") or default
来源：http://www.xuanzx.com/163ksedyhvz.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.sxryk.cn/163nuulogcq.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163csqfonef.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163bljdsqvw.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.sxryk.cn/163pnyjfqaa.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.sxryk.cn/163puglhsoj.html

Ruby: d&.dig(:a, :b)
来源：http://www.sxryk.cn/163dcylljgi.html

C#:   obj?.A?.B ?? default
来源：http://www.xuanzx.com/163isrmwpzs.html

[H07] 断言
来源：http://www.xuanzx.com/163ifqfwofy.html

Py:   assert x > 0, "必须为正"
来源：http://www.sxryk.cn/163qcvgzsrl.html

PHP:  assert($x > 0);
来源：http://www.sxryk.cn/163floccinx.html

JS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163qvtmeiaa.html

TS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163kxazbvlo.html

Java: assert x > 0 : "必须为正";
来源：http://www.aibaodan.cn/163riktnvqy.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.aibaodan.cn/163dujvjteu.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.aibaodan.cn/163fluxfahb.html

C#:   Debug.Assert(x > 0);
来源：http://www.xuanzx.com/163jrucsfhy.html

[H08] 获取错误信息与堆栈
来源：http://www.sxryk.cn/163fidbekwe.html

Py:   str(e);  traceback.format_exc()
来源：http://www.sxryk.cn/163acwwwrdl.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.xuanzx.com/163urvlgvbi.html

JS:   e.message;  e.stack
来源：http://www.sxryk.cn/163etmgeyzp.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.sxryk.cn/163xbcxkprs.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.sxryk.cn/163mmuhehrp.html

Go:   err.Error()
来源：http://www.aibaodan.cn/163pukhopva.html

Ruby: e.message;  e.backtrace
来源：http://www.xuanzx.com/163jczphkrf.html

C#:   e.Message;  e.StackTrace
来源：http://www.sxryk.cn/163sjbtooqj.html

[H09] 带错误码的异常
来源：http://www.aibaodan.cn/163ntizysyb.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.sxryk.cn/163cvcdrxbn.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.sxryk.cn/163hptmgrth.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.aibaodan.cn/163gniupefx.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.sxryk.cn/163andciozg.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.xuanzx.com/163yeqriwyp.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.sxryk.cn/163ojlnqxus.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.xuanzx.com/163skpsmgnd.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.xuanzx.com/163ivfhizqp.html

[H10] 资源自动释放
来源：http://www.aibaodan.cn/163jqnvlipi.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.aibaodan.cn/163ujeglwqk.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.sxryk.cn/163kadqtwmd.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163hapzkvni.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163okcpnygf.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.aibaodan.cn/163krlgaelu.html

Go:   defer f.Close()
来源：http://www.xuanzx.com/163bogvibfr.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.aibaodan.cn/163kvlqwcvw.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.aibaodan.cn/163ujesmrie.html

================================================================================
来源：http://www.xuanzx.com/163esozgwor.html

I. 正则表达式
来源：http://www.aibaodan.cn/163pglnttrk.html

================================================================================
来源：http://www.aibaodan.cn/163sbntwamg.html

[I01] 判断是否匹配
来源：http://www.xuanzx.com/163qldebvly.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.aibaodan.cn/163hvrnugly.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.aibaodan.cn/163sccknpsm.html

JS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163jtxmhdef.html

TS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163wkgqtnuh.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.xuanzx.com/163gyszysug.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.xuanzx.com/163ynzcwvdq.html

Ruby: s.match?(/\d+/)
来源：http://www.sxryk.cn/163qlywlxwr.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.sxryk.cn/163vmbmxbkw.html

[I02] 提取所有匹配
来源：http://www.xuanzx.com/163yjsqwewl.html

Py:   re.findall(r"\d+", s)
来源：http://www.sxryk.cn/163fqxqnkpu.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.xuanzx.com/163ihbbyedx.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.xuanzx.com/163nushyjci.html

TS:   s.match(/\d+/g)
来源：http://www.xuanzx.com/163qxnvtfgi.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.sxryk.cn/163qvdmjuaa.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.aibaodan.cn/163ilywyhak.html

Ruby: s.scan(/\d+/)
来源：http://www.xuanzx.com/163fdkwmdvu.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.sxryk.cn/163cdqpbubt.html

[I03] 提取捕获分组
来源：http://www.sxryk.cn/163xuwvnlrj.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.xuanzx.com/163svmeegee.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.sxryk.cn/163vktyszkb.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.xuanzx.com/163avjzzayi.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.xuanzx.com/163qolspltq.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.aibaodan.cn/163tqxkihwr.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.sxryk.cn/163scgfmeri.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.xuanzx.com/163svcyimfr.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.sxryk.cn/163uiqikwax.html

[I04] 正则替换
来源：http://www.sxryk.cn/163xrrrxcgo.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.aibaodan.cn/163xzhvjfoh.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163vurctsna.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163xdzjgyfm.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163qxslemrs.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.xuanzx.com/163gxlncyyh.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.aibaodan.cn/163omtqijut.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.aibaodan.cn/163bhdswptd.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.aibaodan.cn/163rvltllal.html

[I05] 按正则拆分
来源：http://www.xuanzx.com/163bggkechj.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.sxryk.cn/163crpbxjhf.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.xuanzx.com/163nghucqdm.html

JS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163tezdqmov.html

TS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163xmqfsshi.html

Java: s.split("\\s*,\\s*")
来源：http://www.sxryk.cn/163iwisqjzi.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.xuanzx.com/163btqhrweb.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163mtgublpz.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.aibaodan.cn/163avsreeko.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.xuanzx.com/163aajbjhno.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163ixkhpfkn.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.xuanzx.com/163okxbmidg.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163puiosynr.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163gbosbeey.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.xuanzx.com/163yxdudspu.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.sxryk.cn/163gjepiegv.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.aibaodan.cn/163pqzypwjc.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163xqeqmlve.html

[I07] 忽略大小写与多行模式
来源：http://www.sxryk.cn/163jraqubft.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.sxryk.cn/163eyjvbkhp.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.xuanzx.com/163oakmxesz.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.aibaodan.cn/163totnonuo.html

TS:   /error/gim
来源：http://www.sxryk.cn/163bhsbihoy.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.sxryk.cn/163wnlwvmov.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.aibaodan.cn/163taqnzmnf.html

Ruby: s.scan(/error/i)
来源：http://www.xuanzx.com/163pdkyfxen.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.sxryk.cn/163hygvkhst.html

[I08] 贪婪与非贪婪匹配
来源：http://www.xuanzx.com/163tsxbhafy.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.aibaodan.cn/163tolduzyc.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.xuanzx.com/163rzqbolts.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163ablpdajo.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163izyettsz.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.xuanzx.com/163qdbekunw.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.sxryk.cn/163ypxilfxs.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.sxryk.cn/163geiexyzt.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.aibaodan.cn/163fxpwrqar.html

================================================================================
来源：http://www.sxryk.cn/163rqlvosxf.html

J. 日期与时间
来源：http://www.xuanzx.com/163twddgamy.html

================================================================================
来源：http://www.sxryk.cn/163dggwtvhk.html

[J01] 获取当前时间
来源：http://www.aibaodan.cn/163olzikdfz.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.sxryk.cn/163blsbjzvl.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163dmjyjydl.html

JS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163wqeivlew.html

TS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163eaggukbp.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.aibaodan.cn/163aawzyzbl.html

Go:   time.Now()
来源：http://www.xuanzx.com/163eicrczkp.html

Ruby: Time.now
来源：http://www.sxryk.cn/163rooakbfq.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.xuanzx.com/163ogmdwnxk.html

[J02] 格式化输出
来源：http://www.sxryk.cn/163eahiunnn.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163jveeoowf.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163xazptfcg.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.aibaodan.cn/163ublybkvd.html

TS:   d.toISOString()
来源：http://www.xuanzx.com/163qydsemol.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.sxryk.cn/163zsilwyfj.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.sxryk.cn/163zbdezdzv.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163jcbyfpbx.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.aibaodan.cn/163rlvkmvor.html

[J03] 字符串解析为日期
来源：http://www.aibaodan.cn/163jioleloq.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.sxryk.cn/163kitxcphk.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.sxryk.cn/163vrhqwcjm.html

JS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163jyalcqkh.html

TS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163qzyyfgvb.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.sxryk.cn/163kkwwfnqt.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.sxryk.cn/163nrihcckn.html

Ruby: Date.parse("2024-01-02")
来源：http://www.xuanzx.com/163biusdwsx.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.aibaodan.cn/163qqxtcahl.html

[J04] 时间戳与日期互转
来源：http://www.sxryk.cn/163fjxzabwr.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.aibaodan.cn/163cqsvlsnr.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.aibaodan.cn/163fpgdmuch.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.xuanzx.com/163bdaflecx.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.xuanzx.com/163bmrxpaez.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.aibaodan.cn/163xrlbkbql.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.aibaodan.cn/163puwfczxf.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.aibaodan.cn/163tmnjdqrk.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.aibaodan.cn/163cnktqucy.html

[J05] 时间加减（加 7 天）
来源：http://www.sxryk.cn/163gzzpocjk.html

Py:   now + timedelta(days=7)
来源：http://www.sxryk.cn/163rrvqyznb.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.aibaodan.cn/163ixumpwtc.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163jsbabmmn.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163zndzswoq.html

Java: LocalDate.now().plusDays(7)
来源：http://www.aibaodan.cn/163lbznpwaa.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.sxryk.cn/163wazykgoo.html

Ruby: Time.now + 7 * 86400
来源：http://www.aibaodan.cn/163ztbfwwew.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.xuanzx.com/163yihvftox.html

[J06] 计算两时间之差
来源：http://www.xuanzx.com/163zusgceow.html

Py:   (end - start).total_seconds()
来源：http://www.sxryk.cn/163dvphdelp.html

PHP:  $end->diff($start)->days;
来源：http://www.aibaodan.cn/163cneunnmu.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.xuanzx.com/163megmpbal.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.xuanzx.com/163jwpwxhxr.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.xuanzx.com/163qshdcpvo.html

Go:   end.Sub(start).Hours()
来源：http://www.xuanzx.com/163feowsugr.html

Ruby: end - start                 # 返回秒数
来源：http://www.sxryk.cn/163eomikyxy.html

C#:   (end - start).TotalSeconds
来源：http://www.aibaodan.cn/163aslpghrd.html

[J07] 比较两个日期
来源：http://www.aibaodan.cn/163ceqvtooq.html

Py:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163cgauebdq.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.xuanzx.com/163efiycqkd.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163tivnryri.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163jtieajse.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.aibaodan.cn/163vrmehbwg.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.aibaodan.cn/163xophipau.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163whantfok.html

C#:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163ycoqsfnd.html

[J08] 提取年月日与星期
来源：http://www.aibaodan.cn/163rtxgvdpq.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.xuanzx.com/163fadclgpt.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.sxryk.cn/163aqhffybb.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.sxryk.cn/163wlevtbel.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.xuanzx.com/163ifpbvpcu.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.sxryk.cn/163nczocvds.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.aibaodan.cn/163gofapefi.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.aibaodan.cn/163fcnhypts.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.sxryk.cn/163nivwgzgx.html

[J09] 时区处理
来源：http://www.aibaodan.cn/163iuvdrmrx.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.sxryk.cn/163ajfbcfxb.html


<!-- 参考信息 -->