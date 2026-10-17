外链999!wailian999！

PHP:  if (empty($x)) {}   # 松散比较，注意 "0"
来源：http://www.sxryk.cn/163dxtxcshc.html

JS:   if (!x) {}         # 0 "" null undefined NaN false 为假
来源：http://www.aibaodan.cn/163lfwmxbmr.html

TS:   if (!x) {}
来源：http://www.aibaodan.cn/163efjpjzwq.html

Java: if (!Boolean.TRUE.equals(flag)) {}
来源：http://www.aibaodan.cn/163uvtmdylp.html

Go:   if x == "" || x == 0 {}   # 无隐式布尔转换
来源：http://www.aibaodan.cn/163gaixjvln.html

Ruby: unless x            # nil 与 false 为假
来源：http://www.aibaodan.cn/163xbzrxsgd.html

C#:   if (string.IsNullOrEmpty(x)) {}
来源：http://www.aibaodan.cn/163zrnonsom.html

[A17] 位运算
来源：http://www.aibaodan.cn/163dhkylngp.html

Py:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163odohvoum.html

PHP:  $a & $b; $a | $b; $a ^ $b; $a << 2; $a >> 1
来源：http://www.aibaodan.cn/163yxuojeoc.html

JS:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163cjwgawgm.html

TS:   a & b; a | b; a ^ b; a << 2; a >> 1
来源：http://www.xuanzx.com/163jxrywkfs.html

Java: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163bcihlvlz.html

Go:   a & b; a | b; a ^ b; ^a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163ziisspca.html

Ruby: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163vtxkgjou.html

C#:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163dpmxsocf.html

[A18] 字符与 ASCII 码互转
来源：http://www.aibaodan.cn/163zbbpukla.html

Py:   ord("A"); chr(65)
来源：http://www.aibaodan.cn/163xxcgzwcq.html

PHP:  ord("A"); chr(65)
来源：http://www.sxryk.cn/163nrbtgggd.html

JS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.aibaodan.cn/163wclnbbdr.html

TS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.aibaodan.cn/163lrobjlqy.html

Java: (int) 'A'; (char) 65
来源：http://www.xuanzx.com/163xonrmwot.html

Go:   int('A'); rune(65)              // rune 是 int32
来源：http://www.aibaodan.cn/163zlbaksyl.html

Ruby: "A".ord; 65.chr
来源：http://www.xuanzx.com/163mqxtuntu.html

C#:   (int)'A'; (char)65
来源：http://www.xuanzx.com/163wfqoaflj.html

[A19] 交换两个变量
来源：http://www.aibaodan.cn/163ltukgnkk.html

Py:   a, b = b, a
来源：http://www.sxryk.cn/163ytrfcnid.html

PHP:  [$a, $b] = [$b, $a];
来源：http://www.sxryk.cn/163ozyqhcwh.html

JS:   [a, b] = [b, a];
来源：http://www.sxryk.cn/163fdqdiuxz.html

TS:   [a, b] = [b, a];
来源：http://www.xuanzx.com/163rzwfksds.html

Java: int t = a; a = b; b = t;
来源：http://www.aibaodan.cn/163ejxjemec.html

Go:   a, b = b, a
来源：http://www.aibaodan.cn/163yvwnqfbj.html

Ruby: a, b = b, a
来源：http://www.sxryk.cn/163peltwaoe.html

C#:   (a, b) = (b, a);
来源：http://www.sxryk.cn/163vbarulkb.html

[A20] 读取标准输入
来源：http://www.sxryk.cn/163rchoqodc.html

Py:   name = input("请输入：")
来源：http://www.aibaodan.cn/163etvyavqf.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.aibaodan.cn/163wiqdgdum.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.aibaodan.cn/163axvhnsgu.html

TS:   // Node.js：readline 模块
来源：http://www.xuanzx.com/163yirxonrh.html

Java: new Scanner(System.in).nextLine()
来源：http://www.xuanzx.com/163zqtpzrde.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.aibaodan.cn/163nvjwdsbn.html

Ruby: gets.chomp
来源：http://www.aibaodan.cn/163ycnfpqew.html

C#:   Console.ReadLine();
来源：http://www.xuanzx.com/163gymewnxa.html

[A21] 保留指定小数位输出
来源：http://www.xuanzx.com/163ktblmtuw.html

Py:   f"{3.14159:.2f}"
来源：http://www.aibaodan.cn/163mgkzhmls.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163bqmocghc.html

JS:   (3.14159).toFixed(2)
来源：http://www.xuanzx.com/163uttlouhk.html

TS:   (3.14159).toFixed(2)
来源：http://www.aibaodan.cn/163fhutaolk.html

Java: String.format("%.2f", 3.14159)
来源：http://www.xuanzx.com/163mtbkfyzn.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163uzqnqstr.html

Ruby: format("%.2f", 3.14159)
来源：http://www.sxryk.cn/163zhpuqurn.html

C#:   3.14159.ToString("F2")
来源：http://www.xuanzx.com/163thlnzbac.html

[A22] 获取字符串长度
来源：http://www.xuanzx.com/163uqpblgig.html

Py:   len(s)
来源：http://www.xuanzx.com/163riugifgu.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.aibaodan.cn/163rmxiovpc.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.xuanzx.com/163gzfqwynn.html

TS:   s.length
来源：http://www.xuanzx.com/163pqaanauo.html

Java: s.length()
来源：http://www.aibaodan.cn/163nwjzkpll.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.sxryk.cn/163qghkpgzi.html

Ruby: s.length
来源：http://www.aibaodan.cn/163uvuxqxly.html

C#:   s.Length
来源：http://www.aibaodan.cn/163rblyxjnu.html

[A23] 大小写转换
来源：http://www.sxryk.cn/163exrtscxc.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.sxryk.cn/163qmhskkmh.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.sxryk.cn/163shltdwst.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163eybdpljj.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163goztowmn.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163jwqjuhlc.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.aibaodan.cn/163wyhqbvin.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.xuanzx.com/163ovvpvbvq.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.aibaodan.cn/163arccxwbx.html

[A24] 去除首尾空白
来源：http://www.aibaodan.cn/163vrepxlbx.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.aibaodan.cn/163aliccilh.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.aibaodan.cn/163mzvvmoxt.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.xuanzx.com/163vhdgtwqt.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.xuanzx.com/163teumpbix.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.aibaodan.cn/163xfhifuej.html

Go:   strings.TrimSpace(s)
来源：http://www.xuanzx.com/163fogohxtw.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.sxryk.cn/163gdxnikwk.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.xuanzx.com/163tklutrua.html

[A25] 字符串比较
来源：http://www.sxryk.cn/163tfqicens.html

Py:   s1 == s2; s1 != s2
来源：http://www.xuanzx.com/163lrrpcfat.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.aibaodan.cn/163ledzpsgn.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.sxryk.cn/163kenwkosi.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.sxryk.cn/163jnfradil.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.sxryk.cn/163yulkrgfu.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.xuanzx.com/163mpcpxbsm.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.aibaodan.cn/163aqqjowjn.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.aibaodan.cn/163fwsutqot.html

[A26] 类型转换总览
来源：http://www.sxryk.cn/163euqmldkb.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.aibaodan.cn/163gmhlactp.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.xuanzx.com/163dbqxleum.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.sxryk.cn/163pilkaror.html

TS:   Number() String() Boolean() x as number
来源：http://www.aibaodan.cn/163fliphbny.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.sxryk.cn/163ruavzyes.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.aibaodan.cn/163kgcmxjjg.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.sxryk.cn/163npjxxpoh.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.sxryk.cn/163pfrcgltj.html

================================================================================
来源：http://www.aibaodan.cn/163smrqmelt.html

B. 流程控制
来源：http://www.sxryk.cn/163jtyuekgp.html

================================================================================
来源：http://www.sxryk.cn/163vbgdmgyh.html

[B01] 条件判断 if / else
来源：http://www.xuanzx.com/163gwyofzfv.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.sxryk.cn/163rdalgjri.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.xuanzx.com/163fztdszpj.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163mhznhpdg.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163jzfagyiv.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163rhtonfnv.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.sxryk.cn/163pfgnrdjf.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.sxryk.cn/163sxqjzwgc.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163zelqqibe.html

[B02] 多分支 else if / elif
来源：http://www.aibaodan.cn/163kvapggla.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.sxryk.cn/163qfbaeemm.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.aibaodan.cn/163ifnwmfwv.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163heimknjq.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163lxeahhgd.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163ydmjdytc.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.sxryk.cn/163qwchdmjk.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.xuanzx.com/163gagexcfk.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163cqbtpbgt.html

[B03] switch / match / case
来源：http://www.sxryk.cn/163esiqyxli.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.sxryk.cn/163ehghodcz.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.xuanzx.com/163nhnlgpoi.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163lbsuzcan.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163zqxzoekv.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.sxryk.cn/163fzhvwrsp.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.sxryk.cn/163qimsalas.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.sxryk.cn/163lrquwmrh.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.sxryk.cn/163irkvrnvo.html

[B04] for 计数循环
来源：http://www.aibaodan.cn/163sjoumwip.html

Py:   for i in range(10): print(i)
来源：http://www.xuanzx.com/163eqmvxrxm.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.xuanzx.com/163kpeabrpd.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163czwjlhck.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163jriuwlbq.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.xuanzx.com/163funugfrb.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.xuanzx.com/163knyyawzt.html

Ruby: 10.times { |i| puts i }
来源：http://www.sxryk.cn/163dlldjdbi.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.xuanzx.com/163qlspwgjp.html

[B05] 遍历数组 / 列表
来源：http://www.aibaodan.cn/163dvuhnfoa.html

Py:   for item in arr: print(item)
来源：http://www.aibaodan.cn/163xrlimqyr.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.xuanzx.com/163zpkpazvc.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163ezghnzzo.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163xefanuno.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.xuanzx.com/163bffkjpew.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.xuanzx.com/163tbkpexwo.html

Ruby: arr.each { |item| puts item }
来源：http://www.xuanzx.com/163ibbwtsrs.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.xuanzx.com/163hrwagzod.html

[B06] 遍历字典 / 对象
来源：http://www.aibaodan.cn/163pdscuxrv.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.aibaodan.cn/163hbdtrhvx.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.aibaodan.cn/163kvefponc.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163rqtbtnet.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163hubmopty.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.aibaodan.cn/163xxjrmuze.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.aibaodan.cn/163cnqqqvaf.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.xuanzx.com/163dczqjxyh.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.aibaodan.cn/163pcadacox.html

[B07] while 循环
来源：http://www.xuanzx.com/163vmnjyosd.html

Py:   while i < 10: i += 1
来源：http://www.xuanzx.com/163zaqnfaqp.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.xuanzx.com/163lqiafbnc.html

JS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163dgkcbpli.html

TS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163tdpswxvy.html

Java: while (i < 10) { i++; }
来源：http://www.sxryk.cn/163otnpzzcv.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.xuanzx.com/163dfazizbg.html

Ruby: while i < 10; i += 1; end
来源：http://www.sxryk.cn/163xmmfecjf.html

C#:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163luanoinl.html

[B08] do-while（至少执行一次）
来源：http://www.sxryk.cn/163kfknllui.html

Py:   # 无 do-while：用 while True + break
来源：http://www.sxryk.cn/163vjttrsaq.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.sxryk.cn/163qgueftiu.html

JS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163adxklfky.html

TS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163cqnirhju.html

Java: do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163lpoyfplo.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.aibaodan.cn/163lcvgwavx.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.xuanzx.com/163ptpjiijv.html

C#:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163pylalrqn.html

[B09] break 与 continue
来源：http://www.sxryk.cn/163kexaczkn.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.aibaodan.cn/163ekbupevi.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.aibaodan.cn/163txxwyxlo.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163tkxlscgu.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163nntxhtkw.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163ldwbgwez.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.aibaodan.cn/163nxsbsurc.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.aibaodan.cn/163ffzjfrhq.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163okdwohdi.html

[B10] 遍历同时拿索引
来源：http://www.aibaodan.cn/163jspznblh.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.xuanzx.com/163jewzyeey.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.xuanzx.com/163ksovcyko.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.sxryk.cn/163mtovmjra.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.aibaodan.cn/163zbhejxso.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.aibaodan.cn/163hiqjydql.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.sxryk.cn/163vdszprsv.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.xuanzx.com/163acdbmaqw.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.sxryk.cn/163yqebtqpw.html

[B11] 生成数字序列 / 区间
来源：http://www.xuanzx.com/163vztqjuyj.html

Py:   list(range(0, 10, 2))
来源：http://www.aibaodan.cn/163kbislmmq.html

PHP:  range(0, 10, 2);
来源：http://www.aibaodan.cn/163wlmcfhyg.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163axigmcla.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163fdccxiox.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.aibaodan.cn/163mxaccqqj.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.xuanzx.com/163yipjupae.html

Ruby: (0...10).step(2).to_a
来源：http://www.aibaodan.cn/163isiarfel.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.aibaodan.cn/163dhwdmmhk.html

[B12] 跳出多层循环
来源：http://www.aibaodan.cn/163adfmlviq.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.sxryk.cn/163xjnhibia.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.aibaodan.cn/163kfocuppn.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163ezcxhyuu.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163vbehkzfs.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163myvbdbmu.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.xuanzx.com/163cozlicfa.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.xuanzx.com/163wrkkdkss.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.sxryk.cn/163qhupbsip.html

[B13] 判断是否为数字
来源：http://www.xuanzx.com/163hojgwbgo.html

Py:   isinstance(x, (int, float))
来源：http://www.aibaodan.cn/163glksjnep.html

PHP:  is_numeric($x)
来源：http://www.aibaodan.cn/163zvsymphy.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163jzooqnhj.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163nvbpcwny.html

Java: x instanceof Number
来源：http://www.sxryk.cn/163ydsnndoj.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.xuanzx.com/163zwhjgdlt.html

Ruby: x.is_a?(Numeric)
来源：http://www.sxryk.cn/163cibryzar.html

C#:   x is int or double or decimal
来源：http://www.xuanzx.com/163oegnccpv.html

[B14] 判断值是否在集合内
来源：http://www.xuanzx.com/163vhkhbffe.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.aibaodan.cn/163ksntsaip.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.aibaodan.cn/163lgngfulm.html

JS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163ddlttavp.html

TS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163asaqaqld.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.xuanzx.com/163itjtddgc.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.xuanzx.com/163elelfgdg.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.sxryk.cn/163yvkhgska.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.aibaodan.cn/163nttvlhqx.html

[B15] 布尔运算与取反
来源：http://www.xuanzx.com/163dalepujs.html

Py:   a and b or not c
来源：http://www.aibaodan.cn/163clgvoqhz.html

PHP:  $a && $b || !$c
来源：http://www.aibaodan.cn/163fqxinuns.html

JS:   a && b || !c
来源：http://www.xuanzx.com/163xcvyfnhf.html

TS:   a && b || !c
来源：http://www.xuanzx.com/163meufvjdm.html

Java: a && b || !c
来源：http://www.aibaodan.cn/163qaigiegs.html

Go:   a && b || !c
来源：http://www.sxryk.cn/163bbljyiwo.html

Ruby: a && b || !c
来源：http://www.sxryk.cn/163ltpxdywk.html

C#:   a && b || !c
来源：http://www.aibaodan.cn/163qyscrszx.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.sxryk.cn/163ssqytkld.html

Py:   if not data: return
来源：http://www.xuanzx.com/163cbdssndk.html

PHP:  if (!$data) { return; }
来源：http://www.aibaodan.cn/163lnefiojm.html

JS:   if (!data) return;
来源：http://www.sxryk.cn/163crcbhrqy.html

TS:   if (!data) return;
来源：http://www.xuanzx.com/163nbrlcukm.html

Java: if (data == null) return;
来源：http://www.sxryk.cn/163uzvzniwd.html

Go:   if data == nil { return }
来源：http://www.xuanzx.com/163sjssuzoh.html

Ruby: return if data.nil?
来源：http://www.aibaodan.cn/163smdxxsfc.html

C#:   if (data == null) return;
来源：http://www.xuanzx.com/163qdytkgzx.html

================================================================================
来源：http://www.sxryk.cn/163unemhfxh.html

C. 函数与作用域
来源：http://www.sxryk.cn/163qsnakxmj.html

================================================================================
来源：http://www.sxryk.cn/163xbjyhjjo.html

[C01] 定义函数
来源：http://www.xuanzx.com/163piiijkpf.html

Py:   def add(a, b): return a + b
来源：http://www.sxryk.cn/163vviditpe.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163avrwpsba.html

JS:   function add(a, b) { return a + b; }
来源：http://www.sxryk.cn/163kkuxeaxl.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163fsyaiwzh.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163gmihsxrt.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.xuanzx.com/163aplwjkxz.html

Ruby: def add(a, b); a + b; end
来源：http://www.xuanzx.com/163jdfbpqiy.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163kbcapuhk.html

[C02] 默认参数
来源：http://www.xuanzx.com/163xymhyfkf.html

Py:   def greet(name="World"): return name
来源：http://www.xuanzx.com/163gotbmcte.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.aibaodan.cn/163gcmhypio.html

JS:   function greet(name = "World") { return name; }
来源：http://www.xuanzx.com/163vkamnvfr.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.xuanzx.com/163kbovlyyi.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.sxryk.cn/163vhzpdjiu.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.sxryk.cn/163ggiywodi.html

Ruby: def greet(name = "World") = name
来源：http://www.sxryk.cn/163sjpngzfj.html

C#:   string Greet(string name = "World") => name;
来源：http://www.aibaodan.cn/163qpiichgw.html

[C03] 可变参数
来源：http://www.sxryk.cn/163iatzdjgz.html

Py:   def total(*args): return sum(args)
来源：http://www.sxryk.cn/163gvmqyzkf.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.aibaodan.cn/163cmxvhwur.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163juhdxofq.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163jjbigbmj.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.sxryk.cn/163ysvlvuqd.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.aibaodan.cn/163yttymfmk.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.xuanzx.com/163dqeqqhou.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.xuanzx.com/163phcyrjhu.html

[C04] 命名参数 / 关键字参数
来源：http://www.xuanzx.com/163byjxfiyl.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.xuanzx.com/163xeyyujyg.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.sxryk.cn/163cbmsjjir.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.xuanzx.com/163gurrgkig.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.sxryk.cn/163peclybnj.html

Java: // 无：用 Builder 模式或 record
来源：http://www.aibaodan.cn/163rqpovxyf.html

Go:   // 无：用配置结构体参数
来源：http://www.sxryk.cn/163svywxaxt.html

Ruby: f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163jzwedsnz.html

C#:   f(a: 1, b: 2)
来源：http://www.xuanzx.com/163tqdjbqjh.html

[C05] 返回多个值
来源：http://www.sxryk.cn/163dqacdqgg.html

Py:   return a, b
来源：http://www.aibaodan.cn/163ccsigtti.html

PHP:  return [$a, $b];
来源：http://www.xuanzx.com/163eicjqpjn.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.aibaodan.cn/163lnmttfba.html

TS:   return { a, b };
来源：http://www.sxryk.cn/163xjghqyml.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.aibaodan.cn/163esejfyby.html

Go:   return a, b
来源：http://www.xuanzx.com/163ocgecdxq.html

Ruby: return a, b
来源：http://www.xuanzx.com/163dlawycgq.html

C#:   return (a, b);              // ValueTuple
来源：http://www.xuanzx.com/163jklvzuhz.html

[C06] 匿名函数 / lambda
来源：http://www.xuanzx.com/163utlfaknc.html

Py:   square = lambda x: x * x
来源：http://www.xuanzx.com/163wstirzal.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.xuanzx.com/163mzjhlegp.html

JS:   const square = x => x * x;
来源：http://www.aibaodan.cn/163ymxovzrx.html

TS:   const square = (x: number): number => x * x;
来源：http://www.xuanzx.com/163ewmueuhr.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.xuanzx.com/163pskdofwo.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.xuanzx.com/163sssgjtoo.html

Ruby: square = ->(x) { x * x }
来源：http://www.sxryk.cn/163zumjfeva.html


<!-- 参考信息 -->