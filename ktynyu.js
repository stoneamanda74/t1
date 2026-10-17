外链999!wailian999！

Ruby: attr_accessor :name
来源：http://www.aibaodan.cn/163ibfdlvqh.html

C#:   public string Name { get; set; }
来源：http://www.xuanzx.com/163ujufqblr.html

[G12] 对象转字符串
来源：http://www.sxryk.cn/163ofsloisv.html

Py:   def __str__(self): return self.name
来源：http://www.xuanzx.com/163urdnwzsk.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.sxryk.cn/163oksksoyl.html

JS:   toString() { return this.name; }
来源：http://www.xuanzx.com/163yjlbsbqm.html

TS:   toString(): string { return this.name; }
来源：http://www.xuanzx.com/163zchuclsy.html

Java: @Override public String toString() { return name; }
来源：http://www.sxryk.cn/163hwifojsn.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.aibaodan.cn/163gvhpfljd.html

Ruby: def to_s; @name; end
来源：http://www.sxryk.cn/163joadssvb.html

C#:   public override string ToString() => Name;
来源：http://www.xuanzx.com/163umjpzyks.html

[G13] 判断对象类型
来源：http://www.sxryk.cn/163jtjahtsy.html

Py:   isinstance(u, User)
来源：http://www.xuanzx.com/163ibzzfzke.html

PHP:  $u instanceof User
来源：http://www.sxryk.cn/163tpbprlti.html

JS:   u instanceof User
来源：http://www.xuanzx.com/163yzazbbvq.html

TS:   u instanceof User
来源：http://www.aibaodan.cn/163ogwyrldl.html

Java: u instanceof User
来源：http://www.sxryk.cn/163thzuibex.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.sxryk.cn/163jlawsluv.html

Ruby: u.is_a?(User)
来源：http://www.xuanzx.com/163yjokvjzm.html

C#:   u is User
来源：http://www.xuanzx.com/163jhshqcej.html

[G14] 数据类 / record
来源：http://www.xuanzx.com/163zyrdyzki.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.xuanzx.com/163kzwxwogk.html

PHP:  // 用 readonly 属性模拟
来源：http://www.aibaodan.cn/163hxfewned.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.aibaodan.cn/163mlpkqawy.html

TS:   type User = { name: string; age: number };
来源：http://www.aibaodan.cn/163mpchthug.html

Java: record User(String name, int age) {}
来源：http://www.aibaodan.cn/163jwywxmvz.html

Go:   type User struct { Name string; Age int }
来源：http://www.xuanzx.com/163qvixiuuq.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.aibaodan.cn/163alolcpfu.html

C#:   record User(string Name, int Age);
来源：http://www.aibaodan.cn/163zloubdjx.html

[G15] 枚举
来源：http://www.xuanzx.com/163aumlyjws.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.xuanzx.com/163trhcewkd.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.sxryk.cn/163ywaajwch.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.xuanzx.com/163qskffweh.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163hdjtugci.html

Java: enum Color { RED, GREEN }
来源：http://www.sxryk.cn/163xgyukumy.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.xuanzx.com/163rsedjxoq.html

Ruby: Color = %i[red green].freeze
来源：http://www.aibaodan.cn/163itbqzxnq.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163elwcfpja.html

[G16] 对象转数组 / 字典
来源：http://www.aibaodan.cn/163ravwerqz.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.sxryk.cn/163wlkdefzx.html

PHP:  get_object_vars($obj);
来源：http://www.xuanzx.com/163zwdynobl.html

JS:   Object.entries(obj)
来源：http://www.sxryk.cn/163hdldghhr.html

TS:   Object.entries(obj)
来源：http://www.sxryk.cn/163jtozukkz.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.sxryk.cn/163vkkipclq.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.xuanzx.com/163iawlneei.html

Ruby: obj.instance_variables
来源：http://www.xuanzx.com/163zzzlovhn.html

C#:   // 用反射或 System.Text.Json
来源：http://www.aibaodan.cn/163cmosgstj.html

================================================================================
来源：http://www.aibaodan.cn/163aimgbvzj.html

H. 异常与错误处理
来源：http://www.sxryk.cn/163voonytin.html

================================================================================
来源：http://www.xuanzx.com/163kixymajw.html

[H01] try / catch 基础
来源：http://www.sxryk.cn/163xhalysfh.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.xuanzx.com/163huzcylnl.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.sxryk.cn/163kqnxlazi.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163hdevacki.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.xuanzx.com/163xwhouivw.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.xuanzx.com/163qjxteaor.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.aibaodan.cn/163jasmpsme.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.aibaodan.cn/163bzrrsonq.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.aibaodan.cn/163nirnfwai.html

[H02] finally / ensure 收尾
来源：http://www.xuanzx.com/163xuejmcjv.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.xuanzx.com/163vofdskyb.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163npjdloqo.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163bvbmxthj.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163lvyxrjzd.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163santzupb.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.sxryk.cn/163arcbbjpt.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.sxryk.cn/163whzdblzp.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.xuanzx.com/163booajwol.html

[H03] 主动抛出异常
来源：http://www.aibaodan.cn/163vpvjolmh.html

Py:   raise ValueError("错误信息")
来源：http://www.xuanzx.com/163yxghjwpf.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.aibaodan.cn/163jkuypmxk.html

JS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163cirmdpuv.html

TS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163adgocgod.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.aibaodan.cn/163gfzaxiqk.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.aibaodan.cn/163cpnncepu.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.sxryk.cn/163mxtasecc.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.aibaodan.cn/163xwgfvygi.html

[H04] 自定义异常类型
来源：http://www.xuanzx.com/163zfggpzdy.html

Py:   class MyError(Exception): pass
来源：http://www.xuanzx.com/163wwswgrkn.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.sxryk.cn/163rlkfdcvw.html

JS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163dscdergw.html

TS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163iufphqlh.html

Java: class MyException extends RuntimeException {}
来源：http://www.xuanzx.com/163ihrlutiv.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.aibaodan.cn/163zvqjzwmj.html

Ruby: class MyError < StandardError; end
来源：http://www.xuanzx.com/163nsachtjm.html

C#:   class MyException : Exception {}
来源：http://www.aibaodan.cn/163vrxmxxni.html

[H05] 捕获特定类型
来源：http://www.aibaodan.cn/163alwjzmne.html

Py:   except ValueError as e:
来源：http://www.sxryk.cn/163rdynhfxf.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.aibaodan.cn/163kxrcsqta.html

JS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163jlfdxiuu.html

TS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163ucrsviee.html

Java: catch (IOException | SQLException e) {}
来源：http://www.aibaodan.cn/163fygelhbd.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.sxryk.cn/163sqipkixs.html

Ruby: rescue ArgumentError => e
来源：http://www.sxryk.cn/163rvasqres.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.xuanzx.com/163ahvskrlf.html

[H06] 可选值 / 空值安全访问
来源：http://www.xuanzx.com/163prvvfozw.html

Py:   value = d.get("k") or default
来源：http://www.sxryk.cn/163gosqcvnm.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.xuanzx.com/163ocjcaypr.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163sfpglcdk.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163gccsknih.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.sxryk.cn/163ngrzfqka.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.xuanzx.com/163hfhbtjoh.html

Ruby: d&.dig(:a, :b)
来源：http://www.sxryk.cn/163orxnpmzf.html

C#:   obj?.A?.B ?? default
来源：http://www.xuanzx.com/163ljvdobyw.html

[H07] 断言
来源：http://www.sxryk.cn/163kuimsqok.html

Py:   assert x > 0, "必须为正"
来源：http://www.aibaodan.cn/163ywqrbazo.html

PHP:  assert($x > 0);
来源：http://www.sxryk.cn/163ywmzazbs.html

JS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163mgflzhln.html

TS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163fchzxijx.html

Java: assert x > 0 : "必须为正";
来源：http://www.xuanzx.com/163njmrvenl.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.sxryk.cn/163xvyxcexl.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.aibaodan.cn/163dhkutktu.html

C#:   Debug.Assert(x > 0);
来源：http://www.aibaodan.cn/163slfkrmua.html

[H08] 获取错误信息与堆栈
来源：http://www.sxryk.cn/163fmtwmxsb.html

Py:   str(e);  traceback.format_exc()
来源：http://www.xuanzx.com/163oexlztlu.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.aibaodan.cn/163weutxqvs.html

JS:   e.message;  e.stack
来源：http://www.sxryk.cn/163roqyfhbo.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.sxryk.cn/163krrtdbli.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.xuanzx.com/163jodzhgsf.html

Go:   err.Error()
来源：http://www.sxryk.cn/163zspriosy.html

Ruby: e.message;  e.backtrace
来源：http://www.sxryk.cn/163ynewvjdb.html

C#:   e.Message;  e.StackTrace
来源：http://www.xuanzx.com/163rdrahfjx.html

[H09] 带错误码的异常
来源：http://www.xuanzx.com/163ddggeder.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.sxryk.cn/163asmqlefo.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.aibaodan.cn/163kaszmqdr.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.aibaodan.cn/163jgzbkmvj.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.xuanzx.com/163zcdxurqf.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.xuanzx.com/163ckeouxpf.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.xuanzx.com/163ouuhpemp.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.sxryk.cn/163urctbqbg.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.sxryk.cn/163ojldqjtx.html

[H10] 资源自动释放
来源：http://www.sxryk.cn/163zwbckxrd.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.aibaodan.cn/163yrtbzypx.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.xuanzx.com/163pjzxxhzc.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163nmyxnxcs.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163epwxunqf.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.sxryk.cn/163ttdfsdde.html

Go:   defer f.Close()
来源：http://www.sxryk.cn/163vkogpxey.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.aibaodan.cn/163zmoqaeip.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.sxryk.cn/163enkrhdje.html

================================================================================
来源：http://www.xuanzx.com/163nqfjlzlo.html

I. 正则表达式
来源：http://www.sxryk.cn/163hhglyyaz.html

================================================================================
来源：http://www.sxryk.cn/163qcegstrd.html

[I01] 判断是否匹配
来源：http://www.xuanzx.com/163mymdgoee.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.aibaodan.cn/163eqztarbu.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.aibaodan.cn/163dzsrvaiy.html

JS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163qlyritul.html

TS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163cqfmfquc.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.sxryk.cn/163mmakvobj.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.sxryk.cn/163fzkkfuwd.html

Ruby: s.match?(/\d+/)
来源：http://www.aibaodan.cn/163cnrsrzws.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.sxryk.cn/163lrzizryf.html

[I02] 提取所有匹配
来源：http://www.sxryk.cn/163gdirnhlj.html

Py:   re.findall(r"\d+", s)
来源：http://www.aibaodan.cn/163jxhkhnlr.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.xuanzx.com/163rxpbzekh.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.sxryk.cn/163kdddnenk.html

TS:   s.match(/\d+/g)
来源：http://www.aibaodan.cn/163usvjutao.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.aibaodan.cn/163bmsahunh.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.aibaodan.cn/163ovpanqac.html

Ruby: s.scan(/\d+/)
来源：http://www.sxryk.cn/163qjnokdbh.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.aibaodan.cn/163rojqsbgs.html

[I03] 提取捕获分组
来源：http://www.xuanzx.com/163hpehbybr.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.sxryk.cn/163cergwnwv.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.xuanzx.com/163jzujcuha.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.aibaodan.cn/163ibrdrglp.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.sxryk.cn/163mdcssixt.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.aibaodan.cn/163mbatdked.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.xuanzx.com/163jvyoxhji.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.xuanzx.com/163djscccso.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.xuanzx.com/163tjxsuvma.html

[I04] 正则替换
来源：http://www.aibaodan.cn/163ahrjqjbi.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.xuanzx.com/163fqitbmtd.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163cqktciaf.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163zwajsion.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163nwtiufen.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.aibaodan.cn/163qdifburf.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.sxryk.cn/163nmvozpev.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.xuanzx.com/163tomejoon.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.aibaodan.cn/163frltlxyd.html

[I05] 按正则拆分
来源：http://www.sxryk.cn/163aoaydbjw.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.sxryk.cn/163uzongoeq.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.xuanzx.com/163fntkpjpi.html

JS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163zuvkjhkf.html

TS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163tsljxsqr.html

Java: s.split("\\s*,\\s*")
来源：http://www.xuanzx.com/163uurglhtn.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.xuanzx.com/163myfqvwud.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163gvwqxxsb.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.xuanzx.com/163qayurqrz.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.sxryk.cn/163tfdjnckx.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163gtdhdyzt.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.sxryk.cn/163ayqedrpa.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163zjzvyukj.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163atnjuwpi.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.aibaodan.cn/163ubdgcxvd.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.aibaodan.cn/163xajjvuyi.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.sxryk.cn/163cznitzqf.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163nlfmntov.html

[I07] 忽略大小写与多行模式
来源：http://www.aibaodan.cn/163rybsxswv.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.xuanzx.com/163qyyfhrob.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.sxryk.cn/163tohgjyvi.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.aibaodan.cn/163rxolefbb.html

TS:   /error/gim
来源：http://www.xuanzx.com/163gmggujdm.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.sxryk.cn/163wzquvxeq.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.aibaodan.cn/163ciwztdkd.html

Ruby: s.scan(/error/i)
来源：http://www.xuanzx.com/163dtimdnfl.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.sxryk.cn/163mfxdtnmt.html

[I08] 贪婪与非贪婪匹配
来源：http://www.xuanzx.com/163euyhpdwl.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.aibaodan.cn/163zgcwuavx.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.aibaodan.cn/163vunevthy.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163plpdxrao.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163jdywaqhb.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.aibaodan.cn/163zfryqcmx.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.xuanzx.com/163oijykqvq.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.sxryk.cn/163jpfpvwik.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.xuanzx.com/163rdebecyk.html

================================================================================
来源：http://www.sxryk.cn/163bkoxoocp.html

J. 日期与时间
来源：http://www.sxryk.cn/163sahmbxse.html

================================================================================
来源：http://www.aibaodan.cn/163ziykoped.html

[J01] 获取当前时间
来源：http://www.aibaodan.cn/163dmudbbso.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.xuanzx.com/163bazqdwho.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163yvnjphyi.html

JS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163gkfqedep.html

TS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163cbdulpxu.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.aibaodan.cn/163jtuxmptd.html

Go:   time.Now()
来源：http://www.xuanzx.com/163cberagao.html

Ruby: Time.now
来源：http://www.xuanzx.com/163zfoejwvx.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.xuanzx.com/163xftawpmx.html

[J02] 格式化输出
来源：http://www.xuanzx.com/163oitpbyst.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163vrrtitea.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163yaycpnin.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.xuanzx.com/163lvqkapkd.html

TS:   d.toISOString()
来源：http://www.sxryk.cn/163nvcwcryv.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.xuanzx.com/163xvpsgzzk.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.xuanzx.com/163jgiwetfr.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163hktjtgof.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.xuanzx.com/163dvotamzq.html

[J03] 字符串解析为日期
来源：http://www.aibaodan.cn/163kegrpgtp.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.xuanzx.com/163zqzcelxj.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.sxryk.cn/163ycfjvfyu.html

JS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163ciyangdc.html

TS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163cxfqacds.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.xuanzx.com/163nhiiwxbv.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.aibaodan.cn/163rxygdrlg.html

Ruby: Date.parse("2024-01-02")
来源：http://www.xuanzx.com/163pfyfunew.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.aibaodan.cn/163fjnwtcau.html

[J04] 时间戳与日期互转
来源：http://www.xuanzx.com/163wjafouht.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.xuanzx.com/163fusklwig.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.sxryk.cn/163dqlfhxco.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.sxryk.cn/163tqjbzsew.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.xuanzx.com/163lqnunxku.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.aibaodan.cn/163jsutlnlf.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.aibaodan.cn/163bwmunfme.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.xuanzx.com/163fhnuvtdr.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.aibaodan.cn/163vcflapeg.html

[J05] 时间加减（加 7 天）
来源：http://www.sxryk.cn/163hlimtcsk.html

Py:   now + timedelta(days=7)
来源：http://www.xuanzx.com/163sqknmgpu.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.aibaodan.cn/163prfwohfi.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163efneidnp.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163vyiegcdg.html

Java: LocalDate.now().plusDays(7)
来源：http://www.xuanzx.com/163jfifnalw.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.xuanzx.com/163hpaxfmgm.html

Ruby: Time.now + 7 * 86400
来源：http://www.sxryk.cn/163luodfsef.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.xuanzx.com/163eixxhpcw.html

[J06] 计算两时间之差
来源：http://www.xuanzx.com/163excqpeiz.html

Py:   (end - start).total_seconds()
来源：http://www.sxryk.cn/163iosidexx.html

PHP:  $end->diff($start)->days;
来源：http://www.xuanzx.com/163jdhxisco.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.xuanzx.com/163uquttsww.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.aibaodan.cn/163nyktnsfl.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.xuanzx.com/163xwpmsykm.html

Go:   end.Sub(start).Hours()
来源：http://www.aibaodan.cn/163pgemdozv.html

Ruby: end - start                 # 返回秒数
来源：http://www.aibaodan.cn/163uyncbusy.html

C#:   (end - start).TotalSeconds
来源：http://www.xuanzx.com/163mcnaucxz.html

[J07] 比较两个日期
来源：http://www.xuanzx.com/163ftycezey.html

Py:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163mhiytqvh.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.aibaodan.cn/163krluhfzm.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163scynvfei.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163snyggfvh.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.sxryk.cn/163vfczphto.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.xuanzx.com/163klcjbjlt.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163hhmdgfgu.html

C#:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163wowxcdyp.html

[J08] 提取年月日与星期
来源：http://www.xuanzx.com/163nomkjioy.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.aibaodan.cn/163hbbboxma.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.xuanzx.com/163pznrbjre.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.sxryk.cn/163vqkpnnke.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.aibaodan.cn/163ggbwjmwj.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.aibaodan.cn/163fkjjjgmh.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.xuanzx.com/163csadkibo.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.sxryk.cn/163qknwgeqi.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.aibaodan.cn/163hpkdpuqm.html

[J09] 时区处理
来源：http://www.aibaodan.cn/163mopestol.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.aibaodan.cn/163ulyotfxe.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.sxryk.cn/163tkvjlbxh.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163djmwnnta.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163iedjkmkl.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.sxryk.cn/163uhfgwgyh.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.xuanzx.com/163itvetnpz.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.sxryk.cn/163tehpwzch.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.aibaodan.cn/163nbcfhyfj.html

[J10] 取今天 / 本月第一天
来源：http://www.xuanzx.com/163thdltzbh.html


<!-- 参考信息 -->