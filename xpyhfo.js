外链999!wailian999！

Ruby: Color = %i[red green].freeze
来源：http://www.aibaodan.cn/163vmvcovlv.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163umybklhh.html

[G16] 对象转数组 / 字典
来源：http://www.aibaodan.cn/163kdkdmnbm.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.xuanzx.com/163khkbeaak.html

PHP:  get_object_vars($obj);
来源：http://www.sxryk.cn/163apiihtqh.html

JS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163vziiyudi.html

TS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163ahkbwmyb.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.aibaodan.cn/163fdvxxebn.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.sxryk.cn/163bhrdruao.html

Ruby: obj.instance_variables
来源：http://www.sxryk.cn/163fefcdatt.html

C#:   // 用反射或 System.Text.Json
来源：http://www.sxryk.cn/163ofbnqwma.html

================================================================================
来源：http://www.aibaodan.cn/163dfqxfcjq.html

H. 异常与错误处理
来源：http://www.aibaodan.cn/163euolxewa.html

================================================================================
来源：http://www.aibaodan.cn/163wyixxrer.html

[H01] try / catch 基础
来源：http://www.sxryk.cn/163aoshjxwc.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.aibaodan.cn/163oiabqexq.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.xuanzx.com/163mufpqoxl.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163zpvkmyfa.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.aibaodan.cn/163icleqtfw.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.sxryk.cn/163hxdpzbti.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.xuanzx.com/163rhpsopbr.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.aibaodan.cn/163gweujtcz.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.sxryk.cn/163kqjuvapa.html

[H02] finally / ensure 收尾
来源：http://www.xuanzx.com/163dnlqrulm.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.aibaodan.cn/163gqkyfcfe.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163grqoyuef.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163kovemulg.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163ghkmpbwb.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163onypfsvs.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.aibaodan.cn/163dojxetiu.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.sxryk.cn/163kmnxgxuf.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.xuanzx.com/163qbicwuef.html

[H03] 主动抛出异常
来源：http://www.aibaodan.cn/163pamkkgfr.html

Py:   raise ValueError("错误信息")
来源：http://www.sxryk.cn/163murowoqq.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.aibaodan.cn/163atbdbdxc.html

JS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163viegwelt.html

TS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163ffdaekyr.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.xuanzx.com/163fikkaamj.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.xuanzx.com/163upjyudwl.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.xuanzx.com/163ttengbbl.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.sxryk.cn/163pwghcjmy.html

[H04] 自定义异常类型
来源：http://www.sxryk.cn/163xzksqxde.html

Py:   class MyError(Exception): pass
来源：http://www.sxryk.cn/163bmchhywy.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.sxryk.cn/163rseptehi.html

JS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163eglilamx.html

TS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163qtyxskcs.html

Java: class MyException extends RuntimeException {}
来源：http://www.aibaodan.cn/163lllkiwwi.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.sxryk.cn/163yxvhegro.html

Ruby: class MyError < StandardError; end
来源：http://www.aibaodan.cn/163zgixsnvg.html

C#:   class MyException : Exception {}
来源：http://www.aibaodan.cn/163ozgjzzcl.html

[H05] 捕获特定类型
来源：http://www.aibaodan.cn/163vufxgrre.html

Py:   except ValueError as e:
来源：http://www.sxryk.cn/163zzkcgmsn.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.sxryk.cn/163zvxmtklg.html

JS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163znzquifp.html

TS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163afajdqks.html

Java: catch (IOException | SQLException e) {}
来源：http://www.xuanzx.com/163snzwoozc.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.aibaodan.cn/163gbvwsoom.html

Ruby: rescue ArgumentError => e
来源：http://www.sxryk.cn/163koolttcn.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.xuanzx.com/163juxsaltx.html

[H06] 可选值 / 空值安全访问
来源：http://www.aibaodan.cn/163hdunkqzt.html

Py:   value = d.get("k") or default
来源：http://www.aibaodan.cn/163vgktwsrf.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.aibaodan.cn/163acrqnhuc.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163ueftkqib.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163mneraxkz.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.sxryk.cn/163rchnjtba.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.aibaodan.cn/163lgiqaglc.html

Ruby: d&.dig(:a, :b)
来源：http://www.aibaodan.cn/163vmamdowb.html

C#:   obj?.A?.B ?? default
来源：http://www.sxryk.cn/163ptmvroua.html

[H07] 断言
来源：http://www.xuanzx.com/163toflyswr.html

Py:   assert x > 0, "必须为正"
来源：http://www.xuanzx.com/163eaqgzeon.html

PHP:  assert($x > 0);
来源：http://www.xuanzx.com/163kfvfnlag.html

JS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163tlibscqn.html

TS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163odqdqhkl.html

Java: assert x > 0 : "必须为正";
来源：http://www.sxryk.cn/163pqgaedcp.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.aibaodan.cn/163alysvfiz.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.aibaodan.cn/163uydlqufa.html

C#:   Debug.Assert(x > 0);
来源：http://www.sxryk.cn/163fptmhbvl.html

[H08] 获取错误信息与堆栈
来源：http://www.xuanzx.com/163kpteybog.html

Py:   str(e);  traceback.format_exc()
来源：http://www.aibaodan.cn/163qnefqnym.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.xuanzx.com/163skhiykex.html

JS:   e.message;  e.stack
来源：http://www.xuanzx.com/163fhztqqtt.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.aibaodan.cn/163obtqnlyc.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.xuanzx.com/163nfawtgdw.html

Go:   err.Error()
来源：http://www.sxryk.cn/163itiusxiu.html

Ruby: e.message;  e.backtrace
来源：http://www.xuanzx.com/163cwdoyfei.html

C#:   e.Message;  e.StackTrace
来源：http://www.sxryk.cn/163vsdptjht.html

[H09] 带错误码的异常
来源：http://www.xuanzx.com/163aasqztpr.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.aibaodan.cn/163oydflvra.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.sxryk.cn/163neulhmge.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.sxryk.cn/163yirnjduk.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.sxryk.cn/163wennvxnz.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.sxryk.cn/163zxzlshvv.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.aibaodan.cn/163iowzszvn.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.aibaodan.cn/163nqmxvfdh.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.sxryk.cn/163qtjrqyiq.html

[H10] 资源自动释放
来源：http://www.aibaodan.cn/163wjyzswpx.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.sxryk.cn/163blikfvyh.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.sxryk.cn/163htgbbzra.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163oifyfpvk.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163kmovxqnh.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.sxryk.cn/163gkdzzojg.html

Go:   defer f.Close()
来源：http://www.xuanzx.com/163fpcovekv.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.aibaodan.cn/163kzezpapx.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.aibaodan.cn/163yqrhzbya.html

================================================================================
来源：http://www.aibaodan.cn/163kbttrmfu.html

I. 正则表达式
来源：http://www.sxryk.cn/163nsyststs.html

================================================================================
来源：http://www.aibaodan.cn/163hidtvqng.html

[I01] 判断是否匹配
来源：http://www.aibaodan.cn/163ajyzbrov.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.aibaodan.cn/163hehwvefh.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.sxryk.cn/163tlfmcxaj.html

JS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163lylcxjmx.html

TS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163xjkoqpwz.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.xuanzx.com/163yhemltyr.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.aibaodan.cn/163mhxkmsnq.html

Ruby: s.match?(/\d+/)
来源：http://www.sxryk.cn/163hnobnvnf.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.xuanzx.com/163wvrylhtc.html

[I02] 提取所有匹配
来源：http://www.sxryk.cn/163jzbnsbqn.html

Py:   re.findall(r"\d+", s)
来源：http://www.xuanzx.com/163tvaxfqwn.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.aibaodan.cn/163bpzarzoq.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.sxryk.cn/163qxwvgisi.html

TS:   s.match(/\d+/g)
来源：http://www.aibaodan.cn/163eezekuam.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.aibaodan.cn/163mvlttjpm.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.aibaodan.cn/163gcogodkz.html

Ruby: s.scan(/\d+/)
来源：http://www.aibaodan.cn/163izudlbzn.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.aibaodan.cn/163akegdzxq.html

[I03] 提取捕获分组
来源：http://www.sxryk.cn/163bqbishgb.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.sxryk.cn/163bkrtwpne.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.xuanzx.com/163jrwwprur.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.xuanzx.com/163qgzcgipy.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.aibaodan.cn/163pcusodmo.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.aibaodan.cn/163ijyvygwy.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.xuanzx.com/163mqiyjoqz.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.xuanzx.com/163duefnmjv.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.aibaodan.cn/163aqtraocl.html

[I04] 正则替换
来源：http://www.sxryk.cn/163spicugnm.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.xuanzx.com/163pvdvzzxa.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163rlznffoz.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163tsggdekk.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163zhyfikxa.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.aibaodan.cn/163hrmzxcbf.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.xuanzx.com/163tqkqlsqo.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.xuanzx.com/163yevvuufb.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.sxryk.cn/163gblbehno.html

[I05] 按正则拆分
来源：http://www.sxryk.cn/163yzbvqfgl.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.aibaodan.cn/163zxgpmjgg.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.aibaodan.cn/163ungjnmvi.html

JS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163vsvleopm.html

TS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163mskuacfv.html

Java: s.split("\\s*,\\s*")
来源：http://www.aibaodan.cn/163vqlfgeht.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.sxryk.cn/163disbunxc.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163pdrnpnbz.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.xuanzx.com/163seemcreg.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.aibaodan.cn/163auiacpgs.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163tqmwmrqh.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.xuanzx.com/163ajsqqoku.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163tqhlzyjp.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163clkfsudg.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.xuanzx.com/163daponnwe.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.sxryk.cn/163vaoxkupe.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.aibaodan.cn/163xzwjoxkd.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163ztvbljan.html

[I07] 忽略大小写与多行模式
来源：http://www.xuanzx.com/163ifhgbefk.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.xuanzx.com/163vqdittjc.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.sxryk.cn/163yxeiyqyd.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.aibaodan.cn/163nxaqhdtq.html

TS:   /error/gim
来源：http://www.xuanzx.com/163esxwipao.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.xuanzx.com/163xtbvshil.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.sxryk.cn/163aegxqtkj.html

Ruby: s.scan(/error/i)
来源：http://www.xuanzx.com/163xesyjxwc.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.xuanzx.com/163onwjoqgx.html

[I08] 贪婪与非贪婪匹配
来源：http://www.xuanzx.com/163cdxycdpe.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.sxryk.cn/163anrzgjql.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.sxryk.cn/163qyffglap.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163qtoqnmxm.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163wtceizad.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.aibaodan.cn/163samhrffl.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.xuanzx.com/163qcqpvsvm.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.xuanzx.com/163bqodtilx.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.aibaodan.cn/163vftkvkzo.html

================================================================================
来源：http://www.xuanzx.com/163jgxnjyaa.html

J. 日期与时间
来源：http://www.aibaodan.cn/163vunbonpw.html

================================================================================
来源：http://www.aibaodan.cn/163ucjzrujb.html

[J01] 获取当前时间
来源：http://www.sxryk.cn/163awfelaon.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.xuanzx.com/163ygmmnicf.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163zbcbvqfa.html

JS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163dtobsovj.html

TS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163oixkzakd.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.sxryk.cn/163vrnwxpmf.html

Go:   time.Now()
来源：http://www.sxryk.cn/163fmebylzq.html

Ruby: Time.now
来源：http://www.aibaodan.cn/163uehfhuxv.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.sxryk.cn/163sdwrlwpc.html

[J02] 格式化输出
来源：http://www.xuanzx.com/163qzdewtmq.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163nfwisqxx.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163qopdnhlh.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.sxryk.cn/163snfvpxfe.html

TS:   d.toISOString()
来源：http://www.sxryk.cn/163afpccbun.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.aibaodan.cn/163wwctnyly.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.aibaodan.cn/163nvvshyfz.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163qcdjjwpu.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.sxryk.cn/163jbblvvrz.html

[J03] 字符串解析为日期
来源：http://www.aibaodan.cn/163kcnlcbvs.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.xuanzx.com/163istnmpau.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.sxryk.cn/163upsipjwc.html

JS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163sefbmphy.html

TS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163jhmmabdh.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.xuanzx.com/163jmrvfifl.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.aibaodan.cn/163naiefmgx.html

Ruby: Date.parse("2024-01-02")
来源：http://www.xuanzx.com/163wqtuumzf.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.xuanzx.com/163piycgvwy.html

[J04] 时间戳与日期互转
来源：http://www.sxryk.cn/163pqwljnzq.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.sxryk.cn/163zzilvlnc.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.xuanzx.com/163fnhefjat.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.xuanzx.com/163dobeysaa.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.aibaodan.cn/163ajyfejve.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.xuanzx.com/163sflwinma.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.sxryk.cn/163ftypujxc.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.xuanzx.com/163sccfxwhe.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.xuanzx.com/163kfzqctyw.html

[J05] 时间加减（加 7 天）
来源：http://www.xuanzx.com/163abnmpjkj.html

Py:   now + timedelta(days=7)
来源：http://www.sxryk.cn/163rdnfwvrm.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.aibaodan.cn/163lhwbfgci.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163fcurmxlt.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163dlwswvup.html

Java: LocalDate.now().plusDays(7)
来源：http://www.aibaodan.cn/163panttngt.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.sxryk.cn/163jbmhqiap.html

Ruby: Time.now + 7 * 86400
来源：http://www.sxryk.cn/163nfibemhy.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.aibaodan.cn/163kxmxzizh.html

[J06] 计算两时间之差
来源：http://www.xuanzx.com/163bsrrtxkv.html

Py:   (end - start).total_seconds()
来源：http://www.sxryk.cn/163qrfnsedb.html

PHP:  $end->diff($start)->days;
来源：http://www.xuanzx.com/163vdhojmaz.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.aibaodan.cn/163vfuxckjt.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.aibaodan.cn/163lyrpmqht.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.aibaodan.cn/163gomjcsrb.html

Go:   end.Sub(start).Hours()
来源：http://www.sxryk.cn/163picnekpc.html

Ruby: end - start                 # 返回秒数
来源：http://www.xuanzx.com/163szhcvodk.html

C#:   (end - start).TotalSeconds
来源：http://www.aibaodan.cn/163ayvozekm.html

[J07] 比较两个日期
来源：http://www.aibaodan.cn/163wopnxxia.html

Py:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163tvjcszxc.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.aibaodan.cn/163fhykkovf.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163cokvdbas.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163lprdosxm.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.aibaodan.cn/163ijdxtpyw.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.aibaodan.cn/163kscyhkpx.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163bvigdqrn.html

C#:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163qcadjycx.html

[J08] 提取年月日与星期
来源：http://www.xuanzx.com/163fspccmpi.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.aibaodan.cn/163rgvqhjcc.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.sxryk.cn/163wvtomggv.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.aibaodan.cn/163vxzsyffd.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.xuanzx.com/163vsjfonnb.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.xuanzx.com/163yfyoovhq.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.xuanzx.com/163cnfsojid.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.xuanzx.com/163ojruvyvx.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.aibaodan.cn/163hvvcxnhq.html

[J09] 时区处理
来源：http://www.aibaodan.cn/163gemysoqt.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.aibaodan.cn/163rpitwemt.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.aibaodan.cn/163bwfughpf.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163rzgjaqnv.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163bkzkyfzn.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.aibaodan.cn/163pbzqrplz.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.xuanzx.com/163jfvwzgjn.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.sxryk.cn/163ftdraiil.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.xuanzx.com/163frwnqlts.html

[J10] 取今天 / 本月第一天
来源：http://www.sxryk.cn/163gxhbjxde.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.aibaodan.cn/163dogzcglq.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.xuanzx.com/163ciicalck.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.xuanzx.com/163qwmaonkp.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.aibaodan.cn/163efpeeywl.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.xuanzx.com/163bkyupkmh.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.aibaodan.cn/163rzzodjft.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.aibaodan.cn/163xdvwxhfb.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.sxryk.cn/163yduoyoxq.html

================================================================================
来源：http://www.aibaodan.cn/163geebnjkm.html

K. JSON 与序列化
来源：http://www.xuanzx.com/163gvwtnajr.html

================================================================================
来源：http://www.sxryk.cn/163etdxmzvs.html

[K01] 对象转 JSON 字符串
来源：http://www.aibaodan.cn/163ydmilspy.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.xuanzx.com/163lumothrg.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163iswnjoit.html

JS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163musojidv.html

TS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163rlnrcyyz.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.sxryk.cn/163bwcwxxxz.html

Go:   json.Marshal(obj)
来源：http://www.sxryk.cn/163ktlsdmmi.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.xuanzx.com/163tecyuuip.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.xuanzx.com/163qvtmauoi.html

[K02] JSON 字符串转对象
来源：http://www.xuanzx.com/163mzusyoak.html

Py:   json.loads(s)
来源：http://www.sxryk.cn/163cdyfscre.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.xuanzx.com/163vfmgivky.html

JS:   JSON.parse(s)
来源：http://www.xuanzx.com/163tmrkoawa.html

TS:   JSON.parse(s)
来源：http://www.xuanzx.com/163qchoahez.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.sxryk.cn/163uwkealah.html

Go:   json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163czjnvfdq.html

Ruby: JSON.parse(s)
来源：http://www.aibaodan.cn/163ybvqcnnn.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.xuanzx.com/163usqtksoj.html

[K03] JSON 美化输出（带缩进）
来源：http://www.sxryk.cn/163mglgfgit.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.aibaodan.cn/163etnzxynk.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163ienqidir.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163equghjns.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163fgonoyfn.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.xuanzx.com/163jxexueoc.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.sxryk.cn/163bdrvnaaz.html


<!-- 参考信息 -->