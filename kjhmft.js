外链999!wailian999！

Ruby: Color = %i[red green].freeze
来源：http://www.aibaodan.cn/163onsmocaw.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163jdznnews.html

[G16] 对象转数组 / 字典
来源：http://www.sxryk.cn/163xukujkgi.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.aibaodan.cn/163abcdhgaq.html

PHP:  get_object_vars($obj);
来源：http://www.aibaodan.cn/163fcdxfarf.html

JS:   Object.entries(obj)
来源：http://www.xuanzx.com/163uxifuaqs.html

TS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163ckdggpvq.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.aibaodan.cn/163pzozlxhb.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.sxryk.cn/163ezvpxmeh.html

Ruby: obj.instance_variables
来源：http://www.sxryk.cn/163yqcmkpax.html

C#:   // 用反射或 System.Text.Json
来源：http://www.sxryk.cn/163lngzjpmw.html

================================================================================
来源：http://www.aibaodan.cn/163mwrhukvm.html

H. 异常与错误处理
来源：http://www.aibaodan.cn/163qnjhcigx.html

================================================================================
来源：http://www.aibaodan.cn/163ehpxqkmk.html

[H01] try / catch 基础
来源：http://www.aibaodan.cn/163turnxkxz.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.aibaodan.cn/163izvagjpp.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.aibaodan.cn/163hxogsrdu.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163brfljomg.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.aibaodan.cn/163gxkfhewm.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.aibaodan.cn/163gwkbughq.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.aibaodan.cn/163zmzounyu.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.sxryk.cn/163ywgvtlhq.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.sxryk.cn/163caryccgw.html

[H02] finally / ensure 收尾
来源：http://www.sxryk.cn/163gkicbmwn.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.aibaodan.cn/163plafeivv.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163mqcxefbq.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163oupqevee.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163fxbcpdud.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163lthajfut.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.xuanzx.com/163ejlbepzc.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.sxryk.cn/163cwpjjrhe.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.sxryk.cn/163qdxmoisf.html

[H03] 主动抛出异常
来源：http://www.xuanzx.com/163xetmxrxz.html

Py:   raise ValueError("错误信息")
来源：http://www.sxryk.cn/163jiolhwrv.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.aibaodan.cn/163rngbtlhf.html

JS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163suoucpye.html

TS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163gtslsqpp.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.aibaodan.cn/163ptgvymxm.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.aibaodan.cn/163bbwmjckj.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.aibaodan.cn/163ghacidxc.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.xuanzx.com/163dbfyqwqf.html

[H04] 自定义异常类型
来源：http://www.xuanzx.com/163rnxjaswi.html

Py:   class MyError(Exception): pass
来源：http://www.aibaodan.cn/163pizvvgpl.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.xuanzx.com/163hnrrhfsq.html

JS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163aktyeefq.html

TS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163ppjcsqbj.html

Java: class MyException extends RuntimeException {}
来源：http://www.aibaodan.cn/163sgvuebpy.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.xuanzx.com/163mqncgzvy.html

Ruby: class MyError < StandardError; end
来源：http://www.sxryk.cn/163iyfmiydv.html

C#:   class MyException : Exception {}
来源：http://www.sxryk.cn/163kztqndio.html

[H05] 捕获特定类型
来源：http://www.sxryk.cn/163acuevpcc.html

Py:   except ValueError as e:
来源：http://www.aibaodan.cn/163kngxucvr.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.xuanzx.com/163nkpvxfbp.html

JS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163jhvamlqn.html

TS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163juketbir.html

Java: catch (IOException | SQLException e) {}
来源：http://www.sxryk.cn/163cuutertp.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.aibaodan.cn/163gehybtnt.html

Ruby: rescue ArgumentError => e
来源：http://www.xuanzx.com/163cyqybmjn.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.sxryk.cn/163mpcfxhix.html

[H06] 可选值 / 空值安全访问
来源：http://www.aibaodan.cn/163ppveezui.html

Py:   value = d.get("k") or default
来源：http://www.aibaodan.cn/163jsfmjsdn.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.aibaodan.cn/163vkmvnzzw.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163wwpwqetn.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163miygjzqt.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.xuanzx.com/163ojxowozc.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.aibaodan.cn/163uhkjlybh.html

Ruby: d&.dig(:a, :b)
来源：http://www.xuanzx.com/163cjombqkl.html

C#:   obj?.A?.B ?? default
来源：http://www.xuanzx.com/163uxyssgzb.html

[H07] 断言
来源：http://www.xuanzx.com/163qgnhduvu.html

Py:   assert x > 0, "必须为正"
来源：http://www.aibaodan.cn/163lxuxidss.html

PHP:  assert($x > 0);
来源：http://www.xuanzx.com/163ikofxyke.html

JS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163hvhyhojk.html

TS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163ksajsius.html

Java: assert x > 0 : "必须为正";
来源：http://www.xuanzx.com/163mreclopm.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.xuanzx.com/163lmpdtiyc.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.xuanzx.com/163rfvhbygl.html

C#:   Debug.Assert(x > 0);
来源：http://www.sxryk.cn/163lemcrakp.html

[H08] 获取错误信息与堆栈
来源：http://www.xuanzx.com/163maswancg.html

Py:   str(e);  traceback.format_exc()
来源：http://www.xuanzx.com/163rcrcnmkl.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.xuanzx.com/163manaznqw.html

JS:   e.message;  e.stack
来源：http://www.aibaodan.cn/163elxwfbxy.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.xuanzx.com/163wamisrhl.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.aibaodan.cn/163dcdtmhcg.html

Go:   err.Error()
来源：http://www.sxryk.cn/163busrggbw.html

Ruby: e.message;  e.backtrace
来源：http://www.sxryk.cn/163rnybhnup.html

C#:   e.Message;  e.StackTrace
来源：http://www.xuanzx.com/163gboqwfwu.html

[H09] 带错误码的异常
来源：http://www.aibaodan.cn/163odckvzrc.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.sxryk.cn/163jpzdolkj.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.aibaodan.cn/163ojjianqd.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.sxryk.cn/163plcrxwvq.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.xuanzx.com/163ugvcttml.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.aibaodan.cn/163pjnxzcpa.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.sxryk.cn/163mgpqvytp.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.aibaodan.cn/163ggtgjnnh.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.aibaodan.cn/163nqndfmrh.html

[H10] 资源自动释放
来源：http://www.sxryk.cn/163pcbftjox.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.xuanzx.com/163rzopmksm.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.sxryk.cn/163taymmfcd.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163tupfutbx.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163fpqbhylq.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.sxryk.cn/163yoqpkuzc.html

Go:   defer f.Close()
来源：http://www.xuanzx.com/163csydqvxp.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.aibaodan.cn/163ykceewqp.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.xuanzx.com/163bhyqhetr.html

================================================================================
来源：http://www.aibaodan.cn/163ixbndfqp.html

I. 正则表达式
来源：http://www.sxryk.cn/163aaqrvcms.html

================================================================================
来源：http://www.sxryk.cn/163maziingq.html

[I01] 判断是否匹配
来源：http://www.aibaodan.cn/163tqbvobzb.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.sxryk.cn/163jtwdddfo.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.xuanzx.com/163szidzzuh.html

JS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163yyhhtqrn.html

TS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163mmmvtqti.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.sxryk.cn/163gfobjyae.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.aibaodan.cn/163iiydqzxt.html

Ruby: s.match?(/\d+/)
来源：http://www.sxryk.cn/163pmxiwhub.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.sxryk.cn/163hsczshvh.html

[I02] 提取所有匹配
来源：http://www.aibaodan.cn/163jiavibbv.html

Py:   re.findall(r"\d+", s)
来源：http://www.aibaodan.cn/163mrkuevua.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.aibaodan.cn/163nbdkuvle.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.sxryk.cn/163jwvcnenv.html

TS:   s.match(/\d+/g)
来源：http://www.aibaodan.cn/163ylgehahd.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.sxryk.cn/163qaxextpf.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.aibaodan.cn/163xmodmosy.html

Ruby: s.scan(/\d+/)
来源：http://www.sxryk.cn/163prxiwphn.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.xuanzx.com/163wjisrqax.html

[I03] 提取捕获分组
来源：http://www.aibaodan.cn/163gbscnudr.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.sxryk.cn/163jkmjujip.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.xuanzx.com/163occguwwm.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.xuanzx.com/163hlcawcyp.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.aibaodan.cn/163hkrrvgvu.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.xuanzx.com/163wyxrlxsi.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.xuanzx.com/163gexishel.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.sxryk.cn/163hnxnrhzg.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.aibaodan.cn/163sgmqneol.html

[I04] 正则替换
来源：http://www.sxryk.cn/163erasuqdr.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.xuanzx.com/163nyebtxlt.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163zglsrazj.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163zncmjxyd.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163yqozowih.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.sxryk.cn/163nbzdlqii.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.xuanzx.com/163qfouosad.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.aibaodan.cn/163mgbfczxp.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.aibaodan.cn/163ucrewnek.html

[I05] 按正则拆分
来源：http://www.aibaodan.cn/163owfilevw.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.aibaodan.cn/163yajraiii.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.xuanzx.com/163weamdidd.html

JS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163aekoxggc.html

TS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163fjdehjae.html

Java: s.split("\\s*,\\s*")
来源：http://www.aibaodan.cn/163ejamodwc.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.aibaodan.cn/163agabwpih.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163kotojkuk.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.aibaodan.cn/163vyvefuqv.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.aibaodan.cn/163ewewlsfu.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163ptahhjup.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.sxryk.cn/163jfjanrvf.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163ylygksjy.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163ppuhcevl.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.aibaodan.cn/163ydhqwpfd.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.aibaodan.cn/163ldrtonkv.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.sxryk.cn/163gckmtorw.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163rplrvsre.html

[I07] 忽略大小写与多行模式
来源：http://www.aibaodan.cn/163mqrqteab.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.sxryk.cn/163uyosqypj.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.sxryk.cn/163dtkdzjqc.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.aibaodan.cn/163tbccfpwx.html

TS:   /error/gim
来源：http://www.xuanzx.com/163vzzrwfxt.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.xuanzx.com/163fhcqdsct.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.aibaodan.cn/163zlwhrwan.html

Ruby: s.scan(/error/i)
来源：http://www.aibaodan.cn/163fxriuzbl.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.xuanzx.com/163kuxlxkag.html

[I08] 贪婪与非贪婪匹配
来源：http://www.xuanzx.com/163bdlzfefv.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.sxryk.cn/163taoqnuwq.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.xuanzx.com/163kzjhvhsv.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163sfcplevi.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163fyzkcumt.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.sxryk.cn/163kdvjqcyx.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.sxryk.cn/163lviibobs.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.aibaodan.cn/163waemchwd.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.aibaodan.cn/163elnvedxr.html

================================================================================
来源：http://www.aibaodan.cn/163hodknhai.html

J. 日期与时间
来源：http://www.xuanzx.com/163aepihsrg.html

================================================================================
来源：http://www.aibaodan.cn/163vqsxyqgx.html

[J01] 获取当前时间
来源：http://www.sxryk.cn/163cmizuids.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.sxryk.cn/163aaybhwdt.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163akmqyvcm.html

JS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163ntclzqmp.html

TS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163ultkvowv.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.sxryk.cn/163dwieondl.html

Go:   time.Now()
来源：http://www.xuanzx.com/163llavqyzz.html

Ruby: Time.now
来源：http://www.xuanzx.com/163isiotbsf.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.aibaodan.cn/163qxqlkwjl.html

[J02] 格式化输出
来源：http://www.xuanzx.com/163dvswsixg.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163cgkfxqvm.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163ckgqjobr.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.aibaodan.cn/163cbztyrho.html

TS:   d.toISOString()
来源：http://www.xuanzx.com/163evzucufo.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.sxryk.cn/163civuikva.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.aibaodan.cn/163anhbjxrh.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163jbrgncif.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.sxryk.cn/163pimazxiq.html

[J03] 字符串解析为日期
来源：http://www.aibaodan.cn/163jaszankz.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.xuanzx.com/163lysqvjej.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.aibaodan.cn/163xpljmdlu.html

JS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163izyagyfu.html

TS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163jhzaooty.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.sxryk.cn/163ynrxmghx.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.aibaodan.cn/163epraodcm.html

Ruby: Date.parse("2024-01-02")
来源：http://www.xuanzx.com/163hxbhqnvu.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.sxryk.cn/163icdnjpni.html

[J04] 时间戳与日期互转
来源：http://www.sxryk.cn/163qcmerkqy.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.xuanzx.com/163faqpxyjp.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.sxryk.cn/163chksxxms.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.xuanzx.com/163beopkbdq.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.aibaodan.cn/163eohhoprf.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.aibaodan.cn/163sqaxsgyi.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.aibaodan.cn/163rptitasi.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.xuanzx.com/163imtfhamf.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.xuanzx.com/163iljrlaxi.html

[J05] 时间加减（加 7 天）
来源：http://www.sxryk.cn/163ccqgqyro.html

Py:   now + timedelta(days=7)
来源：http://www.sxryk.cn/163jifeefco.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.aibaodan.cn/163msxldlnv.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163kihwnfcp.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163buxqemfy.html

Java: LocalDate.now().plusDays(7)
来源：http://www.xuanzx.com/163hpboltmp.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.xuanzx.com/163zytjxstz.html

Ruby: Time.now + 7 * 86400
来源：http://www.aibaodan.cn/163emxgspid.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.aibaodan.cn/163uuxzubfp.html

[J06] 计算两时间之差
来源：http://www.xuanzx.com/163ifsvvwtf.html

Py:   (end - start).total_seconds()
来源：http://www.sxryk.cn/163jcnfhngk.html

PHP:  $end->diff($start)->days;
来源：http://www.aibaodan.cn/163ufagzjxh.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.aibaodan.cn/163blwzdwlx.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.aibaodan.cn/163wvcwllzw.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.sxryk.cn/163xoenbrnv.html

Go:   end.Sub(start).Hours()
来源：http://www.sxryk.cn/163hoatbazt.html

Ruby: end - start                 # 返回秒数
来源：http://www.sxryk.cn/163bwcskjrs.html

C#:   (end - start).TotalSeconds
来源：http://www.xuanzx.com/163pixsbzsq.html

[J07] 比较两个日期
来源：http://www.xuanzx.com/163wbzyrgml.html

Py:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163pqjcfvhb.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.sxryk.cn/163yijppoqt.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163defkjdrl.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163gpfdijvi.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.xuanzx.com/163tcnckbnj.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.sxryk.cn/163hmeocljj.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163bdyyiesh.html

C#:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163hywnpfzq.html

[J08] 提取年月日与星期
来源：http://www.xuanzx.com/163bdcpzloi.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.sxryk.cn/163ofnnctca.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.xuanzx.com/163zjtlxzwy.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.aibaodan.cn/163iedgogrf.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.sxryk.cn/163lehqukso.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.aibaodan.cn/163tjwbjtus.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.sxryk.cn/163kjtwehdd.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.aibaodan.cn/163gdowoqau.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.aibaodan.cn/163sdgrkard.html

[J09] 时区处理
来源：http://www.xuanzx.com/163canwydpe.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.xuanzx.com/163xyatrejn.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.aibaodan.cn/163tvrrzqlt.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163hsppeloq.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163hdxafnbg.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.xuanzx.com/163juyoibss.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.xuanzx.com/163fljhupvf.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.aibaodan.cn/163zfuuophs.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.sxryk.cn/163dyctclbg.html

[J10] 取今天 / 本月第一天
来源：http://www.aibaodan.cn/163ddxaptnw.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.sxryk.cn/163khnoveef.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.aibaodan.cn/163vmqrafeg.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.sxryk.cn/163fjegoebf.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.sxryk.cn/163kzwxhgpt.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.xuanzx.com/163xawcekmn.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.xuanzx.com/163lkkisawh.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.sxryk.cn/163yagmuduc.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.sxryk.cn/163inwzhqsf.html

================================================================================
来源：http://www.aibaodan.cn/163dgltzuhl.html

K. JSON 与序列化
来源：http://www.sxryk.cn/163tvhfeshq.html

================================================================================
来源：http://www.aibaodan.cn/163ecvzglep.html

[K01] 对象转 JSON 字符串
来源：http://www.sxryk.cn/163zdmzupcc.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.xuanzx.com/163mxdwprdh.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163iyjghjft.html

JS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163hohmdomr.html

TS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163ukyqawxe.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.aibaodan.cn/163ufpdkqfl.html

Go:   json.Marshal(obj)
来源：http://www.aibaodan.cn/163scewbfpl.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.xuanzx.com/163dflbdgvm.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.xuanzx.com/163oqhnxpit.html

[K02] JSON 字符串转对象
来源：http://www.sxryk.cn/163xaufvtli.html

Py:   json.loads(s)
来源：http://www.xuanzx.com/163twzpyvzu.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.aibaodan.cn/163otpnkhxb.html

JS:   JSON.parse(s)
来源：http://www.xuanzx.com/163iqlsrasd.html

TS:   JSON.parse(s)
来源：http://www.sxryk.cn/163btmuiukr.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.xuanzx.com/163uucgsvxe.html

Go:   json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163njusdurb.html

Ruby: JSON.parse(s)
来源：http://www.sxryk.cn/163yhuphucd.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.aibaodan.cn/163uwcsyfsw.html

[K03] JSON 美化输出（带缩进）
来源：http://www.sxryk.cn/163crjsfxpf.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.xuanzx.com/163ecpwbwiz.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163qfpispru.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163xpgrgani.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163nwfwicam.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.xuanzx.com/163vhzvbiyl.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.sxryk.cn/163ihqczjzf.html


<!-- 参考信息 -->