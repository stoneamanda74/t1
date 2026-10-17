外链999!wailian999！

Ruby: a, b = b, a
来源：http://www.xuanzx.com/163ffkvetob.html

C#:   (a, b) = (b, a);
来源：http://www.sxryk.cn/163vrmvdgnr.html

[A20] 读取标准输入
来源：http://www.aibaodan.cn/163xgidyuwu.html

Py:   name = input("请输入：")
来源：http://www.xuanzx.com/163amtzcqcm.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.xuanzx.com/163zksccwap.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.xuanzx.com/163thpayumf.html

TS:   // Node.js：readline 模块
来源：http://www.sxryk.cn/163cwcgzcul.html

Java: new Scanner(System.in).nextLine()
来源：http://www.aibaodan.cn/163kvxctqce.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.aibaodan.cn/163jryzpwxp.html

Ruby: gets.chomp
来源：http://www.aibaodan.cn/163sfdqyrua.html

C#:   Console.ReadLine();
来源：http://www.aibaodan.cn/163mschzeia.html

[A21] 保留指定小数位输出
来源：http://www.xuanzx.com/163bewyasqb.html

Py:   f"{3.14159:.2f}"
来源：http://www.xuanzx.com/163mhssucxv.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.xuanzx.com/163oumdwyim.html

JS:   (3.14159).toFixed(2)
来源：http://www.aibaodan.cn/163ukrtdisn.html

TS:   (3.14159).toFixed(2)
来源：http://www.sxryk.cn/163svakiute.html

Java: String.format("%.2f", 3.14159)
来源：http://www.sxryk.cn/163jbdqrqmo.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163kahdwrsc.html

Ruby: format("%.2f", 3.14159)
来源：http://www.xuanzx.com/163efdfieoh.html

C#:   3.14159.ToString("F2")
来源：http://www.xuanzx.com/163mctcyucg.html

[A22] 获取字符串长度
来源：http://www.xuanzx.com/163gtdvuipp.html

Py:   len(s)
来源：http://www.sxryk.cn/163gaeiuyim.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.sxryk.cn/163nyafsbwc.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.aibaodan.cn/163vpoegzia.html

TS:   s.length
来源：http://www.sxryk.cn/163yyrfbxyc.html

Java: s.length()
来源：http://www.sxryk.cn/163staorcto.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.xuanzx.com/163gnxujocb.html

Ruby: s.length
来源：http://www.aibaodan.cn/163csbsxfyj.html

C#:   s.Length
来源：http://www.aibaodan.cn/163vcpfadai.html

[A23] 大小写转换
来源：http://www.aibaodan.cn/163zgkxheed.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.aibaodan.cn/163gssbrioo.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.aibaodan.cn/163runtvvec.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163utowllvs.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163vcnpsfmo.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163bcnufsyr.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.xuanzx.com/163ywjzoaub.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.xuanzx.com/163cwqysqia.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.xuanzx.com/163hmjlyplh.html

[A24] 去除首尾空白
来源：http://www.aibaodan.cn/163otahekau.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.xuanzx.com/163kksaklkb.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.aibaodan.cn/163gvlpdgme.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.xuanzx.com/163emnjbzxk.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.sxryk.cn/163krtxfvvl.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.xuanzx.com/163gyemvapf.html

Go:   strings.TrimSpace(s)
来源：http://www.sxryk.cn/163yevyqqqr.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.xuanzx.com/163wblkkgov.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.aibaodan.cn/163olbrqfrm.html

[A25] 字符串比较
来源：http://www.xuanzx.com/163zuzsupik.html

Py:   s1 == s2; s1 != s2
来源：http://www.sxryk.cn/163nrskuxvl.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.xuanzx.com/163wbvkzmkx.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.xuanzx.com/163ukraijud.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.xuanzx.com/163wftnttmo.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.sxryk.cn/163ryssapgm.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.sxryk.cn/163hajpabio.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.sxryk.cn/163yfsjqgqq.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.sxryk.cn/163alxhuipp.html

[A26] 类型转换总览
来源：http://www.sxryk.cn/163ahbwluji.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.aibaodan.cn/163cnpnohmz.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.aibaodan.cn/163qwhuzuoa.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.sxryk.cn/163dcnfmdpy.html

TS:   Number() String() Boolean() x as number
来源：http://www.sxryk.cn/163yzqrqofx.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.aibaodan.cn/163tkleuhgz.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.sxryk.cn/163fxuwuauy.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.sxryk.cn/163knlcdmxm.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.sxryk.cn/163hqylytut.html

================================================================================
来源：http://www.aibaodan.cn/163bxvfhgxm.html

B. 流程控制
来源：http://www.sxryk.cn/163muzmuxuz.html

================================================================================
来源：http://www.aibaodan.cn/163rhaaojmr.html

[B01] 条件判断 if / else
来源：http://www.sxryk.cn/163sfliwdzq.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.xuanzx.com/163knpsulrn.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.sxryk.cn/163ydckqpko.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163zizqrkov.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163miscdava.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163pfaclmcr.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.xuanzx.com/163fcomsloq.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.xuanzx.com/163ixdajstp.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163repnrfia.html

[B02] 多分支 else if / elif
来源：http://www.aibaodan.cn/163flxkmzfu.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.aibaodan.cn/163cbdzddnx.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.aibaodan.cn/163tppfiosv.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163fwwtisex.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163azzmkzbi.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163dudzdhzs.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.xuanzx.com/163hfikiaxf.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.aibaodan.cn/163ipljohuq.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163xzvtppqz.html

[B03] switch / match / case
来源：http://www.xuanzx.com/163wklyvruy.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.xuanzx.com/163avioybvr.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.aibaodan.cn/163fdwpoflv.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163wrnxzqgx.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163czpohlxs.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.aibaodan.cn/163vmeieoxq.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.aibaodan.cn/163knhhluqh.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.xuanzx.com/163symjvxdo.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.xuanzx.com/163thmnlawx.html

[B04] for 计数循环
来源：http://www.sxryk.cn/163laqyqyul.html

Py:   for i in range(10): print(i)
来源：http://www.aibaodan.cn/163oyvfzskw.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.xuanzx.com/163tvklombg.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163oimxisjl.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163wykvqhbn.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.aibaodan.cn/163tmuvssfi.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.sxryk.cn/163ykxrduzu.html

Ruby: 10.times { |i| puts i }
来源：http://www.aibaodan.cn/163gbovvrlr.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.aibaodan.cn/163bftwhaef.html

[B05] 遍历数组 / 列表
来源：http://www.sxryk.cn/163vfcsdbck.html

Py:   for item in arr: print(item)
来源：http://www.sxryk.cn/163vgznysln.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.aibaodan.cn/163jychgiaj.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163yzarkxhc.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163oxxgmpdr.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.aibaodan.cn/163rqlxqcsm.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.xuanzx.com/163haccyiqt.html

Ruby: arr.each { |item| puts item }
来源：http://www.xuanzx.com/163gfclzuhw.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.aibaodan.cn/163olwyujjy.html

[B06] 遍历字典 / 对象
来源：http://www.aibaodan.cn/163jfsdkakr.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.aibaodan.cn/163xxjajhgc.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.xuanzx.com/163vxbkeqfh.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163zwqnawzw.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163znahbpqc.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.sxryk.cn/163ocktvyit.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.xuanzx.com/163cubpkgej.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.aibaodan.cn/163zdpfdrqu.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.xuanzx.com/163cafjnxpb.html

[B07] while 循环
来源：http://www.xuanzx.com/163ctjzsluh.html

Py:   while i < 10: i += 1
来源：http://www.xuanzx.com/163zqlldkjx.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.sxryk.cn/163xgwvdxwt.html

JS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163xqokxefc.html

TS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163bdnmjagy.html

Java: while (i < 10) { i++; }
来源：http://www.sxryk.cn/163baegzmwm.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.sxryk.cn/163ovtikomb.html

Ruby: while i < 10; i += 1; end
来源：http://www.xuanzx.com/163ieefitdh.html

C#:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163thqccndr.html

[B08] do-while（至少执行一次）
来源：http://www.sxryk.cn/163qpskbyha.html

Py:   # 无 do-while：用 while True + break
来源：http://www.aibaodan.cn/163gcsavvrq.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.aibaodan.cn/163htrhuade.html

JS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163atoxxmqg.html

TS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163czjwuhvd.html

Java: do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163yurnbekx.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.aibaodan.cn/163amxwmdqb.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.xuanzx.com/163egiujxlq.html

C#:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163cahzssri.html

[B09] break 与 continue
来源：http://www.sxryk.cn/163lfbragzm.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.sxryk.cn/163byrixlda.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.aibaodan.cn/163slhqinth.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163oxrdtezq.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163ocbvtxky.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163wxjfhwoc.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.sxryk.cn/163ilgiqebp.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.sxryk.cn/163yfshncdu.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163wlmiefqy.html

[B10] 遍历同时拿索引
来源：http://www.sxryk.cn/163pkexrfbk.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.sxryk.cn/163tnqbmfct.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.xuanzx.com/163jyahuazy.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.xuanzx.com/163stpeorea.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.aibaodan.cn/163gbcyqcni.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.aibaodan.cn/163uzwiautb.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.sxryk.cn/163mizbmwme.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.sxryk.cn/163sxyzsfxl.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.aibaodan.cn/163jihgptbp.html

[B11] 生成数字序列 / 区间
来源：http://www.xuanzx.com/163mzzbdcpo.html

Py:   list(range(0, 10, 2))
来源：http://www.aibaodan.cn/163gpawuotb.html

PHP:  range(0, 10, 2);
来源：http://www.aibaodan.cn/163kdbeyfbp.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163hjxjrtxc.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163ovoyayud.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.xuanzx.com/163kyqajxjf.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.xuanzx.com/163edjjjiep.html

Ruby: (0...10).step(2).to_a
来源：http://www.aibaodan.cn/163lnbrbvci.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.xuanzx.com/163rsinfllz.html

[B12] 跳出多层循环
来源：http://www.xuanzx.com/163wnngldhx.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.aibaodan.cn/163llvexfpl.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.sxryk.cn/163dtazkous.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163crcxdtzz.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163hjwldzcx.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163lxycmirv.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.sxryk.cn/163voqhiyty.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.sxryk.cn/163eogjamab.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.xuanzx.com/163ktqpsznc.html

[B13] 判断是否为数字
来源：http://www.sxryk.cn/163sjuutevg.html

Py:   isinstance(x, (int, float))
来源：http://www.sxryk.cn/163xoxcdlek.html

PHP:  is_numeric($x)
来源：http://www.xuanzx.com/163jgzoqjom.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163ufksygim.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163vkvgegaj.html

Java: x instanceof Number
来源：http://www.sxryk.cn/163odzzgskp.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.xuanzx.com/163tbugqfwr.html

Ruby: x.is_a?(Numeric)
来源：http://www.sxryk.cn/163pwwdqfsf.html

C#:   x is int or double or decimal
来源：http://www.sxryk.cn/163hftwxyey.html

[B14] 判断值是否在集合内
来源：http://www.sxryk.cn/163yhnekuun.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.xuanzx.com/163hkzzanus.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.xuanzx.com/163xheunrww.html

JS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163tgxufmfo.html

TS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163bmzzcpqx.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.aibaodan.cn/163hbduoixc.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.aibaodan.cn/163otlfmaxx.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.aibaodan.cn/163kplkinka.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.sxryk.cn/163cwdtplxn.html

[B15] 布尔运算与取反
来源：http://www.aibaodan.cn/163khpvyvpo.html

Py:   a and b or not c
来源：http://www.aibaodan.cn/163vzbhafal.html

PHP:  $a && $b || !$c
来源：http://www.aibaodan.cn/163tiyjfiqn.html

JS:   a && b || !c
来源：http://www.aibaodan.cn/163jivjckvw.html

TS:   a && b || !c
来源：http://www.xuanzx.com/163trkspwme.html

Java: a && b || !c
来源：http://www.sxryk.cn/163yzibbriy.html

Go:   a && b || !c
来源：http://www.xuanzx.com/163ixzfxekw.html

Ruby: a && b || !c
来源：http://www.sxryk.cn/163owxafcmi.html

C#:   a && b || !c
来源：http://www.aibaodan.cn/163picifpza.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.aibaodan.cn/163qobjwzcu.html

Py:   if not data: return
来源：http://www.xuanzx.com/163mejjbqbp.html

PHP:  if (!$data) { return; }
来源：http://www.aibaodan.cn/163zqxcmuxk.html

JS:   if (!data) return;
来源：http://www.sxryk.cn/163nbdbdoaz.html

TS:   if (!data) return;
来源：http://www.xuanzx.com/163nnngqjld.html

Java: if (data == null) return;
来源：http://www.aibaodan.cn/163bwkoffvf.html

Go:   if data == nil { return }
来源：http://www.aibaodan.cn/163djboxkyl.html

Ruby: return if data.nil?
来源：http://www.aibaodan.cn/163kqarmpep.html

C#:   if (data == null) return;
来源：http://www.xuanzx.com/163pbeemswh.html

================================================================================
来源：http://www.aibaodan.cn/163mrabhvaq.html

C. 函数与作用域
来源：http://www.xuanzx.com/163lyglzmii.html

================================================================================
来源：http://www.aibaodan.cn/163tlbmkrmh.html

[C01] 定义函数
来源：http://www.xuanzx.com/163bipitbcq.html

Py:   def add(a, b): return a + b
来源：http://www.aibaodan.cn/163brntlsga.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163oejvkjvp.html

JS:   function add(a, b) { return a + b; }
来源：http://www.aibaodan.cn/163rpeepmey.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163orlzmzls.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163eraczzmw.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.sxryk.cn/163mnucndcf.html

Ruby: def add(a, b); a + b; end
来源：http://www.aibaodan.cn/163djkewakk.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163sibulfca.html

[C02] 默认参数
来源：http://www.xuanzx.com/163qmeqogyt.html

Py:   def greet(name="World"): return name
来源：http://www.aibaodan.cn/163rkktnzpy.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.aibaodan.cn/163gndisgcm.html

JS:   function greet(name = "World") { return name; }
来源：http://www.aibaodan.cn/163ipgwjhwn.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.xuanzx.com/163cpaoppsm.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.sxryk.cn/163vtewayhq.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.xuanzx.com/163ykijpxqq.html

Ruby: def greet(name = "World") = name
来源：http://www.sxryk.cn/163hjgcgvip.html

C#:   string Greet(string name = "World") => name;
来源：http://www.sxryk.cn/163fpwvrbsn.html

[C03] 可变参数
来源：http://www.xuanzx.com/163kigfhxtp.html

Py:   def total(*args): return sum(args)
来源：http://www.sxryk.cn/163rtdrfiku.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.xuanzx.com/163ghjxstyq.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163lfupjlrd.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163kzuhfzbw.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.xuanzx.com/163hqoeuzfm.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.xuanzx.com/163kvznyycs.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.xuanzx.com/163ryszfdgm.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.sxryk.cn/163svnsfwta.html

[C04] 命名参数 / 关键字参数
来源：http://www.sxryk.cn/163clzxqgnf.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.aibaodan.cn/163iyismjvl.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.aibaodan.cn/163kikpkojg.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.sxryk.cn/163dedolxxm.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.xuanzx.com/163vorgyuhq.html

Java: // 无：用 Builder 模式或 record
来源：http://www.xuanzx.com/163piurphxl.html

Go:   // 无：用配置结构体参数
来源：http://www.aibaodan.cn/163kbcuxzyv.html

Ruby: f(a: 1, b: 2)
来源：http://www.sxryk.cn/163rzaietjm.html

C#:   f(a: 1, b: 2)
来源：http://www.xuanzx.com/163mnefkemh.html

[C05] 返回多个值
来源：http://www.xuanzx.com/163xmkkauml.html

Py:   return a, b
来源：http://www.xuanzx.com/163tggwtesd.html

PHP:  return [$a, $b];
来源：http://www.aibaodan.cn/163bmkvvxid.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.aibaodan.cn/163xvzjjqox.html

TS:   return { a, b };
来源：http://www.aibaodan.cn/163bpjlmltn.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.aibaodan.cn/163lzmidmia.html

Go:   return a, b
来源：http://www.aibaodan.cn/163vkiyzpfi.html

Ruby: return a, b
来源：http://www.xuanzx.com/163oxfvelhu.html

C#:   return (a, b);              // ValueTuple
来源：http://www.aibaodan.cn/163zqgmdndp.html

[C06] 匿名函数 / lambda
来源：http://www.sxryk.cn/163ilxsnwrv.html

Py:   square = lambda x: x * x
来源：http://www.xuanzx.com/163shxdtklt.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.aibaodan.cn/163oaimbpsx.html

JS:   const square = x => x * x;
来源：http://www.aibaodan.cn/163bvtltakr.html

TS:   const square = (x: number): number => x * x;
来源：http://www.sxryk.cn/163yvmwkvjj.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.aibaodan.cn/163weaowvmt.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.sxryk.cn/163uhiqjgoi.html

Ruby: square = ->(x) { x * x }
来源：http://www.sxryk.cn/163voptpmto.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.aibaodan.cn/163zdkthhgz.html

[C07] 把函数作为参数传入
来源：http://www.sxryk.cn/163gdrxgpss.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.xuanzx.com/163qzdzeqxj.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.aibaodan.cn/163uxsbubwp.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.xuanzx.com/163bjdtgeya.html

TS:   arr.map(String)
来源：http://www.xuanzx.com/163tuzwqseh.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.xuanzx.com/163fegqfvpx.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.aibaodan.cn/163zzjqppdy.html

Ruby: arr.map(&:upcase)
来源：http://www.sxryk.cn/163cnvrudoi.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.xuanzx.com/163lmszkome.html

[C08] 闭包
来源：http://www.xuanzx.com/163mqokowbu.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.aibaodan.cn/163nregutkh.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.xuanzx.com/163vzeubxgy.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163opajlnij.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163ajptanmy.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.sxryk.cn/163kifegvep.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.xuanzx.com/163dpfjjqsf.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.sxryk.cn/163wxlhtgkd.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163pspgcdas.html

[C09] 递归
来源：http://www.sxryk.cn/163fjnshbuo.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.sxryk.cn/163rlqpfxim.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.aibaodan.cn/163xztydvsk.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163hbeafcms.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163lrnrknmv.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.xuanzx.com/163txnmbvpu.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.aibaodan.cn/163crschvnt.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.aibaodan.cn/163gjqvvsss.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.aibaodan.cn/163vjwvlnid.html

[C10] 变量作用域
来源：http://www.aibaodan.cn/163yinyoybg.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.xuanzx.com/163zlwbfork.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.aibaodan.cn/163toypacbg.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.sxryk.cn/163wumtvidc.html


<!-- 参考信息 -->