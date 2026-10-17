外链999!wailian999！

Ruby: Color = %i[red green].freeze
来源：http://www.aibaodan.cn/163wumzxovv.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163vzoutmpt.html

[G16] 对象转数组 / 字典
来源：http://www.xuanzx.com/163etbwybur.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.sxryk.cn/163zmqufdmv.html

PHP:  get_object_vars($obj);
来源：http://www.aibaodan.cn/163ofszhjwa.html

JS:   Object.entries(obj)
来源：http://www.sxryk.cn/163kgpldplq.html

TS:   Object.entries(obj)
来源：http://www.xuanzx.com/163jbaexfpc.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.sxryk.cn/163thuymyyu.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.sxryk.cn/163zhjxzlss.html

Ruby: obj.instance_variables
来源：http://www.xuanzx.com/163bzwcutjh.html

C#:   // 用反射或 System.Text.Json
来源：http://www.sxryk.cn/163rdshobxa.html

================================================================================
来源：http://www.sxryk.cn/163bcwjogmr.html

H. 异常与错误处理
来源：http://www.xuanzx.com/163bsbantlj.html

================================================================================
来源：http://www.xuanzx.com/163skbveiji.html

[H01] try / catch 基础
来源：http://www.sxryk.cn/163mrnmxnpj.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.aibaodan.cn/163kpmhvjqo.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.sxryk.cn/163sdremczc.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163kbndovqd.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.sxryk.cn/163okyzswwm.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.sxryk.cn/163pkiuxxqr.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.aibaodan.cn/163dzuvjdfy.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.sxryk.cn/163wccqumcd.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.xuanzx.com/163ggrltmed.html

[H02] finally / ensure 收尾
来源：http://www.xuanzx.com/163xfwfbfzm.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.sxryk.cn/163lrkvsxfr.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163aubvlwbx.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163dbeclzff.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163lqeeiqhy.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163zhxxiray.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.aibaodan.cn/163uzbpxjos.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.xuanzx.com/163touqfhqa.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.xuanzx.com/163tcnzpzdc.html

[H03] 主动抛出异常
来源：http://www.sxryk.cn/163fgbepfue.html

Py:   raise ValueError("错误信息")
来源：http://www.aibaodan.cn/163tkidazrr.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.aibaodan.cn/163qmatqyni.html

JS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163urbxjwys.html

TS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163mxlqqhbm.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.xuanzx.com/163lkixutbh.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.sxryk.cn/163ukamzkye.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.xuanzx.com/163zzzmjske.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.xuanzx.com/163hmwmhcbv.html

[H04] 自定义异常类型
来源：http://www.sxryk.cn/163bttkbwbe.html

Py:   class MyError(Exception): pass
来源：http://www.aibaodan.cn/163uaqovovx.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.sxryk.cn/163pdzofswu.html

JS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163wmgobzga.html

TS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163efmhvyyg.html

Java: class MyException extends RuntimeException {}
来源：http://www.aibaodan.cn/163igkcfjse.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.xuanzx.com/163rkalopmh.html

Ruby: class MyError < StandardError; end
来源：http://www.aibaodan.cn/163fdmigcva.html

C#:   class MyException : Exception {}
来源：http://www.aibaodan.cn/163bikwtodg.html

[H05] 捕获特定类型
来源：http://www.aibaodan.cn/163vaghhvfg.html

Py:   except ValueError as e:
来源：http://www.xuanzx.com/163agfbwncb.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.aibaodan.cn/163ojvoukfz.html

JS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163tqwawglr.html

TS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163kqfouxva.html

Java: catch (IOException | SQLException e) {}
来源：http://www.xuanzx.com/163gelpklrz.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.sxryk.cn/163fvgebeqd.html

Ruby: rescue ArgumentError => e
来源：http://www.aibaodan.cn/163oshxjbsm.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.sxryk.cn/163tqmikdcq.html

[H06] 可选值 / 空值安全访问
来源：http://www.sxryk.cn/163lqlphosg.html

Py:   value = d.get("k") or default
来源：http://www.xuanzx.com/163xsirwygl.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.xuanzx.com/163jhzicjqv.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163suslmuvm.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163jhpmrgvb.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.xuanzx.com/163ssxmgcco.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.xuanzx.com/163imekywnn.html

Ruby: d&.dig(:a, :b)
来源：http://www.xuanzx.com/163ivdxonyp.html

C#:   obj?.A?.B ?? default
来源：http://www.sxryk.cn/163mhvngxqb.html

[H07] 断言
来源：http://www.xuanzx.com/163bbpwxabl.html

Py:   assert x > 0, "必须为正"
来源：http://www.xuanzx.com/163lzuttmee.html

PHP:  assert($x > 0);
来源：http://www.aibaodan.cn/163dqahplip.html

JS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163nmbxcsxs.html

TS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163kpfpvwfo.html

Java: assert x > 0 : "必须为正";
来源：http://www.sxryk.cn/163dclmbxkn.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.xuanzx.com/163advgewdc.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.aibaodan.cn/163yoebirkp.html

C#:   Debug.Assert(x > 0);
来源：http://www.aibaodan.cn/163dhzqmhzh.html

[H08] 获取错误信息与堆栈
来源：http://www.aibaodan.cn/163dngisaac.html

Py:   str(e);  traceback.format_exc()
来源：http://www.aibaodan.cn/163acifsemi.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.aibaodan.cn/163kpkzklrx.html

JS:   e.message;  e.stack
来源：http://www.aibaodan.cn/163gorbetbq.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.aibaodan.cn/163dokferyc.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.xuanzx.com/163jfowqkmj.html

Go:   err.Error()
来源：http://www.xuanzx.com/163fpzzmets.html

Ruby: e.message;  e.backtrace
来源：http://www.xuanzx.com/163ynvsdbix.html

C#:   e.Message;  e.StackTrace
来源：http://www.aibaodan.cn/163zysovgjq.html

[H09] 带错误码的异常
来源：http://www.sxryk.cn/163dfzammnk.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.aibaodan.cn/163wprvnuhd.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.sxryk.cn/163nwdjzvsa.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.aibaodan.cn/163wxqsikmb.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.sxryk.cn/163sffahdtz.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.aibaodan.cn/163jfexygmr.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.xuanzx.com/163xmrogcjb.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.aibaodan.cn/163pywajmbs.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.aibaodan.cn/163jkvuxvvm.html

[H10] 资源自动释放
来源：http://www.xuanzx.com/163hkcguovm.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.xuanzx.com/163ubwzmbwl.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.sxryk.cn/163msuhuwkk.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163jmkljnqa.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163uytgsqhq.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.xuanzx.com/163zkavduxn.html

Go:   defer f.Close()
来源：http://www.sxryk.cn/163dpfellbl.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.sxryk.cn/163pkmzndje.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.xuanzx.com/163mvbyoxwf.html

================================================================================
来源：http://www.sxryk.cn/163cmgxjwsg.html

I. 正则表达式
来源：http://www.xuanzx.com/163rrxlvjln.html

================================================================================
来源：http://www.xuanzx.com/163frwfopuh.html

[I01] 判断是否匹配
来源：http://www.aibaodan.cn/163ghuzuzqw.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.sxryk.cn/163acxulhsp.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.xuanzx.com/163czixsson.html

JS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163ttggzbla.html

TS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163vsfchrgx.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.xuanzx.com/163twoafonb.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.xuanzx.com/163vfscoant.html

Ruby: s.match?(/\d+/)
来源：http://www.aibaodan.cn/163kfvrkjlf.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.sxryk.cn/163xuvkbflz.html

[I02] 提取所有匹配
来源：http://www.aibaodan.cn/163opvwwipn.html

Py:   re.findall(r"\d+", s)
来源：http://www.xuanzx.com/163xmeyrmey.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.aibaodan.cn/163pyyscbte.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.sxryk.cn/163lbzgixks.html

TS:   s.match(/\d+/g)
来源：http://www.xuanzx.com/163xsbgafvg.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.xuanzx.com/163eeaxzjfc.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.aibaodan.cn/163tztgwehj.html

Ruby: s.scan(/\d+/)
来源：http://www.aibaodan.cn/163gnfqivzh.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.aibaodan.cn/163uiurigwm.html

[I03] 提取捕获分组
来源：http://www.xuanzx.com/163nfbinyws.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.sxryk.cn/163spjtdqhv.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.sxryk.cn/163tgfndcrl.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.xuanzx.com/163zqedyiyb.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.aibaodan.cn/163rnxadmiw.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.sxryk.cn/163pxcjnsnh.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.xuanzx.com/163satncnis.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.sxryk.cn/163ulhajrwj.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.sxryk.cn/163ujwklyps.html

[I04] 正则替换
来源：http://www.xuanzx.com/163xnlrwjfq.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.sxryk.cn/163qxmhsozh.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163talvwtts.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163ccexqmqh.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163vkolsupq.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.sxryk.cn/163wsykdxdu.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.aibaodan.cn/163tsoxepbq.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.xuanzx.com/163ixjnidfm.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.aibaodan.cn/163pywuuyne.html

[I05] 按正则拆分
来源：http://www.aibaodan.cn/163jnynuioj.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.sxryk.cn/163knaqpknv.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.aibaodan.cn/163ujvyrkwu.html

JS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163ltsnbunx.html

TS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163nniwbwzq.html

Java: s.split("\\s*,\\s*")
来源：http://www.sxryk.cn/163tidnmack.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.sxryk.cn/163qyippzwt.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163ofmuickk.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.sxryk.cn/163xlnqggty.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.aibaodan.cn/163xxttregl.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163sizdkwrn.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.aibaodan.cn/163vwtkxuvi.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163ctnuistb.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163bdpsdvph.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.aibaodan.cn/163fpirsnfm.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.aibaodan.cn/163qawvsaaz.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.xuanzx.com/163zyboanob.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163kgqosjig.html

[I07] 忽略大小写与多行模式
来源：http://www.sxryk.cn/163erajjzme.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.xuanzx.com/163frpbskmi.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.xuanzx.com/163tkplpvml.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.aibaodan.cn/163fdoniyxy.html

TS:   /error/gim
来源：http://www.sxryk.cn/163hcsxvont.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.aibaodan.cn/163hdmbgfev.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.sxryk.cn/163pyyaxmmd.html

Ruby: s.scan(/error/i)
来源：http://www.sxryk.cn/163pkgemjld.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.xuanzx.com/163mwxrljqr.html

[I08] 贪婪与非贪婪匹配
来源：http://www.aibaodan.cn/163pgraoepk.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.aibaodan.cn/163dtfbsbyh.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.xuanzx.com/163wlwbhzzb.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163hgytmxau.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163ysnhbnxg.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.xuanzx.com/163gyqrxokr.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.xuanzx.com/163gzsqwmrn.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.xuanzx.com/163lbbhrbnt.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.sxryk.cn/163wacwygjt.html

================================================================================
来源：http://www.xuanzx.com/163qnhfvocl.html

J. 日期与时间
来源：http://www.xuanzx.com/163pzcqgnct.html

================================================================================
来源：http://www.aibaodan.cn/163gjejcnjo.html

[J01] 获取当前时间
来源：http://www.xuanzx.com/163beukcslr.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.xuanzx.com/163btqivkrf.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163rwwlayjo.html

JS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163raimtrzt.html

TS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163vydzylug.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.sxryk.cn/163tzftuooo.html

Go:   time.Now()
来源：http://www.aibaodan.cn/163uywuzkep.html

Ruby: Time.now
来源：http://www.sxryk.cn/163jatlfvcc.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.aibaodan.cn/163wberxecx.html

[J02] 格式化输出
来源：http://www.aibaodan.cn/163fvcmmqvm.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163ubpxkplk.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163sgoqodei.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.aibaodan.cn/163hgflavwm.html

TS:   d.toISOString()
来源：http://www.aibaodan.cn/163zcudigxc.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.aibaodan.cn/163acvulcuw.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.sxryk.cn/163frxqsxas.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163vrqnwidb.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.aibaodan.cn/163bkownvzn.html

[J03] 字符串解析为日期
来源：http://www.sxryk.cn/163vrmkggty.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.xuanzx.com/163btkuzlro.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.sxryk.cn/163iocbmbfb.html

JS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163xlmlotsp.html

TS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163yrwjsfoc.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.aibaodan.cn/163pdlrcuqd.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.xuanzx.com/163txuoqqfu.html

Ruby: Date.parse("2024-01-02")
来源：http://www.xuanzx.com/163izzilvcj.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.sxryk.cn/163hamrbsoc.html

[J04] 时间戳与日期互转
来源：http://www.xuanzx.com/163lwmizvts.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.sxryk.cn/163qlabmslp.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.aibaodan.cn/163utunyyyg.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.xuanzx.com/163acnwmsoq.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.xuanzx.com/163dehuqnih.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.xuanzx.com/163kzclztms.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.aibaodan.cn/163cdntchqm.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.xuanzx.com/163araucdhf.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.aibaodan.cn/163zymtqpbi.html

[J05] 时间加减（加 7 天）
来源：http://www.aibaodan.cn/163lfgeqhgn.html

Py:   now + timedelta(days=7)
来源：http://www.aibaodan.cn/163yhleezbr.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.aibaodan.cn/163xcxqxigs.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163hpxzbmwx.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163ulaqyacg.html

Java: LocalDate.now().plusDays(7)
来源：http://www.sxryk.cn/163xsmhtaea.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.aibaodan.cn/163pvjtfmio.html

Ruby: Time.now + 7 * 86400
来源：http://www.aibaodan.cn/163kygcsmgt.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.xuanzx.com/163npkhgzdm.html

[J06] 计算两时间之差
来源：http://www.sxryk.cn/163ubrcdemx.html

Py:   (end - start).total_seconds()
来源：http://www.xuanzx.com/163mfuuvtat.html

PHP:  $end->diff($start)->days;
来源：http://www.sxryk.cn/163kflquvrh.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.xuanzx.com/163znnpoout.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.sxryk.cn/163hjaxqejf.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.aibaodan.cn/163sqkvukiv.html

Go:   end.Sub(start).Hours()
来源：http://www.aibaodan.cn/163ilwfvhlh.html

Ruby: end - start                 # 返回秒数
来源：http://www.sxryk.cn/163ascqfkpi.html

C#:   (end - start).TotalSeconds
来源：http://www.sxryk.cn/163xjkefuec.html

[J07] 比较两个日期
来源：http://www.sxryk.cn/163lojszcft.html

Py:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163xmffdhhl.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.sxryk.cn/163ukfeuidu.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163zvpzrgcc.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163zpijqbfk.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.xuanzx.com/163wejohudl.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.sxryk.cn/163esxeigwk.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163oiuvgwdx.html

C#:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163fzigrunj.html

[J08] 提取年月日与星期
来源：http://www.sxryk.cn/163hbdubwyq.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.sxryk.cn/163ledclctt.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.aibaodan.cn/163ipqjpzmf.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.aibaodan.cn/163aubdcjgw.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.aibaodan.cn/163ichbrphi.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.aibaodan.cn/163digrlrrz.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.aibaodan.cn/163vfmhljtr.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.aibaodan.cn/163xnasmhvv.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.sxryk.cn/163xrrdptmn.html

[J09] 时区处理
来源：http://www.xuanzx.com/163jebnszkr.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.aibaodan.cn/163redejmzz.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.aibaodan.cn/163kejfyblj.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163biiojyim.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163txgqumda.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.aibaodan.cn/163jgyzgkbq.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.aibaodan.cn/163aaqxkhgr.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.aibaodan.cn/163ydnyxfkn.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.sxryk.cn/163klvebpye.html

[J10] 取今天 / 本月第一天
来源：http://www.sxryk.cn/163rsorzfhs.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.xuanzx.com/163wshdhfcn.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.xuanzx.com/163qespgixb.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.aibaodan.cn/163vxtkctpu.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.xuanzx.com/163dsgitgwy.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.sxryk.cn/163hpafrvyz.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.aibaodan.cn/163fapwndlg.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.xuanzx.com/163omujpoed.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.xuanzx.com/163daijjlzn.html

================================================================================
来源：http://www.xuanzx.com/163upkslgks.html

K. JSON 与序列化
来源：http://www.sxryk.cn/163vegkttyt.html

================================================================================
来源：http://www.aibaodan.cn/163rzbnlzyp.html

[K01] 对象转 JSON 字符串
来源：http://www.sxryk.cn/163czlvqeye.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.aibaodan.cn/163awykgqpp.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163gfswnkte.html

JS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163xtpmrxmz.html

TS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163wcybfuvv.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.aibaodan.cn/163ojypinwn.html

Go:   json.Marshal(obj)
来源：http://www.sxryk.cn/163bqamlkeu.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.xuanzx.com/163bhduujau.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.xuanzx.com/163kzsqrsrl.html

[K02] JSON 字符串转对象
来源：http://www.sxryk.cn/163bvuxkjuf.html

Py:   json.loads(s)
来源：http://www.xuanzx.com/163tazvfpcy.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.xuanzx.com/163sikjadtp.html

JS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163jqpsobje.html

TS:   JSON.parse(s)
来源：http://www.sxryk.cn/163hwtkvrxf.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.sxryk.cn/163etogkots.html

Go:   json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163drjcodzo.html

Ruby: JSON.parse(s)
来源：http://www.xuanzx.com/163uohrkleh.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.xuanzx.com/163bqnfmfpr.html

[K03] JSON 美化输出（带缩进）
来源：http://www.aibaodan.cn/163hexzgovb.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.sxryk.cn/163gpfzpdno.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163wxtqkish.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163cvfcpndw.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163swssndut.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.aibaodan.cn/163eikiekcg.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.xuanzx.com/163uhgaoiat.html


<!-- 参考信息 -->