外链999!wailian999！

[G10] 访问控制
来源：http://www.sxryk.cn/163ugozpszd.html

Py:   约定 _protected / __private（不强制）
来源：http://www.xuanzx.com/163cuwsrkvj.html

PHP:  public / protected / private
来源：http://www.aibaodan.cn/163lmofnvnd.html

JS:   #private 字段；其余公开
来源：http://www.sxryk.cn/163nyniqeya.html

TS:   public / protected / private
来源：http://www.aibaodan.cn/163urxqlpsc.html

Java: public / protected / private / 默认包级
来源：http://www.xuanzx.com/163vjpydfsv.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.xuanzx.com/163wxxsydpi.html

Ruby: public / protected / private
来源：http://www.xuanzx.com/163cjkyogtf.html

C#:   public / protected / private / internal
来源：http://www.sxryk.cn/163yelpoqpt.html

[G11] getter / setter
来源：http://www.aibaodan.cn/163kmgplhyc.html

Py:   @property 与 @x.setter
来源：http://www.aibaodan.cn/163uijbbtfk.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.xuanzx.com/163tukrrras.html

JS:   get name() { return this._name; }
来源：http://www.xuanzx.com/163knhrfvhg.html

TS:   get name(): string { return this._name; }
来源：http://www.xuanzx.com/163kwmwtdhz.html

Java: public String getName() { return name; }
来源：http://www.xuanzx.com/163cmifizaw.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.xuanzx.com/163mfsnpsyt.html

Ruby: attr_accessor :name
来源：http://www.aibaodan.cn/163uttasrbq.html

C#:   public string Name { get; set; }
来源：http://www.xuanzx.com/163vydwceko.html

[G12] 对象转字符串
来源：http://www.xuanzx.com/163dlrxyyky.html

Py:   def __str__(self): return self.name
来源：http://www.sxryk.cn/163wqtookya.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.xuanzx.com/163kcglizez.html

JS:   toString() { return this.name; }
来源：http://www.sxryk.cn/163luvaeuzo.html

TS:   toString(): string { return this.name; }
来源：http://www.sxryk.cn/163qcinfdyp.html

Java: @Override public String toString() { return name; }
来源：http://www.sxryk.cn/163zqaktfai.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.aibaodan.cn/163rxtabsys.html

Ruby: def to_s; @name; end
来源：http://www.aibaodan.cn/163tgdwmcyl.html

C#:   public override string ToString() => Name;
来源：http://www.sxryk.cn/163ufmvaqnc.html

[G13] 判断对象类型
来源：http://www.sxryk.cn/163amoktqti.html

Py:   isinstance(u, User)
来源：http://www.xuanzx.com/163evscgarb.html

PHP:  $u instanceof User
来源：http://www.xuanzx.com/163oxyzhrya.html

JS:   u instanceof User
来源：http://www.xuanzx.com/163pgvrwesz.html

TS:   u instanceof User
来源：http://www.sxryk.cn/163rclbocsi.html

Java: u instanceof User
来源：http://www.xuanzx.com/163tenmodkj.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.aibaodan.cn/163doyaboqp.html

Ruby: u.is_a?(User)
来源：http://www.xuanzx.com/163secqnclp.html

C#:   u is User
来源：http://www.sxryk.cn/163revtnujv.html

[G14] 数据类 / record
来源：http://www.aibaodan.cn/163mfhikxus.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.xuanzx.com/163zmmegmto.html

PHP:  // 用 readonly 属性模拟
来源：http://www.aibaodan.cn/163dnrchmuv.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.sxryk.cn/163nftkireg.html

TS:   type User = { name: string; age: number };
来源：http://www.xuanzx.com/163sogqahzv.html

Java: record User(String name, int age) {}
来源：http://www.sxryk.cn/163kdvgdzoz.html

Go:   type User struct { Name string; Age int }
来源：http://www.aibaodan.cn/163jmwdasbl.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.sxryk.cn/163sfjmuzuv.html

C#:   record User(string Name, int Age);
来源：http://www.aibaodan.cn/163cfbxkymo.html

[G15] 枚举
来源：http://www.xuanzx.com/163gpjikpzd.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.sxryk.cn/163smcgxmif.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.sxryk.cn/163xlqdcopy.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.aibaodan.cn/163kviqkfcs.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163nuwjrzta.html

Java: enum Color { RED, GREEN }
来源：http://www.aibaodan.cn/163narohoha.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.sxryk.cn/163pdajqasu.html

Ruby: Color = %i[red green].freeze
来源：http://www.sxryk.cn/163vhhdzzfu.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163rouhzgqt.html

[G16] 对象转数组 / 字典
来源：http://www.sxryk.cn/163cbbvihay.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.xuanzx.com/163nvrqldai.html

PHP:  get_object_vars($obj);
来源：http://www.xuanzx.com/163nhfacsic.html

JS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163wpnqutmi.html

TS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163ipkgtusi.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.aibaodan.cn/163lydwzxlz.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.sxryk.cn/163cayurone.html

Ruby: obj.instance_variables
来源：http://www.sxryk.cn/163uppamndn.html

C#:   // 用反射或 System.Text.Json
来源：http://www.xuanzx.com/163cjsbhapy.html

================================================================================
来源：http://www.xuanzx.com/163kdoideps.html

H. 异常与错误处理
来源：http://www.aibaodan.cn/163tzzziqch.html

================================================================================
来源：http://www.xuanzx.com/163xjlhpjrf.html

[H01] try / catch 基础
来源：http://www.sxryk.cn/163dnozazbz.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.xuanzx.com/163ikiporwi.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.sxryk.cn/163lingnzjq.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163awgiychh.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.sxryk.cn/163naflglnf.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.xuanzx.com/163hiwctfuy.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.xuanzx.com/163ecdqbmrv.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.aibaodan.cn/163qhpjnxaw.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.sxryk.cn/163dfjnglod.html

[H02] finally / ensure 收尾
来源：http://www.aibaodan.cn/163gqmnlliw.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.xuanzx.com/163aglasfou.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163zahykial.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163wcbiumrn.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163hoqgyynm.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163wpeuozpk.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.sxryk.cn/163fnpdpdrq.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.sxryk.cn/163iyycqdvu.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.sxryk.cn/163fdhhgzdy.html

[H03] 主动抛出异常
来源：http://www.sxryk.cn/163hcrrujwd.html

Py:   raise ValueError("错误信息")
来源：http://www.aibaodan.cn/163bupyammr.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.aibaodan.cn/163ojygsfch.html

JS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163ltvvnnkt.html

TS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163lvvuaaiy.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.xuanzx.com/163fdaudgcs.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.aibaodan.cn/163xucvxzhu.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.xuanzx.com/163wubmwjin.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.aibaodan.cn/163jhgqozzy.html

[H04] 自定义异常类型
来源：http://www.xuanzx.com/163aduovmnd.html

Py:   class MyError(Exception): pass
来源：http://www.aibaodan.cn/163iltmgwzf.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.xuanzx.com/163wydtrzey.html

JS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163dgzlvlxi.html

TS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163tlbbjdcw.html

Java: class MyException extends RuntimeException {}
来源：http://www.sxryk.cn/163zejimdqw.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.aibaodan.cn/163elhlntsi.html

Ruby: class MyError < StandardError; end
来源：http://www.aibaodan.cn/163zpkhdjsn.html

C#:   class MyException : Exception {}
来源：http://www.aibaodan.cn/163riciriyl.html

[H05] 捕获特定类型
来源：http://www.xuanzx.com/163hfmlhwpk.html

Py:   except ValueError as e:
来源：http://www.sxryk.cn/163golcijvf.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.sxryk.cn/163imdjeoue.html

JS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163kawimbqk.html

TS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163kchtcndj.html

Java: catch (IOException | SQLException e) {}
来源：http://www.sxryk.cn/163bpdvrvcw.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.xuanzx.com/163zgykhxaw.html

Ruby: rescue ArgumentError => e
来源：http://www.aibaodan.cn/163cibgtcix.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.xuanzx.com/163mfuwhsom.html

[H06] 可选值 / 空值安全访问
来源：http://www.sxryk.cn/163ilprkjne.html

Py:   value = d.get("k") or default
来源：http://www.sxryk.cn/163psjcuzwk.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.aibaodan.cn/163wgjypnqg.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163eaxetjnp.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163atzjcrko.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.aibaodan.cn/163vseilzoa.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.xuanzx.com/163qxeidquo.html

Ruby: d&.dig(:a, :b)
来源：http://www.aibaodan.cn/163xtnrejkg.html

C#:   obj?.A?.B ?? default
来源：http://www.sxryk.cn/163cplpddux.html

[H07] 断言
来源：http://www.xuanzx.com/163feevfwny.html

Py:   assert x > 0, "必须为正"
来源：http://www.xuanzx.com/163tiecplxv.html

PHP:  assert($x > 0);
来源：http://www.aibaodan.cn/163bujvujqd.html

JS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163zsqvpmdq.html

TS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163zenkvggc.html

Java: assert x > 0 : "必须为正";
来源：http://www.xuanzx.com/163fxsxmcow.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.sxryk.cn/163mqcnnnae.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.xuanzx.com/163nltjrjtb.html

C#:   Debug.Assert(x > 0);
来源：http://www.xuanzx.com/163wodydwcg.html

[H08] 获取错误信息与堆栈
来源：http://www.sxryk.cn/163pzbnihjd.html

Py:   str(e);  traceback.format_exc()
来源：http://www.aibaodan.cn/163yyfclzsd.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.aibaodan.cn/163cgkvpvgd.html

JS:   e.message;  e.stack
来源：http://www.sxryk.cn/163kbyjwwsz.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.xuanzx.com/163bqkuwupf.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.xuanzx.com/163izmhqsnh.html

Go:   err.Error()
来源：http://www.sxryk.cn/163vneeaehj.html

Ruby: e.message;  e.backtrace
来源：http://www.sxryk.cn/163vgpayjnf.html

C#:   e.Message;  e.StackTrace
来源：http://www.xuanzx.com/163qzrpjpdw.html

[H09] 带错误码的异常
来源：http://www.aibaodan.cn/163owflihks.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.sxryk.cn/163yokobwcx.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.sxryk.cn/163cylnrmvu.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.xuanzx.com/163iipntmev.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.sxryk.cn/163qcgfixyj.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.sxryk.cn/163wxefpguz.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.xuanzx.com/163ovsjqyfo.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.sxryk.cn/163hnrrsmze.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.aibaodan.cn/163gzgpgerm.html

[H10] 资源自动释放
来源：http://www.aibaodan.cn/163ymiedctc.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.sxryk.cn/163lqxxhhjb.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.xuanzx.com/163uhodhyae.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163kczwtpdw.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163lgmqxgmu.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.xuanzx.com/163llwwsinw.html

Go:   defer f.Close()
来源：http://www.sxryk.cn/163wngibfqf.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.xuanzx.com/163xksxtdxg.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.sxryk.cn/163svafizvd.html

================================================================================
来源：http://www.xuanzx.com/163lomgckjm.html

I. 正则表达式
来源：http://www.sxryk.cn/163elxhxhdk.html

================================================================================
来源：http://www.aibaodan.cn/163bjmbbusq.html

[I01] 判断是否匹配
来源：http://www.aibaodan.cn/163mqlyeiik.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.sxryk.cn/163ffhwuqxb.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.aibaodan.cn/163zsusqhbk.html

JS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163sqyocoau.html

TS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163plbjcebh.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.xuanzx.com/163vsbuzdhr.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.sxryk.cn/163rmfepdka.html

Ruby: s.match?(/\d+/)
来源：http://www.xuanzx.com/163iheyjtcr.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.sxryk.cn/163xzobkvgv.html

[I02] 提取所有匹配
来源：http://www.sxryk.cn/163ivxxdfyc.html

Py:   re.findall(r"\d+", s)
来源：http://www.xuanzx.com/163yhbopidd.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.sxryk.cn/163onvsptlq.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.xuanzx.com/163reaxwoja.html

TS:   s.match(/\d+/g)
来源：http://www.xuanzx.com/163pqjahljr.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.xuanzx.com/163woptjxwm.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.sxryk.cn/163pqlfwkhj.html

Ruby: s.scan(/\d+/)
来源：http://www.sxryk.cn/163dlqmujvs.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.sxryk.cn/163orlkfbgv.html

[I03] 提取捕获分组
来源：http://www.sxryk.cn/163anffsqed.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.sxryk.cn/163owasvwht.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.xuanzx.com/163uhpoiiwa.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.sxryk.cn/163rdlacryt.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.xuanzx.com/163fjjxpyhj.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.xuanzx.com/163czsgjdst.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.sxryk.cn/163ngnipdto.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.aibaodan.cn/163gnziwfit.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.aibaodan.cn/163vlpmuozh.html

[I04] 正则替换
来源：http://www.aibaodan.cn/163imkzbhbn.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.xuanzx.com/163vlgvhwti.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163bnqbokwt.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163jhfybtom.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163hkjvkrwl.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.aibaodan.cn/163qswyusil.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.aibaodan.cn/163eiwggpaj.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.sxryk.cn/163mkbsucjo.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.xuanzx.com/163ahnjjpld.html

[I05] 按正则拆分
来源：http://www.aibaodan.cn/163xuebgyvi.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.aibaodan.cn/163mbnzlart.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.xuanzx.com/163artwsgbd.html

JS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163dpwvaylo.html

TS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163pmrwwudd.html

Java: s.split("\\s*,\\s*")
来源：http://www.xuanzx.com/163aesidlci.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.aibaodan.cn/163lubcjydn.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163swoxuitk.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.aibaodan.cn/163fndworya.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.aibaodan.cn/163rdtxrcoe.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163iieqpgvl.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.aibaodan.cn/163cviapdze.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163gypovucd.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163yyoijhay.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.sxryk.cn/163smkkozzh.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.xuanzx.com/163kxubrinx.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.aibaodan.cn/163jgpkovex.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163gfdlmhfk.html

[I07] 忽略大小写与多行模式
来源：http://www.sxryk.cn/163nqycjnwo.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.xuanzx.com/163ikzttleu.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.aibaodan.cn/163ygkdasvo.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.sxryk.cn/163ylakzrmg.html

TS:   /error/gim
来源：http://www.sxryk.cn/163njvnvkvo.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.aibaodan.cn/163oapckpdy.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.aibaodan.cn/163nkhuyraz.html

Ruby: s.scan(/error/i)
来源：http://www.sxryk.cn/163zhgcnueh.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.sxryk.cn/163jukxqjdk.html

[I08] 贪婪与非贪婪匹配
来源：http://www.xuanzx.com/163qdaxikec.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.xuanzx.com/163xzvfhotv.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.xuanzx.com/163nmctgdlb.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163uuarugkl.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163birbhsvn.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.aibaodan.cn/163pcyozcxo.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.sxryk.cn/163rkjvrhry.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.xuanzx.com/163vjbmcsnx.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.sxryk.cn/163ziwagydt.html

================================================================================
来源：http://www.xuanzx.com/163cmnqsirg.html

J. 日期与时间
来源：http://www.xuanzx.com/163wstnlfst.html

================================================================================
来源：http://www.aibaodan.cn/163ngvozilk.html

[J01] 获取当前时间
来源：http://www.xuanzx.com/163loujbgiv.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.sxryk.cn/163ghgbkiwh.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163spugpezr.html

JS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163nmioapvg.html

TS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163ufbioqfl.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.sxryk.cn/163vfwjzknx.html

Go:   time.Now()
来源：http://www.sxryk.cn/163ibzjfkps.html

Ruby: Time.now
来源：http://www.aibaodan.cn/163jvxwnbhi.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.xuanzx.com/163rpiptjsp.html

[J02] 格式化输出
来源：http://www.sxryk.cn/163tcpwemuo.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163whiiuhun.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163vqgksbwc.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.xuanzx.com/163bsitygdh.html

TS:   d.toISOString()
来源：http://www.xuanzx.com/163lqorsrmf.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.aibaodan.cn/163vnczmgsy.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.sxryk.cn/163rvrtpaly.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163cxdowjcy.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.sxryk.cn/163exgqflxk.html

[J03] 字符串解析为日期
来源：http://www.aibaodan.cn/163gezgjdwa.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.xuanzx.com/163ckugniqc.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.sxryk.cn/163enulpcrr.html

JS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163fsisygaj.html

TS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163uuckcfia.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.sxryk.cn/163krhzsrvn.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.aibaodan.cn/163jnuzbyiv.html

Ruby: Date.parse("2024-01-02")
来源：http://www.sxryk.cn/163eorwtrsa.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.xuanzx.com/163pkluqzyr.html

[J04] 时间戳与日期互转
来源：http://www.xuanzx.com/163ogjnchqk.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.xuanzx.com/163uigmuvhj.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.aibaodan.cn/163ajuobcur.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.aibaodan.cn/163vdjkgntf.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.xuanzx.com/163pquqksnp.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.aibaodan.cn/163nkguscrz.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.aibaodan.cn/163bqttoatb.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.sxryk.cn/163ripbbmsm.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.sxryk.cn/163bzgzhror.html

[J05] 时间加减（加 7 天）
来源：http://www.aibaodan.cn/163zygrzjtn.html

Py:   now + timedelta(days=7)
来源：http://www.aibaodan.cn/163udtmrbni.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.xuanzx.com/163iaosjocn.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163wdhlpsru.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163btnmbeqz.html

Java: LocalDate.now().plusDays(7)
来源：http://www.xuanzx.com/163wpqfqvjf.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.sxryk.cn/163vgcayamq.html

Ruby: Time.now + 7 * 86400
来源：http://www.xuanzx.com/163ldfnkkxa.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.xuanzx.com/163fekghqof.html

[J06] 计算两时间之差
来源：http://www.sxryk.cn/163gvfkzqcx.html

Py:   (end - start).total_seconds()
来源：http://www.aibaodan.cn/163epjoanod.html

PHP:  $end->diff($start)->days;
来源：http://www.xuanzx.com/163almvysjj.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.sxryk.cn/163mbpupkap.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.sxryk.cn/163eyebndoc.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.sxryk.cn/163pviwvfxv.html

Go:   end.Sub(start).Hours()
来源：http://www.xuanzx.com/163zfpgnmhf.html

Ruby: end - start                 # 返回秒数
来源：http://www.sxryk.cn/163aommbxnv.html

C#:   (end - start).TotalSeconds
来源：http://www.xuanzx.com/163tvmhgkoc.html

[J07] 比较两个日期
来源：http://www.xuanzx.com/163jmkypqqf.html

Py:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163abhqifzp.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.xuanzx.com/163iakpixwu.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163kztkepxf.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163cjjoituj.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.aibaodan.cn/163xscccxcw.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.xuanzx.com/163pomlljki.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163zozyyilw.html

C#:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163vtewxsik.html

[J08] 提取年月日与星期
来源：http://www.aibaodan.cn/163gxwydsef.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.xuanzx.com/163tzgltyuo.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.sxryk.cn/163ffkxejim.html


<!-- 参考信息 -->