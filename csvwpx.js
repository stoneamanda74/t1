外链999!wailian999！

Ruby: attr_accessor :name
来源：http://www.xuanzx.com/163ehaydzmu.html

C#:   public string Name { get; set; }
来源：http://www.aibaodan.cn/163bazrrdik.html

[G12] 对象转字符串
来源：http://www.xuanzx.com/163erfqprsu.html

Py:   def __str__(self): return self.name
来源：http://www.aibaodan.cn/163hgyekddz.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.aibaodan.cn/163rhzwsgeu.html

JS:   toString() { return this.name; }
来源：http://www.xuanzx.com/163ektlcttr.html

TS:   toString(): string { return this.name; }
来源：http://www.aibaodan.cn/163vyvzsprr.html

Java: @Override public String toString() { return name; }
来源：http://www.sxryk.cn/163umtbgepq.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.xuanzx.com/163huuxjdad.html

Ruby: def to_s; @name; end
来源：http://www.sxryk.cn/163ycaeaoin.html

C#:   public override string ToString() => Name;
来源：http://www.sxryk.cn/163qzrlspqo.html

[G13] 判断对象类型
来源：http://www.xuanzx.com/163pnxyreis.html

Py:   isinstance(u, User)
来源：http://www.xuanzx.com/163cqcxebtg.html

PHP:  $u instanceof User
来源：http://www.sxryk.cn/163ruhmgnkv.html

JS:   u instanceof User
来源：http://www.aibaodan.cn/163bkfnqtpi.html

TS:   u instanceof User
来源：http://www.aibaodan.cn/163qtarkdih.html

Java: u instanceof User
来源：http://www.xuanzx.com/163ojatlyed.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.aibaodan.cn/163ltwfdoaw.html

Ruby: u.is_a?(User)
来源：http://www.xuanzx.com/163jwqsoprh.html

C#:   u is User
来源：http://www.aibaodan.cn/163pgagvhme.html

[G14] 数据类 / record
来源：http://www.sxryk.cn/163euvkktwz.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.xuanzx.com/163eeakgiqe.html

PHP:  // 用 readonly 属性模拟
来源：http://www.sxryk.cn/163lwljeilj.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.xuanzx.com/163ujngqgno.html

TS:   type User = { name: string; age: number };
来源：http://www.aibaodan.cn/163eopzyarx.html

Java: record User(String name, int age) {}
来源：http://www.aibaodan.cn/163rxzaaanm.html

Go:   type User struct { Name string; Age int }
来源：http://www.xuanzx.com/163ihfbnssy.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.aibaodan.cn/163mzvqksre.html

C#:   record User(string Name, int Age);
来源：http://www.aibaodan.cn/163bkfkvckh.html

[G15] 枚举
来源：http://www.xuanzx.com/163ihcixugz.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.sxryk.cn/163fuxukppa.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.aibaodan.cn/163xaegrizq.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.sxryk.cn/163bpovgshj.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163krjmwtqi.html

Java: enum Color { RED, GREEN }
来源：http://www.sxryk.cn/163gwjkhkyg.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.aibaodan.cn/163gbggpxiw.html

Ruby: Color = %i[red green].freeze
来源：http://www.xuanzx.com/163sfnjqfos.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163xmhampvi.html

[G16] 对象转数组 / 字典
来源：http://www.sxryk.cn/163hruzrgfq.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.aibaodan.cn/163ylwniiok.html

PHP:  get_object_vars($obj);
来源：http://www.xuanzx.com/163gzkafads.html

JS:   Object.entries(obj)
来源：http://www.xuanzx.com/163jifvbuis.html

TS:   Object.entries(obj)
来源：http://www.sxryk.cn/163jhyjqtcn.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.aibaodan.cn/163nuqbenii.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.aibaodan.cn/163qpimoewk.html

Ruby: obj.instance_variables
来源：http://www.sxryk.cn/163ipsnjdsz.html

C#:   // 用反射或 System.Text.Json
来源：http://www.xuanzx.com/163txymgsgi.html

================================================================================
来源：http://www.sxryk.cn/163vosdjhat.html

H. 异常与错误处理
来源：http://www.aibaodan.cn/163pdcesbcn.html

================================================================================
来源：http://www.aibaodan.cn/163jpnymhfy.html

[H01] try / catch 基础
来源：http://www.aibaodan.cn/163wpwcfpmg.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.sxryk.cn/163rcetdhaa.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.xuanzx.com/163ymsenjwg.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163bdljzvqd.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.aibaodan.cn/163zutthmrl.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.aibaodan.cn/163whavkshd.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.sxryk.cn/163udojexeq.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.sxryk.cn/163cboayyyy.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.xuanzx.com/163kaediiwp.html

[H02] finally / ensure 收尾
来源：http://www.aibaodan.cn/163pyzxmkfh.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.xuanzx.com/163nexbdgqk.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163elhibkzq.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163nfiimrqx.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163nzitbzgi.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163tjcbelxw.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.sxryk.cn/163hjlnktsh.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.sxryk.cn/163vcbpadvc.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.xuanzx.com/163npbdrehc.html

[H03] 主动抛出异常
来源：http://www.aibaodan.cn/163rqyaisfj.html

Py:   raise ValueError("错误信息")
来源：http://www.xuanzx.com/163cyaizfdx.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.sxryk.cn/163zvhsanic.html

JS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163xitqmsty.html

TS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163gzacnocd.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.xuanzx.com/163cmlycefd.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.xuanzx.com/163qrejfejq.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.aibaodan.cn/163hppyfxov.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.sxryk.cn/163nwjagkkt.html

[H04] 自定义异常类型
来源：http://www.aibaodan.cn/163uduksxgq.html

Py:   class MyError(Exception): pass
来源：http://www.xuanzx.com/163silmfkoh.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.aibaodan.cn/163hdujuxrq.html

JS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163gcrbsktw.html

TS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163avafgsap.html

Java: class MyException extends RuntimeException {}
来源：http://www.xuanzx.com/163isrprkjn.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.aibaodan.cn/163qthyyayn.html

Ruby: class MyError < StandardError; end
来源：http://www.xuanzx.com/163zczahbfu.html

C#:   class MyException : Exception {}
来源：http://www.xuanzx.com/163lwgpaljd.html

[H05] 捕获特定类型
来源：http://www.sxryk.cn/163kjuybtgb.html

Py:   except ValueError as e:
来源：http://www.aibaodan.cn/163jdqdttow.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.aibaodan.cn/163tykeiwnt.html

JS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163szrgtqdc.html

TS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163qdgeybdj.html

Java: catch (IOException | SQLException e) {}
来源：http://www.aibaodan.cn/163hbuoswys.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.sxryk.cn/163cnywisxm.html

Ruby: rescue ArgumentError => e
来源：http://www.sxryk.cn/163noiebwhz.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.xuanzx.com/163vstojdsj.html

[H06] 可选值 / 空值安全访问
来源：http://www.aibaodan.cn/163rkaranot.html

Py:   value = d.get("k") or default
来源：http://www.sxryk.cn/163nzjejnxv.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.sxryk.cn/163tvtvyfvw.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163nmbegenc.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163qdxhpuyn.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.sxryk.cn/163whldeuva.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.xuanzx.com/163srseiryk.html

Ruby: d&.dig(:a, :b)
来源：http://www.aibaodan.cn/163dfeysxgc.html

C#:   obj?.A?.B ?? default
来源：http://www.sxryk.cn/163abcfsfln.html

[H07] 断言
来源：http://www.xuanzx.com/163ntexuewl.html

Py:   assert x > 0, "必须为正"
来源：http://www.sxryk.cn/163vcwmzhhn.html

PHP:  assert($x > 0);
来源：http://www.aibaodan.cn/163aysdmozi.html

JS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163ufvfknmy.html

TS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163kmzmnxow.html

Java: assert x > 0 : "必须为正";
来源：http://www.aibaodan.cn/163jpepyatm.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.aibaodan.cn/163rzevexav.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.xuanzx.com/163ncopfzfa.html

C#:   Debug.Assert(x > 0);
来源：http://www.xuanzx.com/163gfzpwbup.html

[H08] 获取错误信息与堆栈
来源：http://www.xuanzx.com/163sqfyvlmv.html

Py:   str(e);  traceback.format_exc()
来源：http://www.sxryk.cn/163wvyzznlh.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.sxryk.cn/163cfiplsvx.html

JS:   e.message;  e.stack
来源：http://www.sxryk.cn/163trxlhsgi.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.sxryk.cn/163qfhxtulm.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.xuanzx.com/163ltdbmxlh.html

Go:   err.Error()
来源：http://www.aibaodan.cn/163gumydqdl.html

Ruby: e.message;  e.backtrace
来源：http://www.xuanzx.com/163rikucwmd.html

C#:   e.Message;  e.StackTrace
来源：http://www.aibaodan.cn/163wctkyabb.html

[H09] 带错误码的异常
来源：http://www.aibaodan.cn/163bxkhiwyc.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.sxryk.cn/163prirfuyv.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.xuanzx.com/163hcggxcvu.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.sxryk.cn/163uuefbuiw.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.sxryk.cn/163lttutszb.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.aibaodan.cn/163wliqkhwf.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.sxryk.cn/163isllwhmk.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.xuanzx.com/163ldqokuql.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.xuanzx.com/163vdbatfyq.html

[H10] 资源自动释放
来源：http://www.sxryk.cn/163lrieugas.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.sxryk.cn/163qhvcmlqc.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.sxryk.cn/163kuqekblg.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163mpnavxpu.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163jbbnylgr.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.sxryk.cn/163flbshgxb.html

Go:   defer f.Close()
来源：http://www.sxryk.cn/163nuusdwnj.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.xuanzx.com/163cdbdiktv.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.xuanzx.com/163ttvkmmbs.html

================================================================================
来源：http://www.sxryk.cn/163rkunuulz.html

I. 正则表达式
来源：http://www.sxryk.cn/163wppdyaok.html

================================================================================
来源：http://www.sxryk.cn/163bokszydm.html

[I01] 判断是否匹配
来源：http://www.xuanzx.com/163idwlqmex.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.xuanzx.com/163fpriyjpl.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.aibaodan.cn/163ulsbiezc.html

JS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163xylockjd.html

TS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163wcwxfwhe.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.xuanzx.com/163kvvoihjk.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.xuanzx.com/163udfwpumu.html

Ruby: s.match?(/\d+/)
来源：http://www.aibaodan.cn/163nueswdxr.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.xuanzx.com/163cfsatfyc.html

[I02] 提取所有匹配
来源：http://www.xuanzx.com/163esfnadui.html

Py:   re.findall(r"\d+", s)
来源：http://www.aibaodan.cn/163wnsfptdd.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.sxryk.cn/163wgfjkfev.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.aibaodan.cn/163stlimwdr.html

TS:   s.match(/\d+/g)
来源：http://www.sxryk.cn/163qglojyof.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.sxryk.cn/163ldcjyzow.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.aibaodan.cn/163pfrfbhzk.html

Ruby: s.scan(/\d+/)
来源：http://www.sxryk.cn/163sqhuxkdq.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.sxryk.cn/163cclyduhs.html

[I03] 提取捕获分组
来源：http://www.aibaodan.cn/163njibbjpe.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.sxryk.cn/163nancgnkg.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.aibaodan.cn/163fclmkfhm.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.sxryk.cn/163phoqnwdh.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.sxryk.cn/163uiuifsof.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.sxryk.cn/163wmftlhza.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.aibaodan.cn/163pqoxjdka.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.sxryk.cn/163oqmmivrb.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.sxryk.cn/163dhzszpyf.html

[I04] 正则替换
来源：http://www.xuanzx.com/163aiawvzjp.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.sxryk.cn/163zndgxgpl.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163wdjqxatn.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163kxzteybr.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163slplfdku.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.aibaodan.cn/163bruncqzb.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.aibaodan.cn/163qjhemejb.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.xuanzx.com/163mgnnpsmf.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.aibaodan.cn/163femxtvsj.html

[I05] 按正则拆分
来源：http://www.xuanzx.com/163ysvtlhnw.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.aibaodan.cn/163upcxykvo.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.aibaodan.cn/163xskeorbm.html

JS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163nxxftdpr.html

TS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163cmchfjyh.html

Java: s.split("\\s*,\\s*")
来源：http://www.aibaodan.cn/163kwtynxwf.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.aibaodan.cn/163hzhrnlpf.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163axkylzsn.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.aibaodan.cn/163fsbyyxyo.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.sxryk.cn/163syftkbdv.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163srbiuklr.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.aibaodan.cn/163enbaclqf.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163bcohqcdy.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163zpwazhhc.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.sxryk.cn/163vwruwumo.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.sxryk.cn/163dsbaaybp.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.sxryk.cn/163fnbqalin.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163okjmphht.html

[I07] 忽略大小写与多行模式
来源：http://www.sxryk.cn/163sabckypy.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.sxryk.cn/163swjwehli.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.xuanzx.com/163kbhrexdm.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.sxryk.cn/163blnvmfeg.html

TS:   /error/gim
来源：http://www.xuanzx.com/163culvcdmx.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.xuanzx.com/163egsqgrqq.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.xuanzx.com/163elafherp.html

Ruby: s.scan(/error/i)
来源：http://www.aibaodan.cn/163qtvukonb.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.aibaodan.cn/163uvaoaemj.html

[I08] 贪婪与非贪婪匹配
来源：http://www.xuanzx.com/163qcgqqxyn.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.xuanzx.com/163ckjbzzqt.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.sxryk.cn/163dpzxvopb.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163wootyjpv.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163ncnnikfd.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.aibaodan.cn/163ngkixold.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.aibaodan.cn/163iufrzmsr.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.xuanzx.com/163pdarlbxo.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.xuanzx.com/163kluftaxu.html

================================================================================
来源：http://www.sxryk.cn/163yoqntoxp.html

J. 日期与时间
来源：http://www.aibaodan.cn/163wgbqifbj.html

================================================================================
来源：http://www.xuanzx.com/163qoxbstti.html

[J01] 获取当前时间
来源：http://www.sxryk.cn/163lcdnjkyo.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.aibaodan.cn/163guhdifft.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163pkkrkepg.html

JS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163kanzjlif.html

TS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163hxjuayzm.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.sxryk.cn/163ghbfcxmz.html

Go:   time.Now()
来源：http://www.aibaodan.cn/163gbvcesxx.html

Ruby: Time.now
来源：http://www.sxryk.cn/163yawkwouo.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.aibaodan.cn/163paiyistv.html

[J02] 格式化输出
来源：http://www.xuanzx.com/163qobkhwlh.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163bkflafak.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163unybjnuc.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.aibaodan.cn/163afmcfeyc.html

TS:   d.toISOString()
来源：http://www.xuanzx.com/163qwjahcrx.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.xuanzx.com/163gmaxjshh.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.aibaodan.cn/163domoferj.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163khzsqanf.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.aibaodan.cn/163pseikorq.html

[J03] 字符串解析为日期
来源：http://www.xuanzx.com/163sqdlgjke.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.aibaodan.cn/163ohqcdqhl.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.xuanzx.com/163izujgjwf.html

JS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163rekkmrpm.html

TS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163uyopwyrl.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.aibaodan.cn/163vlenlrpi.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.aibaodan.cn/163hstrwuol.html

Ruby: Date.parse("2024-01-02")
来源：http://www.aibaodan.cn/163hobhrxbi.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.aibaodan.cn/163dzuifrmn.html

[J04] 时间戳与日期互转
来源：http://www.sxryk.cn/163qatzfozo.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.aibaodan.cn/163qxnaaeay.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.aibaodan.cn/163wmqusvxd.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.xuanzx.com/163mroxgklu.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.xuanzx.com/163nvxsgbxt.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.sxryk.cn/163uoxkhfgx.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.sxryk.cn/163gjcqqxzs.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.aibaodan.cn/163vtmewkqu.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.xuanzx.com/163pqfvmrxd.html

[J05] 时间加减（加 7 天）
来源：http://www.xuanzx.com/163jzoyukbo.html

Py:   now + timedelta(days=7)
来源：http://www.sxryk.cn/163gmsswkch.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.sxryk.cn/163udqyfjan.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163lwxwojin.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163mmhyupgo.html

Java: LocalDate.now().plusDays(7)
来源：http://www.sxryk.cn/163kajajnrb.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.sxryk.cn/163wezfopfg.html

Ruby: Time.now + 7 * 86400
来源：http://www.xuanzx.com/163nbiehknn.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.sxryk.cn/163cmkvbdcw.html

[J06] 计算两时间之差
来源：http://www.sxryk.cn/163yfwimguw.html

Py:   (end - start).total_seconds()
来源：http://www.sxryk.cn/163jgkzlrvv.html

PHP:  $end->diff($start)->days;
来源：http://www.aibaodan.cn/163sjekmqqr.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.aibaodan.cn/163gbibtvwp.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.sxryk.cn/163xecbaopg.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.xuanzx.com/163zoifmdqp.html

Go:   end.Sub(start).Hours()
来源：http://www.sxryk.cn/163xmwmxcee.html

Ruby: end - start                 # 返回秒数
来源：http://www.sxryk.cn/163kciqbsrc.html

C#:   (end - start).TotalSeconds
来源：http://www.aibaodan.cn/163ienprhht.html

[J07] 比较两个日期
来源：http://www.xuanzx.com/163gddjhptd.html

Py:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163qwmylson.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.xuanzx.com/163brxzbfaq.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163ckbechcf.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163lbwbwvvn.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.aibaodan.cn/163srpilqym.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.xuanzx.com/163yqzarhrq.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163htmkbeqf.html

C#:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163splettvw.html

[J08] 提取年月日与星期
来源：http://www.sxryk.cn/163ktkrpdut.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.xuanzx.com/163aducrcbn.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.xuanzx.com/163nqdxlfnj.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.sxryk.cn/163sthdrklr.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.xuanzx.com/163rjdbsdxr.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.aibaodan.cn/163qksefgtw.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.aibaodan.cn/163vewruybn.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.aibaodan.cn/163stexyrhn.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.sxryk.cn/163jyiuqcuu.html

[J09] 时区处理
来源：http://www.xuanzx.com/163zoirjazq.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.sxryk.cn/163zouebgmq.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.sxryk.cn/163dpkgprnc.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163agsznfkw.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163edgzsnfq.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.aibaodan.cn/163tabunenv.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.xuanzx.com/163zpvfgkfc.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.sxryk.cn/163ijqrxbdp.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.sxryk.cn/163bpqbrnzx.html

[J10] 取今天 / 本月第一天
来源：http://www.sxryk.cn/163nxqyeqyv.html


<!-- 参考信息 -->