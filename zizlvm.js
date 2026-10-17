外链999!wailian999！

C#:   throw new ArgumentException("错误信息");
来源：http://www.sxryk.cn/163wedkattl.html

[H04] 自定义异常类型
来源：http://www.sxryk.cn/163sbsetlvn.html

Py:   class MyError(Exception): pass
来源：http://www.sxryk.cn/163ccxfyolr.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.xuanzx.com/163wrxwyzqr.html

JS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163hbuihdlz.html

TS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163juxveqzz.html

Java: class MyException extends RuntimeException {}
来源：http://www.sxryk.cn/163novzpsjz.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.sxryk.cn/163iwtoppcm.html

Ruby: class MyError < StandardError; end
来源：http://www.sxryk.cn/163hwqxtjct.html

C#:   class MyException : Exception {}
来源：http://www.sxryk.cn/163eyxpsutg.html

[H05] 捕获特定类型
来源：http://www.aibaodan.cn/163sxlgvmze.html

Py:   except ValueError as e:
来源：http://www.xuanzx.com/163wrtejxlz.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.aibaodan.cn/163xkfaqpqv.html

JS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163pbbmvhhj.html

TS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163nhosvrwn.html

Java: catch (IOException | SQLException e) {}
来源：http://www.sxryk.cn/163lkfeygae.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.aibaodan.cn/163ylyxwqwk.html

Ruby: rescue ArgumentError => e
来源：http://www.sxryk.cn/163bwnvdoof.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.xuanzx.com/163kqtgozcs.html

[H06] 可选值 / 空值安全访问
来源：http://www.sxryk.cn/163kgmjfzfj.html

Py:   value = d.get("k") or default
来源：http://www.sxryk.cn/163hrboxtsb.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.sxryk.cn/163rdmvqkou.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163arqlpvrg.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163lltxklix.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.aibaodan.cn/163vfvzoita.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.aibaodan.cn/163vsmmoxro.html

Ruby: d&.dig(:a, :b)
来源：http://www.xuanzx.com/163iyncgoli.html

C#:   obj?.A?.B ?? default
来源：http://www.sxryk.cn/163crkcbzsz.html

[H07] 断言
来源：http://www.sxryk.cn/163hqaghbrf.html

Py:   assert x > 0, "必须为正"
来源：http://www.sxryk.cn/163ujutgdyk.html

PHP:  assert($x > 0);
来源：http://www.xuanzx.com/163qqsrwdgq.html

JS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163isqofkfv.html

TS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163ecsrsmhe.html

Java: assert x > 0 : "必须为正";
来源：http://www.aibaodan.cn/163oxhtajxg.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.xuanzx.com/163iwvrgzls.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.aibaodan.cn/163nrpbkgqs.html

C#:   Debug.Assert(x > 0);
来源：http://www.aibaodan.cn/163buenxvgw.html

[H08] 获取错误信息与堆栈
来源：http://www.xuanzx.com/163ffqfaaue.html

Py:   str(e);  traceback.format_exc()
来源：http://www.xuanzx.com/163rfjqveed.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.aibaodan.cn/163vsweqyom.html

JS:   e.message;  e.stack
来源：http://www.aibaodan.cn/163ozxjsnzo.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.sxryk.cn/163qkpeectx.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.sxryk.cn/163waomycta.html

Go:   err.Error()
来源：http://www.aibaodan.cn/163kecfzwld.html

Ruby: e.message;  e.backtrace
来源：http://www.xuanzx.com/163phrvivpu.html

C#:   e.Message;  e.StackTrace
来源：http://www.sxryk.cn/163wfigktyo.html

[H09] 带错误码的异常
来源：http://www.sxryk.cn/163zirjrqvp.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.xuanzx.com/163sjvhgeda.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.sxryk.cn/163onyctlgk.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.aibaodan.cn/163bkowqdyu.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.aibaodan.cn/163pawvfmqk.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.aibaodan.cn/163xeheviso.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.aibaodan.cn/163ywxjgitb.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.aibaodan.cn/163dshjwxgo.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.aibaodan.cn/163ebrnaqxi.html

[H10] 资源自动释放
来源：http://www.sxryk.cn/163lfhxhtvg.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.xuanzx.com/163ehhsbbxa.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.aibaodan.cn/163dumedzip.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163xccbwjgp.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163alhhxrfe.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.aibaodan.cn/163undaqhfm.html

Go:   defer f.Close()
来源：http://www.sxryk.cn/163nvtjyasf.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.xuanzx.com/163shoghaxi.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.aibaodan.cn/163pgndqcvc.html

================================================================================
来源：http://www.aibaodan.cn/163tladpfpp.html

I. 正则表达式
来源：http://www.sxryk.cn/163xndvxfkh.html

================================================================================
来源：http://www.aibaodan.cn/163quqdgrpz.html

[I01] 判断是否匹配
来源：http://www.xuanzx.com/163rdfogxub.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.aibaodan.cn/163ruwrvthl.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.xuanzx.com/163gplffplm.html

JS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163iqlhukgy.html

TS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163yoqdkhmj.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.aibaodan.cn/163wbvkglxj.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.aibaodan.cn/163spyvewpt.html

Ruby: s.match?(/\d+/)
来源：http://www.sxryk.cn/163frozrsbc.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.aibaodan.cn/163cyofwyoy.html

[I02] 提取所有匹配
来源：http://www.sxryk.cn/163fcnkdvtd.html

Py:   re.findall(r"\d+", s)
来源：http://www.sxryk.cn/163hbywlunk.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.xuanzx.com/163qnxvviek.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.aibaodan.cn/163yuyrmcou.html

TS:   s.match(/\d+/g)
来源：http://www.xuanzx.com/163lanfdxdw.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.aibaodan.cn/163dbwcneex.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.aibaodan.cn/163tdvxhgwc.html

Ruby: s.scan(/\d+/)
来源：http://www.xuanzx.com/163ccexdbiv.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.xuanzx.com/163ywrbazop.html

[I03] 提取捕获分组
来源：http://www.sxryk.cn/163wjgxhkhq.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.sxryk.cn/163duudwxuz.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.aibaodan.cn/163dsnqlwyv.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.sxryk.cn/163uyjbtzgg.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.sxryk.cn/163gnybcpse.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.xuanzx.com/163ciwdjyzz.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.xuanzx.com/163kagexqqd.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.aibaodan.cn/163bycnxcjr.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.sxryk.cn/163hjaxlemc.html

[I04] 正则替换
来源：http://www.aibaodan.cn/163yibnwcfm.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.xuanzx.com/163ubwluwwa.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163hsqvgvbd.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163hqywmfpf.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163mwtyoprc.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.sxryk.cn/163wmmkrbhu.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.xuanzx.com/163yocoruwp.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.aibaodan.cn/163pacmysow.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.aibaodan.cn/163kxiijzbj.html

[I05] 按正则拆分
来源：http://www.sxryk.cn/163mxfhspcx.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.sxryk.cn/163ibzlrfmu.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.xuanzx.com/163rhhgmsqs.html

JS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163zwtlzzrd.html

TS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163ovdjuzxp.html

Java: s.split("\\s*,\\s*")
来源：http://www.aibaodan.cn/163udivnspf.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.sxryk.cn/163zqsqsnkg.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163rzyjvvik.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.xuanzx.com/163msazngil.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.sxryk.cn/163hveraimj.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163zdgmlwof.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.xuanzx.com/163gtcsybgh.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163ymrcltfh.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163nrhloofo.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.xuanzx.com/163fwiqwydb.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.aibaodan.cn/163giglgeev.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.xuanzx.com/163nwqbcezt.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163nkcbcduc.html

[I07] 忽略大小写与多行模式
来源：http://www.xuanzx.com/163qkrykyhm.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.xuanzx.com/163bqzttycm.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.aibaodan.cn/163xpkkzmhw.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.xuanzx.com/163ihjqrnyp.html

TS:   /error/gim
来源：http://www.aibaodan.cn/163bwkyoewj.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.aibaodan.cn/163mblqaphv.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.xuanzx.com/163oxjmsbbx.html

Ruby: s.scan(/error/i)
来源：http://www.xuanzx.com/163kdlhzdqn.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.sxryk.cn/163ynifurmm.html

[I08] 贪婪与非贪婪匹配
来源：http://www.sxryk.cn/163kiwolcbi.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.aibaodan.cn/163olpsxdgk.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.sxryk.cn/163wubwtsog.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163ibkhurgl.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163avaeylzj.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.xuanzx.com/163nrdvfgfl.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.sxryk.cn/163bcrcpuyi.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.sxryk.cn/163duahhihd.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.aibaodan.cn/163anesqrnk.html

================================================================================
来源：http://www.sxryk.cn/163letklgxx.html

J. 日期与时间
来源：http://www.sxryk.cn/163npiitqic.html

================================================================================
来源：http://www.aibaodan.cn/163dcjuxkvp.html

[J01] 获取当前时间
来源：http://www.sxryk.cn/163mlyzzmbn.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.xuanzx.com/163fmfybowy.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163lawcvxne.html

JS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163mpkhlaao.html

TS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163yigvhnhv.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.sxryk.cn/163epylhwbt.html

Go:   time.Now()
来源：http://www.sxryk.cn/163qgyisyob.html

Ruby: Time.now
来源：http://www.xuanzx.com/163chcobqtk.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.sxryk.cn/163bttuznmw.html

[J02] 格式化输出
来源：http://www.xuanzx.com/163yqqhiyhf.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163raamlrdd.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163aklvilsl.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.aibaodan.cn/163zkzwkjae.html

TS:   d.toISOString()
来源：http://www.aibaodan.cn/163hxigmrbu.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.sxryk.cn/163siqcziin.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.sxryk.cn/163yuhwlgmm.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163pyfgjwfu.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.xuanzx.com/163cpeewfqj.html

[J03] 字符串解析为日期
来源：http://www.aibaodan.cn/163lnjlmqfk.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.aibaodan.cn/163bpjytadj.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.sxryk.cn/163ogrmoprb.html

JS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163ueyobdjs.html

TS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163zvhskvrp.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.xuanzx.com/163mxdmfxwa.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.xuanzx.com/163vvbmldti.html

Ruby: Date.parse("2024-01-02")
来源：http://www.aibaodan.cn/163hpqvmjzv.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.aibaodan.cn/163hazkzhcj.html

[J04] 时间戳与日期互转
来源：http://www.sxryk.cn/163thihfpxz.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.xuanzx.com/163cbjujiuu.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.aibaodan.cn/163hakdxkxh.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.aibaodan.cn/163yaztskmn.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.aibaodan.cn/163uxzcynjv.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.aibaodan.cn/163wfmncjxl.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.xuanzx.com/163ymwoftsu.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.sxryk.cn/163nmyqghjx.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.xuanzx.com/163qcryodcp.html

[J05] 时间加减（加 7 天）
来源：http://www.aibaodan.cn/163xvitmgnm.html

Py:   now + timedelta(days=7)
来源：http://www.sxryk.cn/163ahwvwdns.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.aibaodan.cn/163eljnbqkk.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163okpznoby.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163gjgcymdj.html

Java: LocalDate.now().plusDays(7)
来源：http://www.sxryk.cn/163vhdexzge.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.sxryk.cn/163krlrzksv.html

Ruby: Time.now + 7 * 86400
来源：http://www.xuanzx.com/163xeyofwbi.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.sxryk.cn/163ezgdulba.html

[J06] 计算两时间之差
来源：http://www.sxryk.cn/163bsicdtpj.html

Py:   (end - start).total_seconds()
来源：http://www.sxryk.cn/163lczltllf.html

PHP:  $end->diff($start)->days;
来源：http://www.sxryk.cn/163yzuarfsv.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.aibaodan.cn/163xxchchor.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.sxryk.cn/163zlfnnyur.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.xuanzx.com/163mbfcqrhy.html

Go:   end.Sub(start).Hours()
来源：http://www.aibaodan.cn/163qgfaabtn.html

Ruby: end - start                 # 返回秒数
来源：http://www.sxryk.cn/163ozkktcko.html

C#:   (end - start).TotalSeconds
来源：http://www.xuanzx.com/163zctzumaj.html

[J07] 比较两个日期
来源：http://www.sxryk.cn/163irzmwyce.html

Py:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163utuayzst.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.sxryk.cn/163idurhwki.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163srvfhdpq.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163imymrhpu.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.aibaodan.cn/163ftfvahno.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.aibaodan.cn/163vovbkdtd.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163nziplyrx.html

C#:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163uuyeyzhd.html

[J08] 提取年月日与星期
来源：http://www.aibaodan.cn/163mzrhrpbh.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.xuanzx.com/163yhmkozdg.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.sxryk.cn/163paprgzwb.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.xuanzx.com/163uxqjyrcm.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.aibaodan.cn/163lnamgmlw.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.xuanzx.com/163zwhjnvml.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.xuanzx.com/163wucsnvck.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.sxryk.cn/163yohwvezb.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.aibaodan.cn/163dhentdkb.html

[J09] 时区处理
来源：http://www.xuanzx.com/163mzbsniem.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.aibaodan.cn/163sbhvgxvc.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.xuanzx.com/163qdbzamft.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163tatnudqg.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163kocnyzrs.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.sxryk.cn/163iylcmcoy.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.sxryk.cn/163glrnkxxn.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.aibaodan.cn/163qyxzzycg.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.xuanzx.com/163bjqcioqm.html

[J10] 取今天 / 本月第一天
来源：http://www.xuanzx.com/163pggqjvrq.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.xuanzx.com/163ymkqwkzu.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.xuanzx.com/163rirsrkpc.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.sxryk.cn/163qgzwnemn.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.aibaodan.cn/163lhanxryw.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.xuanzx.com/163ceqjawrw.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.aibaodan.cn/163qkiuumoj.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.aibaodan.cn/163dexycaen.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.xuanzx.com/163cvwbubvh.html

================================================================================
来源：http://www.sxryk.cn/163aikouwiv.html

K. JSON 与序列化
来源：http://www.aibaodan.cn/163iruvnviy.html

================================================================================
来源：http://www.xuanzx.com/163tpxfnqzq.html

[K01] 对象转 JSON 字符串
来源：http://www.sxryk.cn/163iijvcueo.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.xuanzx.com/163trfsaruq.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163euoseikp.html

JS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163bowfmlta.html

TS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163nzehyhon.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.aibaodan.cn/163ftwlyzvj.html

Go:   json.Marshal(obj)
来源：http://www.xuanzx.com/163cplzykwp.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.sxryk.cn/163ptjrqonu.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.xuanzx.com/163hkufmzri.html

[K02] JSON 字符串转对象
来源：http://www.xuanzx.com/163zcqamvnn.html

Py:   json.loads(s)
来源：http://www.aibaodan.cn/163beuzurgj.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.sxryk.cn/163yipcmlwc.html

JS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163glpzgcwh.html

TS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163jkjwofhe.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.sxryk.cn/163yxmwmomr.html

Go:   json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163lpqwnekt.html

Ruby: JSON.parse(s)
来源：http://www.aibaodan.cn/163oabyjqpc.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.aibaodan.cn/163mfmqzbog.html

[K03] JSON 美化输出（带缩进）
来源：http://www.sxryk.cn/163owtcsvfq.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.aibaodan.cn/163vrxthorm.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163ubukppmc.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163nmynmtna.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163tooixqna.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.aibaodan.cn/163esewyama.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.xuanzx.com/163dcceeshm.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.aibaodan.cn/163ctqfqucq.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.aibaodan.cn/163dpuwpltq.html

[K04] 读取 JSON 文件
来源：http://www.xuanzx.com/163vuwvetlh.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.xuanzx.com/163spyjlmtf.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.xuanzx.com/163tjbwabuo.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163dvfmjniq.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163zonvofjx.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.xuanzx.com/163tblaamor.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163cioneiqs.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.xuanzx.com/163jivqslmz.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.aibaodan.cn/163jizlfqsb.html

[K05] 深拷贝对象
来源：http://www.xuanzx.com/163aagusbeh.html

Py:   copy.deepcopy(obj)
来源：http://www.xuanzx.com/163kbrpbnep.html

PHP:  unserialize(serialize($obj));
来源：http://www.xuanzx.com/163juwruvmf.html

JS:   structuredClone(obj)
来源：http://www.sxryk.cn/163gzkhvmeo.html

TS:   structuredClone(obj)
来源：http://www.sxryk.cn/163scophadp.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.aibaodan.cn/163wjxtldss.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.xuanzx.com/163cqazocpj.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.xuanzx.com/163vyzmbjmi.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.aibaodan.cn/163ksjnztte.html

[K06] 解析 URL 查询串
来源：http://www.sxryk.cn/163qtsywgxd.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.aibaodan.cn/163iudveckc.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.aibaodan.cn/163xrqhmlmg.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163mruqsqps.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163svdlbqam.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.sxryk.cn/163ijvkhefp.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.aibaodan.cn/163pnsrjfgs.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.xuanzx.com/163wvkuntzq.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.xuanzx.com/163caequprj.html

[K07] 进制转换
来源：http://www.sxryk.cn/163upurtbha.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.xuanzx.com/163pnyadoyi.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.aibaodan.cn/163lczohiyu.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163pfmknnxf.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163qaxyzvao.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.aibaodan.cn/163uzjvyoez.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.xuanzx.com/163aldxldym.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.sxryk.cn/163unnaxyqn.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.sxryk.cn/163fyirawpj.html

[K08] 二进制序列化（非 JSON）
来源：http://www.aibaodan.cn/163eghdgagl.html

Py:   pickle.dumps(obj)
来源：http://www.aibaodan.cn/163boqtxrck.html


<!-- 参考信息 -->