外链999!wailian999！

Java: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163wilprahf.html

Go:   a & b; a | b; a ^ b; ^a; a << 2; a >> 1
来源：http://www.xuanzx.com/163tpjqawue.html

Ruby: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163wzasdwqc.html

C#:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163ctypkowm.html

[A18] 字符与 ASCII 码互转
来源：http://www.xuanzx.com/163qolssmrx.html

Py:   ord("A"); chr(65)
来源：http://www.aibaodan.cn/163getbcxon.html

PHP:  ord("A"); chr(65)
来源：http://www.sxryk.cn/163lvpxxsja.html

JS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.xuanzx.com/163wnleyskd.html

TS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.aibaodan.cn/163zqrouatq.html

Java: (int) 'A'; (char) 65
来源：http://www.aibaodan.cn/163gxkfvpsr.html

Go:   int('A'); rune(65)              // rune 是 int32
来源：http://www.aibaodan.cn/163qetiehey.html

Ruby: "A".ord; 65.chr
来源：http://www.aibaodan.cn/163msvvsmmw.html

C#:   (int)'A'; (char)65
来源：http://www.sxryk.cn/163vzqkamgf.html

[A19] 交换两个变量
来源：http://www.sxryk.cn/163tkancrsd.html

Py:   a, b = b, a
来源：http://www.xuanzx.com/163jwmevjac.html

PHP:  [$a, $b] = [$b, $a];
来源：http://www.xuanzx.com/163jqgdhhej.html

JS:   [a, b] = [b, a];
来源：http://www.xuanzx.com/163yvhbfrri.html

TS:   [a, b] = [b, a];
来源：http://www.aibaodan.cn/163gbqqrzfv.html

Java: int t = a; a = b; b = t;
来源：http://www.sxryk.cn/163dikzqvqw.html

Go:   a, b = b, a
来源：http://www.aibaodan.cn/163vaptbtfi.html

Ruby: a, b = b, a
来源：http://www.sxryk.cn/163vhjugpsr.html

C#:   (a, b) = (b, a);
来源：http://www.aibaodan.cn/163xfobcatn.html

[A20] 读取标准输入
来源：http://www.xuanzx.com/163ssovszxk.html

Py:   name = input("请输入：")
来源：http://www.xuanzx.com/163lansluzh.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.aibaodan.cn/163fhhqdcxq.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.xuanzx.com/163awjvmyqs.html

TS:   // Node.js：readline 模块
来源：http://www.sxryk.cn/163yswudxtv.html

Java: new Scanner(System.in).nextLine()
来源：http://www.sxryk.cn/163eebjhpyu.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.xuanzx.com/163sckdroni.html

Ruby: gets.chomp
来源：http://www.aibaodan.cn/163jqtxtvug.html

C#:   Console.ReadLine();
来源：http://www.sxryk.cn/163hbpzzakn.html

[A21] 保留指定小数位输出
来源：http://www.aibaodan.cn/163ezkpyuuu.html

Py:   f"{3.14159:.2f}"
来源：http://www.sxryk.cn/163mypvmkmh.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163ozxukvsf.html

JS:   (3.14159).toFixed(2)
来源：http://www.sxryk.cn/163oneebpfs.html

TS:   (3.14159).toFixed(2)
来源：http://www.aibaodan.cn/163sapaucvc.html

Java: String.format("%.2f", 3.14159)
来源：http://www.sxryk.cn/163yocavbqp.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.sxryk.cn/163xugpowtd.html

Ruby: format("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163sbnglfvl.html

C#:   3.14159.ToString("F2")
来源：http://www.aibaodan.cn/163mueyjqfi.html

[A22] 获取字符串长度
来源：http://www.sxryk.cn/163iktlmlnu.html

Py:   len(s)
来源：http://www.sxryk.cn/163lvikgtrg.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.xuanzx.com/163uzbsorpb.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.xuanzx.com/163prompybr.html

TS:   s.length
来源：http://www.xuanzx.com/163ydvyvhan.html

Java: s.length()
来源：http://www.sxryk.cn/163usewgrrm.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.sxryk.cn/163grmpdtwn.html

Ruby: s.length
来源：http://www.xuanzx.com/163lidkhltq.html

C#:   s.Length
来源：http://www.sxryk.cn/163pyjgxwjs.html

[A23] 大小写转换
来源：http://www.xuanzx.com/163etrvrkqg.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.aibaodan.cn/163byqsiffo.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.aibaodan.cn/163gjibwamv.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163ryvruioh.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163beeztney.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163wqfszzqz.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.aibaodan.cn/163qoqwkvrq.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.xuanzx.com/163xoycqckd.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.xuanzx.com/163rcxkfzwj.html

[A24] 去除首尾空白
来源：http://www.sxryk.cn/163zffevzno.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.xuanzx.com/163eeldytne.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.sxryk.cn/163nslywznm.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.aibaodan.cn/163mvgexzug.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.aibaodan.cn/163jrnfflnh.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.sxryk.cn/163ksvquhnt.html

Go:   strings.TrimSpace(s)
来源：http://www.xuanzx.com/163jnjzwpau.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.xuanzx.com/163wiprfzlg.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.sxryk.cn/163sxmofgxg.html

[A25] 字符串比较
来源：http://www.xuanzx.com/163amurhces.html

Py:   s1 == s2; s1 != s2
来源：http://www.sxryk.cn/163mjcmfzdo.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.aibaodan.cn/163wnuqpptf.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.aibaodan.cn/163kplwivwq.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.xuanzx.com/163cfjwivue.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.aibaodan.cn/163fjnixfwi.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.xuanzx.com/163vhbqyqca.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.sxryk.cn/163pomgjojj.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.xuanzx.com/163yggtndoh.html

[A26] 类型转换总览
来源：http://www.sxryk.cn/163ilgtvscg.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.sxryk.cn/163frwxdoir.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.sxryk.cn/163dxewvmxi.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.sxryk.cn/163nahlgush.html

TS:   Number() String() Boolean() x as number
来源：http://www.aibaodan.cn/163mezntphc.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.xuanzx.com/163astjkiup.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.aibaodan.cn/163wjzinvaz.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.aibaodan.cn/163ogcohxcs.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.xuanzx.com/163vktihzxz.html

================================================================================
来源：http://www.aibaodan.cn/163ssgomamy.html

B. 流程控制
来源：http://www.aibaodan.cn/163srlpliqa.html

================================================================================
来源：http://www.sxryk.cn/163uolxmksj.html

[B01] 条件判断 if / else
来源：http://www.xuanzx.com/163qqosfdql.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.xuanzx.com/163ckbmsdxm.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.aibaodan.cn/163kqoxydbg.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163mazbuzvq.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163uhbocwer.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163gwfscrqv.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.aibaodan.cn/163wmxrdsxw.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.aibaodan.cn/163ymtynddk.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163xhanvaqc.html

[B02] 多分支 else if / elif
来源：http://www.xuanzx.com/163bakpmrjf.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.sxryk.cn/163vvcdncou.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.aibaodan.cn/163hhqshsgs.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163sirywfvx.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163fwneuzyw.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163zjwkzyls.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.xuanzx.com/163lzuygrym.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.sxryk.cn/163mnngszkr.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163jlppgwcl.html

[B03] switch / match / case
来源：http://www.sxryk.cn/163yqexgocs.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.xuanzx.com/163ygwbasms.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.xuanzx.com/163buekiqnt.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163nszpgbqm.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163nmdnpjjc.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.sxryk.cn/163npsixdks.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.xuanzx.com/163peodsdou.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.xuanzx.com/163etmmwhuq.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.aibaodan.cn/163ijtwoowm.html

[B04] for 计数循环
来源：http://www.aibaodan.cn/163hnskgdlz.html

Py:   for i in range(10): print(i)
来源：http://www.sxryk.cn/163fqcdgscl.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.aibaodan.cn/163jvznjeem.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163dvlzwdyc.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163dwnplpmx.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.xuanzx.com/163aggjezhz.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.xuanzx.com/163dixijyjd.html

Ruby: 10.times { |i| puts i }
来源：http://www.aibaodan.cn/163oyajfbfa.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.xuanzx.com/163nqcsgdeh.html

[B05] 遍历数组 / 列表
来源：http://www.aibaodan.cn/163dwxsstgt.html

Py:   for item in arr: print(item)
来源：http://www.aibaodan.cn/163otmeiham.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.aibaodan.cn/163lqlahbkl.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163pjfvgira.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163awvsrcwk.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.aibaodan.cn/163dpabqhkp.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.xuanzx.com/163zbtxnatw.html

Ruby: arr.each { |item| puts item }
来源：http://www.sxryk.cn/163rnotkbbm.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.sxryk.cn/163smukookp.html

[B06] 遍历字典 / 对象
来源：http://www.sxryk.cn/163fzziluls.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.aibaodan.cn/163tdplocax.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.sxryk.cn/163uykhvtdm.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163xlmomrvc.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163wopynoaa.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.sxryk.cn/163fmignbre.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.sxryk.cn/163fahdrvgp.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.aibaodan.cn/163uriyeiqx.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.sxryk.cn/163nnrxcuwx.html

[B07] while 循环
来源：http://www.xuanzx.com/163uzmhnagt.html

Py:   while i < 10: i += 1
来源：http://www.sxryk.cn/163oluqnhrg.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.xuanzx.com/163znmzmvhu.html

JS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163ttlbyjiy.html

TS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163qgjoospb.html

Java: while (i < 10) { i++; }
来源：http://www.sxryk.cn/163paecofzw.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.aibaodan.cn/163ndpxxskr.html

Ruby: while i < 10; i += 1; end
来源：http://www.xuanzx.com/163hkamafxg.html

C#:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163etfxdgta.html

[B08] do-while（至少执行一次）
来源：http://www.xuanzx.com/163mhmndovw.html

Py:   # 无 do-while：用 while True + break
来源：http://www.xuanzx.com/163nacdbnsu.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.aibaodan.cn/163opoqskqi.html

JS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163hhsdbbbb.html

TS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163qqnewlmp.html

Java: do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163znuprhes.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.sxryk.cn/163whsbuikf.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.xuanzx.com/163yonxeoyo.html

C#:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163qlmzuqao.html

[B09] break 与 continue
来源：http://www.xuanzx.com/163xihllhek.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.xuanzx.com/163mlopqefe.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.sxryk.cn/163uebofrrg.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163dnritsad.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163zlgwopzp.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163louptgsf.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.sxryk.cn/163ajkbvdim.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.aibaodan.cn/163qlksppmb.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163vqkibdhu.html

[B10] 遍历同时拿索引
来源：http://www.sxryk.cn/163ptizpkmm.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.sxryk.cn/163riccdsej.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.sxryk.cn/163dggrzudi.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.sxryk.cn/163qluysuit.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.xuanzx.com/163jgqmqvum.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.xuanzx.com/163pclwbnqy.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.aibaodan.cn/163eqqufcws.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.xuanzx.com/163pflrcrxr.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.sxryk.cn/163faqdwrcv.html

[B11] 生成数字序列 / 区间
来源：http://www.aibaodan.cn/163vtansghm.html

Py:   list(range(0, 10, 2))
来源：http://www.xuanzx.com/163aumxvtrq.html

PHP:  range(0, 10, 2);
来源：http://www.xuanzx.com/163pfguxppc.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163xbxlqjix.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163vgnwdjbt.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.sxryk.cn/163dlvupxer.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.aibaodan.cn/163tbspdfcu.html

Ruby: (0...10).step(2).to_a
来源：http://www.xuanzx.com/163gphqopft.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.aibaodan.cn/163qojuhouj.html

[B12] 跳出多层循环
来源：http://www.sxryk.cn/163ftdbofbh.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.sxryk.cn/163gevbblse.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.aibaodan.cn/163lswnsaac.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163ipmyenmv.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163agqhnikj.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163esgpgelj.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.xuanzx.com/163jsznblet.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.sxryk.cn/163ixrnxenv.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.xuanzx.com/163auatzbzq.html

[B13] 判断是否为数字
来源：http://www.xuanzx.com/163nmgjcmql.html

Py:   isinstance(x, (int, float))
来源：http://www.sxryk.cn/163cjzeovvm.html

PHP:  is_numeric($x)
来源：http://www.sxryk.cn/163uefwrprv.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163bxjasxxp.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163emulomee.html

Java: x instanceof Number
来源：http://www.xuanzx.com/163gpiczhvb.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.xuanzx.com/163zwxqlnjw.html

Ruby: x.is_a?(Numeric)
来源：http://www.aibaodan.cn/163wrmazqzj.html

C#:   x is int or double or decimal
来源：http://www.xuanzx.com/163agyfufvc.html

[B14] 判断值是否在集合内
来源：http://www.xuanzx.com/163eaywqyvr.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.xuanzx.com/163iobjnyak.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.xuanzx.com/163jeezokoz.html

JS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163bvygikgn.html

TS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163sbmdutas.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.xuanzx.com/163nluxhaxo.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.xuanzx.com/163gunzpepl.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.sxryk.cn/163zxowsrny.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.sxryk.cn/163qjhkylqh.html

[B15] 布尔运算与取反
来源：http://www.xuanzx.com/163uzuxzfrj.html

Py:   a and b or not c
来源：http://www.sxryk.cn/163ahwyraul.html

PHP:  $a && $b || !$c
来源：http://www.xuanzx.com/163dyxtxtse.html

JS:   a && b || !c
来源：http://www.aibaodan.cn/163yrjkmaqi.html

TS:   a && b || !c
来源：http://www.sxryk.cn/163ngrogkbr.html

Java: a && b || !c
来源：http://www.aibaodan.cn/163nvwbttjy.html

Go:   a && b || !c
来源：http://www.aibaodan.cn/163vjmietpi.html

Ruby: a && b || !c
来源：http://www.xuanzx.com/163qlzbjngg.html

C#:   a && b || !c
来源：http://www.xuanzx.com/163twoabtwr.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.xuanzx.com/163izssxopu.html

Py:   if not data: return
来源：http://www.xuanzx.com/163acbvdvlx.html

PHP:  if (!$data) { return; }
来源：http://www.sxryk.cn/163bklkuhwv.html

JS:   if (!data) return;
来源：http://www.aibaodan.cn/163qzpyzgke.html

TS:   if (!data) return;
来源：http://www.sxryk.cn/163zqlcnays.html

Java: if (data == null) return;
来源：http://www.aibaodan.cn/163ecjxjjux.html

Go:   if data == nil { return }
来源：http://www.sxryk.cn/163dxkatarq.html

Ruby: return if data.nil?
来源：http://www.sxryk.cn/163hgibuolu.html

C#:   if (data == null) return;
来源：http://www.aibaodan.cn/163zpsgdjss.html

================================================================================
来源：http://www.aibaodan.cn/163qmlarssp.html

C. 函数与作用域
来源：http://www.sxryk.cn/163jqfbvsir.html

================================================================================
来源：http://www.aibaodan.cn/163uqythggm.html

[C01] 定义函数
来源：http://www.aibaodan.cn/163ztrzyizk.html

Py:   def add(a, b): return a + b
来源：http://www.sxryk.cn/163qnxdcfdk.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163xlnltiav.html

JS:   function add(a, b) { return a + b; }
来源：http://www.aibaodan.cn/163muwarpbi.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163atgsonjt.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163tscawwof.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.sxryk.cn/163kckjzsdn.html

Ruby: def add(a, b); a + b; end
来源：http://www.xuanzx.com/163ufxtphrg.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163azhomran.html

[C02] 默认参数
来源：http://www.aibaodan.cn/163uwbmlfdh.html

Py:   def greet(name="World"): return name
来源：http://www.aibaodan.cn/163gkxsnedj.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.aibaodan.cn/163tzhwmnus.html

JS:   function greet(name = "World") { return name; }
来源：http://www.xuanzx.com/163vfwyhfct.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.aibaodan.cn/163mrnwposf.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.aibaodan.cn/163jayglvhl.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.xuanzx.com/163sksusrlk.html

Ruby: def greet(name = "World") = name
来源：http://www.aibaodan.cn/163tuusuajl.html

C#:   string Greet(string name = "World") => name;
来源：http://www.aibaodan.cn/163fnzcxrka.html

[C03] 可变参数
来源：http://www.aibaodan.cn/163eyullylz.html

Py:   def total(*args): return sum(args)
来源：http://www.xuanzx.com/163hctcdzbe.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.sxryk.cn/163nskhtcuo.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163zqnehwlq.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163zvnsnpia.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.xuanzx.com/163ezjakfzw.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.sxryk.cn/163sxaxmqfo.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.xuanzx.com/163bwbvezwo.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.sxryk.cn/163bqifrakp.html

[C04] 命名参数 / 关键字参数
来源：http://www.aibaodan.cn/163exgzzcuz.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.aibaodan.cn/163cgvpoizr.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.xuanzx.com/163oajwkzjf.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.xuanzx.com/163ypsodygo.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.xuanzx.com/163hxbeoqez.html

Java: // 无：用 Builder 模式或 record
来源：http://www.xuanzx.com/163zpejcuzt.html

Go:   // 无：用配置结构体参数
来源：http://www.sxryk.cn/163feeykwbm.html

Ruby: f(a: 1, b: 2)
来源：http://www.xuanzx.com/163aezrgjpc.html

C#:   f(a: 1, b: 2)
来源：http://www.xuanzx.com/163cujxlhap.html

[C05] 返回多个值
来源：http://www.aibaodan.cn/163bmzluspr.html

Py:   return a, b
来源：http://www.sxryk.cn/163ecxgdagh.html

PHP:  return [$a, $b];
来源：http://www.xuanzx.com/163btoerysd.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.xuanzx.com/163guwfnrhw.html

TS:   return { a, b };
来源：http://www.sxryk.cn/163bbulndfj.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.aibaodan.cn/163ixfpvydw.html

Go:   return a, b
来源：http://www.xuanzx.com/163swhytxeq.html

Ruby: return a, b
来源：http://www.xuanzx.com/163uwpuexvb.html

C#:   return (a, b);              // ValueTuple
来源：http://www.aibaodan.cn/163rmydztec.html

[C06] 匿名函数 / lambda
来源：http://www.xuanzx.com/163tbnxbxcr.html

Py:   square = lambda x: x * x
来源：http://www.sxryk.cn/163vvetwokq.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.aibaodan.cn/163fsvuzvwa.html

JS:   const square = x => x * x;
来源：http://www.aibaodan.cn/163ckrbdfiv.html

TS:   const square = (x: number): number => x * x;
来源：http://www.xuanzx.com/163ymvuaydn.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.xuanzx.com/163vwtmmizc.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.xuanzx.com/163fyzhtyau.html

Ruby: square = ->(x) { x * x }
来源：http://www.sxryk.cn/163uazwxjbh.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.xuanzx.com/163wxspyqru.html

[C07] 把函数作为参数传入
来源：http://www.sxryk.cn/163lhhheico.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.sxryk.cn/163ucngdlbs.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.aibaodan.cn/163onfzmnyp.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.xuanzx.com/163echarzpl.html

TS:   arr.map(String)
来源：http://www.xuanzx.com/163ohaipnev.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.xuanzx.com/163oxqppmra.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.sxryk.cn/163tsjkknid.html

Ruby: arr.map(&:upcase)
来源：http://www.sxryk.cn/163ejjjhvnf.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.xuanzx.com/163bcebfugk.html

[C08] 闭包
来源：http://www.sxryk.cn/163jrjarhns.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.xuanzx.com/163fctgvqkh.html


<!-- 参考信息 -->