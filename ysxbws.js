外链999!wailian999！

[A18] 字符与 ASCII 码互转
来源：http://www.sxryk.cn/163okmittxy.html

Py:   ord("A"); chr(65)
来源：http://www.xuanzx.com/163nrniqayd.html

PHP:  ord("A"); chr(65)
来源：http://www.aibaodan.cn/163mnjtypwn.html

JS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.aibaodan.cn/163zmwqxzhp.html

TS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.aibaodan.cn/163dwaobtfg.html

Java: (int) 'A'; (char) 65
来源：http://www.sxryk.cn/163btgaqych.html

Go:   int('A'); rune(65)              // rune 是 int32
来源：http://www.aibaodan.cn/163tamhuyqa.html

Ruby: "A".ord; 65.chr
来源：http://www.sxryk.cn/163ubiouokg.html

C#:   (int)'A'; (char)65
来源：http://www.xuanzx.com/163siksztdc.html

[A19] 交换两个变量
来源：http://www.aibaodan.cn/163wcsnnqti.html

Py:   a, b = b, a
来源：http://www.xuanzx.com/163aweiizmq.html

PHP:  [$a, $b] = [$b, $a];
来源：http://www.aibaodan.cn/163rkcandvd.html

JS:   [a, b] = [b, a];
来源：http://www.xuanzx.com/163pefpttjw.html

TS:   [a, b] = [b, a];
来源：http://www.sxryk.cn/163mdwjvtcr.html

Java: int t = a; a = b; b = t;
来源：http://www.aibaodan.cn/163lyhewfpa.html

Go:   a, b = b, a
来源：http://www.sxryk.cn/163hzphyfnw.html

Ruby: a, b = b, a
来源：http://www.aibaodan.cn/163ecylpvaa.html

C#:   (a, b) = (b, a);
来源：http://www.sxryk.cn/163cetcxbjw.html

[A20] 读取标准输入
来源：http://www.xuanzx.com/163fhucglnj.html

Py:   name = input("请输入：")
来源：http://www.aibaodan.cn/163tqokchmt.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.aibaodan.cn/163fkmsqtmr.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.xuanzx.com/163lfoigoxn.html

TS:   // Node.js：readline 模块
来源：http://www.aibaodan.cn/163grzxmprh.html

Java: new Scanner(System.in).nextLine()
来源：http://www.aibaodan.cn/163hwbreqck.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.aibaodan.cn/163kpdkqlqv.html

Ruby: gets.chomp
来源：http://www.xuanzx.com/163eblielya.html

C#:   Console.ReadLine();
来源：http://www.aibaodan.cn/163zpdsvatg.html

[A21] 保留指定小数位输出
来源：http://www.xuanzx.com/163ifikhhrs.html

Py:   f"{3.14159:.2f}"
来源：http://www.aibaodan.cn/163jvvqlysl.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163jqypkvqv.html

JS:   (3.14159).toFixed(2)
来源：http://www.sxryk.cn/163sdccozxv.html

TS:   (3.14159).toFixed(2)
来源：http://www.xuanzx.com/163qxewjnfj.html

Java: String.format("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163btiqwubz.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.xuanzx.com/163gjuolzfe.html

Ruby: format("%.2f", 3.14159)
来源：http://www.xuanzx.com/163dnrmjape.html

C#:   3.14159.ToString("F2")
来源：http://www.xuanzx.com/163rzvlqahm.html

[A22] 获取字符串长度
来源：http://www.sxryk.cn/163pejuuykv.html

Py:   len(s)
来源：http://www.aibaodan.cn/163eytdfcyp.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.sxryk.cn/163klwutgdg.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.aibaodan.cn/163wuvegfsc.html

TS:   s.length
来源：http://www.sxryk.cn/163utufqgyc.html

Java: s.length()
来源：http://www.xuanzx.com/163abgcpkzr.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.aibaodan.cn/163yqvojuka.html

Ruby: s.length
来源：http://www.xuanzx.com/163lzavzazs.html

C#:   s.Length
来源：http://www.aibaodan.cn/163kcvaraje.html

[A23] 大小写转换
来源：http://www.aibaodan.cn/163vilrapzn.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.xuanzx.com/163cjulyvwj.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.sxryk.cn/163innovgsi.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163bdahhcez.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163olstfgnh.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163wpfqiekf.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.aibaodan.cn/163xotaaghk.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.sxryk.cn/163btgadkfs.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.sxryk.cn/163kjpxxnxa.html

[A24] 去除首尾空白
来源：http://www.sxryk.cn/163bldulopl.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.aibaodan.cn/163klkdekei.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.aibaodan.cn/163dhcgauua.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.sxryk.cn/163kgvrhjzc.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.aibaodan.cn/163wvfzckze.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.xuanzx.com/163muycmlac.html

Go:   strings.TrimSpace(s)
来源：http://www.aibaodan.cn/163nxkmqnee.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.aibaodan.cn/163jsrmahjp.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.xuanzx.com/163wlpuylmv.html

[A25] 字符串比较
来源：http://www.aibaodan.cn/163gqrcopqt.html

Py:   s1 == s2; s1 != s2
来源：http://www.aibaodan.cn/163klayzvwg.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.aibaodan.cn/163xrbfvhci.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.aibaodan.cn/163gdioniqw.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.aibaodan.cn/163gdntmwco.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.xuanzx.com/163caorfkci.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.aibaodan.cn/163gfyqomqv.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.sxryk.cn/163mzzbjvpx.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.xuanzx.com/163stiamnbh.html

[A26] 类型转换总览
来源：http://www.aibaodan.cn/163swwrgkpy.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.xuanzx.com/163yrfjqelb.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.aibaodan.cn/163wazwomjv.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.sxryk.cn/163tiummtiw.html

TS:   Number() String() Boolean() x as number
来源：http://www.sxryk.cn/163rzhqknot.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.sxryk.cn/163ifeymaxb.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.aibaodan.cn/163jpuircms.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.sxryk.cn/163nptwszer.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.xuanzx.com/163ffsewlro.html

================================================================================
来源：http://www.aibaodan.cn/163ruhsmiqv.html

B. 流程控制
来源：http://www.xuanzx.com/163dkohyuid.html

================================================================================
来源：http://www.sxryk.cn/163xuunezfz.html

[B01] 条件判断 if / else
来源：http://www.aibaodan.cn/163qdheqetx.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.aibaodan.cn/163njjfvpgx.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.xuanzx.com/163lfbcagxa.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163xxvtshee.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163ybouqmvv.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163kfqetlcl.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.aibaodan.cn/163puweshgs.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.aibaodan.cn/163ukigzoha.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163zxkriejc.html

[B02] 多分支 else if / elif
来源：http://www.sxryk.cn/163gkpgvbpc.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.sxryk.cn/163gwwchbvm.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.xuanzx.com/163dndvvwab.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163aprwfdxd.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163krvozvae.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163pnjcwaot.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.aibaodan.cn/163hgvbrzqu.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.xuanzx.com/163rzpdgmxf.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163zhpopzbb.html

[B03] switch / match / case
来源：http://www.sxryk.cn/163aanxitoa.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.xuanzx.com/163splnkhwx.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.aibaodan.cn/163mltrdlfv.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163ippoehwc.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163qqppzwxs.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.aibaodan.cn/163hadhlatg.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.xuanzx.com/163feyedxbm.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.xuanzx.com/163wkqbwibi.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.aibaodan.cn/163sjtishwq.html

[B04] for 计数循环
来源：http://www.sxryk.cn/163vxxyxjqd.html

Py:   for i in range(10): print(i)
来源：http://www.xuanzx.com/163gtxohuqr.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.aibaodan.cn/163qxpbhhmy.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163covwldju.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163qttobjly.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.aibaodan.cn/163qmfosjih.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.sxryk.cn/163texxicvl.html

Ruby: 10.times { |i| puts i }
来源：http://www.sxryk.cn/163meqizfsi.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.xuanzx.com/163eymyndbd.html

[B05] 遍历数组 / 列表
来源：http://www.aibaodan.cn/163arwkbeoi.html

Py:   for item in arr: print(item)
来源：http://www.aibaodan.cn/163nofhyogl.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.sxryk.cn/163nfpjnzoz.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163vmkaxmnv.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163tksilibk.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.sxryk.cn/163obsoeqna.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.sxryk.cn/163aggqjiiq.html

Ruby: arr.each { |item| puts item }
来源：http://www.sxryk.cn/163zdetbakw.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.sxryk.cn/163psdwoqpt.html

[B06] 遍历字典 / 对象
来源：http://www.sxryk.cn/163bdmyzvtw.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.aibaodan.cn/163ktfeajqd.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.aibaodan.cn/163pgntacof.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163noesahym.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163uyjjvfso.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.sxryk.cn/163ylyhbicz.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.sxryk.cn/163hkhphfcj.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.sxryk.cn/163bpyeeely.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.sxryk.cn/163fmpheehb.html

[B07] while 循环
来源：http://www.xuanzx.com/163fvbgozud.html

Py:   while i < 10: i += 1
来源：http://www.sxryk.cn/163vlidkhhv.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.aibaodan.cn/163xzpnidro.html

JS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163cxeagmgs.html

TS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163ghnxjqxj.html

Java: while (i < 10) { i++; }
来源：http://www.xuanzx.com/163qlfqncxc.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.aibaodan.cn/163caleskno.html

Ruby: while i < 10; i += 1; end
来源：http://www.xuanzx.com/163trpijsmc.html

C#:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163yxisgelf.html

[B08] do-while（至少执行一次）
来源：http://www.aibaodan.cn/163pbkfyuvx.html

Py:   # 无 do-while：用 while True + break
来源：http://www.sxryk.cn/163qtfuotrt.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.sxryk.cn/163bedufdzp.html

JS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163vyramdep.html

TS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163yauildqr.html

Java: do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163vmijfhms.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.xuanzx.com/163ozjalaek.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.sxryk.cn/163lyexcoim.html

C#:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163mlsdgjiu.html

[B09] break 与 continue
来源：http://www.xuanzx.com/163idrelocg.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.sxryk.cn/163umwyimyk.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.xuanzx.com/163ypofmpng.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163rkldlzbg.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163bwghoprz.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163zxlveynb.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.sxryk.cn/163lsavpiwn.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.sxryk.cn/163btjskbaf.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163lkznlokt.html

[B10] 遍历同时拿索引
来源：http://www.xuanzx.com/163aycbxvev.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.xuanzx.com/163zqipeeyt.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.aibaodan.cn/163ouxfecvs.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.aibaodan.cn/163tgglxkrs.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.xuanzx.com/163isubpoeu.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.xuanzx.com/163yigpiykm.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.aibaodan.cn/163nyxrxcox.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.xuanzx.com/163uvrudqlp.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.sxryk.cn/163gcvyuxim.html

[B11] 生成数字序列 / 区间
来源：http://www.aibaodan.cn/163ywqnekxz.html

Py:   list(range(0, 10, 2))
来源：http://www.aibaodan.cn/163geslrxxn.html

PHP:  range(0, 10, 2);
来源：http://www.xuanzx.com/163wenbsvyh.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163zuubupng.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163awdlaxjw.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.sxryk.cn/163wprbzsno.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.xuanzx.com/163gytadbwk.html

Ruby: (0...10).step(2).to_a
来源：http://www.aibaodan.cn/163tleblxjr.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.xuanzx.com/163wcuoppfw.html

[B12] 跳出多层循环
来源：http://www.sxryk.cn/163diqhxret.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.sxryk.cn/163uqpgnadj.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.sxryk.cn/163qjrjjrio.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163auyeyndc.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163ghraaxnj.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163sqfayhlw.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.sxryk.cn/163gkxenlcj.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.sxryk.cn/163zvgpqowm.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.aibaodan.cn/163gmwzbaxn.html

[B13] 判断是否为数字
来源：http://www.aibaodan.cn/163oogkoxew.html

Py:   isinstance(x, (int, float))
来源：http://www.aibaodan.cn/163vwjovvuf.html

PHP:  is_numeric($x)
来源：http://www.sxryk.cn/163scthazzn.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163omdhaclm.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163cmwgvubk.html

Java: x instanceof Number
来源：http://www.aibaodan.cn/163ylvdmwom.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.aibaodan.cn/163qwdpdcik.html

Ruby: x.is_a?(Numeric)
来源：http://www.aibaodan.cn/163ytgsklsc.html

C#:   x is int or double or decimal
来源：http://www.xuanzx.com/163bagdjzby.html

[B14] 判断值是否在集合内
来源：http://www.sxryk.cn/163lcrtupzj.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.xuanzx.com/163jtjgqabq.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.sxryk.cn/163qcuizqlj.html

JS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163sdkdlwzs.html

TS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163liwmknje.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.sxryk.cn/163llpcdmeu.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.aibaodan.cn/163laispjiz.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.sxryk.cn/163ktspdrgs.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.xuanzx.com/163pybyzrnv.html

[B15] 布尔运算与取反
来源：http://www.xuanzx.com/163kdktqgto.html

Py:   a and b or not c
来源：http://www.sxryk.cn/163eynjorlb.html

PHP:  $a && $b || !$c
来源：http://www.sxryk.cn/163vbobjvyk.html

JS:   a && b || !c
来源：http://www.sxryk.cn/163hcgvqxoz.html

TS:   a && b || !c
来源：http://www.aibaodan.cn/163opggojww.html

Java: a && b || !c
来源：http://www.sxryk.cn/163ylrtjfdw.html

Go:   a && b || !c
来源：http://www.sxryk.cn/163bcwyyqhu.html

Ruby: a && b || !c
来源：http://www.xuanzx.com/163dbpcrwka.html

C#:   a && b || !c
来源：http://www.sxryk.cn/163gmqaqgfq.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.sxryk.cn/163vaclorue.html

Py:   if not data: return
来源：http://www.sxryk.cn/163vbqnmhiy.html

PHP:  if (!$data) { return; }
来源：http://www.xuanzx.com/163smeudxtj.html

JS:   if (!data) return;
来源：http://www.aibaodan.cn/163iifahznh.html

TS:   if (!data) return;
来源：http://www.sxryk.cn/163qxzkdkao.html

Java: if (data == null) return;
来源：http://www.sxryk.cn/163rscatpnv.html

Go:   if data == nil { return }
来源：http://www.aibaodan.cn/163rmeogbgg.html

Ruby: return if data.nil?
来源：http://www.aibaodan.cn/163nbvobbgj.html

C#:   if (data == null) return;
来源：http://www.xuanzx.com/163mzhqrahh.html

================================================================================
来源：http://www.sxryk.cn/163bthjkawk.html

C. 函数与作用域
来源：http://www.sxryk.cn/163xrsfdpyn.html

================================================================================
来源：http://www.aibaodan.cn/163kohfarwh.html

[C01] 定义函数
来源：http://www.aibaodan.cn/163ewgalrwr.html

Py:   def add(a, b): return a + b
来源：http://www.aibaodan.cn/163aqyjmety.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163gddmjhlx.html

JS:   function add(a, b) { return a + b; }
来源：http://www.sxryk.cn/163lijrygzj.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163ycklauvz.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163xurhwltx.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.xuanzx.com/163dfzwcilo.html

Ruby: def add(a, b); a + b; end
来源：http://www.aibaodan.cn/163uyjlflok.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163cpltbdfj.html

[C02] 默认参数
来源：http://www.sxryk.cn/163eumpyokw.html

Py:   def greet(name="World"): return name
来源：http://www.aibaodan.cn/163omulukpd.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.xuanzx.com/163yyopbwuw.html

JS:   function greet(name = "World") { return name; }
来源：http://www.sxryk.cn/163qpxuyuel.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.aibaodan.cn/163ogxabmpm.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.aibaodan.cn/163rtldkbjr.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.xuanzx.com/163hxwvsapg.html

Ruby: def greet(name = "World") = name
来源：http://www.sxryk.cn/163jirkospm.html

C#:   string Greet(string name = "World") => name;
来源：http://www.xuanzx.com/163hygfchqm.html

[C03] 可变参数
来源：http://www.aibaodan.cn/163dnfmktnt.html

Py:   def total(*args): return sum(args)
来源：http://www.xuanzx.com/163ljbdaweo.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.sxryk.cn/163jwbetkau.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163iodyybwb.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163xknimsnv.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.aibaodan.cn/163dgllsfdh.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.sxryk.cn/163qrppspev.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.aibaodan.cn/163qpxnpfab.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.xuanzx.com/163odoxixwb.html

[C04] 命名参数 / 关键字参数
来源：http://www.sxryk.cn/163iwnevxmn.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.aibaodan.cn/163xudbjjlr.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.aibaodan.cn/163afgoivog.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.xuanzx.com/163xapzebhx.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.xuanzx.com/163ttinsdlt.html

Java: // 无：用 Builder 模式或 record
来源：http://www.xuanzx.com/163jmrtmxbe.html

Go:   // 无：用配置结构体参数
来源：http://www.aibaodan.cn/163audycxnm.html

Ruby: f(a: 1, b: 2)
来源：http://www.sxryk.cn/163eblbnjzs.html

C#:   f(a: 1, b: 2)
来源：http://www.xuanzx.com/163hzvmvaft.html

[C05] 返回多个值
来源：http://www.sxryk.cn/163nuuojzuh.html

Py:   return a, b
来源：http://www.xuanzx.com/163ooohqyxz.html

PHP:  return [$a, $b];
来源：http://www.sxryk.cn/163fouoerso.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.xuanzx.com/163ejteolxj.html

TS:   return { a, b };
来源：http://www.xuanzx.com/163bljunpxk.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.sxryk.cn/163obnwyngi.html

Go:   return a, b
来源：http://www.sxryk.cn/163wqatgsos.html

Ruby: return a, b
来源：http://www.aibaodan.cn/163uvtmzvnr.html

C#:   return (a, b);              // ValueTuple
来源：http://www.xuanzx.com/163ojeqljwx.html

[C06] 匿名函数 / lambda
来源：http://www.xuanzx.com/163ekhaghmb.html

Py:   square = lambda x: x * x
来源：http://www.xuanzx.com/163nzaihrtm.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.sxryk.cn/163prjofncb.html

JS:   const square = x => x * x;
来源：http://www.xuanzx.com/163zbixlmry.html

TS:   const square = (x: number): number => x * x;
来源：http://www.aibaodan.cn/163gjpnzurf.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.aibaodan.cn/163diwrcozx.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.xuanzx.com/163znawovpk.html

Ruby: square = ->(x) { x * x }
来源：http://www.xuanzx.com/163ukulsiea.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.xuanzx.com/163kwgjtrgu.html

[C07] 把函数作为参数传入
来源：http://www.xuanzx.com/163cxqblkab.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.sxryk.cn/163ppjicykz.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.xuanzx.com/163jeyakhbi.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.xuanzx.com/163aptvaaue.html

TS:   arr.map(String)
来源：http://www.xuanzx.com/163qzcbsnls.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.xuanzx.com/163vnwwrtpx.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.sxryk.cn/163ipmujotz.html

Ruby: arr.map(&:upcase)
来源：http://www.aibaodan.cn/163eeaulvji.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.sxryk.cn/163nxjkehzl.html

[C08] 闭包
来源：http://www.aibaodan.cn/163gxxfgrui.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.aibaodan.cn/163rkazxbns.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.sxryk.cn/163rrejkazf.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163btbzbnlk.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163zpsdjijk.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.xuanzx.com/163ywaiiixt.html


<!-- 参考信息 -->