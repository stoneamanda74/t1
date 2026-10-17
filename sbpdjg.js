外链999!wailian999！

Ruby: value = data || "默认值"
来源：http://www.aibaodan.cn/163ejfarodr.html

C#:   var value = data ?? "默认值";
来源：http://www.xuanzx.com/163bkalrzhw.html

[A16] 真假值判断规则
来源：http://www.sxryk.cn/163cicizhbh.html

Py:   if not x:        # 0 "" [] {} None 均为假
来源：http://www.xuanzx.com/163eufkyqpx.html

PHP:  if (empty($x)) {}   # 松散比较，注意 "0"
来源：http://www.sxryk.cn/163dsdbylcf.html

JS:   if (!x) {}         # 0 "" null undefined NaN false 为假
来源：http://www.sxryk.cn/163qrobhprm.html

TS:   if (!x) {}
来源：http://www.xuanzx.com/163grmvujvu.html

Java: if (!Boolean.TRUE.equals(flag)) {}
来源：http://www.xuanzx.com/163jgdcybul.html

Go:   if x == "" || x == 0 {}   # 无隐式布尔转换
来源：http://www.xuanzx.com/163liatposw.html

Ruby: unless x            # nil 与 false 为假
来源：http://www.sxryk.cn/163wnukcwoj.html

C#:   if (string.IsNullOrEmpty(x)) {}
来源：http://www.xuanzx.com/163sjqagkpp.html

[A17] 位运算
来源：http://www.xuanzx.com/163crtwgxyo.html

Py:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163idvovefo.html

PHP:  $a & $b; $a | $b; $a ^ $b; $a << 2; $a >> 1
来源：http://www.sxryk.cn/163sesaapcq.html

JS:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163vkrdfspf.html

TS:   a & b; a | b; a ^ b; a << 2; a >> 1
来源：http://www.aibaodan.cn/163ypyxximb.html

Java: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163vqzexpxz.html

Go:   a & b; a | b; a ^ b; ^a; a << 2; a >> 1
来源：http://www.sxryk.cn/163xfgjpxfh.html

Ruby: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163icjyzrwv.html

C#:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163mpjfvnrb.html

[A18] 字符与 ASCII 码互转
来源：http://www.aibaodan.cn/163nkdcsatv.html

Py:   ord("A"); chr(65)
来源：http://www.sxryk.cn/163loppwbtg.html

PHP:  ord("A"); chr(65)
来源：http://www.sxryk.cn/163nlxikfdi.html

JS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.xuanzx.com/163vvqwmrjk.html

TS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.xuanzx.com/163fwpalolo.html

Java: (int) 'A'; (char) 65
来源：http://www.aibaodan.cn/163fyglpodi.html

Go:   int('A'); rune(65)              // rune 是 int32
来源：http://www.aibaodan.cn/163pydrvoay.html

Ruby: "A".ord; 65.chr
来源：http://www.xuanzx.com/163yfunjnfc.html

C#:   (int)'A'; (char)65
来源：http://www.sxryk.cn/163tipnlrqe.html

[A19] 交换两个变量
来源：http://www.sxryk.cn/163plemvjnb.html

Py:   a, b = b, a
来源：http://www.xuanzx.com/163woinklhw.html

PHP:  [$a, $b] = [$b, $a];
来源：http://www.xuanzx.com/163gpzssksr.html

JS:   [a, b] = [b, a];
来源：http://www.sxryk.cn/163psivwbhq.html

TS:   [a, b] = [b, a];
来源：http://www.xuanzx.com/163tjnjnnzz.html

Java: int t = a; a = b; b = t;
来源：http://www.aibaodan.cn/163ysopdwjz.html

Go:   a, b = b, a
来源：http://www.sxryk.cn/163bzorbgbx.html

Ruby: a, b = b, a
来源：http://www.sxryk.cn/163gyrubqbv.html

C#:   (a, b) = (b, a);
来源：http://www.sxryk.cn/163pjggttxi.html

[A20] 读取标准输入
来源：http://www.xuanzx.com/163aswoftkf.html

Py:   name = input("请输入：")
来源：http://www.aibaodan.cn/163lpjichov.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.xuanzx.com/163kectaxgg.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.sxryk.cn/163hniscqxl.html

TS:   // Node.js：readline 模块
来源：http://www.sxryk.cn/163jpulekzn.html

Java: new Scanner(System.in).nextLine()
来源：http://www.xuanzx.com/163vdzrhkgn.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.sxryk.cn/163dpxkkkxv.html

Ruby: gets.chomp
来源：http://www.sxryk.cn/163bcmtkfsb.html

C#:   Console.ReadLine();
来源：http://www.sxryk.cn/163ociingpo.html

[A21] 保留指定小数位输出
来源：http://www.sxryk.cn/163bjbgjksp.html

Py:   f"{3.14159:.2f}"
来源：http://www.sxryk.cn/163nqakzsbp.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.xuanzx.com/163wryeosna.html

JS:   (3.14159).toFixed(2)
来源：http://www.aibaodan.cn/163yipimxgm.html

TS:   (3.14159).toFixed(2)
来源：http://www.sxryk.cn/163ausnlzxw.html

Java: String.format("%.2f", 3.14159)
来源：http://www.sxryk.cn/163chonikat.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163llhsjmct.html

Ruby: format("%.2f", 3.14159)
来源：http://www.sxryk.cn/163kznphnvf.html

C#:   3.14159.ToString("F2")
来源：http://www.sxryk.cn/163qkcpbijk.html

[A22] 获取字符串长度
来源：http://www.xuanzx.com/163dexiaszp.html

Py:   len(s)
来源：http://www.aibaodan.cn/163bywdnxrt.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.xuanzx.com/163gthgphrn.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.aibaodan.cn/163kowkfirr.html

TS:   s.length
来源：http://www.xuanzx.com/163vembmury.html

Java: s.length()
来源：http://www.xuanzx.com/163wrzgbxyd.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.sxryk.cn/163uextaaxc.html

Ruby: s.length
来源：http://www.sxryk.cn/163hctpiggv.html

C#:   s.Length
来源：http://www.aibaodan.cn/163qpwkwkqo.html

[A23] 大小写转换
来源：http://www.sxryk.cn/163hvfigdwf.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.sxryk.cn/163mjvfalft.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.aibaodan.cn/163hqepxjsh.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163wlsgplrq.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163sfqxvntr.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163vlbcjvmn.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.xuanzx.com/163wgbiufaq.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.aibaodan.cn/163hhmukaau.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.xuanzx.com/163nmujcxai.html

[A24] 去除首尾空白
来源：http://www.xuanzx.com/163wepnnsji.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.sxryk.cn/163yqulboss.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.aibaodan.cn/163qyrrtspc.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.aibaodan.cn/163edgzpwbt.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.aibaodan.cn/163uotrzaxn.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.xuanzx.com/163itjkeukr.html

Go:   strings.TrimSpace(s)
来源：http://www.aibaodan.cn/163giknjpfz.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.aibaodan.cn/163wfdwbuxq.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.aibaodan.cn/163kirjylnm.html

[A25] 字符串比较
来源：http://www.aibaodan.cn/163tscgvxnc.html

Py:   s1 == s2; s1 != s2
来源：http://www.xuanzx.com/163cpppabrj.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.aibaodan.cn/163lldzozec.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.xuanzx.com/163nktberpy.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.xuanzx.com/163phlxluke.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.sxryk.cn/163wwvzoswy.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.sxryk.cn/163snsfbolh.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.xuanzx.com/163limhwild.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.aibaodan.cn/163imsbwscw.html

[A26] 类型转换总览
来源：http://www.xuanzx.com/163dkocrhny.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.aibaodan.cn/163gumhrztq.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.xuanzx.com/163ontvrtaj.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.aibaodan.cn/163ezuuqwpd.html

TS:   Number() String() Boolean() x as number
来源：http://www.aibaodan.cn/163okoeovkf.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.aibaodan.cn/163lyaoowtu.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.sxryk.cn/163upnuhlju.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.sxryk.cn/163lmvuvwwb.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.aibaodan.cn/163nkctfije.html

================================================================================
来源：http://www.xuanzx.com/163jlnavmus.html

B. 流程控制
来源：http://www.xuanzx.com/163akmezsmt.html

================================================================================
来源：http://www.aibaodan.cn/163opipqgdz.html

[B01] 条件判断 if / else
来源：http://www.aibaodan.cn/163cvisuyhc.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.sxryk.cn/163dhpthcmt.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.xuanzx.com/163dyaipauc.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163uunwgmqt.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163envhyilt.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163unhfiejm.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.sxryk.cn/163afqdkoex.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.aibaodan.cn/163jdhmbewd.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163fgxcteyy.html

[B02] 多分支 else if / elif
来源：http://www.xuanzx.com/163fenopcos.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.xuanzx.com/163iplvxwqk.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.aibaodan.cn/163rpeymbhu.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163gzqhjqun.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163kugjdjfi.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163jrdukikl.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.aibaodan.cn/163oxpwfzco.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.sxryk.cn/163zaydlvvu.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163bhybweof.html

[B03] switch / match / case
来源：http://www.xuanzx.com/163tzfrkclg.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.sxryk.cn/163bmtnzdvp.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.aibaodan.cn/163yltnqjwn.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163pvzdlcpb.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163xqwnxbgx.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.xuanzx.com/163blhfhtlz.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.aibaodan.cn/163fnnxbnzb.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.sxryk.cn/163zmdjtcns.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.aibaodan.cn/163ejtlzban.html

[B04] for 计数循环
来源：http://www.sxryk.cn/163kjpvrpny.html

Py:   for i in range(10): print(i)
来源：http://www.aibaodan.cn/163xhkqrqwo.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.aibaodan.cn/163gfpfbfff.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163djpuollf.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163qowvdhit.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.aibaodan.cn/163jxlljbjx.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.xuanzx.com/163eghtqntb.html

Ruby: 10.times { |i| puts i }
来源：http://www.aibaodan.cn/163zcmzqwll.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.aibaodan.cn/163artznkyc.html

[B05] 遍历数组 / 列表
来源：http://www.aibaodan.cn/163mnltgsna.html

Py:   for item in arr: print(item)
来源：http://www.aibaodan.cn/163tueovbvt.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.aibaodan.cn/163scgdnyyn.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163qvzcsoze.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163tbftnipo.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.sxryk.cn/163qvszmotn.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.xuanzx.com/163sudkallj.html

Ruby: arr.each { |item| puts item }
来源：http://www.aibaodan.cn/163zqirbwzp.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.aibaodan.cn/163xurtpajq.html

[B06] 遍历字典 / 对象
来源：http://www.xuanzx.com/163rtqgvzhr.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.sxryk.cn/163lkguewxi.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.xuanzx.com/163vrwnfstb.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163jrifvvvs.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163emvgeudk.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.aibaodan.cn/163ndncuold.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.xuanzx.com/163uzskkxfl.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.sxryk.cn/163pdujwicm.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.sxryk.cn/163bkmlvxnp.html

[B07] while 循环
来源：http://www.sxryk.cn/163lfmlbfbr.html

Py:   while i < 10: i += 1
来源：http://www.xuanzx.com/163pscbvxrw.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.sxryk.cn/163iiovrelm.html

JS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163wpfudiju.html

TS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163ohdtwgyt.html

Java: while (i < 10) { i++; }
来源：http://www.xuanzx.com/163wuelqhyn.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.aibaodan.cn/163yvfsnnxx.html

Ruby: while i < 10; i += 1; end
来源：http://www.aibaodan.cn/163bnjrkdna.html

C#:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163yurygvco.html

[B08] do-while（至少执行一次）
来源：http://www.sxryk.cn/163lsukdotr.html

Py:   # 无 do-while：用 while True + break
来源：http://www.sxryk.cn/163ssleqsut.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.aibaodan.cn/163iidteqiy.html

JS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163cnxdgtdd.html

TS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163aivqdcdl.html

Java: do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163ysjpakac.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.xuanzx.com/163mlrmezir.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.xuanzx.com/163hcfwbppo.html

C#:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163falntgoa.html

[B09] break 与 continue
来源：http://www.aibaodan.cn/163nlsskkro.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.xuanzx.com/163gqjsitvq.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.xuanzx.com/163wkgpxeqj.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163qyybaxol.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163gigmfnrq.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163kwcwiuew.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.sxryk.cn/163ksllprgj.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.xuanzx.com/163vdajkeaa.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163jrxjlprk.html

[B10] 遍历同时拿索引
来源：http://www.xuanzx.com/163fdvemvgs.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.aibaodan.cn/163vcpxwpbv.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.xuanzx.com/163voqxaclq.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.sxryk.cn/163qligijie.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.xuanzx.com/163zrmwzfwv.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.sxryk.cn/163zlocghmh.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.xuanzx.com/163kuzzomaq.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.xuanzx.com/163aajeiccc.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.xuanzx.com/163xdqxwprx.html

[B11] 生成数字序列 / 区间
来源：http://www.xuanzx.com/163qflaegmj.html

Py:   list(range(0, 10, 2))
来源：http://www.xuanzx.com/163tmzjjijk.html

PHP:  range(0, 10, 2);
来源：http://www.sxryk.cn/163fyhgjxjs.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163pbsdhoyk.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163peydoyyc.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.xuanzx.com/163agtktqci.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.xuanzx.com/163beccuadk.html

Ruby: (0...10).step(2).to_a
来源：http://www.xuanzx.com/163gwezatvd.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.xuanzx.com/163fsmduphz.html

[B12] 跳出多层循环
来源：http://www.aibaodan.cn/163pkafiaee.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.xuanzx.com/163hfzpjhos.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.xuanzx.com/163rxmocabq.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163fwmwqxjb.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163lngvsdag.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163yznnhyty.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.aibaodan.cn/163gtilgeeh.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.aibaodan.cn/163gomjtjyv.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.sxryk.cn/163slbpeitq.html

[B13] 判断是否为数字
来源：http://www.aibaodan.cn/163pptwbrsu.html

Py:   isinstance(x, (int, float))
来源：http://www.sxryk.cn/163bjbqtkkv.html

PHP:  is_numeric($x)
来源：http://www.aibaodan.cn/163kqrwhbet.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163hnimmrjc.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163korxomwu.html

Java: x instanceof Number
来源：http://www.aibaodan.cn/163gyxqeasr.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.aibaodan.cn/163fmehedoz.html

Ruby: x.is_a?(Numeric)
来源：http://www.sxryk.cn/163tgbagbsr.html

C#:   x is int or double or decimal
来源：http://www.sxryk.cn/163sfqjahxf.html

[B14] 判断值是否在集合内
来源：http://www.xuanzx.com/163vdjmblju.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.aibaodan.cn/163ihsxbprs.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.aibaodan.cn/163eoabboux.html

JS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163wypsffpg.html

TS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163rvhdksjp.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.xuanzx.com/163dhdewoff.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.aibaodan.cn/163ficjkmjx.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.aibaodan.cn/163jumpujvq.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.aibaodan.cn/163ldjbdcvk.html

[B15] 布尔运算与取反
来源：http://www.sxryk.cn/163kjmbxchm.html

Py:   a and b or not c
来源：http://www.xuanzx.com/163ojamkxud.html

PHP:  $a && $b || !$c
来源：http://www.sxryk.cn/163sbafjngt.html

JS:   a && b || !c
来源：http://www.xuanzx.com/163tcrrfqjm.html

TS:   a && b || !c
来源：http://www.xuanzx.com/163cijydjja.html

Java: a && b || !c
来源：http://www.xuanzx.com/163zuefqzwt.html

Go:   a && b || !c
来源：http://www.xuanzx.com/163bfmacixf.html

Ruby: a && b || !c
来源：http://www.xuanzx.com/163rrreqzag.html

C#:   a && b || !c
来源：http://www.sxryk.cn/163qaqjpmve.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.xuanzx.com/163mxvdlhvx.html

Py:   if not data: return
来源：http://www.xuanzx.com/163kaunjine.html

PHP:  if (!$data) { return; }
来源：http://www.aibaodan.cn/163rpwzryxu.html

JS:   if (!data) return;
来源：http://www.sxryk.cn/163xvsvrmcl.html

TS:   if (!data) return;
来源：http://www.sxryk.cn/163bgieqsku.html

Java: if (data == null) return;
来源：http://www.sxryk.cn/163qwwvicsk.html

Go:   if data == nil { return }
来源：http://www.xuanzx.com/163edcvfnlp.html

Ruby: return if data.nil?
来源：http://www.xuanzx.com/163preeqwbx.html

C#:   if (data == null) return;
来源：http://www.xuanzx.com/163yrsdcykp.html

================================================================================
来源：http://www.sxryk.cn/163hcxpwjrv.html

C. 函数与作用域
来源：http://www.sxryk.cn/163zyhblbzi.html

================================================================================
来源：http://www.aibaodan.cn/163ctooisbr.html

[C01] 定义函数
来源：http://www.aibaodan.cn/163mxtbmepb.html

Py:   def add(a, b): return a + b
来源：http://www.xuanzx.com/163meoqwamc.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163idklassp.html

JS:   function add(a, b) { return a + b; }
来源：http://www.xuanzx.com/163fhxvnshw.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163ytiqcgty.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163tskjbdmk.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.xuanzx.com/163vijlljhf.html

Ruby: def add(a, b); a + b; end
来源：http://www.sxryk.cn/163axvplbwl.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163mbonptti.html

[C02] 默认参数
来源：http://www.sxryk.cn/163qroqeree.html

Py:   def greet(name="World"): return name
来源：http://www.sxryk.cn/163mnmgdgbp.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.xuanzx.com/163cxegnzuo.html

JS:   function greet(name = "World") { return name; }
来源：http://www.sxryk.cn/163pdefozwu.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.aibaodan.cn/163rfraudgq.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.aibaodan.cn/163ytfjiugy.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.sxryk.cn/163rbxfpyns.html

Ruby: def greet(name = "World") = name
来源：http://www.aibaodan.cn/163ixuwnitp.html

C#:   string Greet(string name = "World") => name;
来源：http://www.aibaodan.cn/163ysqvrjae.html

[C03] 可变参数
来源：http://www.sxryk.cn/163iglpazkb.html

Py:   def total(*args): return sum(args)
来源：http://www.sxryk.cn/163zmughadi.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.aibaodan.cn/163ohqalmth.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163ghcbellx.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163camqmzgg.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.sxryk.cn/163wmlmmqjc.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.xuanzx.com/163cdjmohcx.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.aibaodan.cn/163cisprjmu.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.aibaodan.cn/163obroikhe.html

[C04] 命名参数 / 关键字参数
来源：http://www.xuanzx.com/163swechptu.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.sxryk.cn/163ttdgnkct.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.sxryk.cn/163taifumgy.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.aibaodan.cn/163blwbqggj.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.xuanzx.com/163enumrpkk.html

Java: // 无：用 Builder 模式或 record
来源：http://www.xuanzx.com/163qpvlntcr.html

Go:   // 无：用配置结构体参数
来源：http://www.sxryk.cn/163bmpvexpy.html

Ruby: f(a: 1, b: 2)
来源：http://www.sxryk.cn/163elvhyhce.html

C#:   f(a: 1, b: 2)
来源：http://www.sxryk.cn/163vjszzdus.html

[C05] 返回多个值
来源：http://www.sxryk.cn/163yngywvyf.html

Py:   return a, b
来源：http://www.sxryk.cn/163vkigeeaa.html

PHP:  return [$a, $b];
来源：http://www.sxryk.cn/163ixzsnbpy.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.xuanzx.com/163gctesupu.html

TS:   return { a, b };
来源：http://www.sxryk.cn/163ffhpclos.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.xuanzx.com/163jqoqbszw.html

Go:   return a, b
来源：http://www.xuanzx.com/163yalcepyy.html

Ruby: return a, b
来源：http://www.aibaodan.cn/163kiiyrygk.html

C#:   return (a, b);              // ValueTuple
来源：http://www.aibaodan.cn/163dcnaqszc.html

[C06] 匿名函数 / lambda
来源：http://www.aibaodan.cn/163gvfxpbve.html

Py:   square = lambda x: x * x
来源：http://www.aibaodan.cn/163ilemruem.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.xuanzx.com/163wyouyavp.html

JS:   const square = x => x * x;
来源：http://www.aibaodan.cn/163lfnhlsuq.html


<!-- 参考信息 -->