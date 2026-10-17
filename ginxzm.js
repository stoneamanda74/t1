外链999!wailian999！

Java: u instanceof User
来源：http://www.sxryk.cn/163cuuzagzb.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.aibaodan.cn/163hyajxpvq.html

Ruby: u.is_a?(User)
来源：http://www.aibaodan.cn/163foyqzwqb.html

C#:   u is User
来源：http://www.aibaodan.cn/163jkjcuvxq.html

[G14] 数据类 / record
来源：http://www.sxryk.cn/163whdbbdtt.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.sxryk.cn/163tjptazha.html

PHP:  // 用 readonly 属性模拟
来源：http://www.aibaodan.cn/163aeaqurpn.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.xuanzx.com/163shciqugi.html

TS:   type User = { name: string; age: number };
来源：http://www.xuanzx.com/163ytywzwoc.html

Java: record User(String name, int age) {}
来源：http://www.xuanzx.com/163oiyzkaoh.html

Go:   type User struct { Name string; Age int }
来源：http://www.aibaodan.cn/163mrazhleo.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.aibaodan.cn/163ncagilpk.html

C#:   record User(string Name, int Age);
来源：http://www.aibaodan.cn/163zqvajygy.html

[G15] 枚举
来源：http://www.xuanzx.com/163wlrsvchl.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.sxryk.cn/163ffdbnyxx.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.sxryk.cn/163fbxaxsjx.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.aibaodan.cn/163atazdujv.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163mrsldlno.html

Java: enum Color { RED, GREEN }
来源：http://www.aibaodan.cn/163ummhkqad.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.sxryk.cn/163qdsxhyjb.html

Ruby: Color = %i[red green].freeze
来源：http://www.sxryk.cn/163bvvccudw.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163ffnabrln.html

[G16] 对象转数组 / 字典
来源：http://www.aibaodan.cn/163fsfffyhv.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.sxryk.cn/163uczmwclr.html

PHP:  get_object_vars($obj);
来源：http://www.aibaodan.cn/163wnidvakg.html

JS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163tzecicmr.html

TS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163lchxntqv.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.aibaodan.cn/163bshdadbi.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.sxryk.cn/163ccyyixiv.html

Ruby: obj.instance_variables
来源：http://www.sxryk.cn/163ljhjgdlp.html

C#:   // 用反射或 System.Text.Json
来源：http://www.aibaodan.cn/163ccgdnmpg.html

================================================================================
来源：http://www.sxryk.cn/163lcktcdsx.html

H. 异常与错误处理
来源：http://www.sxryk.cn/163lejplbvp.html

================================================================================
来源：http://www.aibaodan.cn/163tmqindoz.html

[H01] try / catch 基础
来源：http://www.aibaodan.cn/163kpqhayvs.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.aibaodan.cn/163lpgygfpx.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.aibaodan.cn/163sobzudiz.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163hxdzgxpf.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.xuanzx.com/163jexppouz.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.sxryk.cn/163pfllauja.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.sxryk.cn/163qkdyulkb.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.xuanzx.com/163bcdmjlgr.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.xuanzx.com/163dfswbyfw.html

[H02] finally / ensure 收尾
来源：http://www.aibaodan.cn/163bazrfnpg.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.sxryk.cn/163msnusqph.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163tekciewd.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163yksipiju.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163xpswjhvh.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163llfzjwpq.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.aibaodan.cn/163pzzhokhx.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.sxryk.cn/163zsukbqsq.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.sxryk.cn/163wxjghsjb.html

[H03] 主动抛出异常
来源：http://www.sxryk.cn/163cilmxjef.html

Py:   raise ValueError("错误信息")
来源：http://www.xuanzx.com/163wfsjzfwy.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.aibaodan.cn/163ichkdszn.html

JS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163arhflacg.html

TS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163fcgipmau.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.aibaodan.cn/163hzuhvgdh.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.xuanzx.com/163ihfwolzq.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.xuanzx.com/163ytivdbzp.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.aibaodan.cn/163wqxqqzke.html

[H04] 自定义异常类型
来源：http://www.aibaodan.cn/163kytyfgyb.html

Py:   class MyError(Exception): pass
来源：http://www.xuanzx.com/163llggmswr.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.xuanzx.com/163jixprnrw.html

JS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163livkfwle.html

TS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163etlgvumr.html

Java: class MyException extends RuntimeException {}
来源：http://www.aibaodan.cn/163pchuvafq.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.aibaodan.cn/163ihlmeedn.html

Ruby: class MyError < StandardError; end
来源：http://www.aibaodan.cn/163hxhdqjyf.html

C#:   class MyException : Exception {}
来源：http://www.aibaodan.cn/163kuxpahne.html

[H05] 捕获特定类型
来源：http://www.sxryk.cn/163epvvvjeg.html

Py:   except ValueError as e:
来源：http://www.sxryk.cn/163ldjdkkti.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.aibaodan.cn/163czjwsfno.html

JS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163ajdzzcdq.html

TS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163wmgknuay.html

Java: catch (IOException | SQLException e) {}
来源：http://www.xuanzx.com/163svhbepnz.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.xuanzx.com/163nfjuudew.html

Ruby: rescue ArgumentError => e
来源：http://www.xuanzx.com/163qexyxonn.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.sxryk.cn/163epewujjn.html

[H06] 可选值 / 空值安全访问
来源：http://www.aibaodan.cn/163eqbijfwj.html

Py:   value = d.get("k") or default
来源：http://www.sxryk.cn/163odpaufbr.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.xuanzx.com/163feejjvue.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163rwvrjlcm.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163sxyeripj.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.sxryk.cn/163twlrakri.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.sxryk.cn/163oykyhnqp.html

Ruby: d&.dig(:a, :b)
来源：http://www.aibaodan.cn/163kojgfjws.html

C#:   obj?.A?.B ?? default
来源：http://www.aibaodan.cn/163irvbrpxh.html

[H07] 断言
来源：http://www.aibaodan.cn/163tfxjbmgj.html

Py:   assert x > 0, "必须为正"
来源：http://www.xuanzx.com/163cinwhspf.html

PHP:  assert($x > 0);
来源：http://www.xuanzx.com/163ameduxvm.html

JS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163cqqoasgb.html

TS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163bfhquesb.html

Java: assert x > 0 : "必须为正";
来源：http://www.xuanzx.com/163qvrwhggq.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.sxryk.cn/163gdkrjext.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.sxryk.cn/163zqxlvskg.html

C#:   Debug.Assert(x > 0);
来源：http://www.xuanzx.com/163molmqagg.html

[H08] 获取错误信息与堆栈
来源：http://www.aibaodan.cn/163lcstdrjq.html

Py:   str(e);  traceback.format_exc()
来源：http://www.aibaodan.cn/163hvaybamg.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.sxryk.cn/163gozgchjs.html

JS:   e.message;  e.stack
来源：http://www.xuanzx.com/163ehzeejiw.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.sxryk.cn/163tsvwaumt.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.aibaodan.cn/163yjbbrcwj.html

Go:   err.Error()
来源：http://www.aibaodan.cn/163cfmwtqvv.html

Ruby: e.message;  e.backtrace
来源：http://www.aibaodan.cn/163fzbliiju.html

C#:   e.Message;  e.StackTrace
来源：http://www.aibaodan.cn/163downznse.html

[H09] 带错误码的异常
来源：http://www.xuanzx.com/163kffztwfb.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.aibaodan.cn/163vxqbeeoz.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.aibaodan.cn/163dvgjidfd.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.xuanzx.com/163uztvamsb.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.aibaodan.cn/163yxrwpdkg.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.xuanzx.com/163dtimsggr.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.sxryk.cn/163pgpducwo.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.xuanzx.com/163krzrpmqs.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.aibaodan.cn/163eqrvbbiz.html

[H10] 资源自动释放
来源：http://www.sxryk.cn/163tjxjwvsr.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.xuanzx.com/163upywrxya.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.xuanzx.com/163yazarbjj.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163cowygrhd.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163sqpfjwwr.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.sxryk.cn/163jhrxkmvs.html

Go:   defer f.Close()
来源：http://www.aibaodan.cn/163mjwfekiz.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.xuanzx.com/163cmzdndkp.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.sxryk.cn/163rqjrbytc.html

================================================================================
来源：http://www.xuanzx.com/163alviuetr.html

I. 正则表达式
来源：http://www.xuanzx.com/163qruqclrs.html

================================================================================
来源：http://www.xuanzx.com/163umzcvwbm.html

[I01] 判断是否匹配
来源：http://www.xuanzx.com/163nlrodiib.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.sxryk.cn/163dampantt.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.sxryk.cn/163fbsyxfie.html

JS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163jjzkjaqh.html

TS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163zwgwlsgq.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.xuanzx.com/163eaiqvtqu.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.sxryk.cn/163tmnzmhtb.html

Ruby: s.match?(/\d+/)
来源：http://www.aibaodan.cn/163xqruybfn.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.xuanzx.com/163usabnnyn.html

[I02] 提取所有匹配
来源：http://www.aibaodan.cn/163qvwxehdt.html

Py:   re.findall(r"\d+", s)
来源：http://www.sxryk.cn/163dzbjjymz.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.aibaodan.cn/163hngotamt.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.xuanzx.com/163vzeuwwnf.html

TS:   s.match(/\d+/g)
来源：http://www.sxryk.cn/163guqlzzew.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.sxryk.cn/163unazezkq.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.xuanzx.com/163doxddnqz.html

Ruby: s.scan(/\d+/)
来源：http://www.xuanzx.com/163ynfozodm.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.xuanzx.com/163uqdylccq.html

[I03] 提取捕获分组
来源：http://www.aibaodan.cn/163wjgrrjnk.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.xuanzx.com/163gergiozt.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.sxryk.cn/163pgdusmsd.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.aibaodan.cn/163enqmuyhh.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.xuanzx.com/163mvrxbkoj.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.xuanzx.com/163cxlowlqv.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.aibaodan.cn/163jojkesab.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.xuanzx.com/163pzeyehmt.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.sxryk.cn/163thkwffwd.html

[I04] 正则替换
来源：http://www.sxryk.cn/163mhwmobph.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.aibaodan.cn/163arapvexh.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163ndfpzrtv.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163edjcezfl.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163gwftntfy.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.sxryk.cn/163yzbgrrmt.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.sxryk.cn/163gjlvfxlj.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.sxryk.cn/163wcaxzvbk.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.aibaodan.cn/163jxwbtgfu.html

[I05] 按正则拆分
来源：http://www.sxryk.cn/163gapenklh.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.xuanzx.com/163xlnemytn.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.sxryk.cn/163hknrtfno.html

JS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163qgovuqtn.html

TS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163wdbniugj.html

Java: s.split("\\s*,\\s*")
来源：http://www.xuanzx.com/163oxicucso.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.xuanzx.com/163ckweleci.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163jmfniwqt.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.xuanzx.com/163vztokehc.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.sxryk.cn/163zxureyzr.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163blriptdt.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.xuanzx.com/163donnfpwg.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163gvwwjibp.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163ammbbgai.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.sxryk.cn/163gyaflmpm.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.xuanzx.com/163revxfgmj.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.sxryk.cn/163jhtzjmsz.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163qvvxogob.html

[I07] 忽略大小写与多行模式
来源：http://www.xuanzx.com/163tmsfprvb.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.sxryk.cn/163bsryzwbn.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.sxryk.cn/163smzrzzwm.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.xuanzx.com/163jhplgulq.html

TS:   /error/gim
来源：http://www.xuanzx.com/163ylwkrjot.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.aibaodan.cn/163rqnqrxhg.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.xuanzx.com/163prwylrry.html

Ruby: s.scan(/error/i)
来源：http://www.sxryk.cn/163orlzunwa.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.xuanzx.com/163nxpqdcrh.html

[I08] 贪婪与非贪婪匹配
来源：http://www.xuanzx.com/163tpxgolpv.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.sxryk.cn/163eucwbqqe.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.aibaodan.cn/163rbqmjnwx.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163ubjgghme.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163zevqcwrj.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.xuanzx.com/163jqdturib.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.aibaodan.cn/163vcxehxvk.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.aibaodan.cn/163lvweurjh.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.xuanzx.com/163ipiyqpcs.html

================================================================================
来源：http://www.sxryk.cn/163hblljfjb.html

J. 日期与时间
来源：http://www.xuanzx.com/163wxqictng.html

================================================================================
来源：http://www.aibaodan.cn/163lngwigde.html

[J01] 获取当前时间
来源：http://www.sxryk.cn/163wtvrawfh.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.xuanzx.com/163sapitsbx.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163wlnebqsi.html

JS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163pgnfrpgc.html

TS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163fvuwzvgx.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.sxryk.cn/163bdthxaeb.html

Go:   time.Now()
来源：http://www.xuanzx.com/163mtgdwzfj.html

Ruby: Time.now
来源：http://www.sxryk.cn/163lbvyiezt.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.xuanzx.com/163fyewuztl.html

[J02] 格式化输出
来源：http://www.xuanzx.com/163iphbtgve.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163lodhixhi.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163khrezcao.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.xuanzx.com/163lrgisqxq.html

TS:   d.toISOString()
来源：http://www.sxryk.cn/163mrjkyphw.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.aibaodan.cn/163txzyrobs.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.xuanzx.com/163jqkkgwyx.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163urvwzfen.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.sxryk.cn/163aydmoffy.html

[J03] 字符串解析为日期
来源：http://www.xuanzx.com/163vtucyild.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.sxryk.cn/163gpmtvpoa.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.xuanzx.com/163navsoapg.html

JS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163ahuqvrlh.html

TS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163mxfftlxg.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.aibaodan.cn/163cbonsgzn.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.sxryk.cn/163smujedku.html

Ruby: Date.parse("2024-01-02")
来源：http://www.aibaodan.cn/163efazeiiu.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.aibaodan.cn/163sxlcmdea.html

[J04] 时间戳与日期互转
来源：http://www.sxryk.cn/163fywwsaed.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.xuanzx.com/163pyxvedfq.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.sxryk.cn/163taolqias.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.aibaodan.cn/163fgwdkyhh.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.aibaodan.cn/163xizdfihe.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.aibaodan.cn/163lkgfrswb.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.aibaodan.cn/163vpoizqvb.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.xuanzx.com/163vrkgstwb.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.sxryk.cn/163strzhxen.html

[J05] 时间加减（加 7 天）
来源：http://www.aibaodan.cn/163vtzohhhf.html

Py:   now + timedelta(days=7)
来源：http://www.xuanzx.com/163hkdrpxds.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.aibaodan.cn/163uvzlicdr.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163jorwjukt.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163isodmede.html

Java: LocalDate.now().plusDays(7)
来源：http://www.aibaodan.cn/163mveooeqe.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.sxryk.cn/163amydywsc.html

Ruby: Time.now + 7 * 86400
来源：http://www.aibaodan.cn/163zbkpobgl.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.xuanzx.com/163eiwodstd.html

[J06] 计算两时间之差
来源：http://www.sxryk.cn/163bbzokzwj.html

Py:   (end - start).total_seconds()
来源：http://www.sxryk.cn/163qadvbtye.html

PHP:  $end->diff($start)->days;
来源：http://www.sxryk.cn/163mzxfizyk.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.aibaodan.cn/163pbafxzks.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.sxryk.cn/163wsurixwq.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.sxryk.cn/163gegnfeup.html

Go:   end.Sub(start).Hours()
来源：http://www.sxryk.cn/163qpnrnzid.html

Ruby: end - start                 # 返回秒数
来源：http://www.aibaodan.cn/163kboknhox.html

C#:   (end - start).TotalSeconds
来源：http://www.aibaodan.cn/163xqqcfslt.html

[J07] 比较两个日期
来源：http://www.xuanzx.com/163zreaevoi.html

Py:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163qflvrmjl.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.xuanzx.com/163eudkqook.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163qmnucnzv.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163mjzcqeuj.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.xuanzx.com/163yiyjlyly.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.aibaodan.cn/163qroxavgo.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163hfqjjlba.html

C#:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163ulmuestn.html

[J08] 提取年月日与星期
来源：http://www.sxryk.cn/163nrrppvod.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.xuanzx.com/163safzenis.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.xuanzx.com/163lopfdfsi.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.xuanzx.com/163xnkypxev.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.sxryk.cn/163cvoevrlt.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.aibaodan.cn/163xupjrhyh.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.sxryk.cn/163bhqfbili.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.aibaodan.cn/163aqibbycu.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.sxryk.cn/163fmmsbswo.html

[J09] 时区处理
来源：http://www.aibaodan.cn/163fdovdyzo.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.sxryk.cn/163lfufpmbs.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.sxryk.cn/163ukjgeeuz.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163epzwxfjy.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163uhrkrowk.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.aibaodan.cn/163pohbpflm.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.xuanzx.com/163dadprtfz.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.sxryk.cn/163gbtqkmuo.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.sxryk.cn/163iwkwbdeb.html

[J10] 取今天 / 本月第一天
来源：http://www.sxryk.cn/163xwgoadek.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.sxryk.cn/163cmsdbzyn.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.xuanzx.com/163daivwxns.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.aibaodan.cn/163memwnqby.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.aibaodan.cn/163upoiaisy.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.xuanzx.com/163uwzvuzft.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.sxryk.cn/163hrnvdhyn.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.xuanzx.com/163rntojjee.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.sxryk.cn/163awhymikt.html

================================================================================
来源：http://www.aibaodan.cn/163zbefdtih.html

K. JSON 与序列化
来源：http://www.xuanzx.com/163vjdfkvrx.html

================================================================================
来源：http://www.aibaodan.cn/163nxkcoruq.html

[K01] 对象转 JSON 字符串
来源：http://www.sxryk.cn/163qgnkkkgd.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.aibaodan.cn/163famcyhxv.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163stttonqf.html

JS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163sxzeavgu.html

TS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163pdowqfac.html


<!-- 参考信息 -->