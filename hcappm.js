外链999!wailian999！

TS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163natlrixs.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.aibaodan.cn/163xwcsnrdr.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.xuanzx.com/163bphnvrae.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.aibaodan.cn/163xdnrlbhy.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.aibaodan.cn/163jassenuy.html

[H04] 自定义异常类型
来源：http://www.xuanzx.com/163hcjopspi.html

Py:   class MyError(Exception): pass
来源：http://www.aibaodan.cn/163hpgkapav.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.aibaodan.cn/163nkgrrher.html

JS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163ztnzxsyk.html

TS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163tisflney.html

Java: class MyException extends RuntimeException {}
来源：http://www.sxryk.cn/163htogpwbt.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.sxryk.cn/163bubsubko.html

Ruby: class MyError < StandardError; end
来源：http://www.aibaodan.cn/163kiqatnsl.html

C#:   class MyException : Exception {}
来源：http://www.xuanzx.com/163krhpuein.html

[H05] 捕获特定类型
来源：http://www.aibaodan.cn/163yyyrtciq.html

Py:   except ValueError as e:
来源：http://www.aibaodan.cn/163pdpaopgz.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.sxryk.cn/163orytspgx.html

JS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163mdeapjcy.html

TS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163hohdzeql.html

Java: catch (IOException | SQLException e) {}
来源：http://www.sxryk.cn/163exxvkmmy.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.xuanzx.com/163wfabaqzt.html

Ruby: rescue ArgumentError => e
来源：http://www.xuanzx.com/163zqshpjkw.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.xuanzx.com/163bfnibhdd.html

[H06] 可选值 / 空值安全访问
来源：http://www.aibaodan.cn/163efjgdsaw.html

Py:   value = d.get("k") or default
来源：http://www.aibaodan.cn/163tgkiiqpm.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.xuanzx.com/163yzrrfetb.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163hytacsqg.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163vbabtwvc.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.xuanzx.com/163ohgzypuk.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.sxryk.cn/163julrxlqd.html

Ruby: d&.dig(:a, :b)
来源：http://www.xuanzx.com/163mygynmrl.html

C#:   obj?.A?.B ?? default
来源：http://www.sxryk.cn/163smpskjli.html

[H07] 断言
来源：http://www.xuanzx.com/163iegtefac.html

Py:   assert x > 0, "必须为正"
来源：http://www.aibaodan.cn/163xamwkfhm.html

PHP:  assert($x > 0);
来源：http://www.xuanzx.com/163wfdmvvhr.html

JS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163opdwekjj.html

TS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163eqmeugaj.html

Java: assert x > 0 : "必须为正";
来源：http://www.sxryk.cn/163twzfpotc.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.aibaodan.cn/163afchoabn.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.sxryk.cn/163enyaikav.html

C#:   Debug.Assert(x > 0);
来源：http://www.aibaodan.cn/163fymlwzia.html

[H08] 获取错误信息与堆栈
来源：http://www.aibaodan.cn/163vuetmnnh.html

Py:   str(e);  traceback.format_exc()
来源：http://www.aibaodan.cn/163rozlaqpo.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.sxryk.cn/163vgszqqkg.html

JS:   e.message;  e.stack
来源：http://www.sxryk.cn/163ybdiooup.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.sxryk.cn/163lxcvnftr.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.aibaodan.cn/163cjpjgtdf.html

Go:   err.Error()
来源：http://www.xuanzx.com/163fbziqvaa.html

Ruby: e.message;  e.backtrace
来源：http://www.sxryk.cn/163idnlmpst.html

C#:   e.Message;  e.StackTrace
来源：http://www.xuanzx.com/163xbvkyzdg.html

[H09] 带错误码的异常
来源：http://www.sxryk.cn/163qalvhkvi.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.aibaodan.cn/163lxenpzho.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.aibaodan.cn/163sexavfev.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.sxryk.cn/163hufqhefg.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.sxryk.cn/163xddxhdoi.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.xuanzx.com/163ljiybibi.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.aibaodan.cn/163llrdubgf.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.xuanzx.com/163npcrxqwf.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.sxryk.cn/163rmcchwkv.html

[H10] 资源自动释放
来源：http://www.sxryk.cn/163hrzaybpz.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.xuanzx.com/163befwmpnr.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.xuanzx.com/163rtxrvsav.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163oigbguze.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163koreuuwv.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.sxryk.cn/163auvgaajd.html

Go:   defer f.Close()
来源：http://www.sxryk.cn/163elxtdkxn.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.xuanzx.com/163xjtylymk.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.xuanzx.com/163bgxtrtba.html

================================================================================
来源：http://www.aibaodan.cn/163vjgtsxwi.html

I. 正则表达式
来源：http://www.sxryk.cn/163rilugead.html

================================================================================
来源：http://www.aibaodan.cn/163erdskoza.html

[I01] 判断是否匹配
来源：http://www.sxryk.cn/163xemufgfx.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.sxryk.cn/163tqyxopxf.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.xuanzx.com/163ozpurqju.html

JS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163hmhbtwst.html

TS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163bdcmuimd.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.aibaodan.cn/163nifaqfyz.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.aibaodan.cn/163yokfvclq.html

Ruby: s.match?(/\d+/)
来源：http://www.sxryk.cn/163qwhkqviq.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.sxryk.cn/163fhvmcfau.html

[I02] 提取所有匹配
来源：http://www.sxryk.cn/163palpzxkd.html

Py:   re.findall(r"\d+", s)
来源：http://www.aibaodan.cn/163eyznqodj.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.xuanzx.com/163jjtdcrgy.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.sxryk.cn/163czhszfkn.html

TS:   s.match(/\d+/g)
来源：http://www.xuanzx.com/163qksmkwkf.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.aibaodan.cn/163qwlhokic.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.xuanzx.com/163ulybjuhl.html

Ruby: s.scan(/\d+/)
来源：http://www.sxryk.cn/163vfjknhkc.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.sxryk.cn/163bdobdxjb.html

[I03] 提取捕获分组
来源：http://www.aibaodan.cn/163lrgzkfmz.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.sxryk.cn/163xuprtwsd.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.sxryk.cn/163ardtzzpu.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.sxryk.cn/163huulauvf.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.sxryk.cn/163dlgvbymm.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.sxryk.cn/163whgkqgqk.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.xuanzx.com/163lumgfwsy.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.sxryk.cn/163xijralto.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.xuanzx.com/163wnllcdbz.html

[I04] 正则替换
来源：http://www.aibaodan.cn/163ythwwxae.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.xuanzx.com/163geqdnzea.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163gqtehviq.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163viprbxjv.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163jibktoos.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.sxryk.cn/163ptqkpybk.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.sxryk.cn/163edtrxtqq.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.sxryk.cn/163tkypdiiw.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.sxryk.cn/163auiedamd.html

[I05] 按正则拆分
来源：http://www.sxryk.cn/163sniqirwj.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.sxryk.cn/163kywfdshv.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.sxryk.cn/163wbrcqyxd.html

JS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163vtlmasfm.html

TS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163zvqozubh.html

Java: s.split("\\s*,\\s*")
来源：http://www.sxryk.cn/163jbxvslwz.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.xuanzx.com/163mswurxwc.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163ncieoiaa.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.sxryk.cn/163qyxvacun.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.sxryk.cn/163lwbtfmrd.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163awlefjhj.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.xuanzx.com/163muccdhsd.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163huxcqrwy.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163mjvlvfss.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.sxryk.cn/163syognmxp.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.aibaodan.cn/163rhoyjmgg.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.xuanzx.com/163aurrbdcq.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163mhmfpwpw.html

[I07] 忽略大小写与多行模式
来源：http://www.sxryk.cn/163jhkytmns.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.aibaodan.cn/163tkjkxovp.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.aibaodan.cn/163faczihvm.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.sxryk.cn/163ahrfqtpy.html

TS:   /error/gim
来源：http://www.aibaodan.cn/163aonebtpp.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.aibaodan.cn/163isszddej.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.xuanzx.com/163amrcozqy.html

Ruby: s.scan(/error/i)
来源：http://www.aibaodan.cn/163tukkoltq.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.sxryk.cn/163wliyqsqd.html

[I08] 贪婪与非贪婪匹配
来源：http://www.xuanzx.com/163vwxgbyhs.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.aibaodan.cn/163yqeunguh.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.sxryk.cn/163hyhllawt.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163hdcaipby.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163szxntbno.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.xuanzx.com/163eecmifxn.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.aibaodan.cn/163wxpbzznu.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.xuanzx.com/163erplpkbu.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.xuanzx.com/163arencnxw.html

================================================================================
来源：http://www.aibaodan.cn/163donbazmh.html

J. 日期与时间
来源：http://www.sxryk.cn/163njdikxty.html

================================================================================
来源：http://www.sxryk.cn/163vinflqns.html

[J01] 获取当前时间
来源：http://www.aibaodan.cn/163epbrgivj.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.aibaodan.cn/163fvzqjlyi.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163iteoevrs.html

JS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163wnlbmvnt.html

TS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163bywmyvej.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.xuanzx.com/163mbwpwvpj.html

Go:   time.Now()
来源：http://www.aibaodan.cn/163npxvoapw.html

Ruby: Time.now
来源：http://www.xuanzx.com/163llwmfvbc.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.sxryk.cn/163angpvwck.html

[J02] 格式化输出
来源：http://www.sxryk.cn/163sdlhxjay.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163tzpxqjao.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163kayapsxj.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.aibaodan.cn/163srcxjpom.html

TS:   d.toISOString()
来源：http://www.sxryk.cn/163zhpylkbw.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.xuanzx.com/163bmggfioj.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.aibaodan.cn/163fwhqlksg.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163tiqqbtlo.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.xuanzx.com/163rzxoncza.html

[J03] 字符串解析为日期
来源：http://www.sxryk.cn/163dnwepfey.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.xuanzx.com/163supeffiw.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.aibaodan.cn/163rvxwtlnu.html

JS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163agngjpya.html

TS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163loqghnch.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.xuanzx.com/163rzrhkzzr.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.sxryk.cn/163atvjixun.html

Ruby: Date.parse("2024-01-02")
来源：http://www.xuanzx.com/163ubdgwvmk.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.xuanzx.com/163mnwejtfm.html

[J04] 时间戳与日期互转
来源：http://www.xuanzx.com/163ewujdfji.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.aibaodan.cn/163yhjwullx.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.sxryk.cn/163vbphkedj.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.sxryk.cn/163gcgcdxak.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.sxryk.cn/163hhnqgeue.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.aibaodan.cn/163rtekfjbo.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.xuanzx.com/163sfhyypbp.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.xuanzx.com/163pfdxmilp.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.sxryk.cn/163zcortyvj.html

[J05] 时间加减（加 7 天）
来源：http://www.xuanzx.com/163asijundo.html

Py:   now + timedelta(days=7)
来源：http://www.xuanzx.com/163nuzhuadw.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.aibaodan.cn/163kaefhmyc.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163msdmwtbb.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163thnwntpt.html

Java: LocalDate.now().plusDays(7)
来源：http://www.sxryk.cn/163hwvsizlp.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.sxryk.cn/163diugftju.html

Ruby: Time.now + 7 * 86400
来源：http://www.sxryk.cn/163ulfzxeyl.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.aibaodan.cn/163fzgssisz.html

[J06] 计算两时间之差
来源：http://www.aibaodan.cn/163zthtzkwy.html

Py:   (end - start).total_seconds()
来源：http://www.xuanzx.com/163urjqrxfm.html

PHP:  $end->diff($start)->days;
来源：http://www.xuanzx.com/163hrlgqgzf.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.aibaodan.cn/163txbiggtu.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.aibaodan.cn/163tkerrdpv.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.sxryk.cn/163zymhdexf.html

Go:   end.Sub(start).Hours()
来源：http://www.aibaodan.cn/163ncuncbfy.html

Ruby: end - start                 # 返回秒数
来源：http://www.xuanzx.com/163xhjyiavg.html

C#:   (end - start).TotalSeconds
来源：http://www.xuanzx.com/163rlbanmhn.html

[J07] 比较两个日期
来源：http://www.sxryk.cn/163wmervecv.html

Py:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163gsdebxbn.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.xuanzx.com/163zgnshtry.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163iigghily.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163nfcgvehe.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.sxryk.cn/163ddsygxzw.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.sxryk.cn/163asegsuyo.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163umazamnb.html

C#:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163utfzihsi.html

[J08] 提取年月日与星期
来源：http://www.aibaodan.cn/163jlsqqxbl.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.sxryk.cn/163dskicgmx.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.sxryk.cn/163aqzmbucg.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.sxryk.cn/163aykqhkrn.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.sxryk.cn/163qfzxnzzr.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.aibaodan.cn/163jmehncdg.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.xuanzx.com/163fhtpyinz.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.sxryk.cn/163qjahjlog.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.aibaodan.cn/163gdigprdm.html

[J09] 时区处理
来源：http://www.sxryk.cn/163gtjfybaf.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.xuanzx.com/163fdlzrbro.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.aibaodan.cn/163yuhbyzvj.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163aydouvgp.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163dclzwmte.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.sxryk.cn/163lgtlwgno.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.sxryk.cn/163xrbjsyzu.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.xuanzx.com/163gaoqmjyf.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.sxryk.cn/163dfssynrt.html

[J10] 取今天 / 本月第一天
来源：http://www.sxryk.cn/163xhiqrnpq.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.aibaodan.cn/163kxnipjth.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.sxryk.cn/163buwictzf.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.sxryk.cn/163uuicexkp.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.aibaodan.cn/163aquvqszk.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.aibaodan.cn/163skuxdbfd.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.xuanzx.com/163bchpopbs.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.sxryk.cn/163fszdztzs.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.sxryk.cn/163njzfirsx.html

================================================================================
来源：http://www.sxryk.cn/163vskopcou.html

K. JSON 与序列化
来源：http://www.xuanzx.com/163hlgldcyi.html

================================================================================
来源：http://www.xuanzx.com/163xkboqmth.html

[K01] 对象转 JSON 字符串
来源：http://www.aibaodan.cn/163xqfgfawo.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.sxryk.cn/163kmvqnaiu.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163wsbmmecx.html

JS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163kcdmxbws.html

TS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163imadcprz.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.xuanzx.com/163dzllrnak.html

Go:   json.Marshal(obj)
来源：http://www.sxryk.cn/163rgkgtsqq.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.aibaodan.cn/163aahxgsqn.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.aibaodan.cn/163uasjiapf.html

[K02] JSON 字符串转对象
来源：http://www.xuanzx.com/163gudydcju.html

Py:   json.loads(s)
来源：http://www.aibaodan.cn/163xhrreezq.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.sxryk.cn/163egauzbeh.html

JS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163gfyoggxt.html

TS:   JSON.parse(s)
来源：http://www.sxryk.cn/163bezvmuli.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.sxryk.cn/163poqstcrf.html

Go:   json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163payzuugi.html

Ruby: JSON.parse(s)
来源：http://www.aibaodan.cn/163mtsjqogd.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.xuanzx.com/163xpomupox.html

[K03] JSON 美化输出（带缩进）
来源：http://www.sxryk.cn/163ethhxbeb.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.sxryk.cn/163pivmfodb.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163zcjdavpz.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163neeyvcyx.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163vzrlcptj.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.aibaodan.cn/163txskhtky.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.xuanzx.com/163iocrwgwr.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.aibaodan.cn/163uqdqobdo.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.aibaodan.cn/163wqenigak.html

[K04] 读取 JSON 文件
来源：http://www.sxryk.cn/163szfrspdk.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.aibaodan.cn/163dkmdyibh.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.aibaodan.cn/163nssgupzz.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163ukqewmqq.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163wxnwcweh.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.xuanzx.com/163yxprlhwf.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163ekryfkpv.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.sxryk.cn/163uqhidtjm.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.sxryk.cn/163kfihaopc.html

[K05] 深拷贝对象
来源：http://www.xuanzx.com/163bycpxfuz.html

Py:   copy.deepcopy(obj)
来源：http://www.sxryk.cn/163npqdyqee.html

PHP:  unserialize(serialize($obj));
来源：http://www.aibaodan.cn/163ojbcvyml.html

JS:   structuredClone(obj)
来源：http://www.sxryk.cn/163qleggndr.html

TS:   structuredClone(obj)
来源：http://www.xuanzx.com/163zkeuscje.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.xuanzx.com/163otucscca.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.xuanzx.com/163rkemcxvp.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.aibaodan.cn/163asfulfxq.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.xuanzx.com/163kzvpzsiq.html

[K06] 解析 URL 查询串
来源：http://www.sxryk.cn/163oscadarb.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.aibaodan.cn/163cuibmech.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.sxryk.cn/163apvjykpa.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163aosezpqi.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163uzenwsst.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.aibaodan.cn/163zqkoclzr.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.xuanzx.com/163pllygxin.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.xuanzx.com/163ojgxxdro.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.xuanzx.com/163wyemyuxk.html

[K07] 进制转换
来源：http://www.sxryk.cn/163tsgrfhoe.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.sxryk.cn/163dycppsfn.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.aibaodan.cn/163jmlwhari.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163pdutiazl.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163ihqrlptd.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.sxryk.cn/163buaydepo.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.sxryk.cn/163gcxoczab.html


<!-- 参考信息 -->