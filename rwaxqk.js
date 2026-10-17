外链999!wailian999！

C#:   (int)'A'; (char)65
来源：http://www.xuanzx.com/163qoiknbzu.html

[A19] 交换两个变量
来源：http://www.xuanzx.com/163lexhubye.html

Py:   a, b = b, a
来源：http://www.xuanzx.com/163emfybpif.html

PHP:  [$a, $b] = [$b, $a];
来源：http://www.aibaodan.cn/163bqcduzkr.html

JS:   [a, b] = [b, a];
来源：http://www.aibaodan.cn/163ruerpgeq.html

TS:   [a, b] = [b, a];
来源：http://www.aibaodan.cn/163upsuxgyb.html

Java: int t = a; a = b; b = t;
来源：http://www.xuanzx.com/163etfimsta.html

Go:   a, b = b, a
来源：http://www.xuanzx.com/163qjuqrgrr.html

Ruby: a, b = b, a
来源：http://www.aibaodan.cn/163nynbmmaz.html

C#:   (a, b) = (b, a);
来源：http://www.sxryk.cn/163iuyalyiy.html

[A20] 读取标准输入
来源：http://www.sxryk.cn/163fbobdulq.html

Py:   name = input("请输入：")
来源：http://www.xuanzx.com/163oxwpptyc.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.xuanzx.com/163bkkzvvbk.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.aibaodan.cn/163djavwdux.html

TS:   // Node.js：readline 模块
来源：http://www.xuanzx.com/163vrtonqds.html

Java: new Scanner(System.in).nextLine()
来源：http://www.aibaodan.cn/163akpexatw.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.sxryk.cn/163dhbecqrl.html

Ruby: gets.chomp
来源：http://www.xuanzx.com/163wtngcvta.html

C#:   Console.ReadLine();
来源：http://www.aibaodan.cn/163karzbycx.html

[A21] 保留指定小数位输出
来源：http://www.aibaodan.cn/163aplqlxnd.html

Py:   f"{3.14159:.2f}"
来源：http://www.sxryk.cn/163klmmjvje.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.xuanzx.com/163tmkocsze.html

JS:   (3.14159).toFixed(2)
来源：http://www.sxryk.cn/163dpouyllg.html

TS:   (3.14159).toFixed(2)
来源：http://www.aibaodan.cn/163piareokz.html

Java: String.format("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163qqgliosh.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.xuanzx.com/163qgmlefml.html

Ruby: format("%.2f", 3.14159)
来源：http://www.sxryk.cn/163vvborhho.html

C#:   3.14159.ToString("F2")
来源：http://www.xuanzx.com/163kuzrxwnp.html

[A22] 获取字符串长度
来源：http://www.aibaodan.cn/163mrkqcdxa.html

Py:   len(s)
来源：http://www.aibaodan.cn/163ralfrlcq.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.sxryk.cn/163ngkyyabt.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.aibaodan.cn/163wgkzqkvr.html

TS:   s.length
来源：http://www.xuanzx.com/163hdfbpvec.html

Java: s.length()
来源：http://www.xuanzx.com/163tihsdrif.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.aibaodan.cn/163xlkzsdvb.html

Ruby: s.length
来源：http://www.xuanzx.com/163bayovfwp.html

C#:   s.Length
来源：http://www.sxryk.cn/163pnsjdsfv.html

[A23] 大小写转换
来源：http://www.sxryk.cn/163ygyggwjg.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.sxryk.cn/163ofwqqztg.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.sxryk.cn/163zfcapylb.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163xomisftb.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163twhgbzfb.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163bvkiesoq.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.xuanzx.com/163rtxmaprs.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.xuanzx.com/163akfcvbef.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.sxryk.cn/163avscnlhm.html

[A24] 去除首尾空白
来源：http://www.xuanzx.com/163kowwzjzd.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.aibaodan.cn/163qvhlkefe.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.xuanzx.com/163hlqmrlae.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.sxryk.cn/163czeqpjvl.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.aibaodan.cn/163fbxhimkh.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.aibaodan.cn/163cjekivql.html

Go:   strings.TrimSpace(s)
来源：http://www.xuanzx.com/163hxecysyn.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.xuanzx.com/163hnpvxffc.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.sxryk.cn/163hdptkgau.html

[A25] 字符串比较
来源：http://www.aibaodan.cn/163wxnsoque.html

Py:   s1 == s2; s1 != s2
来源：http://www.xuanzx.com/163qfcpwvon.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.aibaodan.cn/163oiojnuhc.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.xuanzx.com/163wrgzxybx.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.aibaodan.cn/163wwkczcoj.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.sxryk.cn/163alggovtl.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.aibaodan.cn/163sfulfdxw.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.sxryk.cn/163muxefdsk.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.xuanzx.com/163owpcklba.html

[A26] 类型转换总览
来源：http://www.aibaodan.cn/163ejzsgbpz.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.xuanzx.com/163tbjxdhnj.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.sxryk.cn/163eepnfnal.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.aibaodan.cn/163scbzxkap.html

TS:   Number() String() Boolean() x as number
来源：http://www.xuanzx.com/163kbmgjdmq.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.sxryk.cn/163vggnxkss.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.xuanzx.com/163xogliuuy.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.xuanzx.com/163gwfsoise.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.xuanzx.com/163acmmficj.html

================================================================================
来源：http://www.sxryk.cn/163kkuqyewa.html

B. 流程控制
来源：http://www.sxryk.cn/163ekalhacy.html

================================================================================
来源：http://www.sxryk.cn/163bhyvjigg.html

[B01] 条件判断 if / else
来源：http://www.aibaodan.cn/163kboxdefu.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.aibaodan.cn/163pnjjrulz.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.xuanzx.com/163iqwmelsk.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163kcsmzjzb.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163uncwnetk.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163sqymkczu.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.aibaodan.cn/163sqhsibuz.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.aibaodan.cn/163mlfamtzp.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163lkqvqupl.html

[B02] 多分支 else if / elif
来源：http://www.sxryk.cn/163wnbhuroc.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.aibaodan.cn/163jxoiijsm.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.xuanzx.com/163fcubgipr.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163ekntmlfw.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163njyigyni.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163ffzmjidy.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.sxryk.cn/163chitlfyi.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.xuanzx.com/163jjeohwuo.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163jiggqdqp.html

[B03] switch / match / case
来源：http://www.aibaodan.cn/163mxhayujm.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.sxryk.cn/163qqlstchn.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.aibaodan.cn/163lpoqbrea.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163hgsdtjmx.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163jelflxbz.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.xuanzx.com/163xpyhhnfb.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.aibaodan.cn/163xmwrtkvr.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.sxryk.cn/163fzcyxvab.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.xuanzx.com/163omjrtfix.html

[B04] for 计数循环
来源：http://www.aibaodan.cn/163giaaeeoq.html

Py:   for i in range(10): print(i)
来源：http://www.aibaodan.cn/163gvkxgfys.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.xuanzx.com/163krvsgcsp.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163vvbjhfyz.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163mgraucyi.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.xuanzx.com/163wzlpenxj.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.aibaodan.cn/163uhrfkqxu.html

Ruby: 10.times { |i| puts i }
来源：http://www.xuanzx.com/163rjfauped.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.xuanzx.com/163qzqucqhc.html

[B05] 遍历数组 / 列表
来源：http://www.aibaodan.cn/163njxvqgte.html

Py:   for item in arr: print(item)
来源：http://www.aibaodan.cn/163jobuuanm.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.xuanzx.com/163bvqwvqzx.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163vkaasksl.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163ibmcdqli.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.sxryk.cn/163momtygvv.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.sxryk.cn/163ustsgigr.html

Ruby: arr.each { |item| puts item }
来源：http://www.xuanzx.com/163mogeinws.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.aibaodan.cn/163rphiuqbp.html

[B06] 遍历字典 / 对象
来源：http://www.xuanzx.com/163wpozlkxj.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.xuanzx.com/163nfwhqpbm.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.aibaodan.cn/163fndcgsnj.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163fyiosrcd.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163rwvebzcj.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.xuanzx.com/163tbvbghbw.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.xuanzx.com/163ltgpmfzr.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.xuanzx.com/163hllxhyse.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.sxryk.cn/163apdrwjpg.html

[B07] while 循环
来源：http://www.aibaodan.cn/163kocxqgji.html

Py:   while i < 10: i += 1
来源：http://www.aibaodan.cn/163zzvbrdtz.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.aibaodan.cn/163fhxnltor.html

JS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163uhfrleaq.html

TS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163pmgzafai.html

Java: while (i < 10) { i++; }
来源：http://www.xuanzx.com/163mpourivz.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.aibaodan.cn/163hqnjqgxz.html

Ruby: while i < 10; i += 1; end
来源：http://www.xuanzx.com/163wibkbjct.html

C#:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163unpqxhjc.html

[B08] do-while（至少执行一次）
来源：http://www.sxryk.cn/163edtjyjpk.html

Py:   # 无 do-while：用 while True + break
来源：http://www.sxryk.cn/163nakevfmj.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.aibaodan.cn/163csyucoyb.html

JS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163itityonx.html

TS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163qgjshoqg.html

Java: do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163zmhfwkkl.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.aibaodan.cn/163ygsziiew.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.aibaodan.cn/163xxopodys.html

C#:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163bbnkhkkh.html

[B09] break 与 continue
来源：http://www.xuanzx.com/163opqfidqc.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.xuanzx.com/163oecazlqe.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.aibaodan.cn/163hpqoynoz.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163taiunozd.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163rndplbfg.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163mpsrqycr.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.xuanzx.com/163yylohgwa.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.xuanzx.com/163hovecoxb.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163vmvwuhcb.html

[B10] 遍历同时拿索引
来源：http://www.sxryk.cn/163xtcluykv.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.sxryk.cn/163tdzunuhh.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.aibaodan.cn/163kgzeqjgl.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.aibaodan.cn/163iekbhojq.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.aibaodan.cn/163utwkcuvf.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.xuanzx.com/163xsosbjdj.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.xuanzx.com/163wrwggwkj.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.aibaodan.cn/163ewzzhoqy.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.sxryk.cn/163qguutoes.html

[B11] 生成数字序列 / 区间
来源：http://www.sxryk.cn/163vuougdrg.html

Py:   list(range(0, 10, 2))
来源：http://www.aibaodan.cn/163uzbubdeo.html

PHP:  range(0, 10, 2);
来源：http://www.sxryk.cn/163smivrfwd.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163xxrafxah.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163ralbvage.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.sxryk.cn/163mswqhkrk.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.xuanzx.com/163qcjutdkf.html

Ruby: (0...10).step(2).to_a
来源：http://www.sxryk.cn/163yuplluyv.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.sxryk.cn/163inzkfoih.html

[B12] 跳出多层循环
来源：http://www.aibaodan.cn/163stcgbqof.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.sxryk.cn/163jrzvcvjs.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.xuanzx.com/163tappkpeu.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163tjdpabyc.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163pezwjcsz.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163feprojkx.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.aibaodan.cn/163roatfwbs.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.xuanzx.com/163khsjlazo.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.sxryk.cn/163mojcrcqa.html

[B13] 判断是否为数字
来源：http://www.aibaodan.cn/163askkfqgv.html

Py:   isinstance(x, (int, float))
来源：http://www.sxryk.cn/163hzztudyi.html

PHP:  is_numeric($x)
来源：http://www.xuanzx.com/163zfrhauuh.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163tozewbcx.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163yjxbbsgy.html

Java: x instanceof Number
来源：http://www.aibaodan.cn/163phcdmmig.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.xuanzx.com/163jlrvdbmz.html

Ruby: x.is_a?(Numeric)
来源：http://www.sxryk.cn/163rkmavfjv.html

C#:   x is int or double or decimal
来源：http://www.aibaodan.cn/163xamumvrj.html

[B14] 判断值是否在集合内
来源：http://www.aibaodan.cn/163wwobrbqm.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.sxryk.cn/163pfihbhwi.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.sxryk.cn/163lzjtwyrb.html

JS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163wcyuloja.html

TS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163hkcpxahx.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.xuanzx.com/163bockpisi.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.xuanzx.com/163cnplvaia.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.aibaodan.cn/163jmwiazch.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.sxryk.cn/163gvifgrjc.html

[B15] 布尔运算与取反
来源：http://www.sxryk.cn/163izdbvjwj.html

Py:   a and b or not c
来源：http://www.sxryk.cn/163gorrhspe.html

PHP:  $a && $b || !$c
来源：http://www.sxryk.cn/163ctplniwv.html

JS:   a && b || !c
来源：http://www.xuanzx.com/163lwsjgjfu.html

TS:   a && b || !c
来源：http://www.aibaodan.cn/163dfyooikl.html

Java: a && b || !c
来源：http://www.sxryk.cn/163mdwsgofa.html

Go:   a && b || !c
来源：http://www.aibaodan.cn/163bzwngbib.html

Ruby: a && b || !c
来源：http://www.aibaodan.cn/163ygkvjdsv.html

C#:   a && b || !c
来源：http://www.aibaodan.cn/163egcishix.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.aibaodan.cn/163ptkwgddd.html

Py:   if not data: return
来源：http://www.xuanzx.com/163tsytjpaq.html

PHP:  if (!$data) { return; }
来源：http://www.xuanzx.com/163wrhcsjaw.html

JS:   if (!data) return;
来源：http://www.sxryk.cn/163nlrmhsvt.html

TS:   if (!data) return;
来源：http://www.xuanzx.com/163ulswbtdz.html

Java: if (data == null) return;
来源：http://www.sxryk.cn/163bkamqxwv.html

Go:   if data == nil { return }
来源：http://www.sxryk.cn/163cumrxyab.html

Ruby: return if data.nil?
来源：http://www.sxryk.cn/163vscvdvlr.html

C#:   if (data == null) return;
来源：http://www.xuanzx.com/163tnifjrdy.html

================================================================================
来源：http://www.xuanzx.com/163adhycfbc.html

C. 函数与作用域
来源：http://www.sxryk.cn/163ewcxkiqg.html

================================================================================
来源：http://www.aibaodan.cn/163gvkkuysl.html

[C01] 定义函数
来源：http://www.xuanzx.com/163mplosqok.html

Py:   def add(a, b): return a + b
来源：http://www.aibaodan.cn/163pbyzbjsd.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163npmwiskz.html

JS:   function add(a, b) { return a + b; }
来源：http://www.sxryk.cn/163bkqzikmm.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163lbixgdoe.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163xdeayeyp.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.sxryk.cn/163qafqupyf.html

Ruby: def add(a, b); a + b; end
来源：http://www.xuanzx.com/163qnomxdyk.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163bdhefziy.html

[C02] 默认参数
来源：http://www.xuanzx.com/163cebibgfc.html

Py:   def greet(name="World"): return name
来源：http://www.aibaodan.cn/163wbrclqio.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.sxryk.cn/163uiepokuk.html

JS:   function greet(name = "World") { return name; }
来源：http://www.sxryk.cn/163bsbnrsdc.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.sxryk.cn/163tinrylkg.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.xuanzx.com/163ujizcchd.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.aibaodan.cn/163jiuxvhve.html

Ruby: def greet(name = "World") = name
来源：http://www.sxryk.cn/163gxyxxopw.html

C#:   string Greet(string name = "World") => name;
来源：http://www.aibaodan.cn/163rmyzccqn.html

[C03] 可变参数
来源：http://www.aibaodan.cn/163uxvzhfbc.html

Py:   def total(*args): return sum(args)
来源：http://www.aibaodan.cn/163ysivrpch.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.xuanzx.com/163ywdkofzy.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163infidede.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163hllwxcso.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.sxryk.cn/163kfygcqto.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.sxryk.cn/163eoqofhyc.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.aibaodan.cn/163kxocwsaa.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.sxryk.cn/163udbetfza.html

[C04] 命名参数 / 关键字参数
来源：http://www.sxryk.cn/163stijxywj.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.xuanzx.com/163pgaexggb.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.xuanzx.com/163lfhpxzxn.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.sxryk.cn/163owstranb.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.xuanzx.com/163tfrtjocr.html

Java: // 无：用 Builder 模式或 record
来源：http://www.xuanzx.com/163rnskncbn.html

Go:   // 无：用配置结构体参数
来源：http://www.aibaodan.cn/163ytpcisvd.html

Ruby: f(a: 1, b: 2)
来源：http://www.xuanzx.com/163elywwjuh.html

C#:   f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163hngsvrgs.html

[C05] 返回多个值
来源：http://www.aibaodan.cn/163ywdxgrnf.html

Py:   return a, b
来源：http://www.xuanzx.com/163zwmnviji.html

PHP:  return [$a, $b];
来源：http://www.sxryk.cn/163gqodmuuf.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.aibaodan.cn/163nfyhkdpo.html

TS:   return { a, b };
来源：http://www.aibaodan.cn/163qakfvysz.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.aibaodan.cn/163xbvaipdt.html

Go:   return a, b
来源：http://www.sxryk.cn/163aezdrspl.html

Ruby: return a, b
来源：http://www.xuanzx.com/163oiufmoax.html

C#:   return (a, b);              // ValueTuple
来源：http://www.sxryk.cn/163mxozuyug.html

[C06] 匿名函数 / lambda
来源：http://www.aibaodan.cn/163qhjgjhyk.html

Py:   square = lambda x: x * x
来源：http://www.aibaodan.cn/163ptkjslrw.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.aibaodan.cn/163rgbvneyw.html

JS:   const square = x => x * x;
来源：http://www.aibaodan.cn/163kiyvaxze.html

TS:   const square = (x: number): number => x * x;
来源：http://www.sxryk.cn/163zvrvrwjk.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.aibaodan.cn/163llwfdhgi.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.xuanzx.com/163hbwilkjk.html

Ruby: square = ->(x) { x * x }
来源：http://www.xuanzx.com/163skpeirwf.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.sxryk.cn/163bdkinuog.html

[C07] 把函数作为参数传入
来源：http://www.xuanzx.com/163mdgyqpbj.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.sxryk.cn/163uvrzgsgi.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.aibaodan.cn/163tqmfkzas.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.xuanzx.com/163zxogwxkr.html

TS:   arr.map(String)
来源：http://www.sxryk.cn/163rxrkwdfz.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.xuanzx.com/163zvjpxchr.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.xuanzx.com/163miqszxzb.html

Ruby: arr.map(&:upcase)
来源：http://www.xuanzx.com/163cbqniutu.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.sxryk.cn/163faljdlxp.html

[C08] 闭包
来源：http://www.xuanzx.com/163ovrcabxl.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.aibaodan.cn/163xhqmxrjz.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.xuanzx.com/163txyschhd.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163iblbsvpt.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163hofxjfuc.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.aibaodan.cn/163mvzrqgqc.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.xuanzx.com/163taqlumcp.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.aibaodan.cn/163mblgaock.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163kqykgrxs.html

[C09] 递归
来源：http://www.xuanzx.com/163cqzvoars.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.sxryk.cn/163motbqiib.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.xuanzx.com/163ejxbdgxz.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163ddalspsj.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163pllmyqbq.html


<!-- 参考信息 -->