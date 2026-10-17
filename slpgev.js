外链999!wailian999！

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.aibaodan.cn/163efxuzmfm.html

Ruby: obj.instance_variables
来源：http://www.aibaodan.cn/163xmnfmyhl.html

C#:   // 用反射或 System.Text.Json
来源：http://www.xuanzx.com/163dvcstmdd.html

================================================================================
来源：http://www.xuanzx.com/163adforgxj.html

H. 异常与错误处理
来源：http://www.aibaodan.cn/163kzglbjtd.html

================================================================================
来源：http://www.aibaodan.cn/163zqkwbmev.html

[H01] try / catch 基础
来源：http://www.aibaodan.cn/163lxtnjxwo.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.xuanzx.com/163jvlbqhsv.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.aibaodan.cn/163bwskcwvp.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163bvrotdqn.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.sxryk.cn/163zlnqhthz.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.aibaodan.cn/163azjckacg.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.sxryk.cn/163yjgwsrrq.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.sxryk.cn/163nmwqawro.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.xuanzx.com/163srbtlcle.html

[H02] finally / ensure 收尾
来源：http://www.aibaodan.cn/163idwpdrpo.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.aibaodan.cn/163drmfllom.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163nxvnghfk.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163mdyuswou.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163msrlhtik.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163wvmwsjwc.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.sxryk.cn/163rcstexzy.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.aibaodan.cn/163ttfwsdlv.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.aibaodan.cn/163qqxoohij.html

[H03] 主动抛出异常
来源：http://www.xuanzx.com/163wijkdaws.html

Py:   raise ValueError("错误信息")
来源：http://www.aibaodan.cn/163xzeelyed.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.sxryk.cn/163xbrhjqff.html

JS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163tkynopkr.html

TS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163jatakdbd.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.xuanzx.com/163znaiypba.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.aibaodan.cn/163opopecmp.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.aibaodan.cn/163xcfcawkp.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.xuanzx.com/163adxrcbfa.html

[H04] 自定义异常类型
来源：http://www.xuanzx.com/163denspfus.html

Py:   class MyError(Exception): pass
来源：http://www.xuanzx.com/163jmboymmx.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.xuanzx.com/163mmkzsjla.html

JS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163wqruekgy.html

TS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163rfekbycf.html

Java: class MyException extends RuntimeException {}
来源：http://www.xuanzx.com/163bekucwfq.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.aibaodan.cn/163cfaebqqc.html

Ruby: class MyError < StandardError; end
来源：http://www.sxryk.cn/163ymhtgldk.html

C#:   class MyException : Exception {}
来源：http://www.xuanzx.com/163tobskqsp.html

[H05] 捕获特定类型
来源：http://www.sxryk.cn/163cawkbowi.html

Py:   except ValueError as e:
来源：http://www.xuanzx.com/163ptnbekxj.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.xuanzx.com/163ysjapddq.html

JS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163uogkhrqb.html

TS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163oorpjtgg.html

Java: catch (IOException | SQLException e) {}
来源：http://www.xuanzx.com/163ejotydcu.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.aibaodan.cn/163puvrvhwm.html

Ruby: rescue ArgumentError => e
来源：http://www.xuanzx.com/163aethcxes.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.xuanzx.com/163kkghyuat.html

[H06] 可选值 / 空值安全访问
来源：http://www.xuanzx.com/163unilqxkl.html

Py:   value = d.get("k") or default
来源：http://www.aibaodan.cn/163kjzktolh.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.xuanzx.com/163jkovkzqq.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163tupiajem.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163yrxlukfh.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.sxryk.cn/163tcuamekz.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.sxryk.cn/163ygftncru.html

Ruby: d&.dig(:a, :b)
来源：http://www.aibaodan.cn/163fjlmibkb.html

C#:   obj?.A?.B ?? default
来源：http://www.xuanzx.com/163pevxdcfl.html

[H07] 断言
来源：http://www.xuanzx.com/163cyescult.html

Py:   assert x > 0, "必须为正"
来源：http://www.xuanzx.com/163ysccarbd.html

PHP:  assert($x > 0);
来源：http://www.sxryk.cn/163wkfntxbk.html

JS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163aemyqfyu.html

TS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163qhoizhaa.html

Java: assert x > 0 : "必须为正";
来源：http://www.sxryk.cn/163bzfvpvlj.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.sxryk.cn/163ebrgfrhr.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.xuanzx.com/163felrvviq.html

C#:   Debug.Assert(x > 0);
来源：http://www.xuanzx.com/163bgedcbhb.html

[H08] 获取错误信息与堆栈
来源：http://www.sxryk.cn/163jqusgxzj.html

Py:   str(e);  traceback.format_exc()
来源：http://www.aibaodan.cn/163ijqonxfw.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.xuanzx.com/163xegnijjc.html

JS:   e.message;  e.stack
来源：http://www.sxryk.cn/163mwqeuasa.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.xuanzx.com/163khsashzd.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.sxryk.cn/163nihjkqkp.html

Go:   err.Error()
来源：http://www.xuanzx.com/163bcfzhxeh.html

Ruby: e.message;  e.backtrace
来源：http://www.xuanzx.com/163pdhizcpm.html

C#:   e.Message;  e.StackTrace
来源：http://www.aibaodan.cn/163xzezfyab.html

[H09] 带错误码的异常
来源：http://www.aibaodan.cn/163otvaabcy.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.xuanzx.com/163yeozyigb.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.sxryk.cn/163aytnitjv.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.aibaodan.cn/163eqxnbkjt.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.aibaodan.cn/163odbloour.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.sxryk.cn/163kadlsblu.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.aibaodan.cn/163lunubjga.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.xuanzx.com/163jtwoivsr.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.sxryk.cn/163tvrojnlg.html

[H10] 资源自动释放
来源：http://www.aibaodan.cn/163txivyysu.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.aibaodan.cn/163pcalclyv.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.sxryk.cn/163qwdtawoa.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163mziqudon.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163pikzvzhv.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.xuanzx.com/163nvodkwpy.html

Go:   defer f.Close()
来源：http://www.xuanzx.com/163kiejgipt.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.sxryk.cn/163ietwwuhy.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.xuanzx.com/163mgkuaaaz.html

================================================================================
来源：http://www.xuanzx.com/163rpyutqsj.html

I. 正则表达式
来源：http://www.aibaodan.cn/163qyxyfyup.html

================================================================================
来源：http://www.sxryk.cn/163pvynqvyg.html

[I01] 判断是否匹配
来源：http://www.sxryk.cn/163aszzdhij.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.xuanzx.com/163qxcsrxtu.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.xuanzx.com/163dzwqflrq.html

JS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163szlintgd.html

TS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163exvqtrtz.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.xuanzx.com/163jljirnuj.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.aibaodan.cn/163xmuzgous.html

Ruby: s.match?(/\d+/)
来源：http://www.sxryk.cn/163pvcubsqk.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.xuanzx.com/163emdjiwha.html

[I02] 提取所有匹配
来源：http://www.xuanzx.com/163iifwjzvz.html

Py:   re.findall(r"\d+", s)
来源：http://www.aibaodan.cn/163ouflomdg.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.sxryk.cn/163uxjbivce.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.xuanzx.com/163oixxudvb.html

TS:   s.match(/\d+/g)
来源：http://www.aibaodan.cn/163pfsvwydv.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.sxryk.cn/163mqcoavoh.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.aibaodan.cn/163photitet.html

Ruby: s.scan(/\d+/)
来源：http://www.aibaodan.cn/163elpkrlhg.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.sxryk.cn/163adnsvupq.html

[I03] 提取捕获分组
来源：http://www.aibaodan.cn/163gxqkbamq.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.sxryk.cn/163ksnyjtkt.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.sxryk.cn/163aitbkopz.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.xuanzx.com/163fmjdxlmo.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.sxryk.cn/163jacdkxkc.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.xuanzx.com/163aqhqeypq.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.xuanzx.com/163jazrjogr.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.xuanzx.com/163kytgosky.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.sxryk.cn/163mdtrqcaj.html

[I04] 正则替换
来源：http://www.xuanzx.com/163afnerrqr.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.xuanzx.com/163tzkuoctx.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163ybnpqsps.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163hltgugbu.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163awkwmhyx.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.sxryk.cn/163ctaemquw.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.xuanzx.com/163uuqtpqgb.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.sxryk.cn/163sajqwkuy.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.aibaodan.cn/163lzftwmqu.html

[I05] 按正则拆分
来源：http://www.xuanzx.com/163vuvjpolj.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.xuanzx.com/163kxzrzirc.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.sxryk.cn/163qpbaxrzi.html

JS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163waxphmvm.html

TS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163usuqlrut.html

Java: s.split("\\s*,\\s*")
来源：http://www.sxryk.cn/163valfqvgf.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.sxryk.cn/163ztxfukda.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163uhwkhldx.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.sxryk.cn/163rqrnmhrh.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.sxryk.cn/163gdwvxqvx.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163cschgwxv.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.aibaodan.cn/163yccqoovg.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163jrlrztkb.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163iifctxwd.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.xuanzx.com/163nafvtkag.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.xuanzx.com/163qcluqyxx.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.sxryk.cn/163uzrhfqcm.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163qztucyeh.html

[I07] 忽略大小写与多行模式
来源：http://www.xuanzx.com/163ehdzidrx.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.xuanzx.com/163feohkyrw.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.xuanzx.com/163invcsrdj.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.aibaodan.cn/163baynkdvx.html

TS:   /error/gim
来源：http://www.aibaodan.cn/163innvlpwg.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.aibaodan.cn/163tewpmibq.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.xuanzx.com/163pmaqwtgr.html

Ruby: s.scan(/error/i)
来源：http://www.aibaodan.cn/163sqhdhvjc.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.aibaodan.cn/163akgpjswt.html

[I08] 贪婪与非贪婪匹配
来源：http://www.xuanzx.com/163aueofkql.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.aibaodan.cn/163gzpyehqq.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.xuanzx.com/163zzychuvt.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163dwnbyvqx.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163sxdrtodv.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.sxryk.cn/163oilwaruf.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.sxryk.cn/163jilrxuwv.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.sxryk.cn/163zmsqrrby.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.xuanzx.com/163vwlloxze.html

================================================================================
来源：http://www.xuanzx.com/163ikwcjxys.html

J. 日期与时间
来源：http://www.aibaodan.cn/163wjqqyljk.html

================================================================================
来源：http://www.aibaodan.cn/163gnjdkxwg.html

[J01] 获取当前时间
来源：http://www.sxryk.cn/163nobfqvht.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.sxryk.cn/163nmpalfgd.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163jkcqhrtb.html

JS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163ptapstyc.html

TS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163dmyepccl.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.xuanzx.com/163ihaurbfj.html

Go:   time.Now()
来源：http://www.aibaodan.cn/163xenlwohs.html

Ruby: Time.now
来源：http://www.aibaodan.cn/163lcfsvons.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.aibaodan.cn/163oyzcovut.html

[J02] 格式化输出
来源：http://www.sxryk.cn/163ztsskqrb.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163yvephlcn.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163qzrwycmr.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.aibaodan.cn/163buuovhzw.html

TS:   d.toISOString()
来源：http://www.xuanzx.com/163ucxwtzui.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.sxryk.cn/163qradhrws.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.xuanzx.com/163nnbhhkgx.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163aazlupyx.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.xuanzx.com/163rypilrrp.html

[J03] 字符串解析为日期
来源：http://www.sxryk.cn/163asorsxzs.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.sxryk.cn/163rqauecxz.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.xuanzx.com/163rcrlgexc.html

JS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163nplfkdko.html

TS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163ooqenlmm.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.aibaodan.cn/163yzcgffpv.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.xuanzx.com/163xsvhgbfq.html

Ruby: Date.parse("2024-01-02")
来源：http://www.xuanzx.com/163mvrfadgq.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.xuanzx.com/163idyqxyin.html

[J04] 时间戳与日期互转
来源：http://www.sxryk.cn/163eeshzgdw.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.aibaodan.cn/163ikbcjvvy.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.xuanzx.com/163ncfvqmlu.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.xuanzx.com/163swqtszbu.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.aibaodan.cn/163sivojpgo.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.sxryk.cn/163lbliguxo.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.sxryk.cn/163dojpelry.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.xuanzx.com/163xbnoltbl.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.aibaodan.cn/163ijnnhzfd.html

[J05] 时间加减（加 7 天）
来源：http://www.xuanzx.com/163vqzrieeb.html

Py:   now + timedelta(days=7)
来源：http://www.aibaodan.cn/163ytptuimo.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.aibaodan.cn/163whstikul.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163yypknbpp.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163hfvnxltq.html

Java: LocalDate.now().plusDays(7)
来源：http://www.aibaodan.cn/163vlanyulo.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.aibaodan.cn/163osxnztbq.html

Ruby: Time.now + 7 * 86400
来源：http://www.xuanzx.com/163kwxxefet.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.sxryk.cn/163awueufuj.html

[J06] 计算两时间之差
来源：http://www.sxryk.cn/163cjmikyhq.html

Py:   (end - start).total_seconds()
来源：http://www.xuanzx.com/163dawdpcuw.html

PHP:  $end->diff($start)->days;
来源：http://www.xuanzx.com/163scjkxeaf.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.xuanzx.com/163owtjuohy.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.aibaodan.cn/163mducvazh.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.sxryk.cn/163ashpbify.html

Go:   end.Sub(start).Hours()
来源：http://www.aibaodan.cn/163cjartsdi.html

Ruby: end - start                 # 返回秒数
来源：http://www.sxryk.cn/163qmifwuvu.html

C#:   (end - start).TotalSeconds
来源：http://www.sxryk.cn/163yrwqztiq.html

[J07] 比较两个日期
来源：http://www.sxryk.cn/163gwwaptof.html

Py:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163ehnlrbie.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.aibaodan.cn/163ofohukoo.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163rtdiblvx.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163ageaomzb.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.aibaodan.cn/163vgxabgxu.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.aibaodan.cn/163pjhslufq.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163lqombnwg.html

C#:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163qdqkteeo.html

[J08] 提取年月日与星期
来源：http://www.xuanzx.com/163yubszrzj.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.xuanzx.com/163xgjiftgi.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.xuanzx.com/163sfytbmob.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.xuanzx.com/163nglicnur.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.sxryk.cn/163zskexjsx.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.aibaodan.cn/163seqelhyp.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.aibaodan.cn/163dlqckejn.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.sxryk.cn/163epqbezyl.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.aibaodan.cn/163ukcqrsyv.html

[J09] 时区处理
来源：http://www.xuanzx.com/163kpwnximq.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.aibaodan.cn/163xbymfidj.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.sxryk.cn/163dvicuvfe.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163lvzgddll.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163rszflkgh.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.aibaodan.cn/163bzgqvkbt.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.aibaodan.cn/163qyvqbdwc.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.sxryk.cn/163scntpmdw.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.xuanzx.com/163hvyswgan.html

[J10] 取今天 / 本月第一天
来源：http://www.xuanzx.com/163fovuvydo.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.aibaodan.cn/163rhdtesfr.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.aibaodan.cn/163rlmbdbel.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.aibaodan.cn/163rghzjzan.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.sxryk.cn/163kzssbkfr.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.aibaodan.cn/163xppoobjd.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.aibaodan.cn/163pkzajjmo.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.aibaodan.cn/163ztmencbs.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.xuanzx.com/163zutnjsxh.html

================================================================================
来源：http://www.aibaodan.cn/163mdzoswmr.html

K. JSON 与序列化
来源：http://www.xuanzx.com/163abrkdxzz.html

================================================================================
来源：http://www.xuanzx.com/163kldtqbhv.html

[K01] 对象转 JSON 字符串
来源：http://www.xuanzx.com/163nsnhvpcp.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.aibaodan.cn/163vqeqjcnc.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163pddftljm.html

JS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163flyihdxv.html

TS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163hlrgoazq.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.sxryk.cn/163qsxjuwzn.html

Go:   json.Marshal(obj)
来源：http://www.sxryk.cn/163hdvabtnp.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.sxryk.cn/163czqxlrfd.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.sxryk.cn/163rrthlshv.html

[K02] JSON 字符串转对象
来源：http://www.xuanzx.com/163tsmhynep.html

Py:   json.loads(s)
来源：http://www.aibaodan.cn/163llthvaon.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.aibaodan.cn/163whyfsnaw.html

JS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163sagvlvnm.html

TS:   JSON.parse(s)
来源：http://www.xuanzx.com/163gbjhznwl.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.sxryk.cn/163erknhcmf.html

Go:   json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163vfhpfpsj.html

Ruby: JSON.parse(s)
来源：http://www.xuanzx.com/163vwozqcpi.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.sxryk.cn/163ajyzruvw.html

[K03] JSON 美化输出（带缩进）
来源：http://www.aibaodan.cn/163pszgljfh.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.sxryk.cn/163ywhasyeh.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163bfbegqyx.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163iufoppvm.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163ykttftcx.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.sxryk.cn/163grcopjzt.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.sxryk.cn/163qdncivhe.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.aibaodan.cn/163quxsoelc.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.aibaodan.cn/163sgykjtnx.html

[K04] 读取 JSON 文件
来源：http://www.aibaodan.cn/163ztzltlty.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.xuanzx.com/163awlqeyoi.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.xuanzx.com/163qlhrmxug.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163dnmtnmcb.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163ppngozwa.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.aibaodan.cn/163obpclqnj.html


<!-- 参考信息 -->