外链999!wailian999！

TS:   public / protected / private
来源：http://www.aibaodan.cn/163lulwenhj.html

Java: public / protected / private / 默认包级
来源：http://www.aibaodan.cn/163mobkrdcx.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.sxryk.cn/163nqwdkjfk.html

Ruby: public / protected / private
来源：http://www.xuanzx.com/163pbxpwwif.html

C#:   public / protected / private / internal
来源：http://www.xuanzx.com/163qjavxavu.html

[G11] getter / setter
来源：http://www.aibaodan.cn/163urrqbinr.html

Py:   @property 与 @x.setter
来源：http://www.sxryk.cn/163wbjbqaqi.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.aibaodan.cn/163tyubisev.html

JS:   get name() { return this._name; }
来源：http://www.sxryk.cn/163zrbngdai.html

TS:   get name(): string { return this._name; }
来源：http://www.xuanzx.com/163zunaunyz.html

Java: public String getName() { return name; }
来源：http://www.sxryk.cn/163pnxxdsfy.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.aibaodan.cn/163dazsbzei.html

Ruby: attr_accessor :name
来源：http://www.sxryk.cn/163dafqjpkv.html

C#:   public string Name { get; set; }
来源：http://www.xuanzx.com/163qxebyzsu.html

[G12] 对象转字符串
来源：http://www.sxryk.cn/163odknuwpt.html

Py:   def __str__(self): return self.name
来源：http://www.sxryk.cn/163wothfcxy.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.xuanzx.com/163zcllarey.html

JS:   toString() { return this.name; }
来源：http://www.sxryk.cn/163xxlxnjsq.html

TS:   toString(): string { return this.name; }
来源：http://www.sxryk.cn/163tuixkcsh.html

Java: @Override public String toString() { return name; }
来源：http://www.xuanzx.com/163zkckhsgw.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.aibaodan.cn/163zcyonbpd.html

Ruby: def to_s; @name; end
来源：http://www.xuanzx.com/163abvruufh.html

C#:   public override string ToString() => Name;
来源：http://www.sxryk.cn/163eleasxhr.html

[G13] 判断对象类型
来源：http://www.xuanzx.com/163sbauxpxw.html

Py:   isinstance(u, User)
来源：http://www.sxryk.cn/163aezwywuo.html

PHP:  $u instanceof User
来源：http://www.sxryk.cn/163cdmwhoyo.html

JS:   u instanceof User
来源：http://www.sxryk.cn/163zplifffu.html

TS:   u instanceof User
来源：http://www.xuanzx.com/163vkgwfzjg.html

Java: u instanceof User
来源：http://www.aibaodan.cn/163mxuzsylj.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.sxryk.cn/163rjjfzvep.html

Ruby: u.is_a?(User)
来源：http://www.xuanzx.com/163ptswiozf.html

C#:   u is User
来源：http://www.sxryk.cn/163ygbkqcmc.html

[G14] 数据类 / record
来源：http://www.xuanzx.com/163vaqtzkhq.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.sxryk.cn/163nhbulwfv.html

PHP:  // 用 readonly 属性模拟
来源：http://www.xuanzx.com/163yquvbrxd.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.aibaodan.cn/163pgjiiqny.html

TS:   type User = { name: string; age: number };
来源：http://www.aibaodan.cn/163rxvvypey.html

Java: record User(String name, int age) {}
来源：http://www.aibaodan.cn/163udpmvzqy.html

Go:   type User struct { Name string; Age int }
来源：http://www.aibaodan.cn/163ycdoyzte.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.aibaodan.cn/163eylxcapo.html

C#:   record User(string Name, int Age);
来源：http://www.sxryk.cn/163nmpgxcpg.html

[G15] 枚举
来源：http://www.xuanzx.com/163uzprjozz.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.xuanzx.com/163pjjvwhsj.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.xuanzx.com/163jjwozucw.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.xuanzx.com/163hebfreml.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163axrhvorc.html

Java: enum Color { RED, GREEN }
来源：http://www.sxryk.cn/163mahvtohq.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.sxryk.cn/163nebsffhp.html

Ruby: Color = %i[red green].freeze
来源：http://www.aibaodan.cn/163opbgzsav.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163bdnexfoo.html

[G16] 对象转数组 / 字典
来源：http://www.aibaodan.cn/163fgofzghq.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.xuanzx.com/163fvpkwpso.html

PHP:  get_object_vars($obj);
来源：http://www.xuanzx.com/163nstnmovs.html

JS:   Object.entries(obj)
来源：http://www.sxryk.cn/163rbfzjedk.html

TS:   Object.entries(obj)
来源：http://www.sxryk.cn/163jyhbkvfm.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.aibaodan.cn/163yakiolyz.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.aibaodan.cn/163jxcbhhks.html

Ruby: obj.instance_variables
来源：http://www.aibaodan.cn/163ytecosmw.html

C#:   // 用反射或 System.Text.Json
来源：http://www.sxryk.cn/163biqhosdv.html

================================================================================
来源：http://www.sxryk.cn/163hdvvszae.html

H. 异常与错误处理
来源：http://www.aibaodan.cn/163gtmygtrr.html

================================================================================
来源：http://www.sxryk.cn/163qzrwpdud.html

[H01] try / catch 基础
来源：http://www.xuanzx.com/163syndvxmc.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.sxryk.cn/163uwidygsc.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.xuanzx.com/163gfbfoypz.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163sxjvivjy.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.xuanzx.com/163dtoaqmum.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.aibaodan.cn/163texdglbk.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.sxryk.cn/163fyodnbbe.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.aibaodan.cn/163qfojqohr.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.sxryk.cn/163fknezxms.html

[H02] finally / ensure 收尾
来源：http://www.sxryk.cn/163vlomznlz.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.aibaodan.cn/163foubglfi.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163ywwvgalo.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163xezdomzb.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163jgfvpnnu.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163mprgsrlf.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.xuanzx.com/163zhogbbof.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.aibaodan.cn/163flobtkpg.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.xuanzx.com/163yrkyhbtw.html

[H03] 主动抛出异常
来源：http://www.aibaodan.cn/163jttqadcr.html

Py:   raise ValueError("错误信息")
来源：http://www.aibaodan.cn/163iaqsuilb.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.xuanzx.com/163rwlwgwnc.html

JS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163mrqpykca.html

TS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163vigztwqu.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.aibaodan.cn/163nptltdzf.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.xuanzx.com/163bwejqbik.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.sxryk.cn/163gjbkdoqt.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.sxryk.cn/163robbpnvp.html

[H04] 自定义异常类型
来源：http://www.aibaodan.cn/163kjmcirpt.html

Py:   class MyError(Exception): pass
来源：http://www.xuanzx.com/163iuyjfgkk.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.xuanzx.com/163erzbfwru.html

JS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163nbssnsue.html

TS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163afciqenm.html

Java: class MyException extends RuntimeException {}
来源：http://www.aibaodan.cn/163xrllynpb.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.aibaodan.cn/163phxosawb.html

Ruby: class MyError < StandardError; end
来源：http://www.sxryk.cn/163aeambgup.html

C#:   class MyException : Exception {}
来源：http://www.sxryk.cn/163hefujkmv.html

[H05] 捕获特定类型
来源：http://www.xuanzx.com/163agchwnfd.html

Py:   except ValueError as e:
来源：http://www.sxryk.cn/163ogwlqmox.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.sxryk.cn/163inaqgkhq.html

JS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163mkwmcmqz.html

TS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163jyaiuxow.html

Java: catch (IOException | SQLException e) {}
来源：http://www.sxryk.cn/163jsoukmda.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.xuanzx.com/163cwavemje.html

Ruby: rescue ArgumentError => e
来源：http://www.sxryk.cn/163uzxtqcjx.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.aibaodan.cn/163rndcwasy.html

[H06] 可选值 / 空值安全访问
来源：http://www.xuanzx.com/163diwhayly.html

Py:   value = d.get("k") or default
来源：http://www.aibaodan.cn/163hbfnsyne.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.aibaodan.cn/163ekejdufj.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163mpoobtdc.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163yimamahp.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.aibaodan.cn/163bmwcqawz.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.aibaodan.cn/163oycyvwjv.html

Ruby: d&.dig(:a, :b)
来源：http://www.xuanzx.com/163czoocveq.html

C#:   obj?.A?.B ?? default
来源：http://www.xuanzx.com/163fskhbgro.html

[H07] 断言
来源：http://www.xuanzx.com/163bkizewij.html

Py:   assert x > 0, "必须为正"
来源：http://www.xuanzx.com/163jmyedqsq.html

PHP:  assert($x > 0);
来源：http://www.xuanzx.com/163gluwbbvc.html

JS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163yeendldy.html

TS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163lpzdnebf.html

Java: assert x > 0 : "必须为正";
来源：http://www.xuanzx.com/163skbzbyvi.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.xuanzx.com/163awobrhou.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.sxryk.cn/163zyxwrdlf.html

C#:   Debug.Assert(x > 0);
来源：http://www.xuanzx.com/163sinvklju.html

[H08] 获取错误信息与堆栈
来源：http://www.sxryk.cn/163vkcmqtfo.html

Py:   str(e);  traceback.format_exc()
来源：http://www.sxryk.cn/163jljlsznf.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.xuanzx.com/163zmzhyuhk.html

JS:   e.message;  e.stack
来源：http://www.sxryk.cn/163djnlkwuh.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.xuanzx.com/163omexzjsj.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.xuanzx.com/163pqhyfgbq.html

Go:   err.Error()
来源：http://www.xuanzx.com/163hzqnppib.html

Ruby: e.message;  e.backtrace
来源：http://www.aibaodan.cn/163zxxnhtqs.html

C#:   e.Message;  e.StackTrace
来源：http://www.aibaodan.cn/163yfdvawrw.html

[H09] 带错误码的异常
来源：http://www.sxryk.cn/163xlxkgjzg.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.aibaodan.cn/163virnsxig.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.sxryk.cn/163wpxfnady.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.xuanzx.com/163iwuvtxqi.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.aibaodan.cn/163tqxfncxw.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.xuanzx.com/163pxzpunfb.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.xuanzx.com/163dhvpvjmf.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.aibaodan.cn/163diqavvtm.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.aibaodan.cn/163wswakhtf.html

[H10] 资源自动释放
来源：http://www.sxryk.cn/163pfretxvp.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.xuanzx.com/163mzejonem.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.xuanzx.com/163mnhuneit.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163tikikxks.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163ttjwrrql.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.sxryk.cn/163qyucnppd.html

Go:   defer f.Close()
来源：http://www.aibaodan.cn/163iblusujw.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.aibaodan.cn/163gcdxcdmo.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.aibaodan.cn/163kqahtifc.html

================================================================================
来源：http://www.xuanzx.com/163uqesjedq.html

I. 正则表达式
来源：http://www.sxryk.cn/163uofqzfby.html

================================================================================
来源：http://www.sxryk.cn/163fppwmcrd.html

[I01] 判断是否匹配
来源：http://www.xuanzx.com/163wlfmqplg.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.sxryk.cn/163emkmtjqt.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.sxryk.cn/163whpmfhzp.html

JS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163yhcptyyo.html

TS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163yrzcjxqz.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.sxryk.cn/163ttfqzkdl.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.sxryk.cn/163rheoekdl.html

Ruby: s.match?(/\d+/)
来源：http://www.aibaodan.cn/163qctuhohw.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.xuanzx.com/163gcjpafem.html

[I02] 提取所有匹配
来源：http://www.xuanzx.com/163momwmedb.html

Py:   re.findall(r"\d+", s)
来源：http://www.xuanzx.com/163axvapndv.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.xuanzx.com/163ngbfwooc.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.xuanzx.com/163ozokaxoh.html

TS:   s.match(/\d+/g)
来源：http://www.aibaodan.cn/163jwgqyzit.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.xuanzx.com/163adxctwcj.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.aibaodan.cn/163blupckta.html

Ruby: s.scan(/\d+/)
来源：http://www.sxryk.cn/163xhjrlhbq.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.xuanzx.com/163ahgxgzpw.html

[I03] 提取捕获分组
来源：http://www.sxryk.cn/163qtvjtmqj.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.sxryk.cn/163vsgiytkf.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.xuanzx.com/163iwdkpbcz.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.aibaodan.cn/163ewtaklbh.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.aibaodan.cn/163dkdfrvdj.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.sxryk.cn/163pxgwvadt.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.aibaodan.cn/163upvrrjjm.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.xuanzx.com/163fhbrawsq.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.xuanzx.com/163kjjaosjj.html

[I04] 正则替换
来源：http://www.aibaodan.cn/163rzrusmpq.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.aibaodan.cn/163vubarslr.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163tpafendo.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163oqknpmdl.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163wslbfevq.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.sxryk.cn/163isaunlgv.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.xuanzx.com/163mwsuauwn.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.aibaodan.cn/163murgyzgp.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.aibaodan.cn/163gfrjuccx.html

[I05] 按正则拆分
来源：http://www.aibaodan.cn/163gyyafufy.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.sxryk.cn/163ooxprmtg.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.xuanzx.com/163ffmwemle.html

JS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163orxoxklg.html

TS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163khssqlbr.html

Java: s.split("\\s*,\\s*")
来源：http://www.aibaodan.cn/163plytyffw.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.xuanzx.com/163mvmogcmf.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163wlrkfnwg.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.aibaodan.cn/163ulkdodsn.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.xuanzx.com/163lmsemnla.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163zlwrguzo.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.xuanzx.com/163bydmguln.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163pzqxzesf.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163paelywby.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.sxryk.cn/163yqomtisc.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.xuanzx.com/163iaghrzas.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.aibaodan.cn/163deonppsm.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163jwxwdfus.html

[I07] 忽略大小写与多行模式
来源：http://www.xuanzx.com/163kxqbrrmy.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.sxryk.cn/163wimaejei.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.aibaodan.cn/163sefwoocd.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.sxryk.cn/163bwnnvupr.html

TS:   /error/gim
来源：http://www.sxryk.cn/163mvtvyuut.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.aibaodan.cn/163jraxujbw.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.sxryk.cn/163rqvnxrmw.html

Ruby: s.scan(/error/i)
来源：http://www.sxryk.cn/163dkohivhc.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.aibaodan.cn/163gdwwdbbq.html

[I08] 贪婪与非贪婪匹配
来源：http://www.sxryk.cn/163eepxofuh.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.sxryk.cn/163rlkdgsrx.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.aibaodan.cn/163kabsocev.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163vgfcwqno.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163uxtftpwq.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.aibaodan.cn/163lglutvdw.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.sxryk.cn/163xhtpmadt.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.xuanzx.com/163jxecjtgn.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.xuanzx.com/163ehhkidtm.html

================================================================================
来源：http://www.sxryk.cn/163mmmqpiwk.html

J. 日期与时间
来源：http://www.sxryk.cn/163udeaajkx.html

================================================================================
来源：http://www.sxryk.cn/163lvwosseb.html

[J01] 获取当前时间
来源：http://www.sxryk.cn/163msskirmr.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.xuanzx.com/163mwieszje.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163wnkmbnsv.html

JS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163bnxxxguv.html

TS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163nvmdkwhm.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.xuanzx.com/163klipnavt.html

Go:   time.Now()
来源：http://www.sxryk.cn/163keeimfbj.html

Ruby: Time.now
来源：http://www.aibaodan.cn/163zmuhejwt.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.sxryk.cn/163nhjdejio.html

[J02] 格式化输出
来源：http://www.aibaodan.cn/163jreoikex.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163hhazpyse.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163hzntusqi.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.sxryk.cn/163viznqhvy.html

TS:   d.toISOString()
来源：http://www.sxryk.cn/163ycpmmbvb.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.sxryk.cn/163pjcqlhhv.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.sxryk.cn/163bqsqhzwn.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163wvhlzmoz.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.xuanzx.com/163epdfkkfw.html

[J03] 字符串解析为日期
来源：http://www.xuanzx.com/163igogzrid.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.sxryk.cn/163mggwvgcw.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.sxryk.cn/163ngmppboi.html

JS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163ngbzlthy.html

TS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163zacxdrdb.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.sxryk.cn/163nuotlrge.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.xuanzx.com/163ntovqlvk.html

Ruby: Date.parse("2024-01-02")
来源：http://www.aibaodan.cn/163uojgfxim.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.sxryk.cn/163tvpkfbzk.html

[J04] 时间戳与日期互转
来源：http://www.xuanzx.com/163ncddotsj.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.xuanzx.com/163kbvklaol.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.aibaodan.cn/163ozrwmokn.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.xuanzx.com/163xwafixjy.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.xuanzx.com/163hbwzwcwm.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.sxryk.cn/163qnjgveuj.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.sxryk.cn/163rbzucmme.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.xuanzx.com/163iwrmqnqw.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.aibaodan.cn/163uvrijbrh.html

[J05] 时间加减（加 7 天）
来源：http://www.aibaodan.cn/163qgkkvojr.html

Py:   now + timedelta(days=7)
来源：http://www.aibaodan.cn/163vihqlsxa.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.aibaodan.cn/163jabqechu.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163cyhaftfk.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163vztgjrux.html

Java: LocalDate.now().plusDays(7)
来源：http://www.xuanzx.com/163qojheasg.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.aibaodan.cn/163mcnhdmik.html

Ruby: Time.now + 7 * 86400
来源：http://www.sxryk.cn/163ijtfrybt.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.sxryk.cn/163mxcapjpz.html

[J06] 计算两时间之差
来源：http://www.sxryk.cn/163hrcztwgd.html

Py:   (end - start).total_seconds()
来源：http://www.aibaodan.cn/163lhiyzwxl.html

PHP:  $end->diff($start)->days;
来源：http://www.aibaodan.cn/163vokywzjq.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.xuanzx.com/163xwgfnayc.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.sxryk.cn/163vffztqwe.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.sxryk.cn/163xxukkgxj.html

Go:   end.Sub(start).Hours()
来源：http://www.xuanzx.com/163bealhaly.html

Ruby: end - start                 # 返回秒数
来源：http://www.sxryk.cn/163vsabmyeu.html

C#:   (end - start).TotalSeconds
来源：http://www.xuanzx.com/163kgxxokba.html

[J07] 比较两个日期
来源：http://www.sxryk.cn/163iqwtkihs.html

Py:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163meclltwh.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.xuanzx.com/163skqmhlyn.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163ankaootd.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163mivkyrsg.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.xuanzx.com/163tkkkqwlb.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.sxryk.cn/163oovfcimc.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163asboyizo.html

C#:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163glacfnep.html

[J08] 提取年月日与星期
来源：http://www.xuanzx.com/163anqdbtmx.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.xuanzx.com/163ajhenqah.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.xuanzx.com/163njsnzubc.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.sxryk.cn/163mxvqzggr.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.aibaodan.cn/163nuxtrxqo.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.aibaodan.cn/163yvchjvny.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.xuanzx.com/163zyfkvprn.html


<!-- 参考信息 -->