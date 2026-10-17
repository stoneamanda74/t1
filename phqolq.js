外链999!wailian999！

Ruby: a, b = b, a
来源：http://www.xuanzx.com/163rwvphphq.html

C#:   (a, b) = (b, a);
来源：http://www.xuanzx.com/163txrdpdjn.html

[A20] 读取标准输入
来源：http://www.xuanzx.com/163lducfocf.html

Py:   name = input("请输入：")
来源：http://www.aibaodan.cn/163usmtelpa.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.aibaodan.cn/163pxagmpyr.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.xuanzx.com/163mghequcs.html

TS:   // Node.js：readline 模块
来源：http://www.xuanzx.com/163vykcbgtl.html

Java: new Scanner(System.in).nextLine()
来源：http://www.sxryk.cn/163zjhhoycz.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.sxryk.cn/163csxbmbxj.html

Ruby: gets.chomp
来源：http://www.xuanzx.com/163ocemfzgp.html

C#:   Console.ReadLine();
来源：http://www.sxryk.cn/163xqkggcqf.html

[A21] 保留指定小数位输出
来源：http://www.aibaodan.cn/163dqweigud.html

Py:   f"{3.14159:.2f}"
来源：http://www.sxryk.cn/163bsrycxxc.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.sxryk.cn/163pplqupah.html

JS:   (3.14159).toFixed(2)
来源：http://www.aibaodan.cn/163rhhxvkyh.html

TS:   (3.14159).toFixed(2)
来源：http://www.aibaodan.cn/163yacylfwy.html

Java: String.format("%.2f", 3.14159)
来源：http://www.xuanzx.com/163nlkivhrp.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.sxryk.cn/163ujannrey.html

Ruby: format("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163zuttxjke.html

C#:   3.14159.ToString("F2")
来源：http://www.aibaodan.cn/163mljpxksk.html

[A22] 获取字符串长度
来源：http://www.xuanzx.com/163tetkwrzp.html

Py:   len(s)
来源：http://www.aibaodan.cn/163whbpipgy.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.xuanzx.com/163sannuihu.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.xuanzx.com/163hihxosac.html

TS:   s.length
来源：http://www.aibaodan.cn/163hvhphsdx.html

Java: s.length()
来源：http://www.sxryk.cn/163tbtlvyjo.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.xuanzx.com/163vjuvyurq.html

Ruby: s.length
来源：http://www.sxryk.cn/163bsrjjstn.html

C#:   s.Length
来源：http://www.xuanzx.com/163kkhxpcil.html

[A23] 大小写转换
来源：http://www.xuanzx.com/163fhmzektb.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.xuanzx.com/163ruagueml.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.aibaodan.cn/163epxexouj.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163enoxnsgz.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163qvnsbndp.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163kowwbhxi.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.xuanzx.com/163jyjapfot.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.aibaodan.cn/163sdeuvphn.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.xuanzx.com/163etjpazdn.html

[A24] 去除首尾空白
来源：http://www.sxryk.cn/163fqegzsfo.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.xuanzx.com/163zutbthzl.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.aibaodan.cn/163aqrfmswm.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.sxryk.cn/163hpykulvd.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.xuanzx.com/163gtdixnop.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.sxryk.cn/163ycpkfgbt.html

Go:   strings.TrimSpace(s)
来源：http://www.xuanzx.com/163bwjmjrbf.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.aibaodan.cn/163ountawvs.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.sxryk.cn/163kabrkmcx.html

[A25] 字符串比较
来源：http://www.xuanzx.com/163rliycquw.html

Py:   s1 == s2; s1 != s2
来源：http://www.xuanzx.com/163srprzipl.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.xuanzx.com/163oukdmkhh.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.xuanzx.com/163chdwprnh.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.xuanzx.com/163vsmiydrp.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.aibaodan.cn/163psjsxyaf.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.xuanzx.com/163yvifbyub.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.xuanzx.com/163edcdrfyt.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.sxryk.cn/163msyihnqe.html

[A26] 类型转换总览
来源：http://www.aibaodan.cn/163bcscpmil.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.xuanzx.com/163zijzjadx.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.sxryk.cn/163pbwifflm.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.xuanzx.com/163uuevllzh.html

TS:   Number() String() Boolean() x as number
来源：http://www.xuanzx.com/163blxlpgyl.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.aibaodan.cn/163midcncgn.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.xuanzx.com/163gjccssxd.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.aibaodan.cn/163xqiangez.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.aibaodan.cn/163agshwfuo.html

================================================================================
来源：http://www.xuanzx.com/163iuffuqjh.html

B. 流程控制
来源：http://www.xuanzx.com/163dbruhcyr.html

================================================================================
来源：http://www.sxryk.cn/163sldogfew.html

[B01] 条件判断 if / else
来源：http://www.xuanzx.com/163hqinhzul.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.xuanzx.com/163unbhqycs.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.sxryk.cn/163nmzejrln.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163dmrrzuxo.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163lrbefzvr.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163lkxotymz.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.sxryk.cn/163ftwdedwp.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.xuanzx.com/163zrblrzia.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163vccjeibv.html

[B02] 多分支 else if / elif
来源：http://www.sxryk.cn/163obnrkbhj.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.sxryk.cn/163hxbfyzhr.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.sxryk.cn/163moblszvk.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163owzsclsr.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163euqnjfyv.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163lyllwijd.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.sxryk.cn/163mxscowjc.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.aibaodan.cn/163emiqwofy.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163rpzeasmz.html

[B03] switch / match / case
来源：http://www.xuanzx.com/163orvquuve.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.aibaodan.cn/163qrourckx.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.aibaodan.cn/163suskmgzp.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163katbhihj.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163alqwifku.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.aibaodan.cn/163kjpqoehs.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.sxryk.cn/163liffxcvs.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.xuanzx.com/163fljgdvms.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.xuanzx.com/163ihfswesb.html

[B04] for 计数循环
来源：http://www.aibaodan.cn/163buzactbk.html

Py:   for i in range(10): print(i)
来源：http://www.xuanzx.com/163qelvxisv.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.xuanzx.com/163rjqaiyjb.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163lfhkoinz.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163tyaljmnh.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.xuanzx.com/163azauvuof.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.xuanzx.com/163lzqekmhq.html

Ruby: 10.times { |i| puts i }
来源：http://www.xuanzx.com/163lspbbigf.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.sxryk.cn/163ehcpyyoq.html

[B05] 遍历数组 / 列表
来源：http://www.xuanzx.com/163kmvgfpyg.html

Py:   for item in arr: print(item)
来源：http://www.sxryk.cn/163repwsltf.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.xuanzx.com/163sbfbpiqs.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163zbmaogrj.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163isnjaldi.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.sxryk.cn/163dtiuzevs.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.aibaodan.cn/163ruiuslbq.html

Ruby: arr.each { |item| puts item }
来源：http://www.xuanzx.com/163kekgqedg.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.aibaodan.cn/163arwqayfp.html

[B06] 遍历字典 / 对象
来源：http://www.xuanzx.com/163whxivyay.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.aibaodan.cn/163zwdcvyfq.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.xuanzx.com/163wkjzrpkn.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163bjjawxtx.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163jnrihnli.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.xuanzx.com/163jhonfnwd.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.sxryk.cn/163beohzfel.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.xuanzx.com/163xiesqdcu.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.xuanzx.com/163umgbpzei.html

[B07] while 循环
来源：http://www.aibaodan.cn/163gciljgcj.html

Py:   while i < 10: i += 1
来源：http://www.xuanzx.com/163lnjejape.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.sxryk.cn/163hdlphwtm.html

JS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163oniaozpg.html

TS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163vvylxalb.html

Java: while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163ziwxlwus.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.sxryk.cn/163bcdzjxss.html

Ruby: while i < 10; i += 1; end
来源：http://www.xuanzx.com/163voigmtsw.html

C#:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163psbbthvu.html

[B08] do-while（至少执行一次）
来源：http://www.aibaodan.cn/163awwkobls.html

Py:   # 无 do-while：用 while True + break
来源：http://www.xuanzx.com/163vlwfsdka.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.aibaodan.cn/163somgelst.html

JS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163yjmdsfdu.html

TS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163vwjarhpk.html

Java: do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163wceupmjc.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.xuanzx.com/163qfbgnpxz.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.sxryk.cn/163zzgmqwoj.html

C#:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163bzrcxhvs.html

[B09] break 与 continue
来源：http://www.aibaodan.cn/163kiputpyk.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.sxryk.cn/163nnrpnmnz.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.sxryk.cn/163pgprgksa.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163qsusnhiu.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163nisjpzez.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163ccchezkf.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.xuanzx.com/163svuaqyrk.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.xuanzx.com/163kqywqgob.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163uqerhmty.html

[B10] 遍历同时拿索引
来源：http://www.sxryk.cn/163bhdtkipa.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.sxryk.cn/163ktdjspzc.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.aibaodan.cn/163rqpmppby.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.aibaodan.cn/163yerzpckp.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.sxryk.cn/163yxddtezi.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.aibaodan.cn/163kslrefgx.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.aibaodan.cn/163pxuvbggd.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.sxryk.cn/163lypuzpdd.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.xuanzx.com/163uwvwjuep.html

[B11] 生成数字序列 / 区间
来源：http://www.aibaodan.cn/163xtcyggwx.html

Py:   list(range(0, 10, 2))
来源：http://www.xuanzx.com/163ogxgisjh.html

PHP:  range(0, 10, 2);
来源：http://www.sxryk.cn/163uvymjwyy.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163wduksqbu.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163gaafzlgb.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.aibaodan.cn/163pybhtmkz.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.sxryk.cn/163nrrotybs.html

Ruby: (0...10).step(2).to_a
来源：http://www.sxryk.cn/163jsvexwgr.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.aibaodan.cn/163jvnxycif.html

[B12] 跳出多层循环
来源：http://www.aibaodan.cn/163umhtyqyk.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.sxryk.cn/163rmijiyje.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.sxryk.cn/163wbzazxeg.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163eznhnibp.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163vzicihxx.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163qfcinkdq.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.aibaodan.cn/163zrccoass.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.xuanzx.com/163tirmtnqb.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.aibaodan.cn/163dlsamxrz.html

[B13] 判断是否为数字
来源：http://www.sxryk.cn/163ybajmoyj.html

Py:   isinstance(x, (int, float))
来源：http://www.xuanzx.com/163deteyozn.html

PHP:  is_numeric($x)
来源：http://www.sxryk.cn/163kyisgjjs.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163uvjqilup.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163nookqgri.html

Java: x instanceof Number
来源：http://www.sxryk.cn/163oqrstfry.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.sxryk.cn/163amizqduo.html

Ruby: x.is_a?(Numeric)
来源：http://www.sxryk.cn/163iyyvogul.html

C#:   x is int or double or decimal
来源：http://www.sxryk.cn/163wgxxaqdj.html

[B14] 判断值是否在集合内
来源：http://www.xuanzx.com/163pwfieokd.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.sxryk.cn/163jtxzhkxx.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.sxryk.cn/163gufzxope.html

JS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163ikhvjrog.html

TS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163dhzdrvsy.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.aibaodan.cn/163ashrxggy.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.aibaodan.cn/163scgdvdri.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.aibaodan.cn/163bxulwplx.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.xuanzx.com/163igswxrno.html

[B15] 布尔运算与取反
来源：http://www.xuanzx.com/163qkzuvbbc.html

Py:   a and b or not c
来源：http://www.aibaodan.cn/163cbvbltaa.html

PHP:  $a && $b || !$c
来源：http://www.sxryk.cn/163fskfihdm.html

JS:   a && b || !c
来源：http://www.aibaodan.cn/163qvfcctks.html

TS:   a && b || !c
来源：http://www.aibaodan.cn/163cwexgdpz.html

Java: a && b || !c
来源：http://www.sxryk.cn/163yiluriza.html

Go:   a && b || !c
来源：http://www.sxryk.cn/163xwytizkg.html

Ruby: a && b || !c
来源：http://www.aibaodan.cn/163cnpgarzf.html

C#:   a && b || !c
来源：http://www.xuanzx.com/163mkiuddpw.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.xuanzx.com/163qmqmfiwl.html

Py:   if not data: return
来源：http://www.sxryk.cn/163qlhmqpou.html

PHP:  if (!$data) { return; }
来源：http://www.sxryk.cn/163wgogjttu.html

JS:   if (!data) return;
来源：http://www.aibaodan.cn/163xwpzqkko.html

TS:   if (!data) return;
来源：http://www.aibaodan.cn/163yndypeib.html

Java: if (data == null) return;
来源：http://www.sxryk.cn/163faxdlzyz.html

Go:   if data == nil { return }
来源：http://www.xuanzx.com/163vgibeekm.html

Ruby: return if data.nil?
来源：http://www.sxryk.cn/163msqpnzwt.html

C#:   if (data == null) return;
来源：http://www.sxryk.cn/163ecrxxeue.html

================================================================================
来源：http://www.aibaodan.cn/163dboojudw.html

C. 函数与作用域
来源：http://www.aibaodan.cn/163cwovozxi.html

================================================================================
来源：http://www.xuanzx.com/163yzdpflgh.html

[C01] 定义函数
来源：http://www.sxryk.cn/163vyxznipq.html

Py:   def add(a, b): return a + b
来源：http://www.sxryk.cn/163tfmqlpdl.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163ixplygpq.html

JS:   function add(a, b) { return a + b; }
来源：http://www.xuanzx.com/163dydavxhh.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163fbsdpark.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163ghnqpcio.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.aibaodan.cn/163pruqzjxt.html

Ruby: def add(a, b); a + b; end
来源：http://www.xuanzx.com/163kofqixsa.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163ogersvwo.html

[C02] 默认参数
来源：http://www.xuanzx.com/163higonxye.html

Py:   def greet(name="World"): return name
来源：http://www.xuanzx.com/163qwqugnmy.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.sxryk.cn/163lkiafyrf.html

JS:   function greet(name = "World") { return name; }
来源：http://www.sxryk.cn/163znlfbprv.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.aibaodan.cn/163utteyuto.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.xuanzx.com/163nbegdvul.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.sxryk.cn/163wvfafngh.html

Ruby: def greet(name = "World") = name
来源：http://www.xuanzx.com/163dpmbubbc.html

C#:   string Greet(string name = "World") => name;
来源：http://www.xuanzx.com/163djuuvofz.html

[C03] 可变参数
来源：http://www.aibaodan.cn/163ehhzlzzm.html

Py:   def total(*args): return sum(args)
来源：http://www.sxryk.cn/163ktecmqho.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.aibaodan.cn/163xntgizoy.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163zegmcfaj.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163dtxfeoyq.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.sxryk.cn/163rxeutoxs.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.sxryk.cn/163nqrdxdus.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.aibaodan.cn/163imgshyjf.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.xuanzx.com/163oxvtuizc.html

[C04] 命名参数 / 关键字参数
来源：http://www.aibaodan.cn/163qyokgfcz.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.sxryk.cn/163lwzdximp.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.aibaodan.cn/163dkzreysk.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.xuanzx.com/163eumfkgfd.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.xuanzx.com/163owuqyojt.html

Java: // 无：用 Builder 模式或 record
来源：http://www.xuanzx.com/163nrvokxal.html

Go:   // 无：用配置结构体参数
来源：http://www.aibaodan.cn/163mteeckss.html

Ruby: f(a: 1, b: 2)
来源：http://www.xuanzx.com/163tjbyqmky.html

C#:   f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163nlwcrhjk.html

[C05] 返回多个值
来源：http://www.aibaodan.cn/163txdcmabv.html

Py:   return a, b
来源：http://www.xuanzx.com/163ffhjelsm.html

PHP:  return [$a, $b];
来源：http://www.xuanzx.com/163emmzutju.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.xuanzx.com/163atfopkmm.html

TS:   return { a, b };
来源：http://www.aibaodan.cn/163bnaflflz.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.xuanzx.com/163batbmnmv.html

Go:   return a, b
来源：http://www.xuanzx.com/163puliwweo.html

Ruby: return a, b
来源：http://www.aibaodan.cn/163wygemzxt.html

C#:   return (a, b);              // ValueTuple
来源：http://www.sxryk.cn/163dmwegxkh.html

[C06] 匿名函数 / lambda
来源：http://www.xuanzx.com/163vlivqkcm.html

Py:   square = lambda x: x * x
来源：http://www.xuanzx.com/163zrlpxdre.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.aibaodan.cn/163strxaezh.html

JS:   const square = x => x * x;
来源：http://www.xuanzx.com/163zquqhjmo.html

TS:   const square = (x: number): number => x * x;
来源：http://www.aibaodan.cn/163xgveowir.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.aibaodan.cn/163nkvppnqu.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.sxryk.cn/163qshlzaal.html

Ruby: square = ->(x) { x * x }
来源：http://www.aibaodan.cn/163orpwwhks.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.sxryk.cn/163ixooghgo.html

[C07] 把函数作为参数传入
来源：http://www.aibaodan.cn/163wnbmpmbl.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.xuanzx.com/163ezdfusjs.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.xuanzx.com/163ofnwmrgl.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.aibaodan.cn/163uvlagfzw.html

TS:   arr.map(String)
来源：http://www.aibaodan.cn/163zgblmcvc.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.aibaodan.cn/163ulsrkdkr.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.aibaodan.cn/163deeoepgm.html

Ruby: arr.map(&:upcase)
来源：http://www.xuanzx.com/163agwiipzd.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.sxryk.cn/163cdaaftwu.html

[C08] 闭包
来源：http://www.aibaodan.cn/163xjkhbequ.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.xuanzx.com/163iihvhsjs.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.xuanzx.com/163mhgxbnya.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163hmalzmiy.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163cviqbzaq.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.sxryk.cn/163ydcsojzd.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.sxryk.cn/163cnjxtdve.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.xuanzx.com/163rtayprzd.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163lbuvxrmx.html

[C09] 递归
来源：http://www.sxryk.cn/163msyqaxsj.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.xuanzx.com/163aexofdbs.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.aibaodan.cn/163supzqyyp.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163xhfnssei.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163nugrdaga.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.xuanzx.com/163czucqusd.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.sxryk.cn/163dvyduruk.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.aibaodan.cn/163nfbsduup.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.xuanzx.com/163sjmrtyec.html

[C10] 变量作用域
来源：http://www.sxryk.cn/163sumfmvcq.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.xuanzx.com/163pnlcxewe.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.xuanzx.com/163hddexkzz.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.aibaodan.cn/163ufwtuwtw.html


<!-- 参考信息 -->