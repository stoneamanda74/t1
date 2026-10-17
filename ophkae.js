外链999!wailian999！

[G14] 数据类 / record
来源：http://www.sxryk.cn/163ilkcdnbf.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.sxryk.cn/163yrcfhxcm.html

PHP:  // 用 readonly 属性模拟
来源：http://www.xuanzx.com/163cytxddps.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.xuanzx.com/163drpowcvo.html

TS:   type User = { name: string; age: number };
来源：http://www.sxryk.cn/163jfzckldi.html

Java: record User(String name, int age) {}
来源：http://www.xuanzx.com/163omekozcd.html

Go:   type User struct { Name string; Age int }
来源：http://www.xuanzx.com/163zvlprpcv.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.aibaodan.cn/163ruuixixw.html

C#:   record User(string Name, int Age);
来源：http://www.aibaodan.cn/163paimalyj.html

[G15] 枚举
来源：http://www.aibaodan.cn/163geiwyqgf.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.sxryk.cn/163llmfyfnj.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.xuanzx.com/163ipooimyc.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.xuanzx.com/163gtgpcjfn.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163picarbsl.html

Java: enum Color { RED, GREEN }
来源：http://www.xuanzx.com/163szzijspo.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.aibaodan.cn/163wbidaksv.html

Ruby: Color = %i[red green].freeze
来源：http://www.aibaodan.cn/163hrqaqiyf.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163qfllxuas.html

[G16] 对象转数组 / 字典
来源：http://www.sxryk.cn/163plpehefl.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.aibaodan.cn/163obyczeib.html

PHP:  get_object_vars($obj);
来源：http://www.sxryk.cn/163vmksjhhp.html

JS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163nplclafq.html

TS:   Object.entries(obj)
来源：http://www.sxryk.cn/163oskqehfb.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.xuanzx.com/163pxjooqtv.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.xuanzx.com/163qshojrsx.html

Ruby: obj.instance_variables
来源：http://www.aibaodan.cn/163yvuuuqro.html

C#:   // 用反射或 System.Text.Json
来源：http://www.xuanzx.com/163zxaafwyk.html

================================================================================
来源：http://www.aibaodan.cn/163vgesnqqz.html

H. 异常与错误处理
来源：http://www.aibaodan.cn/163vrskflou.html

================================================================================
来源：http://www.sxryk.cn/163fvcrrgbl.html

[H01] try / catch 基础
来源：http://www.aibaodan.cn/163orsdzikx.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.aibaodan.cn/163natzqokr.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.xuanzx.com/163ptnrmmfp.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163nrisgzlr.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.sxryk.cn/163kazqfrty.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.xuanzx.com/163coxecxeu.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.aibaodan.cn/163ccstwjqt.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.xuanzx.com/163bltpcgny.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.sxryk.cn/163rwpxjeyd.html

[H02] finally / ensure 收尾
来源：http://www.aibaodan.cn/163exoljdcp.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.aibaodan.cn/163kgnnrstq.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163zuxhvrca.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163ilhnlkrq.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163ajhlfnvs.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163hxbfswvx.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.aibaodan.cn/163myufuobp.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.xuanzx.com/163pkgrhkdq.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.sxryk.cn/163cnnwznvw.html

[H03] 主动抛出异常
来源：http://www.aibaodan.cn/163qitmmrqn.html

Py:   raise ValueError("错误信息")
来源：http://www.sxryk.cn/163sgfcivyx.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.sxryk.cn/163eviundki.html

JS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163mkjfwrhc.html

TS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163ueoidwvp.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.aibaodan.cn/163ugabassg.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.aibaodan.cn/163wxwnuusx.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.sxryk.cn/163irxmxdnh.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.xuanzx.com/163oohfbgtr.html

[H04] 自定义异常类型
来源：http://www.xuanzx.com/163bzlewdld.html

Py:   class MyError(Exception): pass
来源：http://www.aibaodan.cn/163hozaqvzj.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.xuanzx.com/163hwjqzsuw.html

JS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163grcaywqn.html

TS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163srfjeuvu.html

Java: class MyException extends RuntimeException {}
来源：http://www.sxryk.cn/163sjnbqran.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.sxryk.cn/163mtgenqbm.html

Ruby: class MyError < StandardError; end
来源：http://www.sxryk.cn/163bckqzsjk.html

C#:   class MyException : Exception {}
来源：http://www.sxryk.cn/163poxfinfh.html

[H05] 捕获特定类型
来源：http://www.sxryk.cn/163tfudgfnr.html

Py:   except ValueError as e:
来源：http://www.xuanzx.com/163utcwcqvz.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.sxryk.cn/163vajppyco.html

JS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163rvldnfol.html

TS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163ixzerdzc.html

Java: catch (IOException | SQLException e) {}
来源：http://www.xuanzx.com/163oqjnvkik.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.aibaodan.cn/163tgjzvwao.html

Ruby: rescue ArgumentError => e
来源：http://www.sxryk.cn/163jlqauuus.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.xuanzx.com/163ezfqurtm.html

[H06] 可选值 / 空值安全访问
来源：http://www.xuanzx.com/163lhyujuda.html

Py:   value = d.get("k") or default
来源：http://www.aibaodan.cn/163tiguydcf.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.aibaodan.cn/163fuvimhbg.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163eqibrbii.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163tiyvqmoe.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.xuanzx.com/163fadzcdyk.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.sxryk.cn/163mpglzocw.html

Ruby: d&.dig(:a, :b)
来源：http://www.aibaodan.cn/163maqxndgr.html

C#:   obj?.A?.B ?? default
来源：http://www.aibaodan.cn/163ggdvuizu.html

[H07] 断言
来源：http://www.aibaodan.cn/163yuhvllwu.html

Py:   assert x > 0, "必须为正"
来源：http://www.sxryk.cn/163axtqzooi.html

PHP:  assert($x > 0);
来源：http://www.xuanzx.com/163pyhiqxig.html

JS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163bhsxognk.html

TS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163kxuhztrj.html

Java: assert x > 0 : "必须为正";
来源：http://www.sxryk.cn/163wemuihsk.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.xuanzx.com/163tnnxvert.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.aibaodan.cn/163oikwehhj.html

C#:   Debug.Assert(x > 0);
来源：http://www.xuanzx.com/163ndzzsmgj.html

[H08] 获取错误信息与堆栈
来源：http://www.sxryk.cn/163hdhocrwh.html

Py:   str(e);  traceback.format_exc()
来源：http://www.xuanzx.com/163llxtsbis.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.aibaodan.cn/163zhcjpqgp.html

JS:   e.message;  e.stack
来源：http://www.xuanzx.com/163khjssurd.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.sxryk.cn/163eyyrtsxk.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.sxryk.cn/163qpjgirso.html

Go:   err.Error()
来源：http://www.sxryk.cn/163egjaaasu.html

Ruby: e.message;  e.backtrace
来源：http://www.xuanzx.com/163fnbrfysv.html

C#:   e.Message;  e.StackTrace
来源：http://www.aibaodan.cn/163zgsdfwax.html

[H09] 带错误码的异常
来源：http://www.xuanzx.com/163amavzexj.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.aibaodan.cn/163kqeyeknj.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.sxryk.cn/163aisppnvd.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.aibaodan.cn/163kmrdjcmc.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.sxryk.cn/163ojleagci.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.sxryk.cn/163tyhthzts.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.xuanzx.com/163rvffhdzj.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.sxryk.cn/163sxyvuwmz.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.sxryk.cn/163gtfojhjp.html

[H10] 资源自动释放
来源：http://www.xuanzx.com/163izbpcnqo.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.sxryk.cn/163bzbazdix.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.sxryk.cn/163iyiosnrf.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163pzxxpcho.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163bwfihvkh.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.aibaodan.cn/163gvcuqlde.html

Go:   defer f.Close()
来源：http://www.sxryk.cn/163mxrwfmkc.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.aibaodan.cn/163fhnfvehr.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.xuanzx.com/163xdzsrwbx.html

================================================================================
来源：http://www.aibaodan.cn/163sdjqtofg.html

I. 正则表达式
来源：http://www.xuanzx.com/163rcgpenor.html

================================================================================
来源：http://www.xuanzx.com/163dnkbmprp.html

[I01] 判断是否匹配
来源：http://www.xuanzx.com/163xaoophho.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.xuanzx.com/163xevmdqcv.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.sxryk.cn/163rcgghsys.html

JS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163swzrwlbk.html

TS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163gajdjbsw.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.sxryk.cn/163axbhrrlx.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.sxryk.cn/163bgjdzawb.html

Ruby: s.match?(/\d+/)
来源：http://www.aibaodan.cn/163zytoxvph.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.xuanzx.com/163ednytrmb.html

[I02] 提取所有匹配
来源：http://www.xuanzx.com/163zwmheuth.html

Py:   re.findall(r"\d+", s)
来源：http://www.xuanzx.com/163dlzorvhe.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.aibaodan.cn/163wrlfafsy.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.aibaodan.cn/163xdhxwnkw.html

TS:   s.match(/\d+/g)
来源：http://www.aibaodan.cn/163mbsoirkb.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.sxryk.cn/163qvewbvoc.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.xuanzx.com/163sdykkspt.html

Ruby: s.scan(/\d+/)
来源：http://www.xuanzx.com/163wqwxeigp.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.aibaodan.cn/163dfiyigex.html

[I03] 提取捕获分组
来源：http://www.sxryk.cn/163wiwbdqdd.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.xuanzx.com/163xlyksjgf.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.sxryk.cn/163yakpmlby.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.xuanzx.com/163fvcxliwx.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.xuanzx.com/163ohimufcj.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.xuanzx.com/163xbjifvkp.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.aibaodan.cn/163divacwpy.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.aibaodan.cn/163gzwdqmwz.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.sxryk.cn/163wnkdfoek.html

[I04] 正则替换
来源：http://www.aibaodan.cn/163vrcolujg.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.aibaodan.cn/163ylvggktl.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163kbiybjma.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163jxwwczjd.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163gtnqlema.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.sxryk.cn/163dayjukbv.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.sxryk.cn/163dsvspmty.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.aibaodan.cn/163zstotgid.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.xuanzx.com/163qsrjvzes.html

[I05] 按正则拆分
来源：http://www.aibaodan.cn/163aurgbjap.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.aibaodan.cn/163alyolyxb.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.aibaodan.cn/163mcffguqa.html

JS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163vsffwxmd.html

TS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163htvxikjn.html

Java: s.split("\\s*,\\s*")
来源：http://www.sxryk.cn/163wokelfem.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.aibaodan.cn/163fceegiuz.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163qdjxchzr.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.sxryk.cn/163ivzqjbvj.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.sxryk.cn/163fkiswzhi.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163vatubsae.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.aibaodan.cn/163wjypninp.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163yglzspzf.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163fxylqfco.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.sxryk.cn/163opytehfn.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.xuanzx.com/163nklkadxd.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.sxryk.cn/163kpqrlxdk.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163uvtwgljz.html

[I07] 忽略大小写与多行模式
来源：http://www.aibaodan.cn/163bbrmvati.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.aibaodan.cn/163fconovkc.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.sxryk.cn/163mokndvvy.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.aibaodan.cn/163onmufpqq.html

TS:   /error/gim
来源：http://www.sxryk.cn/163vxfmzavi.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.xuanzx.com/163rqjgcjem.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.aibaodan.cn/163fkmzbitd.html

Ruby: s.scan(/error/i)
来源：http://www.xuanzx.com/163snwlbvlu.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.sxryk.cn/163kzjbifqh.html

[I08] 贪婪与非贪婪匹配
来源：http://www.xuanzx.com/163oeiegblk.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.xuanzx.com/163mxvxrdbh.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.aibaodan.cn/163vdfazigj.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163mjviityp.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163ipoironi.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.sxryk.cn/163sllkhxrj.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.xuanzx.com/163qypiihpd.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.xuanzx.com/163jfrpqakt.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.xuanzx.com/163bsjytlye.html

================================================================================
来源：http://www.sxryk.cn/163cdpkedmx.html

J. 日期与时间
来源：http://www.sxryk.cn/163eeecnyeu.html

================================================================================
来源：http://www.sxryk.cn/163vlmrohyz.html

[J01] 获取当前时间
来源：http://www.sxryk.cn/163vtcknawn.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.xuanzx.com/163kmqnydqs.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163qeqstyzy.html

JS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163oqzlnhqx.html

TS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163fugtumve.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.aibaodan.cn/163whuknrqr.html

Go:   time.Now()
来源：http://www.sxryk.cn/163sdvbebji.html

Ruby: Time.now
来源：http://www.sxryk.cn/163tiokgysk.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.xuanzx.com/163wtrydmlt.html

[J02] 格式化输出
来源：http://www.sxryk.cn/163mfnzunbg.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163fgewocax.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163gwvnpdxe.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.xuanzx.com/163cefthywj.html

TS:   d.toISOString()
来源：http://www.aibaodan.cn/163ngtjgbkv.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.aibaodan.cn/163vlapaoqe.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.aibaodan.cn/163bmalipsi.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163pcaiiwuc.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.xuanzx.com/163yijvzwag.html

[J03] 字符串解析为日期
来源：http://www.sxryk.cn/163xrpojozv.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.xuanzx.com/163xodjglvz.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.sxryk.cn/163anmwcyvz.html

JS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163eeaanizc.html

TS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163icsnvxwk.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.aibaodan.cn/163vsrmvxfx.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.aibaodan.cn/163uigwsqae.html

Ruby: Date.parse("2024-01-02")
来源：http://www.sxryk.cn/163cgtioxmp.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.xuanzx.com/163gbxutuso.html

[J04] 时间戳与日期互转
来源：http://www.sxryk.cn/163tpujsaso.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.aibaodan.cn/163cgvsuolc.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.xuanzx.com/163lyzqgrex.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.sxryk.cn/163ywwyhyqe.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.sxryk.cn/163wukskxpm.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.xuanzx.com/163zqqdbjtp.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.xuanzx.com/163hjlsofsc.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.aibaodan.cn/163vrjwzwgi.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.xuanzx.com/163aiycwxjw.html

[J05] 时间加减（加 7 天）
来源：http://www.aibaodan.cn/163bcowzrwj.html

Py:   now + timedelta(days=7)
来源：http://www.sxryk.cn/163zvqgvxad.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.xuanzx.com/163lzscsqnt.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163gkcxgbhn.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163rsvdfkbn.html

Java: LocalDate.now().plusDays(7)
来源：http://www.aibaodan.cn/163mfvwbibt.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.sxryk.cn/163wtwjzuua.html

Ruby: Time.now + 7 * 86400
来源：http://www.aibaodan.cn/163lsqhvyxj.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.sxryk.cn/163ntobxssl.html

[J06] 计算两时间之差
来源：http://www.aibaodan.cn/163fslvfgga.html

Py:   (end - start).total_seconds()
来源：http://www.xuanzx.com/163krtacnff.html

PHP:  $end->diff($start)->days;
来源：http://www.sxryk.cn/163xwrghaau.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.xuanzx.com/163lurizeqh.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.xuanzx.com/163jluxfnew.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.aibaodan.cn/163vwxehdia.html

Go:   end.Sub(start).Hours()
来源：http://www.aibaodan.cn/163xmezqgxe.html

Ruby: end - start                 # 返回秒数
来源：http://www.aibaodan.cn/163nqjjoyec.html

C#:   (end - start).TotalSeconds
来源：http://www.xuanzx.com/163dmtzgvla.html

[J07] 比较两个日期
来源：http://www.sxryk.cn/163pkutlgpw.html

Py:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163lzamrvyy.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.sxryk.cn/163gmqyuaca.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163qlwindut.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163lkigmuei.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.aibaodan.cn/163hxqtvzop.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.xuanzx.com/163cfbwbdcz.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163otegrwzs.html

C#:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163fqfgtkep.html

[J08] 提取年月日与星期
来源：http://www.sxryk.cn/163aldnxflo.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.xuanzx.com/163ihmtyrmx.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.xuanzx.com/163exlkugnt.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.sxryk.cn/163pzjysckc.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.aibaodan.cn/163rpxerzzj.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.xuanzx.com/163vclxgizg.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.aibaodan.cn/163urxelliu.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.xuanzx.com/163gbdiyhou.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.aibaodan.cn/163vtlcsikq.html

[J09] 时区处理
来源：http://www.sxryk.cn/163tkfsvjkc.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.xuanzx.com/163rfvpiomb.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.sxryk.cn/163szjvruip.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163ogmjsauw.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163clykmlbi.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.xuanzx.com/163zzraqric.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.sxryk.cn/163tkjytvkp.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.aibaodan.cn/163bxrgyvlq.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.sxryk.cn/163yxydunia.html

[J10] 取今天 / 本月第一天
来源：http://www.sxryk.cn/163tfuttaqy.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.xuanzx.com/163trshocwf.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.xuanzx.com/163fczoqruk.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.xuanzx.com/163wbhilegx.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.sxryk.cn/163xmqmvzlb.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.aibaodan.cn/163cwkuenmi.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.sxryk.cn/163euusshmb.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.sxryk.cn/163bkzxivzn.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.aibaodan.cn/163vdbfrmhg.html

================================================================================
来源：http://www.xuanzx.com/163ikzygykj.html

K. JSON 与序列化
来源：http://www.sxryk.cn/163qjcijbov.html

================================================================================
来源：http://www.sxryk.cn/163xnlsdbgv.html

[K01] 对象转 JSON 字符串
来源：http://www.aibaodan.cn/163opwmpkuj.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.aibaodan.cn/163vcahhyul.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163xzcfcrvj.html

JS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163itszkgmr.html

TS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163pkggbgsq.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.xuanzx.com/163phhbbynk.html

Go:   json.Marshal(obj)
来源：http://www.sxryk.cn/163lnogpztp.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.sxryk.cn/163oumxlzdd.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.aibaodan.cn/163mcketdqz.html


<!-- 参考信息 -->