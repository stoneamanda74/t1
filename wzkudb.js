外链999!wailian999！

[G14] 数据类 / record
来源：http://www.sxryk.cn/163yckayywh.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.sxryk.cn/163gaoxwhoq.html

PHP:  // 用 readonly 属性模拟
来源：http://www.xuanzx.com/163gieovxds.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.sxryk.cn/163kfamkkog.html

TS:   type User = { name: string; age: number };
来源：http://www.aibaodan.cn/163ipaixxvd.html

Java: record User(String name, int age) {}
来源：http://www.xuanzx.com/163nceshgeb.html

Go:   type User struct { Name string; Age int }
来源：http://www.sxryk.cn/163kfkvgoeq.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.xuanzx.com/163yxqevgql.html

C#:   record User(string Name, int Age);
来源：http://www.xuanzx.com/163gjlymfpg.html

[G15] 枚举
来源：http://www.xuanzx.com/163yciitbcg.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.sxryk.cn/163hnugkftv.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.sxryk.cn/163rcpwyako.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.xuanzx.com/163qxihjkch.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163ohoyeall.html

Java: enum Color { RED, GREEN }
来源：http://www.aibaodan.cn/163xemtanyt.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.sxryk.cn/163glcnsxdn.html

Ruby: Color = %i[red green].freeze
来源：http://www.xuanzx.com/163quqlojya.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163fqyrbukw.html

[G16] 对象转数组 / 字典
来源：http://www.xuanzx.com/163ezuxsedy.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.xuanzx.com/163fvpeqzlq.html

PHP:  get_object_vars($obj);
来源：http://www.sxryk.cn/163mziwqiif.html

JS:   Object.entries(obj)
来源：http://www.sxryk.cn/163xesokyov.html

TS:   Object.entries(obj)
来源：http://www.xuanzx.com/163udfegeao.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.xuanzx.com/163luebncny.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.aibaodan.cn/163gdedqxys.html

Ruby: obj.instance_variables
来源：http://www.xuanzx.com/163ecihdzuh.html

C#:   // 用反射或 System.Text.Json
来源：http://www.xuanzx.com/163vlzxnocc.html

================================================================================
来源：http://www.sxryk.cn/163ikcjaidd.html

H. 异常与错误处理
来源：http://www.aibaodan.cn/163qkwsqjyc.html

================================================================================
来源：http://www.xuanzx.com/163aoxezzxv.html

[H01] try / catch 基础
来源：http://www.sxryk.cn/163szwiyznv.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.sxryk.cn/163qfvwagpg.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.aibaodan.cn/163rnjsxzce.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163emsgqjdi.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.sxryk.cn/163dwujacaf.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.xuanzx.com/163sxiirkdf.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.sxryk.cn/163skeyckcz.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.sxryk.cn/163idvjdsde.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.xuanzx.com/163fibdghis.html

[H02] finally / ensure 收尾
来源：http://www.sxryk.cn/163gkekoxwe.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.sxryk.cn/163sxopimbo.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163abwilulx.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163enwtbjnp.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163ivpcombx.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163xgxhjpek.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.sxryk.cn/163ephjmfsr.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.xuanzx.com/163bonadzea.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.xuanzx.com/163hcsyohra.html

[H03] 主动抛出异常
来源：http://www.sxryk.cn/163skucbxkw.html

Py:   raise ValueError("错误信息")
来源：http://www.aibaodan.cn/163vjsfrdja.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.aibaodan.cn/163uyyzqieq.html

JS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163qjpdjggj.html

TS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163etxlboci.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.sxryk.cn/163bphsxcfe.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.xuanzx.com/163edmsmfyb.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.sxryk.cn/163lsysythn.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.sxryk.cn/163afniufat.html

[H04] 自定义异常类型
来源：http://www.sxryk.cn/163xauwqcqe.html

Py:   class MyError(Exception): pass
来源：http://www.aibaodan.cn/163qgjgrebz.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.sxryk.cn/163fwktkfey.html

JS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163glfsxfty.html

TS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163ahzhqyic.html

Java: class MyException extends RuntimeException {}
来源：http://www.xuanzx.com/163zlrvnssz.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.aibaodan.cn/163cgvrmymo.html

Ruby: class MyError < StandardError; end
来源：http://www.sxryk.cn/163tfrjufjz.html

C#:   class MyException : Exception {}
来源：http://www.sxryk.cn/163pripyyff.html

[H05] 捕获特定类型
来源：http://www.sxryk.cn/163prbmrhbt.html

Py:   except ValueError as e:
来源：http://www.xuanzx.com/163isrqsdns.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.sxryk.cn/163kspvaals.html

JS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163uylumaqn.html

TS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163tbycxkdf.html

Java: catch (IOException | SQLException e) {}
来源：http://www.sxryk.cn/163oqqqszgf.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.aibaodan.cn/163pcxhwihn.html

Ruby: rescue ArgumentError => e
来源：http://www.aibaodan.cn/163rbidqcty.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.aibaodan.cn/163rvvfelhn.html

[H06] 可选值 / 空值安全访问
来源：http://www.sxryk.cn/163zfjhcvqa.html

Py:   value = d.get("k") or default
来源：http://www.xuanzx.com/163cfuulold.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.sxryk.cn/163zujzrjiq.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163upnlatri.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163zvvpfnsw.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.sxryk.cn/163ljavrsot.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.xuanzx.com/163zgbgsoel.html

Ruby: d&.dig(:a, :b)
来源：http://www.aibaodan.cn/163ijxjwurm.html

C#:   obj?.A?.B ?? default
来源：http://www.xuanzx.com/163hisilavj.html

[H07] 断言
来源：http://www.sxryk.cn/163gxshucim.html

Py:   assert x > 0, "必须为正"
来源：http://www.aibaodan.cn/163lrwflfjk.html

PHP:  assert($x > 0);
来源：http://www.sxryk.cn/163nbukjfqd.html

JS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163szifrmjb.html

TS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163ohiqtyzz.html

Java: assert x > 0 : "必须为正";
来源：http://www.sxryk.cn/163czuoxmwg.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.aibaodan.cn/163rtbcuhvy.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.xuanzx.com/163dhgvjvzm.html

C#:   Debug.Assert(x > 0);
来源：http://www.sxryk.cn/163cauiqgdu.html

[H08] 获取错误信息与堆栈
来源：http://www.aibaodan.cn/163zhbbfecu.html

Py:   str(e);  traceback.format_exc()
来源：http://www.xuanzx.com/163ttxgbmap.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.sxryk.cn/163zvxxille.html

JS:   e.message;  e.stack
来源：http://www.xuanzx.com/163rsnzvnqd.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.xuanzx.com/163mdupuiho.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.xuanzx.com/163bdqkrzhg.html

Go:   err.Error()
来源：http://www.sxryk.cn/163fevkciav.html

Ruby: e.message;  e.backtrace
来源：http://www.xuanzx.com/163ffpabldb.html

C#:   e.Message;  e.StackTrace
来源：http://www.aibaodan.cn/163swxmhkah.html

[H09] 带错误码的异常
来源：http://www.xuanzx.com/163wramdqjf.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.xuanzx.com/163rbfxioyh.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.aibaodan.cn/163amytasot.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.sxryk.cn/163odfzxxxm.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.sxryk.cn/163nztcqljo.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.xuanzx.com/163kwcvtvbx.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.aibaodan.cn/163zigqefjm.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.xuanzx.com/163sidvwkfn.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.xuanzx.com/163drioxpms.html

[H10] 资源自动释放
来源：http://www.aibaodan.cn/163cvkslnrs.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.xuanzx.com/163vomhrvmx.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.aibaodan.cn/163hxincshx.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163zmruksgn.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163zuhirdhd.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.aibaodan.cn/163umlaxkju.html

Go:   defer f.Close()
来源：http://www.xuanzx.com/163dhvnatui.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.sxryk.cn/163sulthjwz.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.xuanzx.com/163mkepmqrs.html

================================================================================
来源：http://www.sxryk.cn/163zaituhlq.html

I. 正则表达式
来源：http://www.xuanzx.com/163vjqpoilv.html

================================================================================
来源：http://www.aibaodan.cn/163khitcpmw.html

[I01] 判断是否匹配
来源：http://www.xuanzx.com/163iyhuqtav.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.sxryk.cn/163xnoppjgi.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.xuanzx.com/163gleigzre.html

JS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163wnxjkphq.html

TS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163nmsdwifp.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.aibaodan.cn/163jexhvwtp.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.sxryk.cn/163hnprgztf.html

Ruby: s.match?(/\d+/)
来源：http://www.sxryk.cn/163xlnkirro.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.aibaodan.cn/163vnrpauzv.html

[I02] 提取所有匹配
来源：http://www.xuanzx.com/163knuhkkzz.html

Py:   re.findall(r"\d+", s)
来源：http://www.xuanzx.com/163dkblzqmk.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.xuanzx.com/163codaxacx.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.xuanzx.com/163srfcdlpv.html

TS:   s.match(/\d+/g)
来源：http://www.aibaodan.cn/163iomjorgp.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.xuanzx.com/163rsjqcpur.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.aibaodan.cn/163agxerlos.html

Ruby: s.scan(/\d+/)
来源：http://www.aibaodan.cn/163eyrtjdjv.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.sxryk.cn/163ofegvgck.html

[I03] 提取捕获分组
来源：http://www.xuanzx.com/163zxwvhjyf.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.sxryk.cn/163plpwwonq.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.sxryk.cn/163qacrxjfg.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.sxryk.cn/163xhfxiiua.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.xuanzx.com/163plwaqlpu.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.aibaodan.cn/163nvgkbuan.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.aibaodan.cn/163eeunkosg.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.xuanzx.com/163lqckgmup.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.aibaodan.cn/163ocluijyk.html

[I04] 正则替换
来源：http://www.xuanzx.com/163nkewbort.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.xuanzx.com/163srlkewqs.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163ljskwyrk.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163ioflxzec.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163tosvmdsz.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.sxryk.cn/163xyjrbdth.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.xuanzx.com/163bcpibaxj.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.xuanzx.com/163vtqgfmip.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.aibaodan.cn/163hwjwflsr.html

[I05] 按正则拆分
来源：http://www.aibaodan.cn/163ejtddvfz.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.xuanzx.com/163inijiqhl.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.sxryk.cn/163qfmqykmx.html

JS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163iamibbza.html

TS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163ekpuhawn.html

Java: s.split("\\s*,\\s*")
来源：http://www.aibaodan.cn/163kszvjllz.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.xuanzx.com/163kpydpujf.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163wkvbjvzj.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.xuanzx.com/163vcqylrze.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.sxryk.cn/163ksajlvlt.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163oiowlkxa.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.sxryk.cn/163gxjemuvr.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163qcucojjp.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163eofxrgtt.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.xuanzx.com/163uotvutry.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.aibaodan.cn/163uszpyuwc.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.xuanzx.com/163giesvsik.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163xfxziqcf.html

[I07] 忽略大小写与多行模式
来源：http://www.xuanzx.com/163rxzegmou.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.aibaodan.cn/163ozgbvymr.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.sxryk.cn/163atkjpmtl.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.sxryk.cn/163sbynmoag.html

TS:   /error/gim
来源：http://www.xuanzx.com/163swhygqup.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.xuanzx.com/163afjlmqih.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.xuanzx.com/163zdzpcyqn.html

Ruby: s.scan(/error/i)
来源：http://www.sxryk.cn/163lwddpemr.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.sxryk.cn/163efdwmmsh.html

[I08] 贪婪与非贪婪匹配
来源：http://www.aibaodan.cn/163blooklcn.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.sxryk.cn/163fixcnkho.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.xuanzx.com/163hqfvuwli.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163bszoeepl.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163oukbwpvr.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.sxryk.cn/163rsemgvdh.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.sxryk.cn/163sjdcfrnd.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.xuanzx.com/163mwsrbiut.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.sxryk.cn/163tjshqvgr.html

================================================================================
来源：http://www.aibaodan.cn/163ckonchgh.html

J. 日期与时间
来源：http://www.xuanzx.com/163xwdjxbin.html

================================================================================
来源：http://www.aibaodan.cn/163xgvvswbz.html

[J01] 获取当前时间
来源：http://www.aibaodan.cn/163oxeyiqdr.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.xuanzx.com/163zjaqqljb.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163jvrqojcm.html

JS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163duxlryjl.html

TS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163mvbcdugp.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.xuanzx.com/163xhxuvxdq.html

Go:   time.Now()
来源：http://www.sxryk.cn/163qjlzqewd.html

Ruby: Time.now
来源：http://www.aibaodan.cn/163gmwgedht.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.xuanzx.com/163puisuurj.html

[J02] 格式化输出
来源：http://www.xuanzx.com/163fqlrvrlq.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163fydjhlco.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163usaesanc.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.sxryk.cn/163zmxsrwyj.html

TS:   d.toISOString()
来源：http://www.aibaodan.cn/163anlbuzjh.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.xuanzx.com/163oobytnyr.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.aibaodan.cn/163xipaifly.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163bzncvyrb.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.xuanzx.com/163gbvtjyfq.html

[J03] 字符串解析为日期
来源：http://www.xuanzx.com/163twdycljz.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.aibaodan.cn/163ymrrixcy.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.aibaodan.cn/163cmhhztki.html

JS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163fvtzpytw.html

TS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163psmnflbo.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.sxryk.cn/163odkltrwa.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.xuanzx.com/163coeuotke.html

Ruby: Date.parse("2024-01-02")
来源：http://www.sxryk.cn/163mkctryee.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.aibaodan.cn/163qlmrkkao.html

[J04] 时间戳与日期互转
来源：http://www.xuanzx.com/163hsfsftsb.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.xuanzx.com/163nnfinakd.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.xuanzx.com/163ygsfftqz.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.xuanzx.com/163tiqjflbz.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.xuanzx.com/163kwyzfwmc.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.aibaodan.cn/163timvmtpc.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.sxryk.cn/163mscgxhmj.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.xuanzx.com/163skuovbpk.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.aibaodan.cn/163zafbmzvx.html

[J05] 时间加减（加 7 天）
来源：http://www.sxryk.cn/163gabijyaq.html

Py:   now + timedelta(days=7)
来源：http://www.sxryk.cn/163efophxot.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.xuanzx.com/163prahxggt.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163gmfldkkv.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163usmdcppr.html

Java: LocalDate.now().plusDays(7)
来源：http://www.sxryk.cn/163dndwnodl.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.xuanzx.com/163svmajzpv.html

Ruby: Time.now + 7 * 86400
来源：http://www.sxryk.cn/163jojhepxc.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.aibaodan.cn/163rgqwxtnx.html

[J06] 计算两时间之差
来源：http://www.xuanzx.com/163waeolhxk.html

Py:   (end - start).total_seconds()
来源：http://www.sxryk.cn/163zbuwkqky.html

PHP:  $end->diff($start)->days;
来源：http://www.aibaodan.cn/163pemulzpx.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.sxryk.cn/163bytcsruo.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.xuanzx.com/163msdnkctc.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.aibaodan.cn/163atloydws.html

Go:   end.Sub(start).Hours()
来源：http://www.aibaodan.cn/163jivzpylg.html

Ruby: end - start                 # 返回秒数
来源：http://www.sxryk.cn/163ovzkfkxt.html

C#:   (end - start).TotalSeconds
来源：http://www.sxryk.cn/163icysmjwh.html

[J07] 比较两个日期
来源：http://www.aibaodan.cn/163cklubcum.html

Py:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163eqjsacsk.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.aibaodan.cn/163mpjrrxrp.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163qsnzqeoh.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163rjjoyuiz.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.sxryk.cn/163hooawotf.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.sxryk.cn/163cenqdqzk.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163muqsleol.html

C#:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163envdadaa.html

[J08] 提取年月日与星期
来源：http://www.aibaodan.cn/163mizhseqp.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.xuanzx.com/163opedlrjr.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.xuanzx.com/163yalqdyky.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.aibaodan.cn/163nupooqve.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.sxryk.cn/163qwjizwbf.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.sxryk.cn/163tpylkwow.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.aibaodan.cn/163afrohaoz.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.xuanzx.com/163arxfxzrj.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.xuanzx.com/163juefqlcy.html

[J09] 时区处理
来源：http://www.xuanzx.com/163qlofeolm.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.aibaodan.cn/163oqljxare.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.sxryk.cn/163fwmczkgf.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163uizclqrb.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163ifccyehp.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.aibaodan.cn/163qaqfosxg.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.aibaodan.cn/163heacdhwb.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.xuanzx.com/163ztnrhnfk.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.xuanzx.com/163oxmwnaus.html

[J10] 取今天 / 本月第一天
来源：http://www.xuanzx.com/163uzphgbje.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.aibaodan.cn/163jvnveacd.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.xuanzx.com/163chyyaeki.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.sxryk.cn/163byiewbmp.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.aibaodan.cn/163ebfzafag.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.xuanzx.com/163fsifdikt.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.aibaodan.cn/163tsfndpof.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.aibaodan.cn/163hcozywde.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.sxryk.cn/163vxfrzlpk.html

================================================================================
来源：http://www.xuanzx.com/163vckmwnqx.html

K. JSON 与序列化
来源：http://www.xuanzx.com/163pzdygvjd.html

================================================================================
来源：http://www.xuanzx.com/163wbslnavu.html

[K01] 对象转 JSON 字符串
来源：http://www.sxryk.cn/163ptimcstc.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.xuanzx.com/163isbmsmok.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163wdlihdft.html

JS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163qcneokhr.html

TS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163urncptos.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.sxryk.cn/163euiwtmbg.html

Go:   json.Marshal(obj)
来源：http://www.aibaodan.cn/163lbynxvdc.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.sxryk.cn/163zpemuner.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.xuanzx.com/163talovgat.html


<!-- 参考信息 -->