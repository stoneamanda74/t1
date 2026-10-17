外链999!wailian999！

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.sxryk.cn/163vbexutbg.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.xuanzx.com/163fgjjbtvb.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.xuanzx.com/163scyfxjvv.html

[H02] finally / ensure 收尾
来源：http://www.sxryk.cn/163yxfnzamt.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.xuanzx.com/163mgvhponw.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163rpmfppez.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163qzwjthzm.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163iaewmutr.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163nnewpvbf.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.aibaodan.cn/163zrdrmypg.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.sxryk.cn/163igdnnrqo.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.xuanzx.com/163zrxsyfss.html

[H03] 主动抛出异常
来源：http://www.aibaodan.cn/163fdvsfgrq.html

Py:   raise ValueError("错误信息")
来源：http://www.sxryk.cn/163itprijfs.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.aibaodan.cn/163stbmxdkb.html

JS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163zhfmoybf.html

TS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163baqtursa.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.sxryk.cn/163czfhnjxw.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.xuanzx.com/163ehcgtoaw.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.aibaodan.cn/163cifycfjr.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.sxryk.cn/163gmtnddru.html

[H04] 自定义异常类型
来源：http://www.sxryk.cn/163qcvkdlcw.html

Py:   class MyError(Exception): pass
来源：http://www.sxryk.cn/163gjmrsfhg.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.xuanzx.com/163qwksubsz.html

JS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163cbcqzaii.html

TS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163fsywyrxm.html

Java: class MyException extends RuntimeException {}
来源：http://www.xuanzx.com/163fkaheowo.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.xuanzx.com/163heivpire.html

Ruby: class MyError < StandardError; end
来源：http://www.xuanzx.com/163fkgpvasw.html

C#:   class MyException : Exception {}
来源：http://www.sxryk.cn/163vtdheewa.html

[H05] 捕获特定类型
来源：http://www.xuanzx.com/163uqoeboqn.html

Py:   except ValueError as e:
来源：http://www.aibaodan.cn/163ncdkwxbu.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.aibaodan.cn/163carlcxso.html

JS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163okvawgkb.html

TS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163jsgpxahr.html

Java: catch (IOException | SQLException e) {}
来源：http://www.xuanzx.com/163pajdzhox.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.xuanzx.com/163yvpqawrm.html

Ruby: rescue ArgumentError => e
来源：http://www.aibaodan.cn/163aclzhgbh.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.xuanzx.com/163fwufzbcb.html

[H06] 可选值 / 空值安全访问
来源：http://www.aibaodan.cn/163zrsipvyw.html

Py:   value = d.get("k") or default
来源：http://www.xuanzx.com/163fabqtzjz.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.aibaodan.cn/163wfgsvdto.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163ldaxzfdf.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163uedidmgb.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.xuanzx.com/163yaecsecn.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.aibaodan.cn/163uaaiowiw.html

Ruby: d&.dig(:a, :b)
来源：http://www.xuanzx.com/163fctvbppg.html

C#:   obj?.A?.B ?? default
来源：http://www.aibaodan.cn/163fhrswdkr.html

[H07] 断言
来源：http://www.xuanzx.com/163ecnpyhxg.html

Py:   assert x > 0, "必须为正"
来源：http://www.xuanzx.com/163prwglnfv.html

PHP:  assert($x > 0);
来源：http://www.sxryk.cn/163lmkrinlp.html

JS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163ghurryxr.html

TS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163qlxaeifw.html

Java: assert x > 0 : "必须为正";
来源：http://www.sxryk.cn/163hzuadcoy.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.aibaodan.cn/163qzrbpigj.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.xuanzx.com/163glagemel.html

C#:   Debug.Assert(x > 0);
来源：http://www.sxryk.cn/163ozbqffls.html

[H08] 获取错误信息与堆栈
来源：http://www.xuanzx.com/163skhhrlaq.html

Py:   str(e);  traceback.format_exc()
来源：http://www.xuanzx.com/163wpbixhdk.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.aibaodan.cn/163ixchhhfn.html

JS:   e.message;  e.stack
来源：http://www.aibaodan.cn/163qsepduth.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.aibaodan.cn/163sjatfudl.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.sxryk.cn/163eyeecuay.html

Go:   err.Error()
来源：http://www.aibaodan.cn/163spguzrgi.html

Ruby: e.message;  e.backtrace
来源：http://www.sxryk.cn/163fzikxwdo.html

C#:   e.Message;  e.StackTrace
来源：http://www.xuanzx.com/163qmarpqga.html

[H09] 带错误码的异常
来源：http://www.aibaodan.cn/163aieffkpi.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.sxryk.cn/163xexvyvtv.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.xuanzx.com/163wizkwfrt.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.aibaodan.cn/163kmpgnowe.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.aibaodan.cn/163qcecokdv.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.sxryk.cn/163ppmfysba.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.xuanzx.com/163gciyicko.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.aibaodan.cn/163bvhwsqbu.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.aibaodan.cn/163gtwgcucn.html

[H10] 资源自动释放
来源：http://www.xuanzx.com/163wgxnekba.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.sxryk.cn/163gwjcwctw.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.sxryk.cn/163vyaftvss.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163ebhxmhmn.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163oaogqxyq.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.aibaodan.cn/163ttdcbbkq.html

Go:   defer f.Close()
来源：http://www.aibaodan.cn/163yhfpcmjb.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.sxryk.cn/163yaijddaz.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.sxryk.cn/163aaktdjgg.html

================================================================================
来源：http://www.xuanzx.com/163akwsawvy.html

I. 正则表达式
来源：http://www.sxryk.cn/163gweiwkqi.html

================================================================================
来源：http://www.sxryk.cn/163swziqnfy.html

[I01] 判断是否匹配
来源：http://www.aibaodan.cn/163qiexeytj.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.xuanzx.com/163wyieayoy.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.sxryk.cn/163qkjeyogy.html

JS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163yprrqxvk.html

TS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163wkmvgwcq.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.xuanzx.com/163eskdcvwj.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.xuanzx.com/163ingofupv.html

Ruby: s.match?(/\d+/)
来源：http://www.xuanzx.com/163iwqmmmiq.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.sxryk.cn/163depgdehe.html

[I02] 提取所有匹配
来源：http://www.xuanzx.com/163zfxtnsbn.html

Py:   re.findall(r"\d+", s)
来源：http://www.xuanzx.com/163fkxzyevc.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.aibaodan.cn/163jppmvipm.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.xuanzx.com/163svvxqglg.html

TS:   s.match(/\d+/g)
来源：http://www.xuanzx.com/163ujtfqdnw.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.sxryk.cn/163ndvabjwb.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.sxryk.cn/163qrjdpusq.html

Ruby: s.scan(/\d+/)
来源：http://www.sxryk.cn/163xqycoyvz.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.sxryk.cn/163wtmjhdbp.html

[I03] 提取捕获分组
来源：http://www.xuanzx.com/163bvosucbz.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.sxryk.cn/163awiwhixy.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.aibaodan.cn/163zfgwxdik.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.aibaodan.cn/163uukkwmnj.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.aibaodan.cn/163ymwnpncp.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.aibaodan.cn/163sgraibyq.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.sxryk.cn/163jgmqgegr.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.xuanzx.com/163scycyxvz.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.sxryk.cn/163tmeyoahz.html

[I04] 正则替换
来源：http://www.xuanzx.com/163gxvlxmnf.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.sxryk.cn/163fuouljwh.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163rmsdfxxf.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163sytheglk.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163iabvfgtk.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.xuanzx.com/163axhxxvnz.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.sxryk.cn/163ppiphpgo.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.xuanzx.com/163ddbdtbdn.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.aibaodan.cn/163vcnqsadi.html

[I05] 按正则拆分
来源：http://www.aibaodan.cn/163ocffrzud.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.xuanzx.com/163nxxazlgx.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.aibaodan.cn/163qiqrcyhr.html

JS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163ldwmdhgz.html

TS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163zxhbihsc.html

Java: s.split("\\s*,\\s*")
来源：http://www.aibaodan.cn/163btokwmdl.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.sxryk.cn/163cminjtcd.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163rxwwkjjv.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.sxryk.cn/163gfgctqsn.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.sxryk.cn/163gkvxjfuy.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163vlcfzhcn.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.xuanzx.com/163fdevicyt.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163bjhfunre.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163btercbbd.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.sxryk.cn/163wnkocyzk.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.xuanzx.com/163rgphmbyz.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.sxryk.cn/163seclfnfb.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163mxzhkwtp.html

[I07] 忽略大小写与多行模式
来源：http://www.aibaodan.cn/163jdtqbdqd.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.sxryk.cn/163kmnzhnbo.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.sxryk.cn/163srtbdyoe.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.xuanzx.com/163fxosrogd.html

TS:   /error/gim
来源：http://www.xuanzx.com/163obtcccly.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.sxryk.cn/163wcntwnic.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.xuanzx.com/163simxdstb.html

Ruby: s.scan(/error/i)
来源：http://www.sxryk.cn/163intumvgz.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.sxryk.cn/163kgmnkzxp.html

[I08] 贪婪与非贪婪匹配
来源：http://www.xuanzx.com/163smiqqaai.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.aibaodan.cn/163nrmzjosg.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.aibaodan.cn/163grcxirqa.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163uwwrucmv.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163cnxekujz.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.sxryk.cn/163ockhinpr.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.aibaodan.cn/163rlzuawkt.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.aibaodan.cn/163bsscxllr.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.xuanzx.com/163anaitnzw.html

================================================================================
来源：http://www.aibaodan.cn/163lvqtwbzm.html

J. 日期与时间
来源：http://www.xuanzx.com/163lkgekzsj.html

================================================================================
来源：http://www.sxryk.cn/163ngbqzyky.html

[J01] 获取当前时间
来源：http://www.xuanzx.com/163kilziubc.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.xuanzx.com/163pxakrmyb.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163nnmyxvcc.html

JS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163kracuhkn.html

TS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163jgpcstmp.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.aibaodan.cn/163wbmridfy.html

Go:   time.Now()
来源：http://www.sxryk.cn/163oimolnyc.html

Ruby: Time.now
来源：http://www.xuanzx.com/163qjtfylwa.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.aibaodan.cn/163fxxxounm.html

[J02] 格式化输出
来源：http://www.sxryk.cn/163sperhpjj.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163krorjbuf.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163apetujrg.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.aibaodan.cn/163lnwezytj.html

TS:   d.toISOString()
来源：http://www.aibaodan.cn/163esuhlyvo.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.sxryk.cn/163nikpdrxw.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.sxryk.cn/163aqopzubs.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163zixnievj.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.xuanzx.com/163zrjxqtzj.html

[J03] 字符串解析为日期
来源：http://www.xuanzx.com/163eworrulq.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.aibaodan.cn/163wbgiydgz.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.aibaodan.cn/163jlquidkm.html

JS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163sgljqjge.html

TS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163ohnikvuc.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.aibaodan.cn/163vdworinu.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.sxryk.cn/163hllhsrxc.html

Ruby: Date.parse("2024-01-02")
来源：http://www.sxryk.cn/163tyyrxyme.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.xuanzx.com/163axmggmtk.html

[J04] 时间戳与日期互转
来源：http://www.xuanzx.com/163ramqammr.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.sxryk.cn/163cjrswaqq.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.sxryk.cn/163tatuohry.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.sxryk.cn/163khidaofj.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.aibaodan.cn/163mmougwev.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.aibaodan.cn/163dvcisiyz.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.xuanzx.com/163lkmcitnf.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.sxryk.cn/163oyizzfrh.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.sxryk.cn/163hhpwanub.html

[J05] 时间加减（加 7 天）
来源：http://www.sxryk.cn/163giwfcgki.html

Py:   now + timedelta(days=7)
来源：http://www.sxryk.cn/163abrvjbni.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.xuanzx.com/163tclrzjeg.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163uidocdzv.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163zruzgpol.html

Java: LocalDate.now().plusDays(7)
来源：http://www.aibaodan.cn/163drggkclg.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.aibaodan.cn/163totmzegh.html

Ruby: Time.now + 7 * 86400
来源：http://www.xuanzx.com/163pizhgpvv.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.aibaodan.cn/163ncfbbjyj.html

[J06] 计算两时间之差
来源：http://www.xuanzx.com/163xrotxkxu.html

Py:   (end - start).total_seconds()
来源：http://www.sxryk.cn/163xjjmnadu.html

PHP:  $end->diff($start)->days;
来源：http://www.xuanzx.com/163trthexct.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.xuanzx.com/163tbjcxgid.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.aibaodan.cn/163dmvorvhe.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.sxryk.cn/163rbuouccy.html

Go:   end.Sub(start).Hours()
来源：http://www.aibaodan.cn/163admkvxjb.html

Ruby: end - start                 # 返回秒数
来源：http://www.aibaodan.cn/163zvzgtmnm.html

C#:   (end - start).TotalSeconds
来源：http://www.sxryk.cn/163dbdwqugz.html

[J07] 比较两个日期
来源：http://www.xuanzx.com/163ahhbvohl.html

Py:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163wjdyfdcc.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.sxryk.cn/163kyrllqpb.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163hhfnzyca.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163xvarwlfh.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.aibaodan.cn/163amceemgv.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.sxryk.cn/163gmltflph.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163kfqcmfwj.html

C#:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163rfgmncss.html

[J08] 提取年月日与星期
来源：http://www.sxryk.cn/163wsdvqwyv.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.sxryk.cn/163detoinoe.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.aibaodan.cn/163duylfpiw.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.aibaodan.cn/163cgklgizm.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.aibaodan.cn/163emamdsod.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.sxryk.cn/163jifcwcty.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.xuanzx.com/163wkjejchm.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.xuanzx.com/163ergvuwmt.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.sxryk.cn/163wrqmxwqc.html

[J09] 时区处理
来源：http://www.xuanzx.com/163unrzurde.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.aibaodan.cn/163swpgtbmx.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.aibaodan.cn/163bnpfsoto.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163hkcpqolq.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163hueyhhui.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.xuanzx.com/163ldmlrhur.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.aibaodan.cn/163vikihkwz.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.sxryk.cn/163qxojwkmc.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.sxryk.cn/163uczkjirx.html

[J10] 取今天 / 本月第一天
来源：http://www.xuanzx.com/163plushyty.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.aibaodan.cn/163vhjrwnxi.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.sxryk.cn/163zorjvfwb.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.xuanzx.com/163febxxqyw.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.xuanzx.com/163xeligyla.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.sxryk.cn/163vvauwylj.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.aibaodan.cn/163thqdrspu.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.xuanzx.com/163lfktprgg.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.xuanzx.com/163glnyvcnk.html

================================================================================
来源：http://www.aibaodan.cn/163bnxleunj.html

K. JSON 与序列化
来源：http://www.aibaodan.cn/163ptrbszow.html

================================================================================
来源：http://www.sxryk.cn/163qxuknkap.html

[K01] 对象转 JSON 字符串
来源：http://www.xuanzx.com/163ahczkzts.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.xuanzx.com/163qgohqpws.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163xphuztep.html

JS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163ezdnxsjw.html

TS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163kqrsawzn.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.aibaodan.cn/163gpeibpil.html

Go:   json.Marshal(obj)
来源：http://www.aibaodan.cn/163wjznokac.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.xuanzx.com/163eeftuidt.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.xuanzx.com/163ockgxwgt.html

[K02] JSON 字符串转对象
来源：http://www.aibaodan.cn/163xshnilmp.html

Py:   json.loads(s)
来源：http://www.sxryk.cn/163vojmtusu.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.aibaodan.cn/163octscvbp.html

JS:   JSON.parse(s)
来源：http://www.xuanzx.com/163sbnggggp.html

TS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163xmvntuvx.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.aibaodan.cn/163ndejyuob.html

Go:   json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163xjhdvfpd.html

Ruby: JSON.parse(s)
来源：http://www.sxryk.cn/163cvhepmkq.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.sxryk.cn/163snlfhjos.html

[K03] JSON 美化输出（带缩进）
来源：http://www.sxryk.cn/163sotomtht.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.sxryk.cn/163xwaglhhk.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163knztjbtz.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163nfwcgugp.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163hnhaacwr.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.sxryk.cn/163udtvinmy.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.xuanzx.com/163wfvvcubu.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.xuanzx.com/163fjiyicud.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.xuanzx.com/163slnnaejq.html

[K04] 读取 JSON 文件
来源：http://www.aibaodan.cn/163lndolpst.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.sxryk.cn/163mffdests.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.aibaodan.cn/163fidmagfq.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163tqzxcvxu.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163vcmzpnec.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.xuanzx.com/163qvjezpfr.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163vnztpxuy.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.xuanzx.com/163dcswlhnd.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.aibaodan.cn/163zvyehorh.html

[K05] 深拷贝对象
来源：http://www.sxryk.cn/163bueleviw.html

Py:   copy.deepcopy(obj)
来源：http://www.aibaodan.cn/163zlfdhszx.html

PHP:  unserialize(serialize($obj));
来源：http://www.aibaodan.cn/163ihzvsbks.html

JS:   structuredClone(obj)
来源：http://www.xuanzx.com/163lcgagnbr.html

TS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163aqquqvma.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.sxryk.cn/163godzauku.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.xuanzx.com/163ijjwkwxt.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.aibaodan.cn/163rsnrrmdk.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.aibaodan.cn/163rdtzzvuq.html


<!-- 参考信息 -->