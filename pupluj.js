外链999!wailian999！

Ruby: class MyError < StandardError; end
来源：http://www.aibaodan.cn/163qcbgxpas.html

C#:   class MyException : Exception {}
来源：http://www.sxryk.cn/163qbjvrjsy.html

[H05] 捕获特定类型
来源：http://www.xuanzx.com/163aenqqnzr.html

Py:   except ValueError as e:
来源：http://www.xuanzx.com/163irlyshih.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.xuanzx.com/163iwbuxqdq.html

JS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163iesnrfij.html

TS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163nedsixro.html

Java: catch (IOException | SQLException e) {}
来源：http://www.sxryk.cn/163binkhovk.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.xuanzx.com/163mhgfcejr.html

Ruby: rescue ArgumentError => e
来源：http://www.sxryk.cn/163cfirmuze.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.aibaodan.cn/163yubacnam.html

[H06] 可选值 / 空值安全访问
来源：http://www.sxryk.cn/163uznyclxd.html

Py:   value = d.get("k") or default
来源：http://www.sxryk.cn/163lnkienmj.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.sxryk.cn/163dluyibvz.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163qcjwityv.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163xnqimaca.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.xuanzx.com/163jsspfxsh.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.xuanzx.com/163lsuzprcv.html

Ruby: d&.dig(:a, :b)
来源：http://www.sxryk.cn/163lituldzn.html

C#:   obj?.A?.B ?? default
来源：http://www.xuanzx.com/163emknxszn.html

[H07] 断言
来源：http://www.aibaodan.cn/163hmoyznia.html

Py:   assert x > 0, "必须为正"
来源：http://www.xuanzx.com/163ktklcowt.html

PHP:  assert($x > 0);
来源：http://www.sxryk.cn/163ktglkins.html

JS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163tfwpwdli.html

TS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163kuoobybe.html

Java: assert x > 0 : "必须为正";
来源：http://www.aibaodan.cn/163ukwciare.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.sxryk.cn/163sbcjxhjo.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.aibaodan.cn/163klagfycw.html

C#:   Debug.Assert(x > 0);
来源：http://www.aibaodan.cn/163nugqoofb.html

[H08] 获取错误信息与堆栈
来源：http://www.aibaodan.cn/163uaearzoy.html

Py:   str(e);  traceback.format_exc()
来源：http://www.aibaodan.cn/163usoaoowr.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.sxryk.cn/163zcpkunax.html

JS:   e.message;  e.stack
来源：http://www.xuanzx.com/163cwgklkee.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.xuanzx.com/163kdfyploi.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.aibaodan.cn/163alvnkpob.html

Go:   err.Error()
来源：http://www.xuanzx.com/163ozhaaszx.html

Ruby: e.message;  e.backtrace
来源：http://www.xuanzx.com/163ytpmpgnh.html

C#:   e.Message;  e.StackTrace
来源：http://www.aibaodan.cn/163kgizkqpy.html

[H09] 带错误码的异常
来源：http://www.xuanzx.com/163yxpwciup.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.aibaodan.cn/163cqwillkc.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.aibaodan.cn/163cevasmav.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.aibaodan.cn/163dbqnpotp.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.aibaodan.cn/163tvqbmgev.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.aibaodan.cn/163jtcdzesu.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.xuanzx.com/163yiavdijh.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.aibaodan.cn/163dtazrwcz.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.aibaodan.cn/163jhjeneqw.html

[H10] 资源自动释放
来源：http://www.aibaodan.cn/163sdhsgvxl.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.sxryk.cn/163ltxxrevl.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.sxryk.cn/163rrswllee.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163shiufcni.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163vnjibedk.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.aibaodan.cn/163ynzkerbr.html

Go:   defer f.Close()
来源：http://www.aibaodan.cn/163objfwgzr.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.xuanzx.com/163ufivqgyx.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.sxryk.cn/163ddhiyzkq.html

================================================================================
来源：http://www.aibaodan.cn/163dcuqlmvd.html

I. 正则表达式
来源：http://www.xuanzx.com/163bqinjsjw.html

================================================================================
来源：http://www.aibaodan.cn/163onfegvhr.html

[I01] 判断是否匹配
来源：http://www.aibaodan.cn/163miiqwpdc.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.sxryk.cn/163xoqgvhvj.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.xuanzx.com/163hcvedvig.html

JS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163yufzghnr.html

TS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163qhaqhfnx.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.aibaodan.cn/163zmrfzinh.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.aibaodan.cn/163bdrdxvdh.html

Ruby: s.match?(/\d+/)
来源：http://www.xuanzx.com/163nffwenqz.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.xuanzx.com/163eejnfxen.html

[I02] 提取所有匹配
来源：http://www.sxryk.cn/163mygaztvw.html

Py:   re.findall(r"\d+", s)
来源：http://www.sxryk.cn/163zltvjmfw.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.aibaodan.cn/163mckowvbj.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.sxryk.cn/163ankytfce.html

TS:   s.match(/\d+/g)
来源：http://www.sxryk.cn/163ojwgqqih.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.aibaodan.cn/163dyxrdtyi.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.sxryk.cn/163hctnevol.html

Ruby: s.scan(/\d+/)
来源：http://www.aibaodan.cn/163lutywozh.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.aibaodan.cn/163nwcmrdgh.html

[I03] 提取捕获分组
来源：http://www.sxryk.cn/163icfheitx.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.xuanzx.com/163lfqykdfc.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.sxryk.cn/163frmwxfls.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.aibaodan.cn/163ppdzdhyl.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.xuanzx.com/163apuqlnwa.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.sxryk.cn/163wmbtypom.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.xuanzx.com/163yvpvhexz.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.aibaodan.cn/163dlqpybny.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.xuanzx.com/163nilkegzv.html

[I04] 正则替换
来源：http://www.xuanzx.com/163ogswargm.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.sxryk.cn/163rsbybxey.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163fvvtyqpm.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163srnprqgv.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163qceplcpy.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.xuanzx.com/163eltucasb.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.aibaodan.cn/163urqkhlcv.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.xuanzx.com/163ajrdbqrr.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.xuanzx.com/163svezaebk.html

[I05] 按正则拆分
来源：http://www.aibaodan.cn/163akihgriv.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.xuanzx.com/163cvaybrjl.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.xuanzx.com/163elpvrsgd.html

JS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163zododwaq.html

TS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163kdyhsayf.html

Java: s.split("\\s*,\\s*")
来源：http://www.xuanzx.com/163wsyehpzr.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.aibaodan.cn/163umxswdpl.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163qztxduwd.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.aibaodan.cn/163qsvrsqmp.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.xuanzx.com/163apslvjlx.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163pthzqset.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.xuanzx.com/163juubyrxf.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163ovwworrh.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163fapxdqwu.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.aibaodan.cn/163owokjpxg.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.xuanzx.com/163wxnjgfvx.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.aibaodan.cn/163qkphlsan.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163bthmktyx.html

[I07] 忽略大小写与多行模式
来源：http://www.sxryk.cn/163nnhffuef.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.xuanzx.com/163pytxujuz.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.xuanzx.com/163xdieeixt.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.sxryk.cn/163numyjubx.html

TS:   /error/gim
来源：http://www.aibaodan.cn/163xzajbyac.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.xuanzx.com/163gfpdxbrb.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.xuanzx.com/163qpbicrva.html

Ruby: s.scan(/error/i)
来源：http://www.sxryk.cn/163cilflyiu.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.sxryk.cn/163wprieetg.html

[I08] 贪婪与非贪婪匹配
来源：http://www.sxryk.cn/163yhsguhsr.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.sxryk.cn/163uxgmqnaa.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.xuanzx.com/163zlmkqohj.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163vkzarcvj.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163npbjlarf.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.sxryk.cn/163zniuxhfh.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.xuanzx.com/163twjteqwe.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.sxryk.cn/163bkdsgfog.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.aibaodan.cn/163suaauuwn.html

================================================================================
来源：http://www.xuanzx.com/163yusswszv.html

J. 日期与时间
来源：http://www.xuanzx.com/163zeufvvvc.html

================================================================================
来源：http://www.aibaodan.cn/163wsbcbrsw.html

[J01] 获取当前时间
来源：http://www.aibaodan.cn/163qkfvmlxe.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.sxryk.cn/163mtzotnnn.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163eeefalbn.html

JS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163wxauolcz.html

TS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163qxbyhvjp.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.sxryk.cn/163wkivvikw.html

Go:   time.Now()
来源：http://www.aibaodan.cn/163tyuoaxlk.html

Ruby: Time.now
来源：http://www.sxryk.cn/163wxznomwk.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.xuanzx.com/163lpzusqcs.html

[J02] 格式化输出
来源：http://www.aibaodan.cn/163wnjplwof.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163oaguzsao.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163mjsztbcj.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.aibaodan.cn/163kfmdduiw.html

TS:   d.toISOString()
来源：http://www.xuanzx.com/163xioctvzc.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.aibaodan.cn/163ovqvjtmf.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.aibaodan.cn/163wnyluqdl.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163tddrhzaa.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.sxryk.cn/163zxrdvmrv.html

[J03] 字符串解析为日期
来源：http://www.xuanzx.com/163glkhflzg.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.sxryk.cn/163gcunuxiw.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.xuanzx.com/163nllygwjm.html

JS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163nxbptjno.html

TS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163ucigiogi.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.sxryk.cn/163vvuirsgg.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.aibaodan.cn/163ysehhkhn.html

Ruby: Date.parse("2024-01-02")
来源：http://www.xuanzx.com/163wrevdizv.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.xuanzx.com/163eruedlnf.html

[J04] 时间戳与日期互转
来源：http://www.xuanzx.com/163aiknxhik.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.sxryk.cn/163vluewvvy.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.xuanzx.com/163cmhcaruy.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.sxryk.cn/163bgwgdxud.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.sxryk.cn/163fqjlrsxp.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.sxryk.cn/163drdtbhit.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.aibaodan.cn/163yllofwkq.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.xuanzx.com/163xtgavnsm.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.aibaodan.cn/163pibbfrnj.html

[J05] 时间加减（加 7 天）
来源：http://www.xuanzx.com/163cfouxgak.html

Py:   now + timedelta(days=7)
来源：http://www.sxryk.cn/163davzcseo.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.aibaodan.cn/163rvcdwoeo.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163adgjurra.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163kkqqyiri.html

Java: LocalDate.now().plusDays(7)
来源：http://www.sxryk.cn/163qcxvzwhh.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.aibaodan.cn/163nyfhprnv.html

Ruby: Time.now + 7 * 86400
来源：http://www.sxryk.cn/163gsevkdsq.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.aibaodan.cn/163lpmefaxi.html

[J06] 计算两时间之差
来源：http://www.sxryk.cn/163fdrmltti.html

Py:   (end - start).total_seconds()
来源：http://www.xuanzx.com/163dnilcomz.html

PHP:  $end->diff($start)->days;
来源：http://www.sxryk.cn/163wgocxemm.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.aibaodan.cn/163irqxozcx.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.aibaodan.cn/163ggczjuty.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.xuanzx.com/163tisolzml.html

Go:   end.Sub(start).Hours()
来源：http://www.aibaodan.cn/163xnvjxqlf.html

Ruby: end - start                 # 返回秒数
来源：http://www.sxryk.cn/163ckaqomee.html

C#:   (end - start).TotalSeconds
来源：http://www.aibaodan.cn/163vicizchy.html

[J07] 比较两个日期
来源：http://www.sxryk.cn/163hjtqkltd.html

Py:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163mluonurc.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.xuanzx.com/163wlrlbcen.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163mqsagqne.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163okcvmjtc.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.xuanzx.com/163awgianhd.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.xuanzx.com/163fmdtzbff.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163hpylsczm.html

C#:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163uffwwgxz.html

[J08] 提取年月日与星期
来源：http://www.xuanzx.com/163zwrgymsv.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.aibaodan.cn/163onjavtox.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.xuanzx.com/163ktrtliqx.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.aibaodan.cn/163irweenxl.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.aibaodan.cn/163reuotycr.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.sxryk.cn/163ourwxyud.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.aibaodan.cn/163rxwtwrgi.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.sxryk.cn/163kzqlemuo.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.aibaodan.cn/163rofocrgk.html

[J09] 时区处理
来源：http://www.xuanzx.com/163xfupicrk.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.xuanzx.com/163acdaqock.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.sxryk.cn/163zmvheiqm.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163hlnholtk.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163dksexnlq.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.sxryk.cn/163dtufzuqj.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.xuanzx.com/163upmtbxzw.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.xuanzx.com/163ltrhfnpw.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.sxryk.cn/163itdjfsug.html

[J10] 取今天 / 本月第一天
来源：http://www.xuanzx.com/163tnvfyajt.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.aibaodan.cn/163mdkgxrpj.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.sxryk.cn/163ervxoinl.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.aibaodan.cn/163zgfwbrrj.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.sxryk.cn/163unjqcsts.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.sxryk.cn/163hwlkzhor.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.sxryk.cn/163vbrmmmjl.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.aibaodan.cn/163apiulsqc.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.aibaodan.cn/163ofsrbtou.html

================================================================================
来源：http://www.xuanzx.com/163ucprozgt.html

K. JSON 与序列化
来源：http://www.sxryk.cn/163wqtcntyb.html

================================================================================
来源：http://www.aibaodan.cn/163alyjqcfo.html

[K01] 对象转 JSON 字符串
来源：http://www.sxryk.cn/163ykimbmzy.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.sxryk.cn/163rfgznnmw.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163kmwlznlk.html

JS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163yrxwfulh.html

TS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163hrvagnsg.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.xuanzx.com/163lrqgkyzr.html

Go:   json.Marshal(obj)
来源：http://www.xuanzx.com/163tebciynd.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.sxryk.cn/163ndvghnbl.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.sxryk.cn/163ommrdepv.html

[K02] JSON 字符串转对象
来源：http://www.aibaodan.cn/163yrlzitip.html

Py:   json.loads(s)
来源：http://www.aibaodan.cn/163wwxufhhq.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.sxryk.cn/163kykzjpex.html

JS:   JSON.parse(s)
来源：http://www.sxryk.cn/163wawwfsuu.html

TS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163dngwsodu.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.sxryk.cn/163xhszqzvh.html

Go:   json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163avdvyeln.html

Ruby: JSON.parse(s)
来源：http://www.sxryk.cn/163nykijqgp.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.sxryk.cn/163rdqkxsuw.html

[K03] JSON 美化输出（带缩进）
来源：http://www.aibaodan.cn/163isjrjzff.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.aibaodan.cn/163anbciyao.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163tofbiajr.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163byocolur.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163ttrotzqo.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.sxryk.cn/163fkqbonsl.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.sxryk.cn/163wpjspmjp.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.sxryk.cn/163dfsqbmxk.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.xuanzx.com/163vnoqebhr.html

[K04] 读取 JSON 文件
来源：http://www.sxryk.cn/163oejebkeg.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.aibaodan.cn/163sflttscv.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.xuanzx.com/163rcdzavgx.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163kpkyvnsx.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163ooozedav.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.xuanzx.com/163ciwjudjn.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163ezzkecwu.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.xuanzx.com/163lanylssd.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.aibaodan.cn/163uhncpywg.html

[K05] 深拷贝对象
来源：http://www.aibaodan.cn/163jbkrpzrx.html

Py:   copy.deepcopy(obj)
来源：http://www.xuanzx.com/163vcxtjzqq.html

PHP:  unserialize(serialize($obj));
来源：http://www.sxryk.cn/163mtysmvbz.html

JS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163juqfmnqr.html

TS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163lpxpjveu.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.xuanzx.com/163pbuxdrvg.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.xuanzx.com/163fzoakwzu.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.xuanzx.com/163vvtdeeva.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.xuanzx.com/163daetkzah.html

[K06] 解析 URL 查询串
来源：http://www.sxryk.cn/163oxnphrad.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.xuanzx.com/163nxkgxbdj.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.aibaodan.cn/163ztgommyp.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163evdgwley.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163yewmbfcy.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.xuanzx.com/163vravbesf.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.xuanzx.com/163hsczsjaj.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.sxryk.cn/163clijptbm.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.sxryk.cn/163jebvpwfv.html

[K07] 进制转换
来源：http://www.aibaodan.cn/163ntnyvgcg.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.xuanzx.com/163lxilsnph.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.sxryk.cn/163utcepmxa.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163vagtiuiv.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163pkzftrco.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.xuanzx.com/163cepegugl.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.xuanzx.com/163wqipoulj.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.aibaodan.cn/163ewoarybe.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.xuanzx.com/163scbldizb.html

[K08] 二进制序列化（非 JSON）
来源：http://www.aibaodan.cn/163xdiowzyv.html

Py:   pickle.dumps(obj)
来源：http://www.aibaodan.cn/163htfqimjl.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.xuanzx.com/163wzvmdryi.html

JS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163bdtowhqz.html

TS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163phrwxdvm.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.xuanzx.com/163cyjzhziz.html

Go:   encoding/gob
来源：http://www.sxryk.cn/163vibyzhhm.html

Ruby: Marshal.dump(obj)
来源：http://www.sxryk.cn/163vgcjplge.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.xuanzx.com/163isbupwou.html

================================================================================
来源：http://www.sxryk.cn/163fotxgyfd.html


<!-- 参考信息 -->