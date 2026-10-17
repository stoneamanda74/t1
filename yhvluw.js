外链999!wailian999！

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.xuanzx.com/163cjakwnnj.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163vzydkeza.html

Java: enum Color { RED, GREEN }
来源：http://www.aibaodan.cn/163ataaecmd.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.xuanzx.com/163eejqykwx.html

Ruby: Color = %i[red green].freeze
来源：http://www.xuanzx.com/163xkxjgapl.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163kwhfispx.html

[G16] 对象转数组 / 字典
来源：http://www.xuanzx.com/163lyfgikqn.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.aibaodan.cn/163qfjyxbgx.html

PHP:  get_object_vars($obj);
来源：http://www.sxryk.cn/163sjivbpco.html

JS:   Object.entries(obj)
来源：http://www.sxryk.cn/163brzqgjas.html

TS:   Object.entries(obj)
来源：http://www.sxryk.cn/163qwfarmlh.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.xuanzx.com/163fsphfvwc.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.aibaodan.cn/163srncqqzq.html

Ruby: obj.instance_variables
来源：http://www.sxryk.cn/163zfaegwvn.html

C#:   // 用反射或 System.Text.Json
来源：http://www.sxryk.cn/163oeeaeydp.html

================================================================================
来源：http://www.xuanzx.com/163sggjqlbg.html

H. 异常与错误处理
来源：http://www.aibaodan.cn/163dgxfhisr.html

================================================================================
来源：http://www.sxryk.cn/163ujwuojhk.html

[H01] try / catch 基础
来源：http://www.aibaodan.cn/163zimwtkir.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.aibaodan.cn/163ypptebvn.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.xuanzx.com/163awlylwul.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163juwezhyl.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.sxryk.cn/163uoavkhwk.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.sxryk.cn/163lwutjbyl.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.xuanzx.com/163cpldjlod.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.xuanzx.com/163xkmkelxj.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.sxryk.cn/163remtqtiu.html

[H02] finally / ensure 收尾
来源：http://www.sxryk.cn/163uhdwutyq.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.aibaodan.cn/163lgesleqp.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163vrdhatjj.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163zqbyndkg.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163lydeozqd.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163wvylosds.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.sxryk.cn/163mdgbibhy.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.xuanzx.com/163uybulbtx.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.aibaodan.cn/163uzrezaeg.html

[H03] 主动抛出异常
来源：http://www.xuanzx.com/163tdolbxjh.html

Py:   raise ValueError("错误信息")
来源：http://www.xuanzx.com/163wiilkhng.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.sxryk.cn/163pqokhrqs.html

JS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163axagxhbl.html

TS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163mlbzwpxt.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.xuanzx.com/163vnfvajki.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.sxryk.cn/163ysvthimo.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.xuanzx.com/163llcwiikb.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.aibaodan.cn/163ijlrdftn.html

[H04] 自定义异常类型
来源：http://www.sxryk.cn/163rhiipecn.html

Py:   class MyError(Exception): pass
来源：http://www.aibaodan.cn/163xtqvpnpb.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.aibaodan.cn/163mmchuraf.html

JS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163elmoubzg.html

TS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163aqlohfuj.html

Java: class MyException extends RuntimeException {}
来源：http://www.xuanzx.com/163dnieohvo.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.xuanzx.com/163fesreufo.html

Ruby: class MyError < StandardError; end
来源：http://www.xuanzx.com/163rsvxcdvv.html

C#:   class MyException : Exception {}
来源：http://www.xuanzx.com/163bskmtukd.html

[H05] 捕获特定类型
来源：http://www.sxryk.cn/163favcseei.html

Py:   except ValueError as e:
来源：http://www.aibaodan.cn/163ezfkkuxj.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.sxryk.cn/163ghqsnsfi.html

JS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163evsbbbfb.html

TS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163sayfeaag.html

Java: catch (IOException | SQLException e) {}
来源：http://www.sxryk.cn/163ynplrkhm.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.aibaodan.cn/163ltrfycec.html

Ruby: rescue ArgumentError => e
来源：http://www.sxryk.cn/163shtjomun.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.aibaodan.cn/163uazfyire.html

[H06] 可选值 / 空值安全访问
来源：http://www.xuanzx.com/163pqclrflb.html

Py:   value = d.get("k") or default
来源：http://www.sxryk.cn/163ijguvovt.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.xuanzx.com/163hjzxypje.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163kzimwqmv.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163ycakwarq.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.xuanzx.com/163wiojlapk.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.aibaodan.cn/163hljqwidb.html

Ruby: d&.dig(:a, :b)
来源：http://www.sxryk.cn/163rktfbsjg.html

C#:   obj?.A?.B ?? default
来源：http://www.sxryk.cn/163wdfuajir.html

[H07] 断言
来源：http://www.aibaodan.cn/163cxmbvonl.html

Py:   assert x > 0, "必须为正"
来源：http://www.xuanzx.com/163xfhjvutr.html

PHP:  assert($x > 0);
来源：http://www.sxryk.cn/163blhpbajs.html

JS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163qpkdcvoc.html

TS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163ahvvvbgm.html

Java: assert x > 0 : "必须为正";
来源：http://www.aibaodan.cn/163ucojcofk.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.aibaodan.cn/163rgkcztcp.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.sxryk.cn/163lakbfswh.html

C#:   Debug.Assert(x > 0);
来源：http://www.aibaodan.cn/163coivcovx.html

[H08] 获取错误信息与堆栈
来源：http://www.xuanzx.com/163qdfktjsk.html

Py:   str(e);  traceback.format_exc()
来源：http://www.aibaodan.cn/163yfqvhwgp.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.aibaodan.cn/163ataoptzo.html

JS:   e.message;  e.stack
来源：http://www.sxryk.cn/163eovxkpht.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.xuanzx.com/163exwhgwdj.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.xuanzx.com/163ybgrliia.html

Go:   err.Error()
来源：http://www.xuanzx.com/163opxjwmwg.html

Ruby: e.message;  e.backtrace
来源：http://www.aibaodan.cn/163dszzjqsx.html

C#:   e.Message;  e.StackTrace
来源：http://www.sxryk.cn/163xooflgin.html

[H09] 带错误码的异常
来源：http://www.sxryk.cn/163flhcqkgo.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.aibaodan.cn/163veltlsgc.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.aibaodan.cn/163bjnvbpzm.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.sxryk.cn/163cbgihima.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.xuanzx.com/163htxoanmy.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.xuanzx.com/163vpvpifuq.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.sxryk.cn/163kcwhucjq.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.aibaodan.cn/163bravotys.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.sxryk.cn/163plrkbxjt.html

[H10] 资源自动释放
来源：http://www.xuanzx.com/163mwhrkfnu.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.xuanzx.com/163uvsveuwh.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.sxryk.cn/163nttcfczq.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163eubhvbwg.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163dreuytmz.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.aibaodan.cn/163qxsmujza.html

Go:   defer f.Close()
来源：http://www.xuanzx.com/163eymhkxrb.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.xuanzx.com/163dmudfart.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.sxryk.cn/163zcambbtx.html

================================================================================
来源：http://www.sxryk.cn/163cscqoudc.html

I. 正则表达式
来源：http://www.aibaodan.cn/163vjulecjx.html

================================================================================
来源：http://www.xuanzx.com/163cxwphurx.html

[I01] 判断是否匹配
来源：http://www.xuanzx.com/163iitcvwmq.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.xuanzx.com/163kkwovszi.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.xuanzx.com/163adwrkblx.html

JS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163cwhavgsc.html

TS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163wrwineeh.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.sxryk.cn/163nnfbjgzi.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.sxryk.cn/163jijeuczz.html

Ruby: s.match?(/\d+/)
来源：http://www.aibaodan.cn/163drrkfate.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.sxryk.cn/163rwilhfap.html

[I02] 提取所有匹配
来源：http://www.aibaodan.cn/163ciorhzyn.html

Py:   re.findall(r"\d+", s)
来源：http://www.xuanzx.com/163mpxzbbtv.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.aibaodan.cn/163ypduylka.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.aibaodan.cn/163tsbvbxvf.html

TS:   s.match(/\d+/g)
来源：http://www.sxryk.cn/163wwftoajx.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.sxryk.cn/163qmvwlpyb.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.sxryk.cn/163eghzdsex.html

Ruby: s.scan(/\d+/)
来源：http://www.xuanzx.com/163pqwnlgop.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.aibaodan.cn/163jjdigobm.html

[I03] 提取捕获分组
来源：http://www.sxryk.cn/163jtxqzsbf.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.aibaodan.cn/163gmuriols.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.aibaodan.cn/163lvtsqeao.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.sxryk.cn/163nnskucea.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.xuanzx.com/163jsqramdj.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.aibaodan.cn/163ycyqolie.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.xuanzx.com/163nneokqwf.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.sxryk.cn/163wsyihlkd.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.xuanzx.com/163xmfdnihb.html

[I04] 正则替换
来源：http://www.sxryk.cn/163drzdjrgz.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.xuanzx.com/163zqpudksz.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163lajvwjbx.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163zmoanorn.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163jbibbxkm.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.aibaodan.cn/163gynzdtex.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.sxryk.cn/163mlctfrxs.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.xuanzx.com/163tmobbjus.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.xuanzx.com/163oktzovye.html

[I05] 按正则拆分
来源：http://www.xuanzx.com/163oftmhweb.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.aibaodan.cn/163mtfeqndg.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.aibaodan.cn/163rohcjsqj.html

JS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163ubocodww.html

TS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163btqeabjs.html

Java: s.split("\\s*,\\s*")
来源：http://www.sxryk.cn/163dhwexxqo.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.sxryk.cn/163vmhhayrk.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163myitacdi.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.xuanzx.com/163ndmromgu.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.aibaodan.cn/163oyjbdgsc.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163jdwvuaup.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.aibaodan.cn/163ifdimpiv.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163tuhxsqwt.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163xrgufbqb.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.aibaodan.cn/163jkeivinr.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.aibaodan.cn/163bbbjfobb.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.xuanzx.com/163pbcwwxvp.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163gytjcgyf.html

[I07] 忽略大小写与多行模式
来源：http://www.sxryk.cn/163fbxiapfi.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.aibaodan.cn/163pyowbmoh.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.aibaodan.cn/163uxpjusks.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.aibaodan.cn/163afirfgnt.html

TS:   /error/gim
来源：http://www.xuanzx.com/163wxxtscxr.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.sxryk.cn/163bsnsjxiq.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.sxryk.cn/163qlergavs.html

Ruby: s.scan(/error/i)
来源：http://www.sxryk.cn/163oxbmtgnk.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.aibaodan.cn/163xtcthxhf.html

[I08] 贪婪与非贪婪匹配
来源：http://www.xuanzx.com/163llggaztl.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.sxryk.cn/163jpkodsia.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.xuanzx.com/163ikafknra.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163bckvryiq.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163sykgkehx.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.xuanzx.com/163gtfxraqo.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.aibaodan.cn/163hisffesw.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.aibaodan.cn/163mgtdjyxl.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.aibaodan.cn/163jrtqewgr.html

================================================================================
来源：http://www.xuanzx.com/163vmyyrwwn.html

J. 日期与时间
来源：http://www.sxryk.cn/163nwpqbdgt.html

================================================================================
来源：http://www.aibaodan.cn/163swjkasss.html

[J01] 获取当前时间
来源：http://www.sxryk.cn/163xbjuqpsg.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.sxryk.cn/163mcreweog.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163hsjrwpaa.html

JS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163mqvhanqv.html

TS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163ppkiczry.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.xuanzx.com/163tpcyolhy.html

Go:   time.Now()
来源：http://www.xuanzx.com/163muwmlhmj.html

Ruby: Time.now
来源：http://www.xuanzx.com/163ohgwmdpt.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.sxryk.cn/163upcoyzqj.html

[J02] 格式化输出
来源：http://www.aibaodan.cn/163zsthojsy.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163zfjbuwxw.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163bnqzpgxa.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.sxryk.cn/163znkqkogd.html

TS:   d.toISOString()
来源：http://www.aibaodan.cn/163dlnabrch.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.aibaodan.cn/163jrttboxq.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.xuanzx.com/163intrnwhr.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163jblptwsn.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.sxryk.cn/163njmvbixv.html

[J03] 字符串解析为日期
来源：http://www.aibaodan.cn/163zfqedxrz.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.aibaodan.cn/163ieyrvebq.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.xuanzx.com/163pfyfzdez.html

JS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163jjtrkyfp.html

TS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163zvubvayp.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.xuanzx.com/163tlbkdthf.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.aibaodan.cn/163bhhvusxp.html

Ruby: Date.parse("2024-01-02")
来源：http://www.xuanzx.com/163dlnombtp.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.xuanzx.com/163uurtlbpb.html

[J04] 时间戳与日期互转
来源：http://www.sxryk.cn/163hcjwousf.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.aibaodan.cn/163rmbmbmlb.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.xuanzx.com/163xehrnhvq.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.aibaodan.cn/163oxrxoizm.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.sxryk.cn/163stcwtzro.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.aibaodan.cn/163tilryqcr.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.xuanzx.com/163rxaicjli.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.sxryk.cn/163dcxdatzt.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.aibaodan.cn/163bbqsuric.html

[J05] 时间加减（加 7 天）
来源：http://www.aibaodan.cn/163rspnjdoe.html

Py:   now + timedelta(days=7)
来源：http://www.xuanzx.com/163zgdaisvp.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.sxryk.cn/163vusuleid.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163llnzkocd.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163ctocjivx.html

Java: LocalDate.now().plusDays(7)
来源：http://www.aibaodan.cn/163kwcqofmk.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.sxryk.cn/163owpnorxb.html

Ruby: Time.now + 7 * 86400
来源：http://www.xuanzx.com/163qqijxwux.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.sxryk.cn/163ojypsvld.html

[J06] 计算两时间之差
来源：http://www.xuanzx.com/163nmgtekmr.html

Py:   (end - start).total_seconds()
来源：http://www.sxryk.cn/163chmlvvzi.html

PHP:  $end->diff($start)->days;
来源：http://www.xuanzx.com/163dypfwagu.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.aibaodan.cn/163phvxkesb.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.sxryk.cn/163vtoaeobm.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.xuanzx.com/163dgybauyv.html

Go:   end.Sub(start).Hours()
来源：http://www.xuanzx.com/163syhhsjue.html

Ruby: end - start                 # 返回秒数
来源：http://www.xuanzx.com/163pxlvfukg.html

C#:   (end - start).TotalSeconds
来源：http://www.aibaodan.cn/163hagschjd.html

[J07] 比较两个日期
来源：http://www.xuanzx.com/163lpmoyuoj.html

Py:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163lpzvgzou.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.xuanzx.com/163ehxreewp.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163oahrbwxc.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163fwfjzaso.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.sxryk.cn/163xtqwwnvc.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.aibaodan.cn/163tgldphjj.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163ogitdcgt.html

C#:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163ppgcmuaa.html

[J08] 提取年月日与星期
来源：http://www.xuanzx.com/163ojttqmvu.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.xuanzx.com/163rqxzouzb.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.xuanzx.com/163zjbtqane.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.sxryk.cn/163ccmcwphu.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.xuanzx.com/163lkcwftbt.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.xuanzx.com/163uhsduzxw.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.xuanzx.com/163xlqrgetc.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.sxryk.cn/163uswgoewp.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.aibaodan.cn/163mllbrnys.html

[J09] 时区处理
来源：http://www.xuanzx.com/163akbctgiq.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.aibaodan.cn/163ddwygjnl.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.xuanzx.com/163crttrady.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163obrxctee.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163yrnnuzob.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.xuanzx.com/163mftftyah.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.aibaodan.cn/163qwgcuqim.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.xuanzx.com/163ztgblwyw.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.sxryk.cn/163opapdjbl.html

[J10] 取今天 / 本月第一天
来源：http://www.xuanzx.com/163pxfjylmz.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.aibaodan.cn/163yahjjxcj.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.sxryk.cn/163nnlzewop.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.sxryk.cn/163khczldzw.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.aibaodan.cn/163dctssqbt.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.xuanzx.com/163uficcppw.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.xuanzx.com/163iqjyccqa.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.sxryk.cn/163ikxhkead.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.sxryk.cn/163opgbdrce.html

================================================================================
来源：http://www.xuanzx.com/163slmvjkak.html

K. JSON 与序列化
来源：http://www.aibaodan.cn/163oatpxefh.html

================================================================================
来源：http://www.sxryk.cn/163zamhhnda.html

[K01] 对象转 JSON 字符串
来源：http://www.aibaodan.cn/163vidnnzcb.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.sxryk.cn/163mtxvhjpg.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163ifiieznt.html

JS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163jgcureew.html

TS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163vnugrqok.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.aibaodan.cn/163ypdzddkx.html

Go:   json.Marshal(obj)
来源：http://www.xuanzx.com/163qdkaphcu.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.sxryk.cn/163bvyfounf.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.xuanzx.com/163upryyuow.html

[K02] JSON 字符串转对象
来源：http://www.xuanzx.com/163fljzdmwr.html

Py:   json.loads(s)
来源：http://www.xuanzx.com/163dmfdapgo.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.xuanzx.com/163nlvdafqc.html

JS:   JSON.parse(s)
来源：http://www.sxryk.cn/163nclteovm.html

TS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163xnyfmvej.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.sxryk.cn/163bwmtumsf.html

Go:   json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163udnmaitr.html

Ruby: JSON.parse(s)
来源：http://www.aibaodan.cn/163xuqwvrpz.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.xuanzx.com/163qprbcuot.html

[K03] JSON 美化输出（带缩进）
来源：http://www.aibaodan.cn/163gyjrnxmp.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.xuanzx.com/163dtsizmbp.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163mfpzyuhi.html


<!-- 参考信息 -->