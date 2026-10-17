外链999!wailian999！

C#:   (int)'A'; (char)65
来源：http://www.sxryk.cn/163wmjvilyb.html

[A19] 交换两个变量
来源：http://www.xuanzx.com/163pojtfzzl.html

Py:   a, b = b, a
来源：http://www.xuanzx.com/163yizrvnus.html

PHP:  [$a, $b] = [$b, $a];
来源：http://www.xuanzx.com/163lewvpldj.html

JS:   [a, b] = [b, a];
来源：http://www.sxryk.cn/163gjvfoljh.html

TS:   [a, b] = [b, a];
来源：http://www.aibaodan.cn/163advaghxr.html

Java: int t = a; a = b; b = t;
来源：http://www.xuanzx.com/163cxovvvsd.html

Go:   a, b = b, a
来源：http://www.xuanzx.com/163haqbglvs.html

Ruby: a, b = b, a
来源：http://www.xuanzx.com/163cscatpan.html

C#:   (a, b) = (b, a);
来源：http://www.xuanzx.com/163wbodbwch.html

[A20] 读取标准输入
来源：http://www.aibaodan.cn/163xopjjwye.html

Py:   name = input("请输入：")
来源：http://www.sxryk.cn/163kpqqpnnm.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.xuanzx.com/163bouflsld.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.aibaodan.cn/163hhbgwcai.html

TS:   // Node.js：readline 模块
来源：http://www.sxryk.cn/163zojkhlxr.html

Java: new Scanner(System.in).nextLine()
来源：http://www.sxryk.cn/163zoaxobkj.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.aibaodan.cn/163vokuxuls.html

Ruby: gets.chomp
来源：http://www.xuanzx.com/163usbidhfd.html

C#:   Console.ReadLine();
来源：http://www.sxryk.cn/163sewlqcpt.html

[A21] 保留指定小数位输出
来源：http://www.aibaodan.cn/163xsbdmfvy.html

Py:   f"{3.14159:.2f}"
来源：http://www.sxryk.cn/163ugxhrbnx.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.sxryk.cn/163xtfwaeyl.html

JS:   (3.14159).toFixed(2)
来源：http://www.xuanzx.com/163hcvbahqt.html

TS:   (3.14159).toFixed(2)
来源：http://www.xuanzx.com/163pdsfngzf.html

Java: String.format("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163uetvaqyp.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.sxryk.cn/163bobnybln.html

Ruby: format("%.2f", 3.14159)
来源：http://www.xuanzx.com/163tsvbihdx.html

C#:   3.14159.ToString("F2")
来源：http://www.xuanzx.com/163ydtdgkvj.html

[A22] 获取字符串长度
来源：http://www.aibaodan.cn/163tczpijlt.html

Py:   len(s)
来源：http://www.xuanzx.com/163gqnsvqab.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.aibaodan.cn/163meuoqpvx.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.xuanzx.com/163vyrcwyyd.html

TS:   s.length
来源：http://www.aibaodan.cn/163zfefudks.html

Java: s.length()
来源：http://www.aibaodan.cn/163mqviseul.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.xuanzx.com/163kwvyeylc.html

Ruby: s.length
来源：http://www.aibaodan.cn/163exfyxwny.html

C#:   s.Length
来源：http://www.aibaodan.cn/163ocqkzdmr.html

[A23] 大小写转换
来源：http://www.xuanzx.com/163wgaeefqw.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.aibaodan.cn/163mydkqeow.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.sxryk.cn/163lgvafbbs.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163tnoucgcj.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163holcrnek.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163ecdwooxa.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.xuanzx.com/163tlpzdvyo.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.xuanzx.com/163pphgebgr.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.aibaodan.cn/163dqdfkxua.html

[A24] 去除首尾空白
来源：http://www.aibaodan.cn/163rgrbirel.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.aibaodan.cn/163cphqcwdu.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.xuanzx.com/163nttqcrrx.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.aibaodan.cn/163avycjjvd.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.aibaodan.cn/163ilwfsjjm.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.xuanzx.com/163bbvmbizm.html

Go:   strings.TrimSpace(s)
来源：http://www.sxryk.cn/163phqyyuue.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.sxryk.cn/163kbbcpcge.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.xuanzx.com/163ummqcbjg.html

[A25] 字符串比较
来源：http://www.sxryk.cn/163xxiirsft.html

Py:   s1 == s2; s1 != s2
来源：http://www.aibaodan.cn/163htjdnvsd.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.xuanzx.com/163jgopjjuq.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.aibaodan.cn/163vykeajar.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.sxryk.cn/163neilaknj.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.xuanzx.com/163ldtwrryg.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.aibaodan.cn/163oeeksyme.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.xuanzx.com/163vufjuzbk.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.sxryk.cn/163xdktyiqt.html

[A26] 类型转换总览
来源：http://www.aibaodan.cn/163waasebdd.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.xuanzx.com/163vndaleao.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.sxryk.cn/163cfamlxok.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.xuanzx.com/163dulubmff.html

TS:   Number() String() Boolean() x as number
来源：http://www.sxryk.cn/163gepvdkzt.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.sxryk.cn/163sxosdqot.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.sxryk.cn/163modttykw.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.aibaodan.cn/163nqeswbuy.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.xuanzx.com/163yusgtgfo.html

================================================================================
来源：http://www.sxryk.cn/163byvplknp.html

B. 流程控制
来源：http://www.aibaodan.cn/163uaojsjpu.html

================================================================================
来源：http://www.xuanzx.com/163xtlmeplt.html

[B01] 条件判断 if / else
来源：http://www.sxryk.cn/163cjjrweeb.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.sxryk.cn/163cirvkclx.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.sxryk.cn/163npymhwah.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163apizzphi.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163dbvbzpbg.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163bugpgzen.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.aibaodan.cn/163odkyohkf.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.sxryk.cn/163xuidwvcg.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163kzzpvetd.html

[B02] 多分支 else if / elif
来源：http://www.sxryk.cn/163ppgdnmwp.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.xuanzx.com/163rzoknwwp.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.aibaodan.cn/163lykijrlt.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163qfkhqosx.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163mdzzlodz.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163uaaqdqqi.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.xuanzx.com/163mdpheowf.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.xuanzx.com/163ibcsaxtl.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163yedyfjli.html

[B03] switch / match / case
来源：http://www.sxryk.cn/163nyjbdeib.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.sxryk.cn/163uzxrcjte.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.xuanzx.com/163luggikmv.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163nxqqfnzy.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163dzicribt.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.xuanzx.com/163vylcypou.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.aibaodan.cn/163hwlqbnsz.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.xuanzx.com/163vlqlhnki.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.xuanzx.com/163yxkvaxnb.html

[B04] for 计数循环
来源：http://www.aibaodan.cn/163bjbwyetw.html

Py:   for i in range(10): print(i)
来源：http://www.aibaodan.cn/163zieztzoc.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.sxryk.cn/163bsbhkvqx.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163qcvnvqfh.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163nmystaqk.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.sxryk.cn/163xkjipxhm.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.aibaodan.cn/163edrgqwhk.html

Ruby: 10.times { |i| puts i }
来源：http://www.sxryk.cn/163imkmijbn.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.sxryk.cn/163ursumuhi.html

[B05] 遍历数组 / 列表
来源：http://www.aibaodan.cn/163uvvigilx.html

Py:   for item in arr: print(item)
来源：http://www.aibaodan.cn/163aggrcxfd.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.sxryk.cn/163vlhuontj.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163szpskumj.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163qnzxyfhn.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.aibaodan.cn/163oqmmvuvl.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.xuanzx.com/163bxwaudrm.html

Ruby: arr.each { |item| puts item }
来源：http://www.sxryk.cn/163kjbxdubu.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.aibaodan.cn/163mywemkqf.html

[B06] 遍历字典 / 对象
来源：http://www.aibaodan.cn/163chhffqvg.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.aibaodan.cn/163rdhwbfwq.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.aibaodan.cn/163bdhhjcbf.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163ghbuuptb.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163lsjwzzol.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.sxryk.cn/163irmtpprk.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.aibaodan.cn/163uahhrlng.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.sxryk.cn/163zrlsigwq.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.aibaodan.cn/163xabvrgyn.html

[B07] while 循环
来源：http://www.sxryk.cn/163fombvpuz.html

Py:   while i < 10: i += 1
来源：http://www.xuanzx.com/163opliinib.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.xuanzx.com/163efnuwjhb.html

JS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163zijijemj.html

TS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163wlurzfkx.html

Java: while (i < 10) { i++; }
来源：http://www.sxryk.cn/163adjvlgop.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.xuanzx.com/163aavrmfly.html

Ruby: while i < 10; i += 1; end
来源：http://www.sxryk.cn/163xfmukwtx.html

C#:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163animbcrr.html

[B08] do-while（至少执行一次）
来源：http://www.sxryk.cn/163zjbjxnlj.html

Py:   # 无 do-while：用 while True + break
来源：http://www.xuanzx.com/163tslkayaz.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.xuanzx.com/163ssnlvjrc.html

JS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163pffwcbep.html

TS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163xhsonsvk.html

Java: do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163wwquktuf.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.xuanzx.com/163gorrmhqp.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.sxryk.cn/163aklfllyt.html

C#:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163mfunzerq.html

[B09] break 与 continue
来源：http://www.sxryk.cn/163fmahkout.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.aibaodan.cn/163cecvpscl.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.sxryk.cn/163dltcvbel.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163oyzjnmxc.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163nazecsby.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163vezxyrdl.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.aibaodan.cn/163ezjvzcls.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.sxryk.cn/163eyptocsf.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163ehqaopxb.html

[B10] 遍历同时拿索引
来源：http://www.aibaodan.cn/163wxwlautc.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.xuanzx.com/163khlmckdp.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.sxryk.cn/163kkqmhmbo.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.aibaodan.cn/163lqtahiup.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.sxryk.cn/163vpwdhudp.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.sxryk.cn/163crkrhfxs.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.aibaodan.cn/163pifgoshv.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.aibaodan.cn/163csfkdggr.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.xuanzx.com/163sniqkspv.html

[B11] 生成数字序列 / 区间
来源：http://www.xuanzx.com/163ehzyadtq.html

Py:   list(range(0, 10, 2))
来源：http://www.aibaodan.cn/163qljgrjhm.html

PHP:  range(0, 10, 2);
来源：http://www.sxryk.cn/163uvdvofkb.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163shyinvuc.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163fyetxhzf.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.xuanzx.com/163fodwnijf.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.sxryk.cn/163purznqag.html

Ruby: (0...10).step(2).to_a
来源：http://www.sxryk.cn/163iszuyobp.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.sxryk.cn/163kadtqmej.html

[B12] 跳出多层循环
来源：http://www.xuanzx.com/163waqiosje.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.xuanzx.com/163bsfmmflc.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.sxryk.cn/163mieugqkf.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163rfkgtepu.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163xkhzoiep.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163gtccxxfg.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.xuanzx.com/163tpfacmya.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.xuanzx.com/163anpchfdh.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.aibaodan.cn/163xfwpirnc.html

[B13] 判断是否为数字
来源：http://www.xuanzx.com/163vcyfvuio.html

Py:   isinstance(x, (int, float))
来源：http://www.aibaodan.cn/163ppwkdudc.html

PHP:  is_numeric($x)
来源：http://www.xuanzx.com/163entytovd.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163ultlhmtr.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163dwcfeqkq.html

Java: x instanceof Number
来源：http://www.sxryk.cn/163vmdliwra.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.xuanzx.com/163shosebdv.html

Ruby: x.is_a?(Numeric)
来源：http://www.aibaodan.cn/163gvmibynq.html

C#:   x is int or double or decimal
来源：http://www.xuanzx.com/163qkzinsgw.html

[B14] 判断值是否在集合内
来源：http://www.aibaodan.cn/163tuabvufn.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.aibaodan.cn/163aymltivx.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.xuanzx.com/163egvmlpwt.html

JS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163nwyklrbx.html

TS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163qdbazcgz.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.xuanzx.com/163ykhtpzac.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.xuanzx.com/163boqplaxe.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.sxryk.cn/163dxtdtzow.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.aibaodan.cn/163atjwkrgi.html

[B15] 布尔运算与取反
来源：http://www.xuanzx.com/163hocgcxtj.html

Py:   a and b or not c
来源：http://www.xuanzx.com/163ffigjvuf.html

PHP:  $a && $b || !$c
来源：http://www.sxryk.cn/163hklugsyv.html

JS:   a && b || !c
来源：http://www.sxryk.cn/163czeegbxb.html

TS:   a && b || !c
来源：http://www.xuanzx.com/163rnmlyjxj.html

Java: a && b || !c
来源：http://www.aibaodan.cn/163wbeiavnt.html

Go:   a && b || !c
来源：http://www.sxryk.cn/163sivscakw.html

Ruby: a && b || !c
来源：http://www.sxryk.cn/163qkhwykvz.html

C#:   a && b || !c
来源：http://www.xuanzx.com/163mamtujpm.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.aibaodan.cn/163chqlvimn.html

Py:   if not data: return
来源：http://www.aibaodan.cn/163knbwdoic.html

PHP:  if (!$data) { return; }
来源：http://www.xuanzx.com/163xyadrvkb.html

JS:   if (!data) return;
来源：http://www.xuanzx.com/163xqokefyd.html

TS:   if (!data) return;
来源：http://www.xuanzx.com/163pmcswgnb.html

Java: if (data == null) return;
来源：http://www.sxryk.cn/163mcvsctrd.html

Go:   if data == nil { return }
来源：http://www.xuanzx.com/163vexfsrgx.html

Ruby: return if data.nil?
来源：http://www.aibaodan.cn/163gegnveqz.html

C#:   if (data == null) return;
来源：http://www.xuanzx.com/163jkjypzfl.html

================================================================================
来源：http://www.sxryk.cn/163gqxfqkhs.html

C. 函数与作用域
来源：http://www.aibaodan.cn/163cnotdtfw.html

================================================================================
来源：http://www.sxryk.cn/163ktqmalaj.html

[C01] 定义函数
来源：http://www.xuanzx.com/163vohnfihn.html

Py:   def add(a, b): return a + b
来源：http://www.xuanzx.com/163sdqbvcfy.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163agaapmwn.html

JS:   function add(a, b) { return a + b; }
来源：http://www.aibaodan.cn/163qlxcvcps.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163wypezjti.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163szuurmvr.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.xuanzx.com/163twcwtapn.html

Ruby: def add(a, b); a + b; end
来源：http://www.aibaodan.cn/163hmgqjrpg.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163kjdumshm.html

[C02] 默认参数
来源：http://www.xuanzx.com/163xhqovtgk.html

Py:   def greet(name="World"): return name
来源：http://www.xuanzx.com/163awmebdzv.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.xuanzx.com/163qvoniumr.html

JS:   function greet(name = "World") { return name; }
来源：http://www.xuanzx.com/163snvrejtp.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.aibaodan.cn/163udbfrjek.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.sxryk.cn/163jejjotpk.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.aibaodan.cn/163eeflqkex.html

Ruby: def greet(name = "World") = name
来源：http://www.xuanzx.com/163erwzbkmf.html

C#:   string Greet(string name = "World") => name;
来源：http://www.sxryk.cn/163ovjkwxxj.html

[C03] 可变参数
来源：http://www.sxryk.cn/163sccypvau.html

Py:   def total(*args): return sum(args)
来源：http://www.sxryk.cn/163rqybrjhf.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.aibaodan.cn/163gckvxiur.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163avbwzgts.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163yyazacyu.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.xuanzx.com/163negadtjv.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.aibaodan.cn/163fzqrhaby.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.xuanzx.com/163capalwlv.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.xuanzx.com/163zrafkpdu.html

[C04] 命名参数 / 关键字参数
来源：http://www.sxryk.cn/163enbfoqvl.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.aibaodan.cn/163leylvlpg.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.xuanzx.com/163fzhrvfmq.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.sxryk.cn/163ohzdwmva.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.xuanzx.com/163xwzgebxy.html

Java: // 无：用 Builder 模式或 record
来源：http://www.xuanzx.com/163aleaonhz.html

Go:   // 无：用配置结构体参数
来源：http://www.aibaodan.cn/163rjmceidj.html

Ruby: f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163vfjuzmdv.html

C#:   f(a: 1, b: 2)
来源：http://www.xuanzx.com/163pbaelidl.html

[C05] 返回多个值
来源：http://www.sxryk.cn/163knbslgqg.html

Py:   return a, b
来源：http://www.aibaodan.cn/163ufmdappq.html

PHP:  return [$a, $b];
来源：http://www.sxryk.cn/163bgowwmku.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.aibaodan.cn/163aswlrkvc.html

TS:   return { a, b };
来源：http://www.aibaodan.cn/163bfmqtuco.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.aibaodan.cn/163rkiorzix.html

Go:   return a, b
来源：http://www.sxryk.cn/163xwzgdohf.html

Ruby: return a, b
来源：http://www.aibaodan.cn/163sqvywqsh.html

C#:   return (a, b);              // ValueTuple
来源：http://www.sxryk.cn/163skpxclxv.html

[C06] 匿名函数 / lambda
来源：http://www.aibaodan.cn/163pdhubxko.html

Py:   square = lambda x: x * x
来源：http://www.sxryk.cn/163wsjklovg.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.sxryk.cn/163yzgkkmza.html

JS:   const square = x => x * x;
来源：http://www.sxryk.cn/163fugkqpiy.html

TS:   const square = (x: number): number => x * x;
来源：http://www.aibaodan.cn/163zjlewtib.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.xuanzx.com/163gxsqiqbo.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.sxryk.cn/163japvtirm.html

Ruby: square = ->(x) { x * x }
来源：http://www.aibaodan.cn/163xkmrxdbf.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.xuanzx.com/163jfgxmxsr.html

[C07] 把函数作为参数传入
来源：http://www.aibaodan.cn/163pzdobcpf.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.xuanzx.com/163wpesyhvd.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.xuanzx.com/163vzmpkgbg.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.sxryk.cn/163fkjtufvv.html

TS:   arr.map(String)
来源：http://www.sxryk.cn/163bnsvnuvd.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.xuanzx.com/163xeuvoeqs.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.sxryk.cn/163dvlzzued.html

Ruby: arr.map(&:upcase)
来源：http://www.sxryk.cn/163qrqedymx.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.aibaodan.cn/163rjlmqmly.html

[C08] 闭包
来源：http://www.sxryk.cn/163afnoaemu.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.sxryk.cn/163jhugwcyq.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.xuanzx.com/163qvrbtspl.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163lceaxano.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163psnaqejr.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.aibaodan.cn/163cmuezigb.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.xuanzx.com/163stunhcja.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.aibaodan.cn/163ebljoeug.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163tztngvrp.html

[C09] 递归
来源：http://www.sxryk.cn/163rdybpecd.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.aibaodan.cn/163rbqigkxj.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.sxryk.cn/163bpfxskhj.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163mtpneszd.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163gishwivm.html


<!-- 参考信息 -->