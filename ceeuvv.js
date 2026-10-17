外链999!wailian999！

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.sxryk.cn/163umbpysrg.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.sxryk.cn/163auqrmfdt.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.xuanzx.com/163dnjrujar.html

[H02] finally / ensure 收尾
来源：http://www.sxryk.cn/163zcxuoopj.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.xuanzx.com/163duibqblc.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163senlghyh.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163ocofstcr.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163kwhrvjur.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163bqlytqga.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.xuanzx.com/163mqlypqpk.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.sxryk.cn/163xjujetkq.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.xuanzx.com/163bcilvsvx.html

[H03] 主动抛出异常
来源：http://www.aibaodan.cn/163mkzgydzs.html

Py:   raise ValueError("错误信息")
来源：http://www.aibaodan.cn/163fnwosnbb.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.aibaodan.cn/163pucmoovy.html

JS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163hcnffgfs.html

TS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163reudrcwc.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.xuanzx.com/163idyvrvgo.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.aibaodan.cn/163rdlsetsw.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.aibaodan.cn/163nljjzcoj.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.aibaodan.cn/163ipkzjmco.html

[H04] 自定义异常类型
来源：http://www.xuanzx.com/163lobdqegz.html

Py:   class MyError(Exception): pass
来源：http://www.xuanzx.com/163rwjgaqsn.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.aibaodan.cn/163eagrhkls.html

JS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163golqxvwx.html

TS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163giyfvmtw.html

Java: class MyException extends RuntimeException {}
来源：http://www.aibaodan.cn/163wxzelrbo.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.xuanzx.com/163sxamdwvo.html

Ruby: class MyError < StandardError; end
来源：http://www.sxryk.cn/163johtzolx.html

C#:   class MyException : Exception {}
来源：http://www.xuanzx.com/163xylyygya.html

[H05] 捕获特定类型
来源：http://www.aibaodan.cn/163dnzdmrzm.html

Py:   except ValueError as e:
来源：http://www.sxryk.cn/163cssvzdfd.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.aibaodan.cn/163hxhaftmq.html

JS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163zjdkhghp.html

TS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163dwjzmouc.html

Java: catch (IOException | SQLException e) {}
来源：http://www.xuanzx.com/163vegjltct.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.aibaodan.cn/163fsivwvoj.html

Ruby: rescue ArgumentError => e
来源：http://www.sxryk.cn/163zhnravpn.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.xuanzx.com/163jdisubbd.html

[H06] 可选值 / 空值安全访问
来源：http://www.sxryk.cn/163tuutntgg.html

Py:   value = d.get("k") or default
来源：http://www.aibaodan.cn/163vfzwnbbq.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.aibaodan.cn/163slzcrypq.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163hnggvwlv.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163ifbjyyoz.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.xuanzx.com/163ukolmkib.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.aibaodan.cn/163ousnrpbb.html

Ruby: d&.dig(:a, :b)
来源：http://www.aibaodan.cn/163sgypqqux.html

C#:   obj?.A?.B ?? default
来源：http://www.aibaodan.cn/163zjvpfsjc.html

[H07] 断言
来源：http://www.xuanzx.com/163fpiehcxo.html

Py:   assert x > 0, "必须为正"
来源：http://www.aibaodan.cn/163lwbbrkod.html

PHP:  assert($x > 0);
来源：http://www.xuanzx.com/163ddhfqroo.html

JS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163junbotof.html

TS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163ahxtykuu.html

Java: assert x > 0 : "必须为正";
来源：http://www.aibaodan.cn/163rbydsnhs.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.xuanzx.com/163qckcqtdj.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.aibaodan.cn/163hikfbwsn.html

C#:   Debug.Assert(x > 0);
来源：http://www.sxryk.cn/163rfyodkfd.html

[H08] 获取错误信息与堆栈
来源：http://www.aibaodan.cn/163vxdcrgmy.html

Py:   str(e);  traceback.format_exc()
来源：http://www.aibaodan.cn/163sfwfnkym.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.xuanzx.com/163wzlpbogt.html

JS:   e.message;  e.stack
来源：http://www.aibaodan.cn/163xhwsmunv.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.sxryk.cn/163yedbywum.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.xuanzx.com/163afvembdu.html

Go:   err.Error()
来源：http://www.aibaodan.cn/163ogwwmivh.html

Ruby: e.message;  e.backtrace
来源：http://www.aibaodan.cn/163ofntppdr.html

C#:   e.Message;  e.StackTrace
来源：http://www.aibaodan.cn/163vbwmldmh.html

[H09] 带错误码的异常
来源：http://www.aibaodan.cn/163juxsnphy.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.xuanzx.com/163esivabdb.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.xuanzx.com/163mmgabxhx.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.sxryk.cn/163frqzmmfs.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.xuanzx.com/163yzmlcxff.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.xuanzx.com/163aspaqvmg.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.xuanzx.com/163ymyjtoap.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.aibaodan.cn/163zvwtpogz.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.xuanzx.com/163wultrvjx.html

[H10] 资源自动释放
来源：http://www.aibaodan.cn/163zmgjgxoj.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.sxryk.cn/163hgcefbag.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.aibaodan.cn/163pfvhqyaj.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163fevgatoc.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163tdktfxag.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.aibaodan.cn/163xadyyvqq.html

Go:   defer f.Close()
来源：http://www.sxryk.cn/163zvrnzyoj.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.sxryk.cn/163lqikfytv.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.sxryk.cn/163ymvubhtn.html

================================================================================
来源：http://www.xuanzx.com/163axdlypsx.html

I. 正则表达式
来源：http://www.aibaodan.cn/163cdlcazbi.html

================================================================================
来源：http://www.sxryk.cn/163ksztluye.html

[I01] 判断是否匹配
来源：http://www.aibaodan.cn/163plbcfhme.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.xuanzx.com/163knmvtdlb.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.xuanzx.com/163ccryyyww.html

JS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163skpezkyv.html

TS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163awndrove.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.sxryk.cn/163tythetlk.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.aibaodan.cn/163mvailkjn.html

Ruby: s.match?(/\d+/)
来源：http://www.aibaodan.cn/163mvksyaam.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.sxryk.cn/163vnatafbs.html

[I02] 提取所有匹配
来源：http://www.xuanzx.com/163smyfcnpq.html

Py:   re.findall(r"\d+", s)
来源：http://www.sxryk.cn/163sqjqbjew.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.aibaodan.cn/163fidudfqq.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.sxryk.cn/163cuivmvqz.html

TS:   s.match(/\d+/g)
来源：http://www.aibaodan.cn/163mjaydjtv.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.aibaodan.cn/163qjilgvsz.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.aibaodan.cn/163zbyqnler.html

Ruby: s.scan(/\d+/)
来源：http://www.xuanzx.com/163wcmbkmkw.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.xuanzx.com/163tqmahfhk.html

[I03] 提取捕获分组
来源：http://www.xuanzx.com/163svkyoena.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.aibaodan.cn/163fimlhuci.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.xuanzx.com/163ozhqgrsa.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.aibaodan.cn/163gsycxbjq.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.sxryk.cn/163msopvxad.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.xuanzx.com/163zswbvggc.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.aibaodan.cn/163mmebthcv.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.xuanzx.com/163iuoxgqqr.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.aibaodan.cn/163qdurdimu.html

[I04] 正则替换
来源：http://www.sxryk.cn/163gykmwgfr.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.aibaodan.cn/163uqcdjvyi.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163gwhnxjiu.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163lhmltfqj.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163fqnrooss.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.aibaodan.cn/163knqaffqr.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.aibaodan.cn/163qfbwuerg.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.sxryk.cn/163oyrvudlx.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.sxryk.cn/163zcqvjxyj.html

[I05] 按正则拆分
来源：http://www.xuanzx.com/163ewttwonx.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.sxryk.cn/163zpahkjau.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.xuanzx.com/163fmvijxjv.html

JS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163xcomllsy.html

TS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163weaagify.html

Java: s.split("\\s*,\\s*")
来源：http://www.aibaodan.cn/163uhukszzc.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.sxryk.cn/163rriifywm.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163mmhkvpnp.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.xuanzx.com/163jsohdygj.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.sxryk.cn/163kkitrxph.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163eyzrjndm.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.sxryk.cn/163qwzuiprl.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163qlaknvll.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163mbkmgnew.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.aibaodan.cn/163qlnvkbiq.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.xuanzx.com/163tjpepjet.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.xuanzx.com/163cgddxnmb.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163vmholfmu.html

[I07] 忽略大小写与多行模式
来源：http://www.sxryk.cn/163uesorhws.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.sxryk.cn/163rszuopxn.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.aibaodan.cn/163cgjghtql.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.sxryk.cn/163dgudcmmi.html

TS:   /error/gim
来源：http://www.aibaodan.cn/163rgdklboy.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.xuanzx.com/163smkourtb.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.aibaodan.cn/163pblmvnrq.html

Ruby: s.scan(/error/i)
来源：http://www.sxryk.cn/163hwubslva.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.sxryk.cn/163beeqfrlh.html

[I08] 贪婪与非贪婪匹配
来源：http://www.xuanzx.com/163gfuviqub.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.aibaodan.cn/163eoqhffnm.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.xuanzx.com/163hvavylwg.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163scinusad.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163ugyjjczu.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.sxryk.cn/163hhgrtjzs.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.xuanzx.com/163urpjjdmi.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.aibaodan.cn/163twaacynj.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.sxryk.cn/163saesmxel.html

================================================================================
来源：http://www.sxryk.cn/163mmozlacc.html

J. 日期与时间
来源：http://www.sxryk.cn/163qnjqinwm.html

================================================================================
来源：http://www.aibaodan.cn/163ettuvjxx.html

[J01] 获取当前时间
来源：http://www.xuanzx.com/163yvmuptvm.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.xuanzx.com/163bzumvjaf.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163eaolwrvk.html

JS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163pczciels.html

TS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163rpcdppav.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.sxryk.cn/163hyowyneo.html

Go:   time.Now()
来源：http://www.sxryk.cn/163kymgivbj.html

Ruby: Time.now
来源：http://www.aibaodan.cn/163ybjtqbvv.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.sxryk.cn/163nplxazyl.html

[J02] 格式化输出
来源：http://www.xuanzx.com/163azqzhldu.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163zkaxoeyn.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163mvaxmeur.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.xuanzx.com/163sjajywad.html

TS:   d.toISOString()
来源：http://www.aibaodan.cn/163hxpaizux.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.xuanzx.com/163rlhprdwb.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.sxryk.cn/163oheyxoiy.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163byjifejm.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.aibaodan.cn/163fgqtijih.html

[J03] 字符串解析为日期
来源：http://www.xuanzx.com/163grsdllhb.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.aibaodan.cn/163kdidziwn.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.aibaodan.cn/163kfoaypta.html

JS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163zowfjahq.html

TS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163bdzbfsel.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.aibaodan.cn/163gaxotkfv.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.sxryk.cn/163xziejcob.html

Ruby: Date.parse("2024-01-02")
来源：http://www.sxryk.cn/163pvqftnap.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.xuanzx.com/163xaewjmie.html

[J04] 时间戳与日期互转
来源：http://www.xuanzx.com/163vxpslfbm.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.aibaodan.cn/163hgllyayt.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.xuanzx.com/163qfnbswzw.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.aibaodan.cn/163jmwbsqzy.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.xuanzx.com/163tjgduamc.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.aibaodan.cn/163redxamst.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.aibaodan.cn/163gkdneipf.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.sxryk.cn/163nepaumpz.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.aibaodan.cn/163kybthwse.html

[J05] 时间加减（加 7 天）
来源：http://www.sxryk.cn/163pddbcogj.html

Py:   now + timedelta(days=7)
来源：http://www.sxryk.cn/163lvhmbyvb.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.aibaodan.cn/163abujreui.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163aaiwczqq.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163cdlaufku.html

Java: LocalDate.now().plusDays(7)
来源：http://www.xuanzx.com/163ygekibfh.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.sxryk.cn/163oyqpqtkd.html

Ruby: Time.now + 7 * 86400
来源：http://www.sxryk.cn/163weketrur.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.xuanzx.com/163szzhgjte.html

[J06] 计算两时间之差
来源：http://www.sxryk.cn/163kslsmrqm.html

Py:   (end - start).total_seconds()
来源：http://www.xuanzx.com/163gxjidajq.html

PHP:  $end->diff($start)->days;
来源：http://www.sxryk.cn/163wpqrwstw.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.sxryk.cn/163gudhmmnm.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.sxryk.cn/163nfuqjuwm.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.sxryk.cn/163ekpqdhxc.html

Go:   end.Sub(start).Hours()
来源：http://www.xuanzx.com/163atvaxlry.html

Ruby: end - start                 # 返回秒数
来源：http://www.sxryk.cn/163gtorjril.html

C#:   (end - start).TotalSeconds
来源：http://www.aibaodan.cn/163nuhajakj.html

[J07] 比较两个日期
来源：http://www.sxryk.cn/163nhjekhtz.html

Py:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163ryhdzbbq.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.aibaodan.cn/163zsirpbuk.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163aimuqxer.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163wuyhyfen.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.aibaodan.cn/163fgynvdke.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.xuanzx.com/163ycdleoal.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163xaszbfgp.html

C#:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163uedcrvua.html

[J08] 提取年月日与星期
来源：http://www.sxryk.cn/163yudrvjrw.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.xuanzx.com/163krhhaqew.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.sxryk.cn/163unpizoja.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.xuanzx.com/163bumnrvpb.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.aibaodan.cn/163lckhboqj.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.aibaodan.cn/163whcntwxw.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.sxryk.cn/163fgwlouaw.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.aibaodan.cn/163aqteksdh.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.sxryk.cn/163nxclmeqf.html

[J09] 时区处理
来源：http://www.xuanzx.com/163srewlryr.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.sxryk.cn/163wcqtdguc.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.sxryk.cn/163enyxzesn.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163naielqnx.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163aezflmyd.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.aibaodan.cn/163utjkcoyf.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.xuanzx.com/163wxokvmfr.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.sxryk.cn/163jfsnyprg.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.aibaodan.cn/163gnxmwdsv.html

[J10] 取今天 / 本月第一天
来源：http://www.xuanzx.com/163qtoqzaei.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.sxryk.cn/163ocdctnyf.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.sxryk.cn/163wpyqnbte.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.aibaodan.cn/163vfiwzfjp.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.xuanzx.com/163lhyizjkg.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.xuanzx.com/163natafbvp.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.sxryk.cn/163lkfgiimi.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.sxryk.cn/163lkxaupak.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.xuanzx.com/163hhpnoizu.html

================================================================================
来源：http://www.xuanzx.com/163qzbfoeib.html

K. JSON 与序列化
来源：http://www.xuanzx.com/163dkaawpfn.html

================================================================================
来源：http://www.xuanzx.com/163mcdmrvwh.html

[K01] 对象转 JSON 字符串
来源：http://www.sxryk.cn/163jhelhfyh.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.aibaodan.cn/163paewjeia.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163ltnstpom.html

JS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163gbgixmrs.html

TS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163ewvdicca.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.xuanzx.com/163hpodikqw.html

Go:   json.Marshal(obj)
来源：http://www.sxryk.cn/163mmrdefuw.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.xuanzx.com/163vfzgplwz.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.sxryk.cn/163oblxujca.html

[K02] JSON 字符串转对象
来源：http://www.xuanzx.com/163mdecldfl.html

Py:   json.loads(s)
来源：http://www.sxryk.cn/163hrpzbjyn.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.xuanzx.com/163ujtgqike.html

JS:   JSON.parse(s)
来源：http://www.sxryk.cn/163afkizwjz.html

TS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163vazeixyi.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.xuanzx.com/163ytlnmwcc.html

Go:   json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163ytgxkguf.html

Ruby: JSON.parse(s)
来源：http://www.sxryk.cn/163wdflzayn.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.xuanzx.com/163lecsycqh.html

[K03] JSON 美化输出（带缩进）
来源：http://www.xuanzx.com/163irldekrp.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.xuanzx.com/163fjvblvhu.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163ggwqujwg.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163qixwyxvd.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163jzvvycjt.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.aibaodan.cn/163gtvdseby.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.aibaodan.cn/163ujpycfke.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.xuanzx.com/163hvcsttwh.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.xuanzx.com/163pkwuvrzi.html

[K04] 读取 JSON 文件
来源：http://www.xuanzx.com/163gexlumzb.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.aibaodan.cn/163dvhbiyrc.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.xuanzx.com/163abhiockp.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163qhcfpjrb.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163xiwgsbpa.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.aibaodan.cn/163qyugcpci.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163shrdxpnk.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.sxryk.cn/163pktlridn.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.sxryk.cn/163bsldbxhv.html

[K05] 深拷贝对象
来源：http://www.xuanzx.com/163uxuupqma.html

Py:   copy.deepcopy(obj)
来源：http://www.aibaodan.cn/163uzozifqg.html

PHP:  unserialize(serialize($obj));
来源：http://www.aibaodan.cn/163uexjvsga.html

JS:   structuredClone(obj)
来源：http://www.sxryk.cn/163pfdnewsx.html

TS:   structuredClone(obj)
来源：http://www.xuanzx.com/163ofgsoyhf.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.xuanzx.com/163ktegssul.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.xuanzx.com/163injyqtyy.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.aibaodan.cn/163wpgqxsra.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.xuanzx.com/163cauoovnv.html


<!-- 参考信息 -->