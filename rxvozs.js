外链999!wailian999！

JS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163cltxmpoo.html

TS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163obkpaava.html

Java: class MyException extends RuntimeException {}
来源：http://www.xuanzx.com/163dhzdomyt.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.xuanzx.com/163zynbalxi.html

Ruby: class MyError < StandardError; end
来源：http://www.xuanzx.com/163omhesrui.html

C#:   class MyException : Exception {}
来源：http://www.sxryk.cn/163spehtrea.html

[H05] 捕获特定类型
来源：http://www.sxryk.cn/163hlvpvglc.html

Py:   except ValueError as e:
来源：http://www.aibaodan.cn/163eufmfayl.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.sxryk.cn/163uzggbilr.html

JS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163qpzxujrk.html

TS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163ygiivhqv.html

Java: catch (IOException | SQLException e) {}
来源：http://www.sxryk.cn/163cpoqqcee.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.sxryk.cn/163bcocnyja.html

Ruby: rescue ArgumentError => e
来源：http://www.xuanzx.com/163vcqobsnj.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.sxryk.cn/163edimvizi.html

[H06] 可选值 / 空值安全访问
来源：http://www.aibaodan.cn/163hfiltdwc.html

Py:   value = d.get("k") or default
来源：http://www.sxryk.cn/163fcsmnaxv.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.xuanzx.com/163umyoehfj.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163uytelcwt.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163hojbqpgf.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.aibaodan.cn/163zhzbqiha.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.aibaodan.cn/163fczqsdri.html

Ruby: d&.dig(:a, :b)
来源：http://www.aibaodan.cn/163lcairaai.html

C#:   obj?.A?.B ?? default
来源：http://www.xuanzx.com/163zfzeqslw.html

[H07] 断言
来源：http://www.aibaodan.cn/163fvnptzcb.html

Py:   assert x > 0, "必须为正"
来源：http://www.aibaodan.cn/163yuhdyzjr.html

PHP:  assert($x > 0);
来源：http://www.sxryk.cn/163oisauyml.html

JS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163dgpsdwzh.html

TS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163tiujbwga.html

Java: assert x > 0 : "必须为正";
来源：http://www.sxryk.cn/163uyskqxpv.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.aibaodan.cn/163spbfxygc.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.xuanzx.com/163rfdbjezc.html

C#:   Debug.Assert(x > 0);
来源：http://www.sxryk.cn/163slgbuknj.html

[H08] 获取错误信息与堆栈
来源：http://www.aibaodan.cn/163kazcemfx.html

Py:   str(e);  traceback.format_exc()
来源：http://www.aibaodan.cn/163xnxwtbpi.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.sxryk.cn/163ngzgovhm.html

JS:   e.message;  e.stack
来源：http://www.sxryk.cn/163ufjywebo.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.aibaodan.cn/163wtlzwyea.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.sxryk.cn/163pudkkbim.html

Go:   err.Error()
来源：http://www.xuanzx.com/163viapeprj.html

Ruby: e.message;  e.backtrace
来源：http://www.sxryk.cn/163pmshfoaz.html

C#:   e.Message;  e.StackTrace
来源：http://www.xuanzx.com/163rpfhvvvz.html

[H09] 带错误码的异常
来源：http://www.sxryk.cn/163bthapqvf.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.xuanzx.com/163cbjwolij.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.aibaodan.cn/163zggsblfu.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.sxryk.cn/163rcvtmskk.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.sxryk.cn/163oykgdpbx.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.sxryk.cn/163febqnhoj.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.sxryk.cn/163xudtbtxh.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.sxryk.cn/163mjytnftx.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.sxryk.cn/163ebuweasy.html

[H10] 资源自动释放
来源：http://www.aibaodan.cn/163dyehwwju.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.xuanzx.com/163heedtopu.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.xuanzx.com/163nsutsdnj.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163ekcwgxag.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163nhlvdqol.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.xuanzx.com/163fpdqpjhk.html

Go:   defer f.Close()
来源：http://www.xuanzx.com/163oafnbwhc.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.xuanzx.com/163gcrjveee.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.aibaodan.cn/163wwiiebcg.html

================================================================================
来源：http://www.xuanzx.com/163temdzryo.html

I. 正则表达式
来源：http://www.aibaodan.cn/163frozmacj.html

================================================================================
来源：http://www.aibaodan.cn/163xwpaqrbg.html

[I01] 判断是否匹配
来源：http://www.sxryk.cn/163elzqcyih.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.sxryk.cn/163qemvfcsd.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.aibaodan.cn/163pkpfyzrr.html

JS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163uyihfsxc.html

TS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163knjdider.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.aibaodan.cn/163eyheoxhk.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.aibaodan.cn/163vvbozocx.html

Ruby: s.match?(/\d+/)
来源：http://www.aibaodan.cn/163oaioezom.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.xuanzx.com/163akmsswat.html

[I02] 提取所有匹配
来源：http://www.aibaodan.cn/163fctacjbr.html

Py:   re.findall(r"\d+", s)
来源：http://www.aibaodan.cn/163pjdupmqj.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.sxryk.cn/163dswxnjmb.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.sxryk.cn/163vjjymujb.html

TS:   s.match(/\d+/g)
来源：http://www.sxryk.cn/163aghkbbsr.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.xuanzx.com/163pkfwobbn.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.aibaodan.cn/163kwgjvcnb.html

Ruby: s.scan(/\d+/)
来源：http://www.aibaodan.cn/163fzyanqco.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.sxryk.cn/163auwodqxv.html

[I03] 提取捕获分组
来源：http://www.sxryk.cn/163fnfkthti.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.xuanzx.com/163ossxirta.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.aibaodan.cn/163ifmtqdfo.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.sxryk.cn/163qzeillvm.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.aibaodan.cn/163xvssodzq.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.aibaodan.cn/163mdyyiiyz.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.xuanzx.com/163pmdpsroj.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.aibaodan.cn/163ksjhpono.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.xuanzx.com/163vqqyschp.html

[I04] 正则替换
来源：http://www.aibaodan.cn/163cvmypgjm.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.xuanzx.com/163jottnhlr.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163hwrguicj.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163lxiqlygo.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163cqoyprfd.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.aibaodan.cn/163draondze.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.aibaodan.cn/163gpzxyrcu.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.sxryk.cn/163axkyrbkq.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.xuanzx.com/163ummydinf.html

[I05] 按正则拆分
来源：http://www.xuanzx.com/163vlxfcqej.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.aibaodan.cn/163ykoljwyt.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.aibaodan.cn/163slpwuzfh.html

JS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163eyxhdenx.html

TS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163ujnjfgqj.html

Java: s.split("\\s*,\\s*")
来源：http://www.sxryk.cn/163jwetdytw.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.xuanzx.com/163fjqnapyx.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163uoljawbm.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.sxryk.cn/163maxrtabd.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.aibaodan.cn/163gylovuxg.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163lajlsant.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.aibaodan.cn/163wisrixwb.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163vwvkllco.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163owcwerkp.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.sxryk.cn/163rcppwtsf.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.aibaodan.cn/163tiqznacq.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.xuanzx.com/163sfiytshq.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163wgqxoajk.html

[I07] 忽略大小写与多行模式
来源：http://www.sxryk.cn/163xkqkcnti.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.aibaodan.cn/163wiugxcgk.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.aibaodan.cn/163kkqtvhts.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.xuanzx.com/163kvmvlpwy.html

TS:   /error/gim
来源：http://www.sxryk.cn/163dgdvviml.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.aibaodan.cn/163acitmzdf.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.aibaodan.cn/163ufjfqrke.html

Ruby: s.scan(/error/i)
来源：http://www.aibaodan.cn/163brqtcctl.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.aibaodan.cn/163wdgtpwxt.html

[I08] 贪婪与非贪婪匹配
来源：http://www.aibaodan.cn/163lnbnuufs.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.xuanzx.com/163qgodldun.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.sxryk.cn/163uutdxgqb.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163hqwkrrmj.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163ioltmkmi.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.aibaodan.cn/163jiggdiee.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.xuanzx.com/163ebjqqpjd.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.xuanzx.com/163kclgwcfz.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.sxryk.cn/163kuflbtxt.html

================================================================================
来源：http://www.sxryk.cn/163ekmjedxq.html

J. 日期与时间
来源：http://www.aibaodan.cn/163bqrwyvwm.html

================================================================================
来源：http://www.xuanzx.com/163drzncnll.html

[J01] 获取当前时间
来源：http://www.sxryk.cn/163dhxwomou.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.xuanzx.com/163recxgscn.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163glcjrsfy.html

JS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163pcoamara.html

TS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163bfljnghz.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.sxryk.cn/163ojqcihpl.html

Go:   time.Now()
来源：http://www.sxryk.cn/163axyqowwx.html

Ruby: Time.now
来源：http://www.aibaodan.cn/163djwncxuw.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.xuanzx.com/163jkulfepu.html

[J02] 格式化输出
来源：http://www.aibaodan.cn/163ndpdcbtm.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163xohkzbvp.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163fzwftqzc.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.sxryk.cn/163quiedvyi.html

TS:   d.toISOString()
来源：http://www.aibaodan.cn/163oqrpvhfo.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.aibaodan.cn/163tecegqqr.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.sxryk.cn/163znqdxzdx.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163texcfddn.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.aibaodan.cn/163avjdrmkb.html

[J03] 字符串解析为日期
来源：http://www.xuanzx.com/163syeadqzn.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.aibaodan.cn/163cifqvzkx.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.xuanzx.com/163zmjkebdb.html

JS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163naoohfpy.html

TS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163mojxsjcg.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.aibaodan.cn/163sqyenmjy.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.sxryk.cn/163vszaledz.html

Ruby: Date.parse("2024-01-02")
来源：http://www.xuanzx.com/163zbladaxi.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.sxryk.cn/163hnkmfenu.html

[J04] 时间戳与日期互转
来源：http://www.aibaodan.cn/163mpbszrqu.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.sxryk.cn/163jttfdcmc.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.aibaodan.cn/163ezcihsgy.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.sxryk.cn/163nxigxmmw.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.sxryk.cn/163mwqeetgf.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.sxryk.cn/163oorfhwnu.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.aibaodan.cn/163frpqmajb.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.xuanzx.com/163ikwekozv.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.aibaodan.cn/163abezfvjn.html

[J05] 时间加减（加 7 天）
来源：http://www.xuanzx.com/163kjmtmiwy.html

Py:   now + timedelta(days=7)
来源：http://www.aibaodan.cn/163wpvokxdt.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.sxryk.cn/163yvtzsufz.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163veewtqqe.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163sutnizgd.html

Java: LocalDate.now().plusDays(7)
来源：http://www.sxryk.cn/163sdmtfomp.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.xuanzx.com/163mimaoaen.html

Ruby: Time.now + 7 * 86400
来源：http://www.sxryk.cn/163xxxyanys.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.aibaodan.cn/163wwnfkoxc.html

[J06] 计算两时间之差
来源：http://www.aibaodan.cn/163traiwwkd.html

Py:   (end - start).total_seconds()
来源：http://www.aibaodan.cn/163zourbgig.html

PHP:  $end->diff($start)->days;
来源：http://www.sxryk.cn/163ojigykhu.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.aibaodan.cn/163fxnmncua.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.xuanzx.com/163xdmletjy.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.sxryk.cn/163mkjugeah.html

Go:   end.Sub(start).Hours()
来源：http://www.sxryk.cn/163vslgtbkh.html

Ruby: end - start                 # 返回秒数
来源：http://www.aibaodan.cn/163jkbihreh.html

C#:   (end - start).TotalSeconds
来源：http://www.aibaodan.cn/163lxrjbznt.html

[J07] 比较两个日期
来源：http://www.aibaodan.cn/163mqvbutsx.html

Py:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163pniubdgv.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.aibaodan.cn/163xpbmvhmk.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163cvetzhso.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163uunjquzr.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.aibaodan.cn/163gxbzuqml.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.aibaodan.cn/163ilinlqqu.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163xowusveo.html

C#:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163subfgzxo.html

[J08] 提取年月日与星期
来源：http://www.aibaodan.cn/163qcpvbkhk.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.sxryk.cn/163alscqete.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.aibaodan.cn/163sfznprlf.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.xuanzx.com/163bzxmioez.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.sxryk.cn/163cvlbuswq.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.sxryk.cn/163pxsxbapa.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.xuanzx.com/163ottschez.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.sxryk.cn/163yklrqtaa.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.aibaodan.cn/163sbwhlmss.html

[J09] 时区处理
来源：http://www.xuanzx.com/163amiemlgz.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.sxryk.cn/163zsdwrqzx.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.xuanzx.com/163kuvgoizn.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163khcgnmug.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163zqbsaoef.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.xuanzx.com/163wvwuhsck.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.sxryk.cn/163ghojkkfp.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.aibaodan.cn/163yyjonjzr.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.xuanzx.com/163ycfrjpvo.html

[J10] 取今天 / 本月第一天
来源：http://www.xuanzx.com/163picketcl.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.xuanzx.com/163vwasenwi.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.aibaodan.cn/163nnfidvug.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.aibaodan.cn/163rxtajpql.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.sxryk.cn/163harjcoou.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.xuanzx.com/163quvvpycu.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.xuanzx.com/163izecpxyn.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.xuanzx.com/163efsaswaz.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.xuanzx.com/163agtreymi.html

================================================================================
来源：http://www.aibaodan.cn/163xooeslvj.html

K. JSON 与序列化
来源：http://www.aibaodan.cn/163ixqzrgbe.html

================================================================================
来源：http://www.sxryk.cn/163tzqcbwph.html

[K01] 对象转 JSON 字符串
来源：http://www.xuanzx.com/163tuokpbtl.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.xuanzx.com/163nflykxaq.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163qtmgmheb.html

JS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163qaqranjh.html

TS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163gmyqzczn.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.aibaodan.cn/163vxxhvakq.html

Go:   json.Marshal(obj)
来源：http://www.aibaodan.cn/163aynkayoc.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.aibaodan.cn/163pvorfucg.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.xuanzx.com/163renijdup.html

[K02] JSON 字符串转对象
来源：http://www.xuanzx.com/163iqivychk.html

Py:   json.loads(s)
来源：http://www.xuanzx.com/163edzdmidd.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.sxryk.cn/163xohlkolg.html

JS:   JSON.parse(s)
来源：http://www.xuanzx.com/163rmvoppjb.html

TS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163bphhrmkh.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.sxryk.cn/163wpmrqvrk.html

Go:   json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163psoelcal.html

Ruby: JSON.parse(s)
来源：http://www.sxryk.cn/163tddfjass.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.aibaodan.cn/163hkbhpktv.html

[K03] JSON 美化输出（带缩进）
来源：http://www.xuanzx.com/163fifcmyea.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.xuanzx.com/163efdvjxor.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163stfbqkkg.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163htpczfor.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163rjbmjwms.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.xuanzx.com/163mwcoeifw.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.aibaodan.cn/163loxqtjpn.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.aibaodan.cn/163jzsrdkha.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.aibaodan.cn/163bibkqttl.html

[K04] 读取 JSON 文件
来源：http://www.sxryk.cn/163fvsjftzs.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.sxryk.cn/163kfvqztiw.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.sxryk.cn/163aeicdobn.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163muktnctm.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163icfcyjfp.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.aibaodan.cn/163qcrmefws.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163yrcjudoe.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.aibaodan.cn/163lxbevzse.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.xuanzx.com/163varxylqx.html

[K05] 深拷贝对象
来源：http://www.sxryk.cn/163ojhchjrd.html

Py:   copy.deepcopy(obj)
来源：http://www.sxryk.cn/163xtjovbef.html

PHP:  unserialize(serialize($obj));
来源：http://www.sxryk.cn/163efoaoamz.html

JS:   structuredClone(obj)
来源：http://www.xuanzx.com/163fggrwjie.html

TS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163wispnxur.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.sxryk.cn/163ymjozgeo.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.aibaodan.cn/163grgsfvsu.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.aibaodan.cn/163rdggyojs.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.aibaodan.cn/163jeekdijt.html

[K06] 解析 URL 查询串
来源：http://www.aibaodan.cn/163rirpuxwh.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.xuanzx.com/163ozuaiwlg.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.aibaodan.cn/163qvhksqze.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163dbxwssii.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163eqqkxnjy.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.aibaodan.cn/163lwnqfbbq.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.xuanzx.com/163mykkcowu.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.aibaodan.cn/163whaapeoa.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.sxryk.cn/163jyuedfqo.html

[K07] 进制转换
来源：http://www.sxryk.cn/163dqifahog.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.aibaodan.cn/163ksnuuvwh.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.sxryk.cn/163tpxtoebd.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163vnphjhci.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163qhqifjbd.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.xuanzx.com/163flgpaviw.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.aibaodan.cn/163soojzjiu.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.xuanzx.com/163hlhdrvcm.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.xuanzx.com/163dzextzuj.html

[K08] 二进制序列化（非 JSON）
来源：http://www.aibaodan.cn/163nvdhxryt.html

Py:   pickle.dumps(obj)
来源：http://www.xuanzx.com/163cgpanbpa.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.xuanzx.com/163dxgcvozo.html

JS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163fsfstbri.html

TS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163hwvccate.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.xuanzx.com/163qyvjzuvu.html


<!-- 参考信息 -->