外链999!wailian999！

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.sxryk.cn/163thyqylix.html

JS:   toString() { return this.name; }
来源：http://www.aibaodan.cn/163veqgovyb.html

TS:   toString(): string { return this.name; }
来源：http://www.aibaodan.cn/163tqxmjcvp.html

Java: @Override public String toString() { return name; }
来源：http://www.xuanzx.com/163uqulrzwe.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.xuanzx.com/163wttskkdc.html

Ruby: def to_s; @name; end
来源：http://www.sxryk.cn/163jkudkhdh.html

C#:   public override string ToString() => Name;
来源：http://www.aibaodan.cn/163wyifbjxb.html

[G13] 判断对象类型
来源：http://www.xuanzx.com/163ckcljmcr.html

Py:   isinstance(u, User)
来源：http://www.sxryk.cn/163lldtrvgb.html

PHP:  $u instanceof User
来源：http://www.aibaodan.cn/163aovrghrh.html

JS:   u instanceof User
来源：http://www.xuanzx.com/163eonprlxx.html

TS:   u instanceof User
来源：http://www.sxryk.cn/163vyamaygl.html

Java: u instanceof User
来源：http://www.sxryk.cn/163jxpnvbwv.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.xuanzx.com/163cicjbhjc.html

Ruby: u.is_a?(User)
来源：http://www.xuanzx.com/163rbgygezb.html

C#:   u is User
来源：http://www.xuanzx.com/163cdqlilws.html

[G14] 数据类 / record
来源：http://www.aibaodan.cn/163brpkszpf.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.aibaodan.cn/163axgrrhfg.html

PHP:  // 用 readonly 属性模拟
来源：http://www.xuanzx.com/163yiahggob.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.sxryk.cn/163ugzsmcqe.html

TS:   type User = { name: string; age: number };
来源：http://www.sxryk.cn/163rfhbbddj.html

Java: record User(String name, int age) {}
来源：http://www.sxryk.cn/163zaszqfug.html

Go:   type User struct { Name string; Age int }
来源：http://www.sxryk.cn/163pduxpnln.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.aibaodan.cn/163hbesxnjp.html

C#:   record User(string Name, int Age);
来源：http://www.xuanzx.com/163vkbimsff.html

[G15] 枚举
来源：http://www.sxryk.cn/163dsetarys.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.xuanzx.com/163aibcbrjp.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.aibaodan.cn/163qcmivhqv.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.sxryk.cn/163svwoltnr.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163jlvqtrsf.html

Java: enum Color { RED, GREEN }
来源：http://www.xuanzx.com/163ilogmpjw.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.aibaodan.cn/163faxvatpt.html

Ruby: Color = %i[red green].freeze
来源：http://www.sxryk.cn/163ixxsvoak.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163oyjdzkrn.html

[G16] 对象转数组 / 字典
来源：http://www.xuanzx.com/163qsxrvqsf.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.sxryk.cn/163bwxtftyt.html

PHP:  get_object_vars($obj);
来源：http://www.sxryk.cn/163pqvcqdfl.html

JS:   Object.entries(obj)
来源：http://www.sxryk.cn/163ymnbycli.html

TS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163dvevpsmg.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.aibaodan.cn/163ildefzpe.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.xuanzx.com/163lcbhrjdz.html

Ruby: obj.instance_variables
来源：http://www.aibaodan.cn/163eoceqwwl.html

C#:   // 用反射或 System.Text.Json
来源：http://www.aibaodan.cn/163nebdiqae.html

================================================================================
来源：http://www.xuanzx.com/163fmljuway.html

H. 异常与错误处理
来源：http://www.sxryk.cn/163iwmxssfe.html

================================================================================
来源：http://www.sxryk.cn/163gmkmtenl.html

[H01] try / catch 基础
来源：http://www.sxryk.cn/163pzalbhqb.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.aibaodan.cn/163rgculkor.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.xuanzx.com/163kvaqnops.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163otwazvar.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.xuanzx.com/163dsmplyow.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.xuanzx.com/163ezasfxjl.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.aibaodan.cn/163bqomiarc.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.sxryk.cn/163tihncynz.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.sxryk.cn/163yfvarylf.html

[H02] finally / ensure 收尾
来源：http://www.sxryk.cn/163whrzlerr.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.sxryk.cn/163yckualsu.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163sqblluut.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163ejmepdbr.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163nlejqrew.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163wlwmmbsd.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.xuanzx.com/163xkzduwgu.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.sxryk.cn/163acacthlm.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.xuanzx.com/163smombscx.html

[H03] 主动抛出异常
来源：http://www.aibaodan.cn/163laynzyqv.html

Py:   raise ValueError("错误信息")
来源：http://www.sxryk.cn/163cptkjckg.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.aibaodan.cn/163apeqvyvg.html

JS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163cmaqsrwn.html

TS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163aidxgjau.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.aibaodan.cn/163hemswuqh.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.aibaodan.cn/163wrwwmkum.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.aibaodan.cn/163gvgzyfzi.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.xuanzx.com/163wuulgqfk.html

[H04] 自定义异常类型
来源：http://www.aibaodan.cn/163matxdikl.html

Py:   class MyError(Exception): pass
来源：http://www.sxryk.cn/163kwcvxbzr.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.xuanzx.com/163shrzkrbd.html

JS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163vbauhsnj.html

TS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163kqhvqqqe.html

Java: class MyException extends RuntimeException {}
来源：http://www.xuanzx.com/163tqeerjjh.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.xuanzx.com/163rgpaovzp.html

Ruby: class MyError < StandardError; end
来源：http://www.aibaodan.cn/163hofeicpg.html

C#:   class MyException : Exception {}
来源：http://www.aibaodan.cn/163cpvjhzpp.html

[H05] 捕获特定类型
来源：http://www.sxryk.cn/163kueqlshi.html

Py:   except ValueError as e:
来源：http://www.xuanzx.com/163oslelxvv.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.xuanzx.com/163pefbwixg.html

JS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163iqopdlzq.html

TS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163pbxjprof.html

Java: catch (IOException | SQLException e) {}
来源：http://www.xuanzx.com/163ohxwpgak.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.xuanzx.com/163yuapmuzz.html

Ruby: rescue ArgumentError => e
来源：http://www.aibaodan.cn/163fnuppbon.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.xuanzx.com/163hfhpwsvu.html

[H06] 可选值 / 空值安全访问
来源：http://www.xuanzx.com/163duwzoukr.html

Py:   value = d.get("k") or default
来源：http://www.sxryk.cn/163mmjgbbue.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.xuanzx.com/163zgsjwoxl.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163kydjwial.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163thhnktqj.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.sxryk.cn/163xwgeocil.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.aibaodan.cn/163vttqfzcb.html

Ruby: d&.dig(:a, :b)
来源：http://www.sxryk.cn/163qmcpjskk.html

C#:   obj?.A?.B ?? default
来源：http://www.xuanzx.com/163dexeasvm.html

[H07] 断言
来源：http://www.sxryk.cn/163yppszxwn.html

Py:   assert x > 0, "必须为正"
来源：http://www.sxryk.cn/163odaenhwy.html

PHP:  assert($x > 0);
来源：http://www.sxryk.cn/163amfjeacj.html

JS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163jvtykdku.html

TS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163rkitzzxx.html

Java: assert x > 0 : "必须为正";
来源：http://www.aibaodan.cn/163aalhmkld.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.aibaodan.cn/163yukfxqth.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.sxryk.cn/163lgvkiytb.html

C#:   Debug.Assert(x > 0);
来源：http://www.sxryk.cn/163cgzdvodj.html

[H08] 获取错误信息与堆栈
来源：http://www.xuanzx.com/163rfepqdyq.html

Py:   str(e);  traceback.format_exc()
来源：http://www.xuanzx.com/163hbfppdzn.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.aibaodan.cn/163jtzxsvwa.html

JS:   e.message;  e.stack
来源：http://www.sxryk.cn/163npcimbzr.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.xuanzx.com/163jxraknpb.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.sxryk.cn/163wbpkxjic.html

Go:   err.Error()
来源：http://www.aibaodan.cn/163cwykxysa.html

Ruby: e.message;  e.backtrace
来源：http://www.xuanzx.com/163koinivnh.html

C#:   e.Message;  e.StackTrace
来源：http://www.sxryk.cn/163tnioxhax.html

[H09] 带错误码的异常
来源：http://www.aibaodan.cn/163afzyigmy.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.aibaodan.cn/163avcukrnh.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.sxryk.cn/163oreobeia.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.aibaodan.cn/163cfakabjg.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.xuanzx.com/163hbwefodv.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.xuanzx.com/163arofmoer.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.sxryk.cn/163zmnugkwy.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.sxryk.cn/163ypljyqwm.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.aibaodan.cn/163otglrzbi.html

[H10] 资源自动释放
来源：http://www.aibaodan.cn/163hsmkjwqq.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.xuanzx.com/163cipfalge.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.aibaodan.cn/163gxwtdabb.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163qhgvqfjw.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163pauwxzib.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.aibaodan.cn/163ixpsprkh.html

Go:   defer f.Close()
来源：http://www.aibaodan.cn/163hslhlyhj.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.xuanzx.com/163zorhiinv.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.xuanzx.com/163lstpvsuk.html

================================================================================
来源：http://www.sxryk.cn/163hpxjomad.html

I. 正则表达式
来源：http://www.aibaodan.cn/163idnidoyw.html

================================================================================
来源：http://www.aibaodan.cn/163sanelpeo.html

[I01] 判断是否匹配
来源：http://www.aibaodan.cn/163oathziqk.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.sxryk.cn/163bvjgpdjl.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.aibaodan.cn/163ujsmeckz.html

JS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163qiemxkcm.html

TS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163gzakprue.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.aibaodan.cn/163pkyxjgwy.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.xuanzx.com/163mawqnyvr.html

Ruby: s.match?(/\d+/)
来源：http://www.sxryk.cn/163kazrbeiz.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.sxryk.cn/163nektofft.html

[I02] 提取所有匹配
来源：http://www.aibaodan.cn/163zrsiofna.html

Py:   re.findall(r"\d+", s)
来源：http://www.sxryk.cn/163qntsthhf.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.sxryk.cn/163bseazfca.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.sxryk.cn/163nnbmntli.html

TS:   s.match(/\d+/g)
来源：http://www.aibaodan.cn/163qwnybthx.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.xuanzx.com/163knnzadwe.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.xuanzx.com/163urlmxdkk.html

Ruby: s.scan(/\d+/)
来源：http://www.sxryk.cn/163vgpgwclf.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.xuanzx.com/163adihwyhj.html

[I03] 提取捕获分组
来源：http://www.sxryk.cn/163sfidgfzy.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.aibaodan.cn/163ivvfjuyo.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.xuanzx.com/163yqdkgoux.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.sxryk.cn/163kxdgsezd.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.xuanzx.com/163mmawemeo.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.sxryk.cn/163qqjxwjdy.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.aibaodan.cn/163cujxabfj.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.aibaodan.cn/163ilvmohcp.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.sxryk.cn/163igyvfpqb.html

[I04] 正则替换
来源：http://www.sxryk.cn/163wqnefehm.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.xuanzx.com/163rngjuvri.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163imtuuaac.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163aqlzupuh.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163cskrotto.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.aibaodan.cn/163ixctcbhp.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.sxryk.cn/163nbyiqlfl.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.sxryk.cn/163vibvshki.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.xuanzx.com/163gzaypjyg.html

[I05] 按正则拆分
来源：http://www.sxryk.cn/163vrcxprqb.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.sxryk.cn/163kkftmike.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.sxryk.cn/163xngwhprw.html

JS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163tncnebxw.html

TS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163hboqjuci.html

Java: s.split("\\s*,\\s*")
来源：http://www.xuanzx.com/163hilofexo.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.xuanzx.com/163ujrfsdhs.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163tbtmweua.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.xuanzx.com/163nxmsbbhn.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.xuanzx.com/163htxkafag.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163dyyildxn.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.sxryk.cn/163vdjlthpq.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163jdxpcwpy.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163zfbkakls.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.aibaodan.cn/163pnoloqkp.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.sxryk.cn/163cpblyxkj.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.aibaodan.cn/163grueywwh.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163ogxsxhly.html

[I07] 忽略大小写与多行模式
来源：http://www.sxryk.cn/163cvqqtmkp.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.xuanzx.com/163wfwfewrh.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.xuanzx.com/163ovltbkls.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.xuanzx.com/163jrnyglbt.html

TS:   /error/gim
来源：http://www.xuanzx.com/163scoqjiqc.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.sxryk.cn/163losmmgjw.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.aibaodan.cn/163adaravzo.html

Ruby: s.scan(/error/i)
来源：http://www.xuanzx.com/163fsuvqshu.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.sxryk.cn/163zyrgkvef.html

[I08] 贪婪与非贪婪匹配
来源：http://www.xuanzx.com/163gnewpavz.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.xuanzx.com/163wlydmagi.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.aibaodan.cn/163mzrlhxgw.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163yrpacuzg.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163bpuhxtec.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.aibaodan.cn/163szlgejat.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.sxryk.cn/163ymdsfjzs.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.sxryk.cn/163mziundgh.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.aibaodan.cn/163gmpseajz.html

================================================================================
来源：http://www.aibaodan.cn/163dbjhzcnv.html

J. 日期与时间
来源：http://www.sxryk.cn/163ueofiiwb.html

================================================================================
来源：http://www.aibaodan.cn/163ohqorqdr.html

[J01] 获取当前时间
来源：http://www.aibaodan.cn/163hacufzou.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.xuanzx.com/163vbulumzr.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163cvfgoacy.html

JS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163xgwxuxle.html

TS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163nhdogivu.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.sxryk.cn/163gtpgrncd.html

Go:   time.Now()
来源：http://www.aibaodan.cn/163tloigutg.html

Ruby: Time.now
来源：http://www.sxryk.cn/163wcwufksq.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.xuanzx.com/163trryrxtw.html

[J02] 格式化输出
来源：http://www.xuanzx.com/163zvcxopod.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163fanejxsy.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163tzvhyjez.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.aibaodan.cn/163xiawgxvi.html

TS:   d.toISOString()
来源：http://www.aibaodan.cn/163dnjgsxkk.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.aibaodan.cn/163uwwzfsft.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.aibaodan.cn/163gkfdjwgx.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163sfwgnkdz.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.sxryk.cn/163jyofbjqp.html

[J03] 字符串解析为日期
来源：http://www.aibaodan.cn/163vzcjewok.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.sxryk.cn/163npgjcsxz.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.aibaodan.cn/163lbyyrdyh.html

JS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163lkwwhupb.html

TS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163bfijfspn.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.xuanzx.com/163kpelioyd.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.xuanzx.com/163dpkbclfg.html

Ruby: Date.parse("2024-01-02")
来源：http://www.xuanzx.com/163raqxyifq.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.aibaodan.cn/163ntmivwlj.html

[J04] 时间戳与日期互转
来源：http://www.sxryk.cn/163mndseydl.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.sxryk.cn/163phiyfylt.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.sxryk.cn/163kxkjebjk.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.sxryk.cn/163aznhogth.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.xuanzx.com/163zulpnegc.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.sxryk.cn/163fimvtaet.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.xuanzx.com/163abstivfm.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.aibaodan.cn/163zablmptf.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.aibaodan.cn/163dwwlthve.html

[J05] 时间加减（加 7 天）
来源：http://www.xuanzx.com/163xhdsbxjb.html

Py:   now + timedelta(days=7)
来源：http://www.xuanzx.com/163hrwhtjow.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.aibaodan.cn/163zgxtxfwx.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163lyfmeczj.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163vjlsjvmi.html

Java: LocalDate.now().plusDays(7)
来源：http://www.aibaodan.cn/163oicwpcev.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.aibaodan.cn/163ynaloybz.html

Ruby: Time.now + 7 * 86400
来源：http://www.sxryk.cn/163kpblronj.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.aibaodan.cn/163qnxvknlj.html

[J06] 计算两时间之差
来源：http://www.xuanzx.com/163cuhkoveb.html

Py:   (end - start).total_seconds()
来源：http://www.xuanzx.com/163cflvqqmm.html

PHP:  $end->diff($start)->days;
来源：http://www.sxryk.cn/163vvoogdpb.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.xuanzx.com/163kkehorpt.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.sxryk.cn/163yitebqac.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.xuanzx.com/163gbktegcs.html

Go:   end.Sub(start).Hours()
来源：http://www.aibaodan.cn/163mjracytj.html

Ruby: end - start                 # 返回秒数
来源：http://www.xuanzx.com/163vuofypqy.html

C#:   (end - start).TotalSeconds
来源：http://www.sxryk.cn/163jmkgefjq.html

[J07] 比较两个日期
来源：http://www.xuanzx.com/163zvbsvpqi.html

Py:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163lzrvaecy.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.sxryk.cn/163ugzzgyfz.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163qmverbso.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163dbnnpvos.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.aibaodan.cn/163byrjredf.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.aibaodan.cn/163muyksqyk.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163alytlfvv.html

C#:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163grcgstoo.html

[J08] 提取年月日与星期
来源：http://www.aibaodan.cn/163dhnrhonh.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.aibaodan.cn/163jzesdglw.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.sxryk.cn/163vrincufa.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.aibaodan.cn/163hdxjsxag.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.xuanzx.com/163uozvvejc.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.aibaodan.cn/163pxdollcj.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.sxryk.cn/163xqjcqfkx.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.sxryk.cn/163cfjgaoyc.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.aibaodan.cn/163iztxnplk.html

[J09] 时区处理
来源：http://www.xuanzx.com/163oykubpzc.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.sxryk.cn/163pdrwgwwy.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.aibaodan.cn/163imfmgrfg.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163gxxaqbnt.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163quvoieaf.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.aibaodan.cn/163bbmyvepz.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.xuanzx.com/163urkfcucu.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.sxryk.cn/163yoftbchn.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.aibaodan.cn/163ksgxmsjb.html

[J10] 取今天 / 本月第一天
来源：http://www.aibaodan.cn/163mjsjwuaa.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.xuanzx.com/163szstijgn.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.xuanzx.com/163ztsggtxh.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.xuanzx.com/163wulxmnnu.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.aibaodan.cn/163izrvvlbw.html


<!-- 参考信息 -->