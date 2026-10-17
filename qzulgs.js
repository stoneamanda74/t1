外链999!wailian999！

Ruby: Color = %i[red green].freeze
来源：http://www.sxryk.cn/163ctbcwvaq.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163boufycfh.html

[G16] 对象转数组 / 字典
来源：http://www.xuanzx.com/163thurjikd.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.aibaodan.cn/163cjcfdyzp.html

PHP:  get_object_vars($obj);
来源：http://www.aibaodan.cn/163szfihjgw.html

JS:   Object.entries(obj)
来源：http://www.xuanzx.com/163fujtsyah.html

TS:   Object.entries(obj)
来源：http://www.xuanzx.com/163xfiphqxd.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.sxryk.cn/163fdncrcae.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.sxryk.cn/163kccqrlfv.html

Ruby: obj.instance_variables
来源：http://www.aibaodan.cn/163ujfovird.html

C#:   // 用反射或 System.Text.Json
来源：http://www.xuanzx.com/163ofufotzs.html

================================================================================
来源：http://www.aibaodan.cn/163jteybuee.html

H. 异常与错误处理
来源：http://www.aibaodan.cn/163dpgtnlfc.html

================================================================================
来源：http://www.xuanzx.com/163uzjxlioy.html

[H01] try / catch 基础
来源：http://www.aibaodan.cn/163cmfjfkqx.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.xuanzx.com/163zpcdqaxp.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.aibaodan.cn/163orustthe.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163isdutlri.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.xuanzx.com/163wzgvzggt.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.aibaodan.cn/163nlqaehfd.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.sxryk.cn/163mvpqoxmy.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.sxryk.cn/163icscxbkr.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.sxryk.cn/163gdyamyij.html

[H02] finally / ensure 收尾
来源：http://www.aibaodan.cn/163mlychtir.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.xuanzx.com/163rhuyheiq.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163towzrufu.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163ihilaowg.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163tbugktau.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163miyfizbn.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.xuanzx.com/163dqqkxqvi.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.aibaodan.cn/163zfavgjnm.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.sxryk.cn/163lmhqmwkd.html

[H03] 主动抛出异常
来源：http://www.xuanzx.com/163gpjyuiwy.html

Py:   raise ValueError("错误信息")
来源：http://www.aibaodan.cn/163zftwqzyw.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.xuanzx.com/163jkswrmnt.html

JS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163fhdwscal.html

TS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163yeahlvvv.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.xuanzx.com/163nmjqyvkb.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.aibaodan.cn/163cdnvbikr.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.aibaodan.cn/163ojcmmpaj.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.xuanzx.com/163agldgtdk.html

[H04] 自定义异常类型
来源：http://www.xuanzx.com/163kldojhoh.html

Py:   class MyError(Exception): pass
来源：http://www.aibaodan.cn/163acudjjej.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.xuanzx.com/163jehaqqvt.html

JS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163oyjrvbzq.html

TS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163bysgpfiv.html

Java: class MyException extends RuntimeException {}
来源：http://www.sxryk.cn/163idseubgq.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.aibaodan.cn/163doazhzxr.html

Ruby: class MyError < StandardError; end
来源：http://www.aibaodan.cn/163zzckjjyg.html

C#:   class MyException : Exception {}
来源：http://www.xuanzx.com/163ioerekzd.html

[H05] 捕获特定类型
来源：http://www.aibaodan.cn/163uszwzmbf.html

Py:   except ValueError as e:
来源：http://www.sxryk.cn/163cmcvnvqc.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.aibaodan.cn/163drwrpslv.html

JS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163xahivfhd.html

TS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163phesbmuz.html

Java: catch (IOException | SQLException e) {}
来源：http://www.aibaodan.cn/163cjwlktmh.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.aibaodan.cn/163cekforjs.html

Ruby: rescue ArgumentError => e
来源：http://www.xuanzx.com/163heqfyiuv.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.aibaodan.cn/163suaouxks.html

[H06] 可选值 / 空值安全访问
来源：http://www.sxryk.cn/163ixvzlpih.html

Py:   value = d.get("k") or default
来源：http://www.sxryk.cn/163qzjrliek.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.xuanzx.com/163bstvuknu.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163qbqoossj.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163xukzgbfg.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.aibaodan.cn/163tyhnvqsl.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.sxryk.cn/163zvbonhcg.html

Ruby: d&.dig(:a, :b)
来源：http://www.sxryk.cn/163lriyifec.html

C#:   obj?.A?.B ?? default
来源：http://www.sxryk.cn/163otadjpur.html

[H07] 断言
来源：http://www.xuanzx.com/163lorqkdgf.html

Py:   assert x > 0, "必须为正"
来源：http://www.aibaodan.cn/163crsztekj.html

PHP:  assert($x > 0);
来源：http://www.aibaodan.cn/163weipvdep.html

JS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163cbiwkuwh.html

TS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163lelnrmfq.html

Java: assert x > 0 : "必须为正";
来源：http://www.sxryk.cn/163hpbeixfk.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.aibaodan.cn/163gkpzmine.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.sxryk.cn/163huqnhrrt.html

C#:   Debug.Assert(x > 0);
来源：http://www.sxryk.cn/163dfqlxwzk.html

[H08] 获取错误信息与堆栈
来源：http://www.sxryk.cn/163drknzowk.html

Py:   str(e);  traceback.format_exc()
来源：http://www.xuanzx.com/163hntrqhey.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.xuanzx.com/163eopehbsk.html

JS:   e.message;  e.stack
来源：http://www.aibaodan.cn/163uuwstjvx.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.aibaodan.cn/163piudaozo.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.sxryk.cn/163bgztrugn.html

Go:   err.Error()
来源：http://www.sxryk.cn/163sjbjfyie.html

Ruby: e.message;  e.backtrace
来源：http://www.xuanzx.com/163ygpswfjc.html

C#:   e.Message;  e.StackTrace
来源：http://www.xuanzx.com/163wprcaivp.html

[H09] 带错误码的异常
来源：http://www.sxryk.cn/163fscaswpq.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.sxryk.cn/163wpwzwohq.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.xuanzx.com/163tgsjewds.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.aibaodan.cn/163slzbckvs.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.aibaodan.cn/163hhitwbtu.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.xuanzx.com/163sjcnnobg.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.sxryk.cn/163ogqqxdjd.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.xuanzx.com/163mscaegir.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.aibaodan.cn/163dlfjzgmc.html

[H10] 资源自动释放
来源：http://www.sxryk.cn/163ziuuxmjp.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.xuanzx.com/163alxacpfy.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.aibaodan.cn/163pbdpqcyo.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163oqznbzkl.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163iiiucbkh.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.xuanzx.com/163xrmmktuq.html

Go:   defer f.Close()
来源：http://www.xuanzx.com/163tabrjidt.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.aibaodan.cn/163gwzkfeff.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.aibaodan.cn/163fvavxjou.html

================================================================================
来源：http://www.xuanzx.com/163iynciiaq.html

I. 正则表达式
来源：http://www.xuanzx.com/163ddgmpjry.html

================================================================================
来源：http://www.aibaodan.cn/163fpwcrlwd.html

[I01] 判断是否匹配
来源：http://www.xuanzx.com/163dbjpmxqe.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.sxryk.cn/163acahqnip.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.aibaodan.cn/163njsdatds.html

JS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163vkevbfya.html

TS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163lmwrvdfc.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.xuanzx.com/163gyfvyogw.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.xuanzx.com/163poqpzcsw.html

Ruby: s.match?(/\d+/)
来源：http://www.sxryk.cn/163htiyfaeb.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.sxryk.cn/163gklavolb.html

[I02] 提取所有匹配
来源：http://www.xuanzx.com/163sfbichgy.html

Py:   re.findall(r"\d+", s)
来源：http://www.aibaodan.cn/163squufitb.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.aibaodan.cn/163pdhubrgu.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.sxryk.cn/163agpmedyj.html

TS:   s.match(/\d+/g)
来源：http://www.xuanzx.com/163xomegbyj.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.aibaodan.cn/163nobigmkl.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.xuanzx.com/163tucxewbs.html

Ruby: s.scan(/\d+/)
来源：http://www.aibaodan.cn/163wlfwvvfe.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.aibaodan.cn/163pweeunqh.html

[I03] 提取捕获分组
来源：http://www.aibaodan.cn/163dwuyxhjj.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.sxryk.cn/163dwcjajvg.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.xuanzx.com/163ykgvgipi.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.aibaodan.cn/163blvlmzcy.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.aibaodan.cn/163yjxmlnps.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.aibaodan.cn/163qpsbiccy.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.xuanzx.com/163yyogzhac.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.sxryk.cn/163yndaoyfe.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.sxryk.cn/163genfnumw.html

[I04] 正则替换
来源：http://www.aibaodan.cn/163iukyuadj.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.aibaodan.cn/163mszmayzx.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163rwpdachs.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163ypdwpumm.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163avwwpnkl.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.xuanzx.com/163ajbyioec.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.sxryk.cn/163qsyzhmfz.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.xuanzx.com/163pztymfjk.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.sxryk.cn/163icufaroo.html

[I05] 按正则拆分
来源：http://www.aibaodan.cn/163ensedydw.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.aibaodan.cn/163ohtckqfi.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.xuanzx.com/163vpgvlqtk.html

JS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163gwpfybvc.html

TS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163phecfzgf.html

Java: s.split("\\s*,\\s*")
来源：http://www.xuanzx.com/163jvsovsri.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.sxryk.cn/163gwbzmlex.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163bwoxxqpv.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.sxryk.cn/163gvykageg.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.aibaodan.cn/163tqlwcofy.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163cymdvisg.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.xuanzx.com/163noyhjwbu.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163uehqbatd.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163gycethmh.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.aibaodan.cn/163jstxjnub.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.xuanzx.com/163cogfklwi.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.xuanzx.com/163wknozcrz.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163tcycomse.html

[I07] 忽略大小写与多行模式
来源：http://www.aibaodan.cn/163hdldecpu.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.sxryk.cn/163zncxndxc.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.aibaodan.cn/163dlmynnmv.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.xuanzx.com/163gmgznrgy.html

TS:   /error/gim
来源：http://www.sxryk.cn/163twnzfzix.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.xuanzx.com/163nvmgogig.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.aibaodan.cn/163syabbcrr.html

Ruby: s.scan(/error/i)
来源：http://www.xuanzx.com/163ctcjpabn.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.xuanzx.com/163camxcyjo.html

[I08] 贪婪与非贪婪匹配
来源：http://www.aibaodan.cn/163peajlmdv.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.aibaodan.cn/163ocpudeod.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.xuanzx.com/163qynvenvj.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163pkxtewxh.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163xrfitndm.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.xuanzx.com/163sfodfdoz.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.aibaodan.cn/163pgassksh.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.xuanzx.com/163alaadywe.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.sxryk.cn/163ixedrcfk.html

================================================================================
来源：http://www.xuanzx.com/163mahsahnd.html

J. 日期与时间
来源：http://www.xuanzx.com/163rhdnrsoa.html

================================================================================
来源：http://www.xuanzx.com/163kfknstza.html

[J01] 获取当前时间
来源：http://www.sxryk.cn/163xqcaembi.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.xuanzx.com/163jkeqwdot.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163cpwkkxkx.html

JS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163tupfzfcs.html

TS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163ciyfwkdk.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.aibaodan.cn/163wnipcuyz.html

Go:   time.Now()
来源：http://www.xuanzx.com/163urrqjpid.html

Ruby: Time.now
来源：http://www.aibaodan.cn/163xupzdygc.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.sxryk.cn/163bhtpikui.html

[J02] 格式化输出
来源：http://www.aibaodan.cn/163grdavbec.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163pattbxaj.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163mnywmfim.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.xuanzx.com/163qutyuxrr.html

TS:   d.toISOString()
来源：http://www.sxryk.cn/163gadkimul.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.sxryk.cn/163ysvlqmal.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.sxryk.cn/163wytlmrrc.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163wclnvmgy.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.xuanzx.com/163qixtkcfg.html

[J03] 字符串解析为日期
来源：http://www.aibaodan.cn/163wlgbdjyo.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.aibaodan.cn/163uhsdqukz.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.xuanzx.com/163miuhbypr.html

JS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163ifmcnsxs.html

TS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163hedznzls.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.aibaodan.cn/163qglvjgvw.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.sxryk.cn/163bfoglcug.html

Ruby: Date.parse("2024-01-02")
来源：http://www.aibaodan.cn/163qffmtqio.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.xuanzx.com/163ymrikprf.html

[J04] 时间戳与日期互转
来源：http://www.xuanzx.com/163xvpfrows.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.aibaodan.cn/163xnzmvhin.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.xuanzx.com/163zazdtwgh.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.sxryk.cn/163psoeylby.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.xuanzx.com/163ychtluvm.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.xuanzx.com/163xvauvnwb.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.aibaodan.cn/163lexqlbwg.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.xuanzx.com/163veqsidhz.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.xuanzx.com/163nvvqafve.html

[J05] 时间加减（加 7 天）
来源：http://www.xuanzx.com/163rlvnhtic.html

Py:   now + timedelta(days=7)
来源：http://www.xuanzx.com/163hjuuiuzs.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.aibaodan.cn/163tghneind.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163hnvirupk.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163fwditxus.html

Java: LocalDate.now().plusDays(7)
来源：http://www.aibaodan.cn/163ilaaxemd.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.aibaodan.cn/163elfuopsn.html

Ruby: Time.now + 7 * 86400
来源：http://www.sxryk.cn/163qvzgmrnt.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.sxryk.cn/163vwgbuxor.html

[J06] 计算两时间之差
来源：http://www.aibaodan.cn/163mjtectxw.html

Py:   (end - start).total_seconds()
来源：http://www.aibaodan.cn/163brhtjlgo.html

PHP:  $end->diff($start)->days;
来源：http://www.xuanzx.com/163lswyifwk.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.sxryk.cn/163cuvcdxag.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.aibaodan.cn/163tbjwkcvm.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.sxryk.cn/163agikpssu.html

Go:   end.Sub(start).Hours()
来源：http://www.aibaodan.cn/163mbgtdriu.html

Ruby: end - start                 # 返回秒数
来源：http://www.xuanzx.com/163ugurjeun.html

C#:   (end - start).TotalSeconds
来源：http://www.aibaodan.cn/163xevmftzc.html

[J07] 比较两个日期
来源：http://www.xuanzx.com/163dbuvluur.html

Py:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163lfkdwpuh.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.xuanzx.com/163utiaighr.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163tefmnsyz.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163mykmdlnc.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.aibaodan.cn/163nswtkwaq.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.aibaodan.cn/163xyfujrad.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163inkxmcio.html

C#:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163jwnwwmek.html

[J08] 提取年月日与星期
来源：http://www.sxryk.cn/163ijcsfrvy.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.sxryk.cn/163mtzwvrck.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.xuanzx.com/163vnvaiyup.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.aibaodan.cn/163xiyftcqe.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.xuanzx.com/163clwfgdzg.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.xuanzx.com/163dltntyvr.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.sxryk.cn/163ftfyvxga.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.sxryk.cn/163dnahfxec.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.sxryk.cn/163lazklhhg.html

[J09] 时区处理
来源：http://www.xuanzx.com/163uchqvsje.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.xuanzx.com/163bvxwwrup.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.xuanzx.com/163zibykudo.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163eenregpi.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163dmfvldoo.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.aibaodan.cn/163qskakutn.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.xuanzx.com/163goxwrfkx.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.aibaodan.cn/163vhbwgpik.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.xuanzx.com/163vyjaivqf.html

[J10] 取今天 / 本月第一天
来源：http://www.sxryk.cn/163htxcnjbl.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.sxryk.cn/163hjwouocw.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.aibaodan.cn/163znlulwtm.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.sxryk.cn/163iqxwbwsz.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.aibaodan.cn/163ufrmmaue.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.sxryk.cn/163pixnbyam.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.sxryk.cn/163cpldnewe.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.sxryk.cn/163sdawwgan.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.aibaodan.cn/163zswouomn.html

================================================================================
来源：http://www.aibaodan.cn/163ousssxla.html

K. JSON 与序列化
来源：http://www.sxryk.cn/163qoflmxzy.html

================================================================================
来源：http://www.aibaodan.cn/163nzdtmxml.html

[K01] 对象转 JSON 字符串
来源：http://www.xuanzx.com/163hguchvau.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.sxryk.cn/163hjlonvcb.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163zrmopxbt.html

JS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163mmushihg.html

TS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163louuntip.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.sxryk.cn/163kifuuvew.html

Go:   json.Marshal(obj)
来源：http://www.sxryk.cn/163yjvhyuyv.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.sxryk.cn/163dvtegdtc.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.sxryk.cn/163ebffncjx.html

[K02] JSON 字符串转对象
来源：http://www.xuanzx.com/163rmyxojcc.html

Py:   json.loads(s)
来源：http://www.aibaodan.cn/163rpevhguv.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.sxryk.cn/163igfojuns.html

JS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163klazemom.html

TS:   JSON.parse(s)
来源：http://www.sxryk.cn/163yfpgmowv.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.xuanzx.com/163yzgwturz.html

Go:   json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163fkkigyku.html

Ruby: JSON.parse(s)
来源：http://www.xuanzx.com/163nofqrrbv.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.xuanzx.com/163eacfkowe.html

[K03] JSON 美化输出（带缩进）
来源：http://www.sxryk.cn/163cdbnbweo.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.aibaodan.cn/163sxwrkhzs.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163accxhuts.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163ebspzpvk.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163ctxbgcmt.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.aibaodan.cn/163aigupury.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.sxryk.cn/163hzqussfm.html


<!-- 参考信息 -->