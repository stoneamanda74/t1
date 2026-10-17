外链999!wailian999！

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.xuanzx.com/163tqfufkqi.html

Ruby: obj.instance_variables
来源：http://www.sxryk.cn/163mobunzoj.html

C#:   // 用反射或 System.Text.Json
来源：http://www.sxryk.cn/163qufogshy.html

================================================================================
来源：http://www.xuanzx.com/163ypmfdyzq.html

H. 异常与错误处理
来源：http://www.sxryk.cn/163wvzafisb.html

================================================================================
来源：http://www.aibaodan.cn/163bbibizrm.html

[H01] try / catch 基础
来源：http://www.sxryk.cn/163mtspipcy.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.sxryk.cn/163wziwepmf.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.aibaodan.cn/163tgimpuxf.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163jtpxfizl.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.sxryk.cn/163dqkssuxg.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.xuanzx.com/163phhejmhb.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.aibaodan.cn/163vmoutlzq.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.aibaodan.cn/163exopddkq.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.sxryk.cn/163axobnxyw.html

[H02] finally / ensure 收尾
来源：http://www.xuanzx.com/163ptzsdsmn.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.sxryk.cn/163mxkurrxz.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163czcfotvb.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163miforrqg.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163gusdznvc.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163gmxwucvd.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.xuanzx.com/163xnzqqjgv.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.aibaodan.cn/163alnatppn.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.sxryk.cn/163cunxuayc.html

[H03] 主动抛出异常
来源：http://www.aibaodan.cn/163pqbqycbi.html

Py:   raise ValueError("错误信息")
来源：http://www.sxryk.cn/163hogtehfp.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.sxryk.cn/163htfyutls.html

JS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163quxgrbxj.html

TS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163awrpmbvz.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.xuanzx.com/163dfgezrrh.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.sxryk.cn/163mhjfqmok.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.xuanzx.com/163cdfokish.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.aibaodan.cn/163nrzqcolz.html

[H04] 自定义异常类型
来源：http://www.xuanzx.com/163qrkewojd.html

Py:   class MyError(Exception): pass
来源：http://www.xuanzx.com/163vdwyqufr.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.xuanzx.com/163qwsduxmt.html

JS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163trhbyvvl.html

TS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163hgbclyti.html

Java: class MyException extends RuntimeException {}
来源：http://www.sxryk.cn/163nnewqvso.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.xuanzx.com/163pjoqqhgj.html

Ruby: class MyError < StandardError; end
来源：http://www.aibaodan.cn/163reqdpolk.html

C#:   class MyException : Exception {}
来源：http://www.sxryk.cn/163amdoealg.html

[H05] 捕获特定类型
来源：http://www.xuanzx.com/163yccepegz.html

Py:   except ValueError as e:
来源：http://www.aibaodan.cn/163dffkhgfa.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.xuanzx.com/163tarsmfrd.html

JS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163lmedbmsz.html

TS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163ndnoeofz.html

Java: catch (IOException | SQLException e) {}
来源：http://www.sxryk.cn/163cjgyczpp.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.xuanzx.com/163mzvlarkm.html

Ruby: rescue ArgumentError => e
来源：http://www.sxryk.cn/163bwmbxyre.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.xuanzx.com/163jbmqxgsy.html

[H06] 可选值 / 空值安全访问
来源：http://www.sxryk.cn/163motckkpw.html

Py:   value = d.get("k") or default
来源：http://www.aibaodan.cn/163kmsissby.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.xuanzx.com/163kgnnrjru.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163ylghlbip.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163wkxmbmtt.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.sxryk.cn/163vxndygcv.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.xuanzx.com/163bzgrckxs.html

Ruby: d&.dig(:a, :b)
来源：http://www.xuanzx.com/163vwhokghb.html

C#:   obj?.A?.B ?? default
来源：http://www.sxryk.cn/163bgzrhaeq.html

[H07] 断言
来源：http://www.sxryk.cn/163yiclcuhq.html

Py:   assert x > 0, "必须为正"
来源：http://www.sxryk.cn/163madjyxzy.html

PHP:  assert($x > 0);
来源：http://www.sxryk.cn/163gmkieyly.html

JS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163jiyscftj.html

TS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163lfweuxvu.html

Java: assert x > 0 : "必须为正";
来源：http://www.sxryk.cn/163itqaeklu.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.sxryk.cn/163hkzdvxbq.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.sxryk.cn/163vtjrykhx.html

C#:   Debug.Assert(x > 0);
来源：http://www.aibaodan.cn/163jarqojkm.html

[H08] 获取错误信息与堆栈
来源：http://www.xuanzx.com/163nhmarmxc.html

Py:   str(e);  traceback.format_exc()
来源：http://www.sxryk.cn/163paqkogvt.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.aibaodan.cn/163pjaitscy.html

JS:   e.message;  e.stack
来源：http://www.aibaodan.cn/163mqdtsvsb.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.sxryk.cn/163pkczpvnl.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.aibaodan.cn/163vfgolwbf.html

Go:   err.Error()
来源：http://www.sxryk.cn/163mxqeasez.html

Ruby: e.message;  e.backtrace
来源：http://www.aibaodan.cn/163vhinuexw.html

C#:   e.Message;  e.StackTrace
来源：http://www.sxryk.cn/163yjubkzis.html

[H09] 带错误码的异常
来源：http://www.aibaodan.cn/163yesccnqg.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.xuanzx.com/163sqmofkae.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.sxryk.cn/163xugmrrhp.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.xuanzx.com/163eokrpiol.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.aibaodan.cn/163thiupeoj.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.aibaodan.cn/163jmcokins.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.aibaodan.cn/163qlxofpnl.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.aibaodan.cn/163cqosutkh.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.sxryk.cn/163vioiureq.html

[H10] 资源自动释放
来源：http://www.aibaodan.cn/163aayopcki.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.xuanzx.com/163pbmkndok.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.aibaodan.cn/163pmwxsvoj.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163dejzlrrx.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163mweeuwsh.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.xuanzx.com/163vvasklit.html

Go:   defer f.Close()
来源：http://www.sxryk.cn/163behapzdn.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.xuanzx.com/163mkhjxzcq.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.xuanzx.com/163grsxatig.html

================================================================================
来源：http://www.xuanzx.com/163jxxfrplq.html

I. 正则表达式
来源：http://www.aibaodan.cn/163nltvkqoy.html

================================================================================
来源：http://www.xuanzx.com/163vawsgptk.html

[I01] 判断是否匹配
来源：http://www.aibaodan.cn/163janysxsv.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.sxryk.cn/163ojjbwyrx.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.xuanzx.com/163efeyeiyf.html

JS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163cxhzfklr.html

TS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163udsfvmmk.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.sxryk.cn/163lddbzeky.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.sxryk.cn/163tsftcrfp.html

Ruby: s.match?(/\d+/)
来源：http://www.sxryk.cn/163tcmmtyao.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.aibaodan.cn/163uhxydqws.html

[I02] 提取所有匹配
来源：http://www.sxryk.cn/163rwqsxtby.html

Py:   re.findall(r"\d+", s)
来源：http://www.sxryk.cn/163riwpgvqi.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.xuanzx.com/163pwhijjos.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.xuanzx.com/163hfvzhhbn.html

TS:   s.match(/\d+/g)
来源：http://www.xuanzx.com/163nlnoarex.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.aibaodan.cn/163jvecpsti.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.xuanzx.com/163ryfvubjh.html

Ruby: s.scan(/\d+/)
来源：http://www.sxryk.cn/163igihmtfi.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.aibaodan.cn/163sxildmia.html

[I03] 提取捕获分组
来源：http://www.sxryk.cn/163rvcbqzll.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.sxryk.cn/163mwytkprt.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.sxryk.cn/163orfjjqln.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.aibaodan.cn/163mxdxvvcq.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.sxryk.cn/163uyjrhklb.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.xuanzx.com/163kgofznkf.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.xuanzx.com/163qoedoemp.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.aibaodan.cn/163hnlyaodz.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.aibaodan.cn/163nblfpkmq.html

[I04] 正则替换
来源：http://www.sxryk.cn/163hgogtuas.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.sxryk.cn/163axmelwjz.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163nvlezlvx.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163qkrkuwrw.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163obyuzeml.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.xuanzx.com/163savmlvxi.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.xuanzx.com/163diqzxvhh.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.xuanzx.com/163wnvdjygm.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.sxryk.cn/163jymekajm.html

[I05] 按正则拆分
来源：http://www.xuanzx.com/163vmfsxasm.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.aibaodan.cn/163aajzsmlr.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.xuanzx.com/163eugkegti.html

JS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163chvglonr.html

TS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163kreqbkvb.html

Java: s.split("\\s*,\\s*")
来源：http://www.sxryk.cn/163gdsimdsp.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.xuanzx.com/163kwwvccge.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163saqzgtbo.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.xuanzx.com/163lhgklxej.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.xuanzx.com/163rdgkeswm.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163zczdcrag.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.sxryk.cn/163scibcweq.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163irqlogjw.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163jyrxbktk.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.sxryk.cn/163qhddmlco.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.xuanzx.com/163zdxhjjtq.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.sxryk.cn/163gevkzbuo.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163tisnrqqs.html

[I07] 忽略大小写与多行模式
来源：http://www.aibaodan.cn/163bjapoyis.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.sxryk.cn/163zcnjwjav.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.sxryk.cn/163iaxcaifr.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.sxryk.cn/163gufugyyy.html

TS:   /error/gim
来源：http://www.xuanzx.com/163tothbitc.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.aibaodan.cn/163mdlwoeqq.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.aibaodan.cn/163jvqzuoar.html

Ruby: s.scan(/error/i)
来源：http://www.aibaodan.cn/163ksybdrdb.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.aibaodan.cn/163zqdhajql.html

[I08] 贪婪与非贪婪匹配
来源：http://www.xuanzx.com/163ypqgsvmf.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.sxryk.cn/163fmwbntlp.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.aibaodan.cn/163zrbxpebn.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163szlburjj.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163eofvixci.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.xuanzx.com/163tscycmfa.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.aibaodan.cn/163mwtevlca.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.xuanzx.com/163sqglocca.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.xuanzx.com/163wniaamnn.html

================================================================================
来源：http://www.sxryk.cn/163jxqlvsvu.html

J. 日期与时间
来源：http://www.aibaodan.cn/163cqeuknxy.html

================================================================================
来源：http://www.sxryk.cn/163syfjqotr.html

[J01] 获取当前时间
来源：http://www.xuanzx.com/163xlauikjy.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.aibaodan.cn/163xymcphge.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163ykfttagt.html

JS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163zpmqtzwz.html

TS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163yobaefsh.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.aibaodan.cn/163gumhkhhh.html

Go:   time.Now()
来源：http://www.aibaodan.cn/163pndgvyly.html

Ruby: Time.now
来源：http://www.sxryk.cn/163xeyamvuo.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.aibaodan.cn/163gdbfazzw.html

[J02] 格式化输出
来源：http://www.xuanzx.com/163eyhsusqp.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163wpizeect.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163iobppngq.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.aibaodan.cn/163tzfbjcaj.html

TS:   d.toISOString()
来源：http://www.xuanzx.com/163ifxmsunn.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.xuanzx.com/163ibeuwywv.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.xuanzx.com/163lldrdqjf.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163gongzhkx.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.aibaodan.cn/163juxheoua.html

[J03] 字符串解析为日期
来源：http://www.sxryk.cn/163sudkbuyb.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.sxryk.cn/163pemthsrx.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.xuanzx.com/163haulbygh.html

JS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163sjahrfsh.html

TS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163zimhckjq.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.sxryk.cn/163fpufikib.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.sxryk.cn/163bouyhcex.html

Ruby: Date.parse("2024-01-02")
来源：http://www.xuanzx.com/163yyfwweiy.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.aibaodan.cn/163uygkrvlp.html

[J04] 时间戳与日期互转
来源：http://www.sxryk.cn/163icszlwll.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.aibaodan.cn/163fsytdcql.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.sxryk.cn/163wbadvaqg.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.xuanzx.com/163zdzfwmut.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.xuanzx.com/163oxxpaorv.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.sxryk.cn/163ojskbvyb.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.aibaodan.cn/163usgkiuqs.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.xuanzx.com/163stinlofq.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.aibaodan.cn/163bpdlahws.html

[J05] 时间加减（加 7 天）
来源：http://www.xuanzx.com/163ydopczos.html

Py:   now + timedelta(days=7)
来源：http://www.aibaodan.cn/163soghgvvk.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.xuanzx.com/163euamkoch.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163peimolkb.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163iwocmpqj.html

Java: LocalDate.now().plusDays(7)
来源：http://www.sxryk.cn/163qabodfpx.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.aibaodan.cn/163npdvdict.html

Ruby: Time.now + 7 * 86400
来源：http://www.aibaodan.cn/163scbkddvq.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.sxryk.cn/163cqsezdhq.html

[J06] 计算两时间之差
来源：http://www.sxryk.cn/163czimhuzo.html

Py:   (end - start).total_seconds()
来源：http://www.sxryk.cn/163ntriokpr.html

PHP:  $end->diff($start)->days;
来源：http://www.aibaodan.cn/163lyhigned.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.sxryk.cn/163phszmnzn.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.sxryk.cn/163yaidcbsn.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.aibaodan.cn/163lhqjwwzf.html

Go:   end.Sub(start).Hours()
来源：http://www.aibaodan.cn/163pgmgjlvs.html

Ruby: end - start                 # 返回秒数
来源：http://www.aibaodan.cn/163wuwkkuas.html

C#:   (end - start).TotalSeconds
来源：http://www.aibaodan.cn/163whbdnreb.html

[J07] 比较两个日期
来源：http://www.aibaodan.cn/163agcqxacf.html

Py:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163udtkddgk.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.sxryk.cn/163amtfiqpy.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163meyljvsl.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163sjqddkci.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.sxryk.cn/163dfvtnuvm.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.sxryk.cn/163hwunropn.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163flvpkebg.html

C#:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163txkhgdwb.html

[J08] 提取年月日与星期
来源：http://www.xuanzx.com/163qfkjjhvw.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.aibaodan.cn/163cxjfhqxp.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.sxryk.cn/163enrwgucq.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.sxryk.cn/163ghisczpc.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.aibaodan.cn/163krjaaouj.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.aibaodan.cn/163mwbikbav.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.sxryk.cn/163xrqkyami.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.xuanzx.com/163ouvrlhym.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.xuanzx.com/163zzcmjrpo.html

[J09] 时区处理
来源：http://www.xuanzx.com/163bdgzyepp.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.aibaodan.cn/163nyrpkceu.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.aibaodan.cn/163lonajblk.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163fvlqpzub.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163lhmguydv.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.xuanzx.com/163coeckrwe.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.xuanzx.com/163ophcqsrm.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.aibaodan.cn/163sntsckng.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.sxryk.cn/163pjeejtqq.html

[J10] 取今天 / 本月第一天
来源：http://www.aibaodan.cn/163iowxksqt.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.xuanzx.com/163xdxjdvjk.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.sxryk.cn/163jyrcrpvw.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.aibaodan.cn/163biiptodb.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.aibaodan.cn/163fopmaiin.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.xuanzx.com/163kgrjvtld.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.xuanzx.com/163mttqmbyh.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.sxryk.cn/163lvknvmmb.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.xuanzx.com/163dodgcdsu.html

================================================================================
来源：http://www.sxryk.cn/163cyhigosw.html

K. JSON 与序列化
来源：http://www.xuanzx.com/163yajhuuee.html

================================================================================
来源：http://www.aibaodan.cn/163ebpshihk.html

[K01] 对象转 JSON 字符串
来源：http://www.xuanzx.com/163fqzvvges.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.aibaodan.cn/163gpfpclab.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163baqloryj.html

JS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163inmraqjg.html

TS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163ngkmldtv.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.aibaodan.cn/163vwjabtrb.html

Go:   json.Marshal(obj)
来源：http://www.sxryk.cn/163vddtzblc.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.xuanzx.com/163cpjbmaxd.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.xuanzx.com/163lljkyxil.html

[K02] JSON 字符串转对象
来源：http://www.xuanzx.com/163oppkbeyl.html

Py:   json.loads(s)
来源：http://www.xuanzx.com/163ocxzecir.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.xuanzx.com/163rssfucsc.html

JS:   JSON.parse(s)
来源：http://www.xuanzx.com/163ivtpmumh.html

TS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163whhiyvty.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.sxryk.cn/163fcppitoh.html

Go:   json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163sfwsnxmj.html

Ruby: JSON.parse(s)
来源：http://www.sxryk.cn/163tyhnvglc.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.sxryk.cn/163mxhltevu.html

[K03] JSON 美化输出（带缩进）
来源：http://www.aibaodan.cn/163mhnwtehp.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.sxryk.cn/163hqaiwnhz.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163caoecdux.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163nsnquqbo.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163xvgfwnxh.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.aibaodan.cn/163vezlthnb.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.sxryk.cn/163uwpaklug.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.sxryk.cn/163indvfyqq.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.sxryk.cn/163axlnvpnj.html

[K04] 读取 JSON 文件
来源：http://www.xuanzx.com/163jfoipmbp.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.xuanzx.com/163fqpaixay.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.sxryk.cn/163lwlwxfvw.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163oyxbwfok.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163ukoqlutn.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.sxryk.cn/163uvfoitiz.html


<!-- 参考信息 -->