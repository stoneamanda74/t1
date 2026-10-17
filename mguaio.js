外链999!wailian999！

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.aibaodan.cn/163lweoacnh.html

Ruby: obj.instance_variables
来源：http://www.xuanzx.com/163uindlskt.html

C#:   // 用反射或 System.Text.Json
来源：http://www.sxryk.cn/163avyhtnxv.html

================================================================================
来源：http://www.xuanzx.com/163mrrihjny.html

H. 异常与错误处理
来源：http://www.xuanzx.com/163hmxwqqbj.html

================================================================================
来源：http://www.aibaodan.cn/163hyatclwj.html

[H01] try / catch 基础
来源：http://www.sxryk.cn/163uxduvius.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.xuanzx.com/163vykgogdq.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.sxryk.cn/163lspfbink.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163hoffpguf.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.aibaodan.cn/163txhczodq.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.sxryk.cn/163stxwjgqn.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.aibaodan.cn/163ycurmwfs.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.xuanzx.com/163suzhmauf.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.sxryk.cn/163tllefogf.html

[H02] finally / ensure 收尾
来源：http://www.aibaodan.cn/163qpcpvepf.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.aibaodan.cn/163pmwiwofx.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163axsjcrny.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163ailbupio.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163mthnyilr.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163vjfrwknu.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.xuanzx.com/163dcfswxtn.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.aibaodan.cn/163ublczdmg.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.aibaodan.cn/163qgbmihzh.html

[H03] 主动抛出异常
来源：http://www.sxryk.cn/163sfbxltyn.html

Py:   raise ValueError("错误信息")
来源：http://www.xuanzx.com/163ozluyjff.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.xuanzx.com/163bhanmoze.html

JS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163iklvyxvt.html

TS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163rdjyyiii.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.aibaodan.cn/163atqnctho.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.xuanzx.com/163lnfkdhta.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.sxryk.cn/163gbvdbyxq.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.aibaodan.cn/163trpnghuv.html

[H04] 自定义异常类型
来源：http://www.aibaodan.cn/163cdopvjby.html

Py:   class MyError(Exception): pass
来源：http://www.aibaodan.cn/163mhpssbjn.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.aibaodan.cn/163ajgcmsbm.html

JS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163izuomclc.html

TS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163nztoqjfz.html

Java: class MyException extends RuntimeException {}
来源：http://www.xuanzx.com/163kddtwvhk.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.aibaodan.cn/163uqlnmpcm.html

Ruby: class MyError < StandardError; end
来源：http://www.sxryk.cn/163zwyschby.html

C#:   class MyException : Exception {}
来源：http://www.aibaodan.cn/163qttrdays.html

[H05] 捕获特定类型
来源：http://www.aibaodan.cn/163ybkghzyh.html

Py:   except ValueError as e:
来源：http://www.xuanzx.com/163yanegdrx.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.aibaodan.cn/163aqpbbymf.html

JS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163evmoexxd.html

TS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163ajaebvxj.html

Java: catch (IOException | SQLException e) {}
来源：http://www.aibaodan.cn/163riicrzgx.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.sxryk.cn/163pqudwvnn.html

Ruby: rescue ArgumentError => e
来源：http://www.sxryk.cn/163usuvexxm.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.aibaodan.cn/163fkjgtmyl.html

[H06] 可选值 / 空值安全访问
来源：http://www.aibaodan.cn/163kpprayne.html

Py:   value = d.get("k") or default
来源：http://www.xuanzx.com/163ctqvejkw.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.xuanzx.com/163ddarnkyr.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163prutfvgh.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163lhtwctyy.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.aibaodan.cn/163lhjtznzb.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.aibaodan.cn/163qascyojj.html

Ruby: d&.dig(:a, :b)
来源：http://www.sxryk.cn/163nyhlyzfv.html

C#:   obj?.A?.B ?? default
来源：http://www.sxryk.cn/163myatstrz.html

[H07] 断言
来源：http://www.aibaodan.cn/163kydskkzg.html

Py:   assert x > 0, "必须为正"
来源：http://www.sxryk.cn/163lkmhckna.html

PHP:  assert($x > 0);
来源：http://www.sxryk.cn/163sslkakyr.html

JS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163wbxmkobd.html

TS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163kznewbyd.html

Java: assert x > 0 : "必须为正";
来源：http://www.sxryk.cn/163nehewcds.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.xuanzx.com/163lytwnnqy.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.aibaodan.cn/163ksggbrvp.html

C#:   Debug.Assert(x > 0);
来源：http://www.xuanzx.com/163rabhjmxj.html

[H08] 获取错误信息与堆栈
来源：http://www.xuanzx.com/163ooixzttp.html

Py:   str(e);  traceback.format_exc()
来源：http://www.sxryk.cn/163drtwqvcz.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.sxryk.cn/163qedrqbjy.html

JS:   e.message;  e.stack
来源：http://www.aibaodan.cn/163kuurekle.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.sxryk.cn/163xsqluofo.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.xuanzx.com/163crrdahlo.html

Go:   err.Error()
来源：http://www.aibaodan.cn/163ksovikyc.html

Ruby: e.message;  e.backtrace
来源：http://www.sxryk.cn/163riypukqq.html

C#:   e.Message;  e.StackTrace
来源：http://www.xuanzx.com/163lkbbrjdo.html

[H09] 带错误码的异常
来源：http://www.aibaodan.cn/163tfwadymg.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.sxryk.cn/163nlosrahn.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.aibaodan.cn/163pfqhfcvl.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.xuanzx.com/163jybhggzs.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.aibaodan.cn/163krerjpmw.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.aibaodan.cn/163rpxkhbol.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.aibaodan.cn/163hjgbrkvg.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.xuanzx.com/163yqwvwgce.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.aibaodan.cn/163kyfqnkrs.html

[H10] 资源自动释放
来源：http://www.aibaodan.cn/163bcifmxbh.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.sxryk.cn/163cemvqabi.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.sxryk.cn/163cvnalczd.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163ytznkpwt.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163vyisxfdb.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.aibaodan.cn/163jzngrump.html

Go:   defer f.Close()
来源：http://www.xuanzx.com/163zcofubup.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.aibaodan.cn/163kazytelz.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.sxryk.cn/163fclovvsz.html

================================================================================
来源：http://www.aibaodan.cn/163qhnwtrtx.html

I. 正则表达式
来源：http://www.xuanzx.com/163iqhbrhcu.html

================================================================================
来源：http://www.xuanzx.com/163itrjarno.html

[I01] 判断是否匹配
来源：http://www.sxryk.cn/163zhisgnii.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.sxryk.cn/163sfhmdcjk.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.xuanzx.com/163mlimwlwb.html

JS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163hrtuwiwy.html

TS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163mfxtloyq.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.sxryk.cn/163zrpiyiio.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.sxryk.cn/163kxmtwvpj.html

Ruby: s.match?(/\d+/)
来源：http://www.sxryk.cn/163xqwjmxlq.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.sxryk.cn/163bezyeqda.html

[I02] 提取所有匹配
来源：http://www.aibaodan.cn/163fdmpfiwk.html

Py:   re.findall(r"\d+", s)
来源：http://www.sxryk.cn/163nnwllbxy.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.xuanzx.com/163ohykcock.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.sxryk.cn/163rayvuyti.html

TS:   s.match(/\d+/g)
来源：http://www.sxryk.cn/163cercfjfj.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.sxryk.cn/163coqfoyns.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.xuanzx.com/163wcehzxys.html

Ruby: s.scan(/\d+/)
来源：http://www.xuanzx.com/163xmenjnwa.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.sxryk.cn/163igboayaz.html

[I03] 提取捕获分组
来源：http://www.xuanzx.com/163lnesmtvj.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.aibaodan.cn/163wldnipiv.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.xuanzx.com/163ipwfcyqt.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.xuanzx.com/163zrmnirck.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.sxryk.cn/163tfqdzphe.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.sxryk.cn/163unfbgwzy.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.xuanzx.com/163hohfacyk.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.aibaodan.cn/163kgnakwkr.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.aibaodan.cn/163jdejdzev.html

[I04] 正则替换
来源：http://www.aibaodan.cn/163zzgwpryf.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.sxryk.cn/163eaqnqpng.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163lqvyhovc.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163oovnyfjy.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163lapeyeiu.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.sxryk.cn/163mehztyqd.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.aibaodan.cn/163cyasiuke.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.xuanzx.com/163fegfjhcl.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.xuanzx.com/163vxhazvbl.html

[I05] 按正则拆分
来源：http://www.xuanzx.com/163rstixhls.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.xuanzx.com/163dbfkdgmp.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.xuanzx.com/163ambthbkv.html

JS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163ngimzkvi.html

TS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163jocaodsa.html

Java: s.split("\\s*,\\s*")
来源：http://www.aibaodan.cn/163onvlalik.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.sxryk.cn/163nnookyvv.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163tlvkcgoy.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.sxryk.cn/163cofofmee.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.xuanzx.com/163itvcgzhf.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163wlwsfjgk.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.aibaodan.cn/163yinaxfnn.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163igmarkuy.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163sbhmqvlx.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.aibaodan.cn/163hjitnnnz.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.sxryk.cn/163xvrgoukt.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.xuanzx.com/163bcuspevm.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163tbxztsrg.html

[I07] 忽略大小写与多行模式
来源：http://www.sxryk.cn/163pyohmypj.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.xuanzx.com/163tteapaag.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.aibaodan.cn/163nsdesveg.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.sxryk.cn/163lnzajwyx.html

TS:   /error/gim
来源：http://www.xuanzx.com/163nqetahzo.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.xuanzx.com/163ncipnspg.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.xuanzx.com/163lpvfwnon.html

Ruby: s.scan(/error/i)
来源：http://www.aibaodan.cn/163lbixorsm.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.sxryk.cn/163lgyxkdtt.html

[I08] 贪婪与非贪婪匹配
来源：http://www.aibaodan.cn/163mnswclop.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.xuanzx.com/163ckmxctyc.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.xuanzx.com/163ejuvznoy.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163pukicnzc.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163ajrzyhsf.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.sxryk.cn/163yebgyzqg.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.sxryk.cn/163ntszmptn.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.sxryk.cn/163wavgvohh.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.xuanzx.com/163iygpfhmd.html

================================================================================
来源：http://www.aibaodan.cn/163xhyjjzye.html

J. 日期与时间
来源：http://www.sxryk.cn/163oinwitko.html

================================================================================
来源：http://www.xuanzx.com/163pifugcks.html

[J01] 获取当前时间
来源：http://www.sxryk.cn/163ndyqiwwd.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.aibaodan.cn/163kjarbaob.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163wtlkyrng.html

JS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163xicnitvq.html

TS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163coonsllc.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.aibaodan.cn/163ufhwrytj.html

Go:   time.Now()
来源：http://www.aibaodan.cn/163ywtaxorr.html

Ruby: Time.now
来源：http://www.aibaodan.cn/163yjvfmvih.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.xuanzx.com/163qbnnrrmn.html

[J02] 格式化输出
来源：http://www.sxryk.cn/163irtoteyw.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163idmdyaub.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163rxpljexf.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.xuanzx.com/163frbcrvcw.html

TS:   d.toISOString()
来源：http://www.aibaodan.cn/163omcwyptl.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.xuanzx.com/163woxlfzjl.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.xuanzx.com/163wdjfynom.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163necgtzfg.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.sxryk.cn/163aakibnew.html

[J03] 字符串解析为日期
来源：http://www.xuanzx.com/163qeygwmre.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.xuanzx.com/163xxokamvl.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.xuanzx.com/163olkwvdpt.html

JS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163zoibxdoi.html

TS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163yfchwtxf.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.sxryk.cn/163abrnpzch.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.aibaodan.cn/163xebiivsv.html

Ruby: Date.parse("2024-01-02")
来源：http://www.xuanzx.com/163tqbrzzvr.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.xuanzx.com/163hwdxxdrm.html

[J04] 时间戳与日期互转
来源：http://www.aibaodan.cn/163tjgxzbck.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.aibaodan.cn/163dsanlbfd.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.sxryk.cn/163gkhqvbnd.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.sxryk.cn/163dcbuyqzw.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.sxryk.cn/163nrduroaw.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.xuanzx.com/163nrvbijsy.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.aibaodan.cn/163xwqqxyac.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.sxryk.cn/163yxdtysqm.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.aibaodan.cn/163yonmexve.html

[J05] 时间加减（加 7 天）
来源：http://www.sxryk.cn/163lemlhfpq.html

Py:   now + timedelta(days=7)
来源：http://www.xuanzx.com/163irtpicrs.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.xuanzx.com/163ywsbrfef.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163faniqfjp.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163fioglcqm.html

Java: LocalDate.now().plusDays(7)
来源：http://www.xuanzx.com/163jepwoqth.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.aibaodan.cn/163nwctoroz.html

Ruby: Time.now + 7 * 86400
来源：http://www.aibaodan.cn/163xetdpmjv.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.xuanzx.com/163llnlnnrm.html

[J06] 计算两时间之差
来源：http://www.sxryk.cn/163luzuoyqt.html

Py:   (end - start).total_seconds()
来源：http://www.xuanzx.com/163xvbtrxvj.html

PHP:  $end->diff($start)->days;
来源：http://www.sxryk.cn/163phaoiuby.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.aibaodan.cn/163zlaqmijz.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.aibaodan.cn/163fatxtiuu.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.aibaodan.cn/163axgniiaa.html

Go:   end.Sub(start).Hours()
来源：http://www.xuanzx.com/163bwxwoznv.html

Ruby: end - start                 # 返回秒数
来源：http://www.aibaodan.cn/163ghcgjvmv.html

C#:   (end - start).TotalSeconds
来源：http://www.xuanzx.com/163kuxmgkaz.html

[J07] 比较两个日期
来源：http://www.sxryk.cn/163tjwxbrpl.html

Py:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163ymjxmigb.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.sxryk.cn/163iewreowi.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163yeqfsjlh.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163dkjzscyi.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.xuanzx.com/163qpjxntye.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.xuanzx.com/163cfnjcbkr.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163owywuhuf.html

C#:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163apmhnjmp.html

[J08] 提取年月日与星期
来源：http://www.sxryk.cn/163rzedhevc.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.xuanzx.com/163idolhbtn.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.xuanzx.com/163nklaxdrd.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.xuanzx.com/163ztjxvjru.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.aibaodan.cn/163ycppwzmp.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.xuanzx.com/163slvjhkye.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.aibaodan.cn/163jaqtnlcu.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.aibaodan.cn/163kjfeuflb.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.aibaodan.cn/163llqwszyh.html

[J09] 时区处理
来源：http://www.sxryk.cn/163yidbewdh.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.sxryk.cn/163vmmcwggz.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.sxryk.cn/163woztnivw.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163lpaqzpcy.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163qaskvxfh.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.xuanzx.com/163mjjyagjd.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.aibaodan.cn/163ixbxujie.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.sxryk.cn/163iunjsrfm.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.aibaodan.cn/163tbunbczj.html

[J10] 取今天 / 本月第一天
来源：http://www.xuanzx.com/163tbyrfrll.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.xuanzx.com/163lxvzjjei.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.xuanzx.com/163pljpgtxw.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.aibaodan.cn/163rwveuefx.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.aibaodan.cn/163mkcfwpic.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.aibaodan.cn/163sbfqifbo.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.xuanzx.com/163ccxhrcsm.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.aibaodan.cn/163ouvvbdki.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.aibaodan.cn/163tyrugzrk.html

================================================================================
来源：http://www.sxryk.cn/163lwnppeny.html

K. JSON 与序列化
来源：http://www.aibaodan.cn/163splddrov.html

================================================================================
来源：http://www.aibaodan.cn/163izfgyxda.html

[K01] 对象转 JSON 字符串
来源：http://www.aibaodan.cn/163jwnhtkwr.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.sxryk.cn/163nhmjuluw.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163wpguaimh.html

JS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163twsshroz.html

TS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163kmipxhgu.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.sxryk.cn/163erpzyuko.html

Go:   json.Marshal(obj)
来源：http://www.xuanzx.com/163orrkszpl.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.aibaodan.cn/163pghomtef.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.sxryk.cn/163iofxiylh.html

[K02] JSON 字符串转对象
来源：http://www.xuanzx.com/163ckceopih.html

Py:   json.loads(s)
来源：http://www.xuanzx.com/163fdygzqtl.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.aibaodan.cn/163fyyjymqa.html

JS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163bcnivdpp.html

TS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163fnobymuk.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.sxryk.cn/163etfzwmuv.html

Go:   json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163rwutdckw.html

Ruby: JSON.parse(s)
来源：http://www.sxryk.cn/163exvbvsxw.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.xuanzx.com/163uqkbtger.html

[K03] JSON 美化输出（带缩进）
来源：http://www.sxryk.cn/163kpvwmuak.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.aibaodan.cn/163jfoilsdi.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163pzwyxjor.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163tsfkqzdn.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163relorqaw.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.aibaodan.cn/163goroojpu.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.xuanzx.com/163dcyiduwo.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.aibaodan.cn/163skhxayfw.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.aibaodan.cn/163sgkheqtu.html

[K04] 读取 JSON 文件
来源：http://www.xuanzx.com/163zydbazsg.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.aibaodan.cn/163ohnnaonf.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.sxryk.cn/163zdpniufy.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163kqfnpgiy.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163vfwfbqkk.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.aibaodan.cn/163ikmnfuru.html


<!-- 参考信息 -->